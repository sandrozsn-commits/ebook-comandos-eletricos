import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  Check,
  ChevronDown,
  CircuitBoard,
  Cpu,
  Gauge,
  Layers,
  Minus,
  RefreshCcw,
  ShieldCheck,
  Wrench,
  Zap,
} from "lucide-react";


const CHECKOUT_URL = "https://payfast.greenn.com.br/205065?ch_id=145440&b_id_1=199064&b_offer_1=SLiGph&b_id_2=199111&b_offer_2=vH6z46";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "E-book Comandos Elétricos | PDF com Acesso Imediato" },
      {
        name: "description",
        content:
          "Baixe agora o Livro Digital Comandos Elétricos em PDF e aprenda Ligações, Dimensionamentos e Correção de Defeitos. Acesso imediato após o pagamento.",
      },
      { property: "og:title", content: "E-book Comandos Elétricos | PDF com Acesso Imediato" },
      {
        property: "og:description",
        content:
          "Baixe agora o Livro Digital Comandos Elétricos em PDF e aprenda Ligações, Dimensionamentos e Correção de Defeitos. Acesso imediato após o pagamento.",
      },
      { property: "og:type", content: "product" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

/* ---------------------------------- data --------------------------------- */

const seals = [
  { icon: ShieldCheck, label: "Acesso Imediato" },
  { icon: ShieldCheck, label: "Pagamento seguro" },
  { icon: ShieldCheck, label: "Garantia 7 dias" },
];

const pains = [
  "Você olha um diagrama de comando e não sabe por onde a corrente começa.",
  "Na hora de dimensionar contator, relé ou condutor, sempre bate a dúvida.",
  "Precisa montar um painel e trava com medo de queimar o motor.",
  "A máquina para, o encarregado cobra e você não acha o defeito.",
  "Perde horas em vídeos soltos que nunca terminam o assunto.",
  "Já baixou dezenas de apostilas — nenhuma com sequência lógica.",
];

const manualAdvantages = [
  { icon: BookOpen, title: "Receba por e-mail", text: "Receba o link de download assim que o pagamento for confirmado. Sem esperar." },
  { icon: BookOpen, title: "Leve junto para o painel", text: "Tenha o conteúdo na tela sempre que precisar consultar durante o serviço." },
  { icon: BookOpen, title: "Pesquise por palavras", text: "Encontre qualquer circuito, dispositivo ou diagrama em segundos." },
  { icon: BookOpen, title: "Acesso vitalício", text: "O livro digital fica salvo com você para sempre. Sem risco de perder ou estragos." },
];

const benefits = [
  { icon: Gauge, label: "Dimensionamento" },
  { icon: RefreshCcw, label: "Motores" },
  { icon: CircuitBoard, label: "Diagramas" },
  { icon: Wrench, label: "Defeitos" },
  { icon: Layers, label: "Transformadores" },
  { icon: Cpu, label: "Contatores" },
  { icon: Zap, label: "Relés" },
  { icon: Gauge, label: "Inversores" },
  { icon: CircuitBoard, label: "Chaves de partida" },
  { icon: ShieldCheck, label: "NR-10" },
  { icon: Layers, label: "Simbologia" },
  { icon: Wrench, label: "Manutenção" },
];

const outcomes = [
  "Interpretar qualquer diagrama industrial sem pedir ajuda.",
  "Dimensionar contatores, relés, disjuntores, fusíveis e condutores.",
  "Regular o relé térmico exato para cada motor.",
  "Encontrar o defeito no painel em minutos, não em turnos.",
  "Polarizar motores monofásicos e trifásicos sem placa.",
  "Fazer fechamentos para diferentes tensões com segurança.",
  "Montar chaves estrela-triângulo, reversão e compensadora.",
  "Falar de igual para igual com engenharia e manutenção.",
];

const comparison = [
  ["Sequência lógica do básico ao avançado", false, true],
  ["Diagramas de força e comando, da partida simples ao inversor", false, true],
  ["Consulta rápida no meio do serviço", false, true],
  ["Diagramas reais de indústria explicados", false, true],
  ["Escrito por professor com 26 anos de experiência", false, true],
];

const included = [
  { name: "Livro Digital em PDF", value: "R$ 97,00" },
  { name: "NR-10 Comentada", value: "R$ 37,00" },
  { name: "Videoaulas exclusivas", value: "R$ 47,00" },
  { name: "Simuladores de circuitos", value: "R$ 47,00" },
];

const bonuses = [
  {
    icon: ShieldCheck,
    tag: "Bônus 01",
    title: "NR-10 Comentada",
    value: "R$ 37,00",
    text: "A norma explicada em linguagem de campo para você trabalhar protegido.",
  },
  {
    icon: CircuitBoard,
    tag: "Bônus 02",
    title: "Videoaulas de Diagramas",
    value: "R$ 47,00",
    text: "Videoaulas onde destrinchamos contato por contato das chaves de partida.",
  },
  {
    icon: Cpu,
    tag: "Bônus 03",
    title: "Simuladores de Circuitos",
    value: "R$ 47,00",
    text: "Programas para testar circuitos no computador antes de ir para o painel.",
  },
];

const realSocialProof = [
  { src: "/assets/livro-depoimentos-fb.webp",    w: 528, h: 785, alt: "Depoimentos de alunos no Facebook — livro digital Comandos Elétricos" },
  { src: "/assets/livro-depoimento-ailton.webp", w: 800, h: 320, alt: "Depoimento de Ailton Júnior — livro digital Comandos Elétricos" },
  { src: "/assets/livro-depoimento-bene.png",    w: 800, h: 200, alt: "Depoimento de Bene Frota — livro digital Comandos Elétricos" },
  { src: "/assets/livro-depoimento-fabio.png",   w: 800, h: 280, alt: "Depoimento de Fabio Pinheiro da Silva — livro digital Comandos Elétricos" },
  { src: "/assets/livro-depoimento-rodrigo.png", w: 800, h: 380, alt: "Depoimento de Rodrigo Eckert — livro digital Comandos Elétricos" },
];

const internalPhotos = [
  { src: "/assets/livro-p68.jpg",  alt: "Motor Trifásico e Placa de Identificação" },
  { src: "/assets/livro-p91.jpg",  alt: "Contator — Dispositivos de Comandos Elétricos" },
  { src: "/assets/livro-p97.jpg",  alt: "Dimensionamento de Contator" },
  { src: "/assets/livro-p101.jpg", alt: "Relé Térmico — Dimensionamento e Regulagem" },
  { src: "/assets/livro-p111.jpg", alt: "Chaves Limites — Chaves Fim de Curso" },
  { src: "/assets/livro-p121.jpg", alt: "Simbologias — Instrumentos de Medição" },
  { src: "/assets/livro-p126.jpg", alt: "Simbologias — Dispositivos de Comando e Proteção" },
  { src: "/assets/livro-p224.jpg", alt: "Chave Compensadora Automática com Reversão" },
];

const faqs = [
  {
    q: "O e-book é em PDF?",
    a: "Sim. Você recebe o arquivo em PDF com 268 páginas. Funciona em qualquer dispositivo: celular, tablet, computador ou leitor de e-book.",
  },
  {
    q: "Como acesso o e-book após a compra?",
    a: "Assim que o pagamento for confirmado, você recebe um e-mail com o link de download. O acesso é imediato — não precisa esperar.",
  },
  {
    q: "Serve para quem está começando?",
    a: "Sim. O conteúdo foi organizado de forma progressiva para ajudar quem está começando e também servir como material de consulta para quem já trabalha com eletricidade e manutenção.",
  },
  {
    q: "Preciso de conhecimento em matemática avançada?",
    a: "Não. O conteúdo prioriza a aplicação prática dos conceitos de comandos elétricos. Os cálculos necessários são apresentados de forma didática ao longo do material.",
  },
  {
    q: "Como funciona o pagamento?",
    a: "Você pode pagar à vista no PIX ou no cartão de crédito em até 12x de R$4,83.",
  },
  {
    q: "Por quanto tempo tenho acesso ao e-book?",
    a: "Para sempre. Assim que você baixar o arquivo, ele é seu. Pode salvar no computador, no celular, no Google Drive ou onde preferir.",
  },
  {
    q: "E se eu não gostar?",
    a: "Você conta com a garantia de 7 dias. Basta enviar um e-mail para o suporte e devolvemos 100% do valor. Sem perguntas.",
  },
];

/* -------------------------------- helpers -------------------------------- */

function CTA({
  children = "Quero o Guia Prático Completo",
  size = "lg",
  className = "",
}: {
  children?: React.ReactNode;
  size?: "lg" | "sm";
  className?: string;
}) {
  return (
    <a
      href={CHECKOUT_URL}
      onClick={() => { (window as any).fbq?.("trackCustom", "ClicouComprar"); }}
      className={`btn-cta hover:btn-cta-hover ${
        size === "lg" ? "px-8 py-4 text-base sm:text-lg" : "px-5 py-3 text-sm"
      } ${className}`}
    >
      {children}
      <ArrowRight className="h-5 w-5 shrink-0" />
    </a>
  );
}

function SectionTag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
      {children}
    </span>
  );
}

/* --------------------------------- page ---------------------------------- */

function Index() {
  const [showBar, setShowBar] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [count, setCount] = useState(0);
  const [hasStartedCount, setHasStartedCount] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShowBar(window.scrollY > 700);

      // Simple viewport detection for counter
      const counterEl = document.getElementById("vendas-counter");
      if (counterEl && !hasStartedCount) {
        const rect = counterEl.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          setHasStartedCount(true);
        }
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [hasStartedCount]);

  useEffect(() => {
    if (hasStartedCount) {
      const target = 16233;
      const duration = 2000;
      const stepTime = 20;
      const steps = duration / stepTime;
      const increment = target / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, stepTime);
      return () => clearInterval(timer);
    }
    return undefined;
  }, [hasStartedCount]);

  return (
    <main className="bg-background text-foreground">
      {/* ----------------------------- ACESSO IMEDIATO BAR ---------------------- */}
      <div className="fixed inset-x-0 top-0 z-50 bg-promo-bg py-2.5 text-center text-sm font-bold text-promo-accent">
        OFERTA DE BLACK FRIDAY COM 50% OFF
      </div>

      {/* ------------------------------- HERO ------------------------------- */}
      <section className="bg-ink-gradient relative mt-10 overflow-hidden text-ink-foreground">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 lg:grid-cols-[1.1fr_1fr] lg:py-24">
          <div className="animate-rise">
            <SectionTag>
              <span className="text-accent">•</span> E-book + Bônus
            </SectionTag>
            <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-[2.8rem]">
              Aprenda a Fazer Ligações, Regulagens, Dimensionamentos e Correção de Defeitos em Comandos
              Elétricos.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-ink-foreground/75">
              O Guia Completo e Definitivo, usado por eletricistas, técnicos e estudantes que querem
              dominar painéis, motores e diagramas de Comandos Elétricos.
            </p>

            <div className="mt-8">
  <div className="mb-4">
    <span className="text-lg text-ink-foreground/60">De <span className="line-through">R$ 97,00</span> por apenas:</span>
    <div className="flex items-baseline gap-3">
      <span className="text-4xl font-extrabold text-accent">R$ 47,00</span>
      <span className="text-sm font-medium text-ink-foreground/70">ou em até 12x R$ 4,83</span>
    </div>
     </div>
              
              <div className="flex flex-col gap-3">
                <CTA className="w-full sm:w-fit">QUERO MEU E-BOOK + BÔNUS</CTA>
              </div>
            </div>

            <ul className="mt-10 flex flex-wrap gap-3">
              {seals.map((s) => (
                <li
                  key={s.label}
                  className="flex items-center gap-2 rounded-xl border border-ink-foreground/15 bg-ink-foreground/5 px-3 py-2 text-xs font-semibold"
                >
                  <s.icon className="h-4 w-4 shrink-0 text-accent" />
                  <span>{s.label}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="animate-rise flex justify-center">
            <img
              src={"/assets/livro-capa-3d.png"}
              alt="Livro Comandos Elétricos - O Seu Guia Prático e Definitivo, 2ª edição, de Sandro Zander Soares Nogueira"
              width={600}
              height={600}
              className="w-full max-w-sm rounded-2xl shadow-[var(--shadow-lift)]"
            />
          </div>
        </div>
      </section>

      {/* ------------------------------ PROBLEMA ---------------------------- */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="max-w-2xl">
          <SectionTag>O grande problema</SectionTag>
          <h2 className="mt-5 text-3xl font-bold sm:text-4xl">
            O problema nunca foi falta de informação. O que falta é{" "}
            <span className="text-accent">clareza</span>.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Comando elétrico é lógica. Quando o conteúdo chega picado, em vídeos aleatórios e
            apostilas sem sequência, a lógica nunca fecha na cabeça e a insegurança aparece
            justamente na frente do painel.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {pains.map((p) => (
            <div key={p} className="surface-card p-6">
              <Minus className="h-5 w-5 text-destructive" />
              <p className="mt-3 text-[0.98rem] leading-relaxed text-foreground/85">{p}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --------------------------- APRESENTAÇÃO --------------------------- */}
      <section className="bg-secondary/60 py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-2">
          <img
            src={"/assets/livro-capa-guia-pratico.png"}
            alt="Livro Comandos Elétricos — O Seu Guia Prático e Definitivo"
            width={716}
            height={716}
            loading="lazy"
            className="w-full rounded-3xl border border-border bg-card shadow-[var(--shadow-lift)]"
          />
          <div>
            <SectionTag>O guia prático</SectionTag>
            <h2 className="mt-5 text-3xl font-bold sm:text-4xl">
              Quando a máquina parar, o circuito está a uma página de distância.
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              São 268 páginas em PDF, com os diagramas completos de força e comando, disponíveis para abrir agora mesmo no seu celular, tablet ou computador. Sem espera. Acesso imediato.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {manualAdvantages.map((a) => (
                <div key={a.title} className="surface-card p-5">
                  <a.icon className="h-6 w-6 text-accent" />
                  <h3 className="mt-3 text-base font-bold">{a.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{a.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <CTA size="sm">Quero meu e-book</CTA>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------- VOLUME DE VENDAS --------------------- */}
      <section className="bg-secondary/30 py-16">
        <div className="mx-auto max-w-4xl px-5 text-center">
          <SectionTag>Prova real</SectionTag>
          <div id="vendas-counter" className="mt-8">
            <h2 className="font-display text-5xl font-extrabold text-foreground sm:text-7xl">
              +{count.toLocaleString("pt-BR")}
            </h2>
            <p className="mt-4 text-xl font-bold text-accent sm:text-2xl uppercase tracking-wider">
              E-BOOKS VENDIDOS
            </p>
            <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
              Milhares de eletricistas, técnicos e estudantes já escolheram o Livro Digital Comandos Elétricos
              como seu guia definitivo de campo.
            </p>
          </div>
        </div>
      </section>

      {/* ----------------------------- BENEFÍCIOS --------------------------- */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="max-w-2xl">
          <SectionTag>O que está dentro do Guia</SectionTag>
          <h2 className="mt-5 text-3xl font-bold sm:text-4xl">
            Tudo que um comando elétrico exige, reunido em um só material.
          </h2>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {benefits.map((b) => (
            <div
              key={b.label}
              className="surface-card flex min-w-0 items-center gap-3 px-4 py-5 transition-transform hover:-translate-y-1"
            >
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-accent/12 text-accent">
                <b.icon className="h-5 w-5" />
              </span>
              <span className="truncate text-sm font-semibold">{b.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ----------------------------- RESULTADOS --------------------------- */}
      <section className="bg-ink-gradient py-20 text-ink-foreground">
        <div className="mx-auto max-w-6xl px-5">
          <div className="max-w-2xl">
            <SectionTag>Depois do guia prático</SectionTag>
            <h2 className="mt-5 text-3xl font-bold sm:text-4xl">
              O que você vai ser capaz de fazer quando baixar o seu Guia Prático:
            </h2>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {outcomes.map((o) => (
              <div
                key={o}
                className="flex items-start gap-3 rounded-2xl border border-ink-foreground/12 bg-ink-foreground/5 p-5"
              >
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <p className="text-[0.98rem] leading-relaxed">{o}</p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <CTA>QUERO DOMINAR COMANDOS ELÉTRICOS</CTA>
          </div>
        </div>
      </section>

      {/* ----------------------------- COMPARAÇÃO --------------------------- */}
      <section className="mx-auto max-w-5xl px-5 py-20">
        <div className="max-w-2xl">
          <SectionTag>A diferença na prática</SectionTag>
          <h2 className="mt-5 text-3xl font-bold sm:text-4xl">
            Por que este material é diferente do que você já tentou?
          </h2>
        </div>

        <div className="surface-card mt-10 overflow-hidden">
          <div className="grid grid-cols-[1fr_auto_auto] items-center gap-4 border-b border-border bg-secondary/70 px-5 py-4 text-xs font-bold uppercase tracking-wider sm:px-8">
            <span className="text-muted-foreground">Critério</span>
            <span className="w-20 text-center text-muted-foreground">Conteúdos soltos</span>
            <span className="w-20 text-center text-accent">O E-BOOK</span>
          </div>
          {comparison.map(([label, a, b]) => (
            <div
              key={String(label)}
              className="grid grid-cols-[1fr_auto_auto] items-center gap-4 border-b border-border px-5 py-4 last:border-0 sm:px-8"
            >
              <span className="min-w-0 text-sm font-medium sm:text-base">{label}</span>
              <span className="grid w-20 place-items-center">
                {a ? (
                  <Check className="h-5 w-5 text-success" />
                ) : (
                  <Minus className="h-5 w-5 text-muted-foreground" />
                )}
              </span>
              <span className="grid w-20 place-items-center">
                {b ? (
                  <Check className="h-5 w-5 text-success" />
                ) : (
                  <Minus className="h-5 w-5 text-muted-foreground" />
                )}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------------------- CONHEÇA O LIVRO ------------------------ */}
      <section className="bg-secondary/60 py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-2">
          <div>
            <SectionTag>Por dentro do e-book</SectionTag>
            <h2 className="mt-5 text-3xl font-bold sm:text-4xl">
              268 páginas escritas para serem entendidas e não decoradas.
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Diagramas redesenhados, fotos reais de painéis, tabelas de dimensionamento e passo a
              passo de montagem. Pesquise por palavras e encontre qualquer circuito em segundos.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Edição em PDF, revisada e atualizada",
                "Compatível com celular, tablet, PC e leitor de livros digitais",
                "ISBN 978-65-00-94683-3 — obra registrada",
                "Linguagem simples, do básico ao avançado",
              ].map((i) => (
                <li key={i} className="flex items-start gap-3">
                  <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <span className="text-[0.98rem]">{i}</span>
                </li>
              ))}
            </ul>
          </div>
          <img
            src={"/assets/livro-mockup-dispositivos.png"}
            alt="Comandos Elétricos no notebook e celular — acesso em qualquer dispositivo"
            loading="lazy"
            className="w-full max-w-sm mx-auto"
          />
        </div>
        <div className="mx-auto mt-12 grid max-w-6xl gap-6 px-5 sm:grid-cols-2 lg:grid-cols-4">
          {internalPhotos.map((img, i) => (
            <div key={i} className="aspect-[3/4] overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-lift)]">
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </section>

      {/* ------------------------------- BÔNUS ------------------------------ */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="max-w-2xl">
          <SectionTag>Bônus para acelerar</SectionTag>
          <h2 className="mt-5 text-3xl font-bold sm:text-4xl">
            3 Bônus exclusivos para acelerar o seu aprendizado
          </h2>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {bonuses.map((b) => (
            <article key={b.tag} className="surface-card p-7 transition-transform hover:-translate-y-1">
              <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-accent">
                  {b.tag}
                </span>
                <span className="shrink-0 rounded-full bg-secondary px-3 py-1 text-xs font-bold text-muted-foreground line-through">
                  {b.value}
                </span>
              </div>
              <span className="mt-5 grid h-12 w-12 place-items-center rounded-2xl bg-accent/10 text-accent">
                <b.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-4 text-xl font-bold">{b.title}</h3>
              <p className="mt-2 text-muted-foreground">{b.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ----------------------------- GALERIA PROVA SOCIAL ----------------- */}
      <section className="bg-secondary/30 py-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="text-center">
            <SectionTag>Depoimentos reais</SectionTag>
            <h2 className="mt-5 text-3xl font-bold sm:text-4xl">
              O que dizem sobre o livro digital
            </h2>
          </div>

          <div className="mt-12 mx-auto max-w-4xl columns-1 sm:columns-2 gap-6">
            {realSocialProof.map((img, i) => (
              <div
                key={i}
                className="break-inside-avoid mb-6 overflow-hidden rounded-2xl border border-border bg-card shadow-sm"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  width={img.w}
                  height={img.h}
                  className="h-auto w-full"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------- OFERTA ----------------------------- */}
      <section id="oferta" className="bg-ink-gradient py-20 text-ink-foreground">
        <div className="mx-auto grid max-w-5xl gap-10 px-5 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div>
            <SectionTag>Seu pacote digital completo</SectionTag>
            <h2 className="mt-5 text-3xl font-bold sm:text-4xl">Tudo que entra no seu guia prático hoje.</h2>
            <ul className="mt-8 space-y-3">
              {included.map((i) => (
                <li
                  key={i.name}
                  className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 border-b border-ink-foreground/12 pb-3"
                >
                  <span className="flex min-w-0 items-start gap-3 text-[0.98rem]">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                    {i.name}
                  </span>
                  <span className="shrink-0 text-sm font-semibold text-ink-foreground/60 line-through">
                    {i.value}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm text-ink-foreground/70">
              Valor total dos itens: <strong className="text-ink-foreground">R$ 97,00</strong>
            </p>
          </div>

          <div className="rounded-3xl bg-card p-8 text-card-foreground shadow-[var(--shadow-lift)]">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Hoje você leva tudo por
            </p>
            <p className="mt-2 text-sm text-muted-foreground">De <span className="line-through">R$ 97,00</span> por apenas:</p>
            <div className="mt-1 flex flex-col">
              <span className="font-display text-5xl font-extrabold text-foreground">R$ 47,00</span>
              <span className="mt-1 text-sm text-muted-foreground">em até 12x R$ 4,83</span>
              <span className="mt-1 text-sm font-semibold text-promo-accent">50% OFF</span>
            </div>

            <div className="mt-6 space-y-4">
              <CTA className="w-full">QUERO MEU E-BOOK + BÔNUS</CTA>
              <div className="text-center">
                <p className="text-[13px] font-bold text-red-600 mb-1">OFERTA POR TEMPO LIMITADO</p>
                <p className="text-[11px] font-medium text-muted-foreground">Acesso Imediato. Garanta o seu agora!</p>
              </div>
            </div>

            <ul className="mt-8 grid grid-cols-1 gap-3 text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
              <li className="flex items-center gap-2">
                <ShieldCheck className="h-3.5 w-3.5 text-success" />
                Pagamento seguro
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* -------------------------------- AUTORIDADE ------------------------ */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1fr]">
          <div className="relative">
            <img
              src={"/assets/sandro-zander.jpg"}
              alt="Sandro Zander Soares Nogueira, autor do livro digital Comandos Elétricos"
              width={470}
              height={569}
              loading="lazy"
              className="w-full rounded-3xl border border-border bg-card object-cover shadow-[var(--shadow-lift)]"
            />
            <div className="absolute -bottom-6 -right-6 hidden rounded-2xl bg-accent p-6 text-accent-foreground shadow-xl lg:block">
              <p className="font-display text-3xl font-bold">26+</p>
              <p className="text-xs font-bold uppercase tracking-wider">Anos de experiência</p>
            </div>
          </div>
          <div>
            <SectionTag>Quem escreveu</SectionTag>
            <h2 className="mt-5 text-3xl font-bold sm:text-4xl">
              Sandro Zander: vinte e seis anos ensinando eletricidade industrial.
            </h2>
            <div className="mt-6 space-y-4 text-lg text-muted-foreground">
              <p>
                Professor de eletricidade industrial há 26 anos, atuando no{" "}
                <strong className="text-foreground">SENAI-RJ</strong> e na{" "}
                <strong className="text-foreground">FAETEC-RJ</strong> nos cursos de Instalações
                Elétricas, Manutenção Industrial, Comandos Elétricos, Automação Industrial e no curso
                Técnico de Eletrotécnica.
              </p>
              <p>
                Experiência prática consolidada em comandos elétricos, manutenção industrial e
                automação, trazendo para o papel a vivência real do laboratório e do campo.
              </p>
              <p>
                Fundador da Academia do Eletricista e criador do Método Comandos Elétricos Expert,
                unindo a didática de sala de aula com a necessidade prática do profissional.
              </p>
              <p className="border-l-2 border-accent pl-5 text-foreground italic">
                “Escrevi este Livro do jeito que eu explico no laboratório: mostrando o caminho da
                corrente, o motivo de cada dispositivo e o que fazer quando a máquina não parte.”
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------ GARANTIA ---------------------------- */}
      <section className="mx-auto max-w-4xl px-5 py-20">
        <div className="surface-card relative overflow-hidden p-10 text-center">
          <span className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-accent/12 text-accent">
            <ShieldCheck className="h-8 w-8" />
          </span>
          <h2 className="mt-6 text-3xl font-bold sm:text-4xl">Seu risco é exatamente zero.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Baixe agora, leia, consulte e aprenda. Se em até 7 dias você achar que o
            material não é o que esperava, envia um único e-mail para o suporte e devolvemos 100%
            do valor. Sem formulário, sem enrolação.
          </p>
          <div className="mt-8 flex justify-center">
            <CTA size="sm">Testar sem risco por 7 dias</CTA>
          </div>
        </div>
      </section>

      {/* --------------------------------- FAQ ------------------------------ */}
      <section className="mx-auto max-w-3xl px-5 pb-20">
        <div className="text-center">
          <SectionTag>Dúvidas</SectionTag>
          <h2 className="mt-5 text-3xl font-bold sm:text-4xl">Perguntas frequentes</h2>
        </div>
        <div className="mt-10 space-y-3">
          {faqs.map((f, i) => (
            <div key={f.q} className="surface-card overflow-hidden">
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="grid w-full grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-6 py-5 text-left"
                aria-expanded={openFaq === i}
              >
                <span className="text-[1.02rem] font-semibold">{f.q}</span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform ${
                    openFaq === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openFaq === i && (
                <p className="px-6 pb-6 text-muted-foreground">{f.a}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ------------------------------ CTA FINAL --------------------------- */}
      <section className="bg-ink-gradient py-20 text-ink-foreground">
        <div className="mx-auto max-w-3xl px-5 text-center">
          <h2 className="text-3xl font-bold sm:text-[2.6rem] sm:leading-tight">
            Da próxima vez que o painel parar, você vai saber exatamente o que fazer.
          </h2>
          <p className="mt-5 text-lg text-ink-foreground/75">
            E-book em PDF + 3 Bônus Especiais.
          </p>
          <div className="mt-8 flex flex-col items-center">
            <span className="text-lg text-ink-foreground/60 line-through">De R$ 97,00</span>
            <span className="mt-1 font-display text-6xl font-extrabold text-accent">R$ 47,00</span>
            <span className="mt-2 text-sm font-semibold text-promo-accent">Oferta com 50% OFF</span>
          </div>
          <div className="mt-8 flex flex-col items-center">
            <CTA>QUERO MEU E-BOOK + BÔNUS</CTA>
          </div>
        </div>
      </section>

      <footer className="border-t border-border bg-card py-12 text-center text-sm text-muted-foreground">
        <div className="mx-auto max-w-4xl px-5 leading-relaxed">
          <p>Copyright © 2026</p>
          <p>Academia do Eletricista</p>
          <p>Instituto Brasileiro de Qualificação Profissional Ltda - ME</p>
          <p>CNPJ: 10.984.548/0001-77</p>
          <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 font-medium underline-offset-4">
            <a href="#" className="hover:text-foreground hover:underline">
              Termos de Uso
            </a>
            <a href="#" className="hover:text-foreground hover:underline">
              Política de Privacidade
            </a>
          </div>
        </div>
      </footer>

      {/* ------------------------------ STICKY CTA -------------------------- */}
      <div
        className={`fixed inset-x-0 bottom-0 z-50 border-t border-border bg-card/95 backdrop-blur transition-transform duration-300 ${
          showBar ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="mx-auto grid max-w-5xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-3">
          <div className="min-w-0">
            <p className="truncate text-sm font-bold text-accent">De <span className="line-through">R$ 97,00</span> por apenas R$ 47,00</p>
            <p className="truncate text-xs font-bold text-promo-accent">
              Oferta com 50% OFF
            </p>
          </div>
          <CTA size="sm">QUERO MEU E-BOOK</CTA>
        </div>
      </div>
    </main>
  );
}
