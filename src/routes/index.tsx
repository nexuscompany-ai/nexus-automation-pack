import { createFileRoute } from "@tanstack/react-router";
import logoAsset from "@/assets/logo_nexus.png.asset.json";
import imag1 from "@/assets/imag1.png";
import imag2 from "@/assets/imag2.png";
import mag3 from "@/assets/mag3.png";
import modulo3 from "@/assets/modulo3.png";
import modulo2 from "@/assets/modulo2.png";
import modulo1 from "@/assets/modulo1.png";
import antexdepois from "@/assets/antexdepois.png";
import eu from "@/assets/eu.png";
import semfundoAsset from "@/assets/semfundo.png.asset.json";
const semfundo = semfundoAsset.url;
import { ArrowRight, Check, ChevronDown, ShieldCheck, MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nexus Automation Pack — Pare de aprender automação sem direção" },
      { name: "description", content: "Descubra quais soluções empresas realmente compram e transforme conhecimento técnico em oportunidades reais de faturamento." },
      { property: "og:title", content: "Nexus Automation Pack" },
      { property: "og:description", content: "Pare de aprender automação sem direção. Descubra o que o mercado realmente compra." },
      { property: "og:image", content: logoAsset.url },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400&display=swap" },
      { rel: "icon", type: "image/png", href: logoAsset.url },
    ],
  }),
  component: Landing,
});

const CTA_URL = "#oferta";
const CTA_LABEL = "Quero acessar agora";

/* ── COUNTDOWN ── */
function useCountdown(targetMs: number) {
  const calc = () => {
    const diff = Math.max(0, targetMs - Date.now());
    return {
      d: Math.floor(diff / 86_400_000),
      h: Math.floor((diff % 86_400_000) / 3_600_000),
      m: Math.floor((diff % 3_600_000) / 60_000),
      s: Math.floor((diff % 60_000) / 1_000),
    };
  };
  const [t, setT] = useState(calc);
  useEffect(() => {
    const id = setInterval(() => setT(calc()), 1000);
    return () => clearInterval(id);
  }, []);
  return t;
}

const DEADLINE = (() => {
  const KEY = "nap_deadline";
  if (typeof window === "undefined") return Date.now() + 3 * 86_400_000;
  const stored = localStorage.getItem(KEY);
  if (stored) return Number(stored);
  const d = Date.now() + 3 * 86_400_000;
  localStorage.setItem(KEY, String(d));
  return d;
})();

function AnnouncementBar() {
  const { d, h, m, s } = useCountdown(DEADLINE);
  const pad = (n: number) => String(n).padStart(2, "0");
  const units = [
    { v: pad(d), l: "Dias" },
    { v: pad(h), l: "Horas" },
    { v: pad(m), l: "Min" },
    { v: pad(s), l: "Seg" },
  ];
  return (
    <div className="w-full" style={{ background: "linear-gradient(90deg, #991B1B 0%, #DC2626 50%, #991B1B 100%)" }}>
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-x-5 gap-y-1.5 px-4 py-3">
        <span className="text-[12px] font-semibold text-white/90">⏳ Oferta de Lançamento — Acesso por tempo limitado</span>
        <span className="hidden h-3 w-px bg-white/20 sm:block" />
        <div className="flex items-center gap-1.5">
          {units.map(({ v, l }, i) => (
            <>
              <div key={l} className="flex items-baseline gap-0.5">
                <span className="text-[15px] font-extrabold tabular-nums text-white">{v}</span>
                <span className="text-[9px] font-medium uppercase text-white/50">{l}</span>
              </div>
              {i < 3 && <span key={`s${i}`} className="text-[13px] font-bold text-white/30">:</span>}
            </>
          ))}
        </div>
        <span className="hidden h-3 w-px bg-white/20 sm:block" />
        <a href={CTA_URL} className="rounded-md bg-white px-3 py-1 text-[11px] font-bold text-red-700 transition-opacity hover:opacity-90">
          Garantir acesso
        </a>
      </div>
    </div>
  );
}

function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".sr");
    if (!els.length) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) (e.target as HTMLElement).classList.add("visible"); }),
      { threshold: 0.07, rootMargin: "0px 0px -32px 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function Wrap({ children, id, className = "" }: { children: React.ReactNode; id?: string; className?: string }) {
  return (
    <section id={id} className={`mx-auto w-full max-w-5xl px-6 py-20 md:py-28 ${className}`}>
      {children}
    </section>
  );
}

/* ── Primitivos ── */
function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#6D28D9]">
      <span className="h-px w-5 bg-gradient-to-r from-[#6D28D9] to-[#A78BFA] rounded-full" />
      {children}
    </span>
  );
}

function Btn({ children, href = CTA_URL, lg = false }: { children: React.ReactNode; href?: string; lg?: boolean }) {
  const size = lg ? "px-8 py-[1.0625rem] text-[1rem]" : "px-5 py-2.5 text-sm";
  return (
    <a
      href={href}
      className={`group relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-lg font-bold text-white transition-all duration-200 hover:-translate-y-px ${size}`}
      style={{
        background: "linear-gradient(135deg, #6D28D9 0%, #9333EA 100%)",
        boxShadow: "0 2px 8px rgb(109 40 217 / 0.35), 0 1px 3px rgb(109 40 217 / 0.20), inset 0 1px 0 rgb(255 255 255 / 0.12)",
      }}
    >
      <span className="absolute inset-0 translate-x-[-110%] bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-500 group-hover:translate-x-[110%]" />
      <span className="relative">{children}</span>
      <ArrowRight className="relative h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
    </a>
  );
}

function GhostBtn({ children, href }: { children: React.ReactNode; href: string }) {
  return (
    <a href={href} className="inline-flex items-center gap-1.5 rounded-lg border border-[#E5E7EB] px-5 py-2.5 text-sm font-medium text-[#6B7280] transition-all duration-200 hover:border-[#C0C0C0] hover:text-[#111827]">
      {children}
    </a>
  );
}

/* ── Mockup do produto ── */
function ProductMockup() {
  return (
    <div className="relative w-full select-none pb-8" style={{ perspective: "1000px" }}>
      {/* Glow roxo embaixo do mockup */}
      <div
        className="absolute -bottom-2 left-1/2 h-20 w-3/4 -translate-x-1/2 rounded-full blur-3xl"
        style={{ background: "rgb(109 40 217 / 0.20)" }}
      />

      {/* Página 3 — fundo */}
      <div
        className="absolute top-4 left-[5%] w-[86%] overflow-hidden rounded-xl border border-[#E5E7EB]"
        style={{ zIndex: 1, transform: "rotateY(3deg) rotateZ(-1.2deg)", boxShadow: "0 4px 20px rgb(0 0 0 / 0.07)" }}
      >
        <img src={mag3} alt="" className="w-full object-cover" style={{ height: "260px", filter: "brightness(0.88) saturate(0.9)" }} />
      </div>

      {/* Página 2 — meio */}
      <div
        className="absolute top-2 left-[2%] w-[93%] overflow-hidden rounded-xl border border-[#E5E7EB]"
        style={{ zIndex: 2, transform: "rotateY(1.5deg) rotateZ(-0.4deg)", boxShadow: "0 6px 28px rgb(0 0 0 / 0.09)" }}
      >
        <img src={imag2} alt="" className="w-full object-cover" style={{ height: "268px", filter: "brightness(0.93)" }} />
      </div>

      {/* Página 1 — frente */}
      <div
        className="relative w-full overflow-hidden rounded-2xl border border-[#C4B5FD]"
        style={{
          zIndex: 3,
          boxShadow: "0 4px 16px rgb(0 0 0 / 0.06), 0 16px 56px rgb(0 0 0 / 0.10), 0 32px 80px rgb(109 40 217 / 0.12)",
        }}
      >
        <img src={imag1} alt="Nexus Automation Pack" className="w-full object-cover" style={{ height: "300px" }} />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white/70 to-transparent" />

        {/* Pill +50 */}
        <div
          className="absolute right-3.5 top-3.5 rounded-full px-3 py-1.5 text-[10px] font-bold uppercase tracking-wide text-white"
          style={{ background: "linear-gradient(135deg, #6D28D9, #9333EA)", boxShadow: "0 2px 8px rgb(109 40 217 / 0.40)" }}
        >
          +50 automações
        </div>
      </div>
    </div>
  );
}

/* ── NAV ── */
function Nav() {
  const [solid, setSolid] = useState(false);
  useEffect(() => {
    const fn = () => setSolid(window.scrollY > 20);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${solid ? "border-b border-[#E5E7EB] bg-white/95 backdrop-blur-md shadow-[0_1px_8px_rgb(0_0_0/0.06)]" : "bg-white"}`}>
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <a href="#top" className="flex items-center gap-2">
          <img src={logoAsset.url} alt="Nexus" className="h-6 w-6" />
          <span className="text-sm font-bold tracking-tight text-[#111827]">
            Nexus <span className="font-normal text-[#9CA3AF]">Automation Pack</span>
          </span>
        </a>
        <nav className="hidden items-center gap-7 md:flex">
          {[["#problema","O Problema"],["#modulos","O Método"],["#conteudo","O Pack"],["#oferta","Oferta"],["#faq","FAQ"]].map(([h,l]) => (
            <a key={h} href={h} className="text-sm text-[#6B7280] transition-colors hover:text-[#111827]">{l}</a>
          ))}
        </nav>
        <Btn>Acessar agora</Btn>
      </div>
    </header>
  );
}

/* ── PLATFORM CAROUSEL ── */
const SI = "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons";
const PLATFORMS: { name: string; src: string; bg: string }[] = [
  { name: "n8n",             src: `${SI}/n8n.svg`,            bg: "#EA4B71" },
  { name: "OpenAI",          src: `${SI}/openai.svg`,         bg: "#000000" },
  { name: "Google Sheets",   src: `${SI}/googlesheets.svg`,   bg: "#34A853" },
  { name: "Gmail",           src: `${SI}/gmail.svg`,          bg: "#EA4335" },
  { name: "Google Drive",    src: `${SI}/googledrive.svg`,    bg: "#4285F4" },
  { name: "WhatsApp",        src: `${SI}/whatsapp.svg`,       bg: "#25D366" },
  { name: "Notion",          src: `${SI}/notion.svg`,         bg: "#191919" },
  { name: "Slack",           src: `${SI}/slack.svg`,          bg: "#4A154B" },
  { name: "HubSpot",         src: `${SI}/hubspot.svg`,        bg: "#FF7A59" },
  { name: "Discord",         src: `${SI}/discord.svg`,        bg: "#5865F2" },
  { name: "Airtable",        src: `${SI}/airtable.svg`,       bg: "#18BFFF" },
  { name: "Make",            src: `${SI}/make.svg`,           bg: "#6D00CC" },
  { name: "Zapier",          src: `${SI}/zapier.svg`,         bg: "#FF4A00" },
  { name: "Google Calendar", src: `${SI}/googlecalendar.svg`, bg: "#4285F4" },
  { name: "Telegram",        src: `${SI}/telegram.svg`,       bg: "#26A5E4" },
];

function PlatformCarousel() {
  const doubled = [...PLATFORMS, ...PLATFORMS];
  return (
    <div
      className="w-full overflow-hidden"
      style={{
        maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        WebkitMaskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
      }}
    >
      <div className="marquee-track">
        {doubled.map(({ name, src, bg }, i) => (
          <div key={`${name}-${i}`} className="group mx-6 flex shrink-0 flex-col items-center gap-2">
            <div
              className="flex h-10 w-10 items-center justify-center rounded-xl transition-all duration-200 group-hover:scale-110 group-hover:opacity-100"
              style={{ background: bg, opacity: 0.82 }}
            >
              <img
                src={src}
                alt={name}
                className="h-5 w-5 object-contain"
                style={{ filter: "brightness(0) invert(1)" }}
              />
            </div>
            <span className="text-[10px] font-medium whitespace-nowrap text-[#9CA3AF] group-hover:text-[#6B7280] transition-colors duration-200">
              {name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── 1. HERO ── */
function Hero() {
  return (
    <div id="top" className="relative overflow-hidden bg-white">
      {/* Radial glow sutil */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[600px]" style={{ background: "radial-gradient(ellipse 70% 50% at 50% -5%, rgb(109 40 217 / 0.08), transparent 70%)" }} />

      <div className="mx-auto w-full max-w-5xl px-6 pt-16 pb-0">

        {/* Badge */}
        <div className="flex justify-center" style={{ animation: "fade-up 0.6s cubic-bezier(0.25,0.46,0.45,0.94) both" }}>
          <span
            className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em]"
            style={{ borderColor: "#C4B5FD", color: "#6D28D9", background: "#F5F3FF" }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#6D28D9]" />
            Nexus Automation Pack
          </span>
        </div>

        {/* Headline */}
        <div className="mt-6 text-center" style={{ animation: "fade-up 0.7s cubic-bezier(0.25,0.46,0.45,0.94) 0.08s both" }}>
          <h1
            className="mx-auto max-w-4xl"
            style={{ fontSize: "clamp(2.2rem,5.2vw,3.75rem)", fontWeight: 800, lineHeight: 1.05, letterSpacing: "-0.03em", color: "#111827" }}
          >
            Pare de aprender automação{" "}
            <span style={{ background: "linear-gradient(135deg, #6D28D9 0%, #7C3AED 50%, #A78BFA 100%)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
              sem direção.
            </span>
          </h1>
        </div>

        {/* Vídeo */}
        <div
          className="relative mx-auto mt-10 w-full max-w-4xl"
          style={{ animation: "fade-up 0.8s cubic-bezier(0.25,0.46,0.45,0.94) 0.18s both" }}
        >
          {/* Glow atrás do vídeo */}
          <div
            className="pointer-events-none absolute -inset-4 rounded-3xl blur-3xl"
            style={{ background: "rgb(109 40 217 / 0.12)", zIndex: 0 }}
          />
          <div
            className="relative overflow-hidden rounded-2xl"
            style={{
              zIndex: 1,
              aspectRatio: "16 / 9",
              border: "1px solid #C4B5FD",
              boxShadow: "0 4px 24px rgb(0 0 0 / 0.07), 0 20px 60px rgb(109 40 217 / 0.14), 0 1px 0 rgb(255 255 255 / 0.8) inset",
              background: "#0f0f11",
            }}
          >
            {/* Placeholder elegante — substituir src pelo embed real */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-gradient-to-br from-[#1a1025] via-[#0f0a1a] to-[#0a0a14]">
              <div
                className="flex h-16 w-16 items-center justify-center rounded-full border border-white/10 backdrop-blur-sm transition-transform duration-200 hover:scale-105"
                style={{ background: "rgba(109,40,217,0.5)", boxShadow: "0 0 32px rgb(109 40 217 / 0.50)" }}
              >
                <svg viewBox="0 0 24 24" fill="white" className="h-7 w-7 translate-x-0.5">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <span className="text-[13px] font-medium text-white/50">Vídeo de demonstração</span>
            </div>
            {/* Para ativar: substituir o div acima por <iframe src="..." className="h-full w-full" allowFullScreen /> */}
          </div>
        </div>

        {/* Descrição */}
        <div
          className="mx-auto mt-8 max-w-2xl text-center"
          style={{ animation: "fade-up 0.7s cubic-bezier(0.25,0.46,0.45,0.94) 0.28s both" }}
        >
          <p className="text-[1.0625rem] leading-relaxed text-[#6B7280]">
            Descubra quais soluções empresas realmente compram e transforme conhecimento técnico em oportunidades reais de faturamento.
          </p>
        </div>

        {/* CTA */}
        <div
          className="mt-8 flex flex-col items-center gap-4"
          style={{ animation: "fade-up 0.7s cubic-bezier(0.25,0.46,0.45,0.94) 0.36s both" }}
        >
          <a
            href={CTA_URL}
            className="group relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-xl px-10 py-4 text-[1rem] font-bold text-white transition-all duration-200 hover:-translate-y-px"
            style={{
              background: "linear-gradient(135deg, #6D28D9 0%, #9333EA 100%)",
              boxShadow: "0 2px 8px rgb(109 40 217 / 0.40), 0 8px 24px rgb(109 40 217 / 0.22), inset 0 1px 0 rgb(255 255 255 / 0.14)",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 4px 16px rgb(109 40 217 / 0.55), 0 12px 32px rgb(109 40 217 / 0.30), inset 0 1px 0 rgb(255 255 255 / 0.14)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 2px 8px rgb(109 40 217 / 0.40), 0 8px 24px rgb(109 40 217 / 0.22), inset 0 1px 0 rgb(255 255 255 / 0.14)"; }}
          >
            <span className="absolute inset-0 translate-x-[-110%] bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-500 group-hover:translate-x-[110%]" />
            <span className="relative">Quero acessar agora</span>
            <ArrowRight className="relative h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </a>
          <div className="flex flex-wrap justify-center items-center gap-x-5 gap-y-1.5 text-[13px] text-[#9CA3AF]">
            {["Garantia de 7 dias", "Acesso imediato", "Pagamento único"].map((t) => (
              <span key={t} className="flex items-center gap-1.5">
                <Check className="h-3.5 w-3.5 text-[#6D28D9]" /> {t}
              </span>
            ))}
          </div>
        </div>

        {/* Carrossel de plataformas */}
        <div
          className="mt-12 pb-12"
          style={{ animation: "fade-up 0.7s cubic-bezier(0.25,0.46,0.45,0.94) 0.44s both" }}
        >
          <p className="mb-5 text-center text-[11px] font-semibold uppercase tracking-[0.14em] text-[#C0C0C0]">
            Automações documentadas para essas plataformas
          </p>
          <PlatformCarousel />
        </div>
      </div>
    </div>
  );
}

/* ── 2. PROBLEMA ── */
function Problem() {
  return (
    <div id="problema" className="bg-white">
      <Wrap>
        {/* Cabeçalho */}
        <div className="sr mx-auto max-w-2xl text-center">
          <span
            className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em]"
            style={{ borderColor: "#C4B5FD", color: "#6D28D9", background: "#F5F3FF" }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#6D28D9]" />
            O Problema
          </span>
          <h2
            className="mt-5"
            style={{ fontSize: "clamp(1.9rem,4vw,3rem)", fontWeight: 800, lineHeight: 1.05, letterSpacing: "-0.03em", color: "#111827" }}
          >
            O mercado não paga por conhecimento.<br />O mercado paga por soluções.
          </h2>
          <p className="mt-5 text-[1.0625rem] leading-relaxed text-[#6B7280]">
            Você pode aprender n8n. Pode aprender IA. Pode aprender APIs e workflows.<br className="hidden sm:block" />
            Mas se não souber quais problemas resolver, para quem vender e como apresentar uma solução,<br className="hidden sm:block" />
            continuará preso na fase do aprendizado.
          </p>
        </div>
      </Wrap>
    </div>
  );
}

/* ── 3. SOLUÇÃO ── */
function Mechanism() {
  const steps = [
    { n: "01", title: "Entenda a automação", sub: "Visualize o problema. Compreenda a lógica. Entenda o fluxo completo.", color: "#6D28D9" },
    { n: "02", title: "Descubra o potencial comercial", sub: "Veja como a solução pode ser apresentada para empresas. Entenda onde existe demanda.", color: "#6D28D9" },
    { n: "03", title: "Saiba quem compra", sub: "Descubra quais nichos têm interesse. Identifique oportunidades que normalmente passam despercebidas.", color: "#6D28D9" },
  ];
  return (
    <div id="solucao" className="bg-white">
      <Wrap>
        <div className="grid items-start gap-14 lg:grid-cols-2">
          <div>
            <div className="sr"><Eyebrow>A solução</Eyebrow></div>
            <h2 className="sr sr-delay-1 mt-4" style={{ fontSize: "clamp(1.75rem,3.5vw,2.5rem)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.025em", color: "#111827" }}>
              Transforme aprendizado em oportunidade.
            </h2>
            <p className="sr sr-delay-2 mt-4 text-base leading-relaxed text-[#6B7280]">
              O objetivo não é aprender mais uma ferramenta. É desenvolver visão comercial. Entender o que tem demanda, identificar oportunidades e aumentar suas chances de conquistar clientes reais.
            </p>
            <div className="sr sr-delay-3 mt-8"><Btn lg>{CTA_LABEL}</Btn></div>
          </div>

          <div className="space-y-3">
            {steps.map(({ n, title, sub, color }, i) => (
              <div key={n} className={`sr sr-delay-${i+1} flex items-start gap-4 rounded-xl border border-[#E5E7EB] bg-[#F8FAFC] px-5 py-4 transition-all duration-200 hover:border-[#C4B5FD] hover:shadow-[0_4px_16px_rgb(109_40_217/0.08)]`}>
                <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#E5E7EB] bg-white shadow-sm">
                  <span className="text-[11px] font-bold" style={{ color }}>{n}</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#111827]">{title}</p>
                  <p className="mt-0.5 text-xs text-[#9CA3AF]">{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Wrap>
    </div>
  );
}

/* ── 4. MÓDULOS ── */
function Modules() {
  const mods = [
    { n: "01", tag: "Visão comercial",     title: "Entenda a automação",           desc: "Visualize o problema que cada solução resolve. Compreenda a lógica por trás do processo. Entenda o fluxo completo — antes de apresentar para qualquer cliente.", img: modulo1 },
    { n: "02", tag: "Potencial de mercado", title: "Descubra o potencial comercial",  desc: "Veja como a solução pode ser apresentada para empresas. Entenda onde existe demanda real e como transformar conhecimento em uma oferta concreta.",             img: modulo2 },
    { n: "03", tag: "Oportunidades reais",  title: "Saiba quem compra",              desc: "Descubra quais nichos têm interesse naquilo que você sabe fazer. Identifique oportunidades que normalmente passam despercebidas.",                          img: modulo3 },
  ];
  return (
    <div id="modulos" className="border-y border-[#E5E7EB] bg-[#F8FAFC]">
      <Wrap>
        <div className="sr mx-auto max-w-2xl text-center">
          <Eyebrow>Dentro do Pack</Eyebrow>
          <h2 className="mt-4" style={{ fontSize: "clamp(1.75rem,3.5vw,2.5rem)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.025em", color: "#111827" }}>
            Tudo o que você precisa para enxergar oportunidades de mercado.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#6B7280]">Cada automação documentada com o problema que resolve, como funciona e quem tem interesse em comprar.</p>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {mods.map(({ n, tag, title, desc, img }, i) => (
            <article key={n} className={`sr sr-delay-${i+1} group flex flex-col overflow-hidden rounded-2xl border border-[#E5E7EB] bg-white transition-all duration-280 hover:-translate-y-1 hover:border-[#C4B5FD] hover:shadow-[0_16px_48px_rgb(109_40_217/0.10)]`}>
              <div className="relative w-full bg-[#F8FAFC]">
                <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-[#6D28D9] to-[#A78BFA]" />
                <img
                  src={img}
                  alt={title}
                  className="w-full h-auto block"
                  style={{ objectFit: "contain" }}
                />
                <span className="absolute right-3 top-3.5 rounded-md border border-[#E5E7EB] bg-white/95 px-2.5 py-1 text-[10px] font-semibold text-[#6B7280] backdrop-blur-sm shadow-sm">
                  {tag}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#6D28D9]">Módulo {n}</span>
                <h3 className="mt-2.5 text-[1.0625rem] font-bold leading-snug text-[#111827]">{title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-[#6B7280]">{desc}</p>
              </div>
            </article>
          ))}
        </div>
      </Wrap>
    </div>
  );
}

/* ── 5. TRANSFORMAÇÃO ── */
function Transformation() {
  return (
    <section id="transformacao" className="bg-transparent">
      <div className="sr sr-premium-notifications mx-auto grid max-w-[700px] gap-6 px-4 py-8">

        <div className="mx-auto mt-8 mb-16 max-w-xl space-y-5">

  {/* CARD 1 */}
  <div
    className="rounded-[28px] border p-5"
    style={{
      background: "#111827",
      borderColor: "#1F2937",
      boxShadow: "0 12px 40px rgba(0,0,0,0.15)",
    }}
  >
    <div className="flex items-center justify-between">

      <div className="flex items-center gap-3">

        <div
          className="flex h-11 w-11 items-center justify-center rounded-full text-white font-bold"
          style={{ background: "#22C55E" }}
        >
          $
        </div>

        <div>
          <div className="text-xs font-bold uppercase tracking-wider text-white/50">
            Nexus Pay
          </div>

          <div className="text-lg font-bold text-white">
            Atividade registrada
          </div>
        </div>
      </div>

      <div className="text-xs text-white/40">
        agora
      </div>
    </div>

    <p className="mt-4 text-white/70 leading-relaxed">
      Nova movimentação associada a uma operação comercial.
    </p>

    <div
      className="mt-5 text-[48px] font-black"
      style={{ color: "#22C55E" }}
    >
      R$ 2.000
    </div>
  </div>

  {/* CARD 2 */}
  <div
    className="rounded-[28px] border p-5"
    style={{
      background: "#111827",
      borderColor: "#1F2937",
      boxShadow: "0 12px 40px rgba(0,0,0,0.15)",
    }}
  >
    <div className="flex items-center justify-between">

      <div className="flex items-center gap-3">

        <div
          className="flex h-11 w-11 items-center justify-center rounded-full text-white font-bold"
          style={{
            background:
              "linear-gradient(135deg,#9333EA,#A855F7)",
          }}
        >
          ✓
        </div>

        <div>
          <div className="text-xs font-bold uppercase tracking-wider text-white/50">
            Nexus CRM
          </div>

          <div className="text-lg font-bold text-white">
            Projeto aprovado
          </div>
        </div>
      </div>

      <div className="text-xs text-white/40">
        agora
      </div>
    </div>

    <p className="mt-4 text-white/70 leading-relaxed">
      Uma nova oportunidade avançou para a próxima etapa.
    </p>

    <div
      className="mt-5 text-[48px] font-black"
      style={{ color: "#22C55E" }}
    >
      R$ 4.850
    </div>
  </div>

</div>

      </div>
    </section>
  );
}

/* ── AUTORIDADE ── */
function Authority() {
  const cards = [
    {
      n: "10",
      title: "Automações explicadas",
      desc: "Cada automação apresenta o problema, a lógica do processo e possíveis aplicações.",
    },
    {
      title: "Visão comercial",
      desc: "O foco não está apenas na ferramenta, mas em como identificar oportunidades e entender onde cada solução pode gerar valor.",
    },
    {
      title: "Aprendizado simplificado",
      desc: "Fluxogramas, explicações visuais e estrutura organizada para facilitar a compreensão.",
    },
  ];

  return (
    <section id="autoridade" className="bg-white">
      <Wrap>
        <div className="sr mx-auto max-w-2xl text-center">
          <Eyebrow>Sobre a Nexus</Eyebrow>
          <h2
            className="mt-4"
            style={{
              fontSize: "clamp(1.75rem,3.5vw,2.5rem)",
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "-0.025em",
              color: "#111827",
            }}
          >
            Por trás do material existe uma visão prática de mercado.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#6B7280]">
            O Nexus Automation Pack foi criado para ajudar profissionais que já estudam automação, IA e ferramentas modernas a entender quais soluções possuem potencial comercial e como enxergar oportunidades reais de aplicação.
          </p>
        </div>

        <div className="mt-16 grid items-center gap-10 lg:grid-cols-2">
          {/* Coluna esquerda: imagem */}
          <div className="sr flex justify-center">
            <img
              src={semfundo}
              alt="Nexus Automation Pack"
              className="w-full max-w-md object-contain"
              loading="lazy"
            />
          </div>

          {/* Coluna direita: cards */}
          <div className="space-y-5">
            {cards.map(({ n, title, desc }, i) => (
              <div
                key={title}
                className={`sr sr-delay-${i + 1} rounded-2xl border border-[#E5E7EB] bg-[#F8FAFC] p-6 transition-all duration-300 hover:border-[#C4B5FD] hover:shadow-[0_12px_40px_rgb(109_40_217/0.08)]`}
              >
                <div className="flex items-start gap-4">
                  {n && (
                    <div
                      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-lg font-bold text-white"
                      style={{ background: "linear-gradient(135deg,#6D28D9,#7C3AED)" }}
                    >
                      {n}
                    </div>
                  )}
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-[#111827]">{title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#6B7280]">{desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bloco final */}
        <div className="sr mx-auto mt-14 max-w-3xl rounded-2xl border border-[#E5E7EB] bg-white p-8 text-center">
          <p className="text-base leading-relaxed text-[#374151]">
            Enquanto muitas pessoas aprendem ferramentas isoladas, poucas desenvolvem a capacidade de identificar aplicações reais.
          </p>
          <p className="mt-4 text-base leading-relaxed text-[#374151]">
            O objetivo do Nexus Automation Pack é ajudar a encurtar essa jornada através de exemplos visuais, lógica de funcionamento e contexto comercial.
          </p>
        </div>
      </Wrap>
    </section>
  );
}

/* ── 6. O QUE VOCÊ REALMENTE RECEBE ── */
function ContentValue() {
  const blocks = [
    {
      n: "01",
      tag: "Entenda a automação",
      title: "Visualize o problema. Compreenda a lógica. Entenda o fluxo completo.",
      body: "Cada automação vem com o problema que resolve, a lógica por trás do processo e o fluxo completo explicado visualmente — para que você entenda antes de apresentar para qualquer cliente.",
      items: ["O problema que a solução resolve", "Como funciona na prática", "Fluxo completo passo a passo", "A lógica por trás do processo"],
      img: modulo1,
      accent: "#6D28D9",
    },
    {
      n: "02",
      tag: "Potencial comercial",
      title: "Descubra como a solução pode se transformar em uma oferta real.",
      body: "Veja como a automação pode ser apresentada para empresas, onde existe demanda e como estruturar uma oferta concreta — sem depender de tentativa e erro.",
      items: ["Como posicionar a solução", "Como apresentar ao cliente", "Onde existe demanda real", "Como transformar em serviço"],
      img: modulo2,
      accent: "#7C3AED",
    },
    {
      n: "03",
      tag: "Quem compra",
      title: "Saiba quem tem interesse e identifique oportunidades que passam despercebidas.",
      body: "Para cada automação você encontra os nichos com maior interesse, os tipos de empresa que mais precisam dessa solução e os cenários reais de aplicação com potencial de faturamento.",
      items: ["Nichos com maior interesse", "Tipos de empresas compradoras", "Possíveis aplicações reais", "Cenários com potencial de faturamento"],
      img: modulo3,
      accent: "#5B21B6",
    },
  ];

  return (
    <div id="conteudo" className="bg-white">
      <Wrap>
        {/* Cabeçalho */}
        <div className="sr mx-auto max-w-2xl text-center">
          <Eyebrow>O que você realmente recebe</Eyebrow>
          <h2
            className="mt-4"
            style={{ fontSize: "clamp(1.75rem,3.5vw,2.5rem)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.025em", color: "#111827" }}
          >
            Tudo o que você precisa para enxergar oportunidades de mercado.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#6B7280]">
            Você não está adquirindo apenas uma biblioteca. Está adquirindo um atalho — criado para encurtar a distância entre aprender automação e conquistar os primeiros clientes.
          </p>
        </div>

        {/* 3 Blocos */}
        <div className="mt-16 space-y-8">
          {blocks.map(({ n, tag, title, body, items, img, accent }, idx) => {
            const isEven = idx % 2 === 1;
            return (
              <div
                key={n}
                className={`sr sr-delay-${idx + 1} grid items-center gap-10 rounded-2xl border border-[#E5E7EB] bg-[#F8FAFC] p-8 md:p-10 transition-all duration-300 hover:border-[#C4B5FD] hover:shadow-[0_12px_40px_rgb(109_40_217/0.08)] lg:grid-cols-2`}
              >
                <div className={`w-full rounded-xl border border-[#E5E7EB] bg-[#F8FAFC] overflow-hidden shadow-[0_4px_24px_rgb(0_0_0/0.07)] ${isEven ? "lg:order-2" : ""}`}>
                  <div className="relative">
                    <div className="absolute inset-x-0 top-0 z-10 h-0.5" style={{ background: `linear-gradient(90deg, ${accent}, #A78BFA)` }} />
                    <img
                      src={img}
                      alt={tag}
                      className="w-full h-auto block"
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                </div>

                <div className={isEven ? "lg:order-1" : ""}>
                  <p className="text-[11px] font-bold uppercase tracking-[0.14em]" style={{ color: accent }}>Bloco {n}</p>
                  <h3
                    className="mt-3 text-xl font-bold leading-snug text-[#111827]"
                    style={{ letterSpacing: "-0.02em" }}
                  >
                    {title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#6B7280]">{body}</p>
                  <ul className="mt-5 space-y-2.5">
                    {items.map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <span
                          className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] font-bold text-white"
                          style={{ background: `linear-gradient(135deg, ${accent}, #A78BFA)` }}
                        >
                          ✓
                        </span>
                        <span className="text-sm text-[#374151]">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bloco de impacto */}
        <div
          className="sr mt-10 relative overflow-hidden rounded-2xl p-10 text-center md:p-14"
          style={{ background: "linear-gradient(135deg, #4C1D95 0%, #6D28D9 60%, #7C3AED 100%)" }}
        >
          <div className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(ellipse 60% 80% at 80% 20%, rgb(167 139 250 / 0.18), transparent 65%)" }} />
          <div className="pointer-events-none absolute inset-0" style={{ backgroundImage: "linear-gradient(rgb(255 255 255 / 0.04) 1px, transparent 1px), linear-gradient(to right, rgb(255 255 255 / 0.04) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />
          <div className="relative mx-auto max-w-2xl">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#C4B5FD]">A virada de chave</p>
            <div className="mt-6 grid gap-6 md:grid-cols-[1fr_auto_1fr]">
              <div className="rounded-xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur-sm">
                <p className="text-xs font-semibold uppercase tracking-wider text-white/40">Você deixa de pensar</p>
                <p className="mt-3 text-lg font-semibold italic leading-snug text-white/70">
                  "Como essa automação funciona?"
                </p>
              </div>

              <div className="flex items-center justify-center">
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-full"
                  style={{ background: "rgba(255,255,255,0.12)" }}
                >
                  <ArrowRight className="h-5 w-5 text-white" />
                </div>
              </div>

              <div className="rounded-xl border border-[#A78BFA]/40 bg-white/[0.10] p-6 backdrop-blur-sm">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#C4B5FD]">E passa a pensar</p>
                <p className="mt-3 text-lg font-bold leading-snug text-white">
                  "Quem precisa dessa solução e quanto pagaria?"
                </p>
              </div>
            </div>
          </div>
        </div>
      </Wrap>
    </div>
  );
}

/* ── PAGE ── */
function Landing() {
  useScrollReveal();
  return (
    <main className="min-h-screen bg-white text-[#111827]">
      <AnnouncementBar />
      <Hero />
      <Problem />
      <Mechanism />
      <Modules />
      <Transformation />
      <Authority />
      <ContentValue />
      <Offer />
      <FAQ />
      <FinalCTA />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
