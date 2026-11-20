import { createFileRoute } from "@tanstack/react-router";

const PIXEL_ID = "1323130454222421";
type CapiBody = {
  event_name?: string;
  event_id?: string;
  event_source_url?: string;
  fbp?: string;
  fbc?: string;
  custom_data?: Record<string, unknown>;
};
const ALLOWED_EVENTS = new Set(["PageView", "ClicouComprar", "ViewContent", "Lead"]);

// API de Conversões da Meta (servidor → Meta). O token fica na variável de ambiente META_CAPI_TOKEN.
export const Route = createFileRoute("/api/capi")({
  server: {
    handlers: {
      POST: async ({ request }: { request: Request }) => {
        const token = process.env["META_CAPI_TOKEN"];
        if (!token) return new Response(null, { status: 204 });
        try {
          const b = (await request.json()) as CapiBody;
          const name = String(b.event_name ?? "");
          if (!ALLOWED_EVENTS.has(name)) return new Response(null, { status: 204 });
          const ip =
            request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
            request.headers.get("x-real-ip") ||
            undefined;
          const payload: { data: unknown[]; test_event_code?: string } = {
            data: [
              {
                event_name: name,
                event_time: Math.floor(Date.now() / 1000),
                event_id: String(b.event_id ?? ""),
                action_source: "website",
                event_source_url: String(b.event_source_url ?? "").slice(0, 500),
                user_data: {
                  client_ip_address: ip,
                  client_user_agent: request.headers.get("user-agent") ?? undefined,
                  fbp: b.fbp ? String(b.fbp) : undefined,
                  fbc: b.fbc ? String(b.fbc) : undefined,
                },
                custom_data: b.custom_data && typeof b.custom_data === "object" ? b.custom_data : undefined,
              },
            ],
          };
          if (process.env["META_CAPI_TEST_CODE"]) payload.test_event_code = process.env["META_CAPI_TEST_CODE"];
          const r = await fetch(
            `https://graph.facebook.com/v21.0/${PIXEL_ID}/events?access_token=${encodeURIComponent(token)}`,
            { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) },
          );
          if (!r.ok) console.error("CAPI erro", r.status, (await r.text()).slice(0, 300));
        } catch (e) {
          console.error("CAPI exceção", e);
        }
        return new Response(null, { status: 204 });
      },
    },
  },
});
