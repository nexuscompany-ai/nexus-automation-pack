import { createFileRoute } from "@tanstack/react-router";
import logoAsset from "@/assets/logo_nexus.png.asset.json";
import {
  Check, X, ArrowRight, ShieldCheck, Sparkles, Workflow,
  Compass, Zap, Boxes, LineChart, Target, Rocket, Layers,
  ChevronDown, Database, Cpu, GitBranch, BookOpen, Eye,
  TrendingUp, Users, Clock, Award, Briefcase as BriefcaseIcon,
  MessageSquare,
} from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nexus Automation Pack — Automações que o mercado realmente compra" },
      { name: "description", content: "Biblioteca visual premium com +50 automações comerciais documentadas. Descubra o que empresas pagam, como funciona e como transformar conhecimento em faturamento." },
      { property: "og:title", content: "Nexus Automation Pack" },
      { property: "og:description", content: "O atalho entre aprender automação e conquistar seus primeiros clientes." },
      { property: "og:image", content: logoAsset.url },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: logoAsset.url },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" },
      { rel: "icon", type: "image/png", href: logoAsset.url },
    ],
  }),
  component: Landing,
});

const CTA_PRIMARY = "Quero acessar agora";
const CHECKOUT_URL = "#oferta";

/* ---------- Primitives ---------- */

function Section({ children, id, className = "" }: { children: React.ReactNode; id?: string; className?: string }) {
  return (
    <section id={id} className={`relative mx-auto w-full max-w-6xl px-6 py-20 md:py-28 ${className}`}>
      {children}
    </section>
  );
}

function Eyebrow({ children, icon: Icon }: { children: React.ReactNode; icon?: React.ComponentType<{ className?: string }> }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs font-medium text-muted-foreground shadow-xs backdrop-blur">
      {Icon ? <Icon className="h-3.5 w-3.5 text-[color:var(--brand)]" /> : <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--brand)]" />}
      <span className="tracking-wide">{children}</span>
    </div>
  );
}

function PrimaryButton({ children, href = CHECKOUT_URL, size = "lg" }: { children: React.ReactNode; href?: string; size?: "lg" | "md" }) {
  const pad = size === "lg" ? "px-6 py-3.5 text-[15px]" : "px-5 py-2.5 text-sm";
  return (
    <a
      href={href}
      className={`group relative inline-flex items-center justify-center gap-2 rounded-full font-semibold text-primary-foreground ${pad} transition-all duration-300 hover:-translate-y-[1px] hover:shadow-[0_18px_50px_-12px_oklch(0.546_0.21_263/0.55)]`}
      style={{ background: "var(--gradient-brand)" }}
    >
      <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: "linear-gradient(135deg, oklch(0.6 0.21 263), oklch(0.78 0.14 230))" }} />
      <span className="relative">{children}</span>
      <ArrowRight className="relative h-4 w-4 transition-transform group-hover:translate-x-0.5" />
    </a>
  );
}

function GhostButton({ children, href = "#metodo" }: { children: React.ReactNode; href?: string }) {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-sm font-semibold text-foreground shadow-xs transition-all hover:border-foreground/20 hover:bg-secondary"
    >
      {children}
    </a>
  );
}

function SectionTitle({ eyebrow, title, sub, icon }: { eyebrow?: string; title: React.ReactNode; sub?: React.ReactNode; icon?: React.ComponentType<{ className?: string }> }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {eyebrow && <div className="mb-5 flex justify-center"><Eyebrow icon={icon}>{eyebrow}</Eyebrow></div>}
      <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-5xl">{title}</h2>
      {sub && <p className="mx-auto mt-5 max-w-2xl text-base text-muted-foreground md:text-lg">{sub}</p>}
    </div>
  );
}

/* ---------- Nav ---------- */

function Nav() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-card/60 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#top" className="flex items-center gap-2.5">
          <img src={logoAsset.url} alt="Nexus" className="h-8 w-8" />
          <span className="text-[15px] font-semibold tracking-tight text-foreground">Nexus<span className="text-muted-foreground"> Automation Pack</span></span>
        </a>
        <nav className="hidden items-center gap-7 text-sm text-muted-foreground md:flex">
          <a href="#metodo" className="hover:text-foreground transition-colors">Método</a>
          <a href="#modulos" className="hover:text-foreground transition-colors">Módulos</a>
          <a href="#oferta" className="hover:text-foreground transition-colors">Oferta</a>
          <a href="#faq" className="hover:text-foreground transition-colors">FAQ</a>
        </nav>
        <PrimaryButton size="md">Acessar</PrimaryButton>
      </div>
    </header>
  );
}

/* ---------- Hero ---------- */

function Hero() {
  return (
    <div id="top" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 hero-aurora" />
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-60" />
      <Section className="!py-24 md:!py-32">
        <div className="reveal-blur mx-auto flex max-w-3xl flex-col items-center text-center">
          <Eyebrow icon={Sparkles}>+50 Automações Comerciais · Biblioteca Visual Premium</Eyebrow>
          <h1 className="mt-6 text-balance text-[2.5rem] font-bold leading-[1.05] tracking-tight text-foreground md:text-6xl lg:text-7xl">
            O atalho entre <span className="text-brand-gradient">aprender automação</span> e conquistar seus primeiros clientes.
          </h1>
          <p className="mt-6 max-w-2xl text-pretty text-base text-muted-foreground md:text-lg">
            Descubra quais automações empresas realmente compram e transforme conhecimento técnico em oportunidades reais de faturamento.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
            <PrimaryButton>{CTA_PRIMARY}</PrimaryButton>
            <GhostButton href="#metodo">Ver como funciona</GhostButton>
          </div>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1.5"><ShieldCheck className="h-3.5 w-3.5 text-[color:var(--brand)]" /> Garantia de 7 dias</span>
            <span className="inline-flex items-center gap-1.5"><Zap className="h-3.5 w-3.5 text-[color:var(--brand)]" /> Acesso imediato</span>
            <span className="inline-flex items-center gap-1.5"><Layers className="h-3.5 w-3.5 text-[color:var(--brand)]" /> Atualizações incluídas</span>
          </div>
        </div>

        {/* Hero mock */}
        <div className="reveal mt-16 [animation-delay:200ms]">
          <HeroMock />
        </div>
      </Section>
    </div>
  );
}

function HeroMock() {
  return (
    <div className="relative mx-auto max-w-5xl">
      <div className="absolute -inset-x-8 -top-8 -bottom-8 -z-10 rounded-[2rem] bg-gradient-to-b from-[color:var(--brand)]/10 to-transparent blur-2xl" />
      <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-[0_30px_80px_-30px_oklch(0.205_0.04_256/0.25)]">
        {/* Window chrome */}
        <div className="flex items-center justify-between border-b border-border bg-[color:var(--surface)] px-4 py-2.5">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
          </div>
          <div className="rounded-md border border-border bg-card px-3 py-1 text-xs text-muted-foreground">nexus.app/workflows/qualificacao-leads</div>
          <div className="w-12" />
        </div>
        <div className="grid gap-0 md:grid-cols-[220px_1fr]">
          {/* Sidebar */}
          <aside className="hidden border-r border-border bg-[color:var(--surface)] p-4 md:block">
            <div className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">Biblioteca</div>
            <ul className="mt-3 space-y-1 text-sm">
              {[
                ["Qualificação de Leads", true],
                ["Onboarding de Clientes", false],
                ["Cobrança Automática", false],
                ["Resposta SDR · IA", false],
                ["Relatórios Comerciais", false],
              ].map(([label, active]) => (
                <li key={String(label)} className={`flex items-center gap-2 rounded-md px-2.5 py-1.5 ${active ? "bg-card text-foreground ring-soft" : "text-muted-foreground hover:bg-card/60"}`}>
                  <Workflow className="h-3.5 w-3.5" /> {String(label)}
                </li>
              ))}
            </ul>
          </aside>
          {/* Canvas */}
          <div className="relative bg-card p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs font-medium text-muted-foreground">Workflow</div>
                <div className="text-lg font-semibold text-foreground">Qualificação de leads com IA</div>
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 px-2.5 py-1 text-xs font-medium text-emerald-300">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500/150 animate-pulse" /> ativo
              </span>
            </div>
            <FlowMock />
          </div>
        </div>
      </div>
    </div>
  );
}

function FlowNode({ icon: Icon, title, subtitle, color = "brand" }: { icon: React.ComponentType<{ className?: string }>; title: string; subtitle: string; color?: "brand" | "slate" | "cyan" }) {
  const accent = color === "brand" ? "text-[color:var(--brand)] bg-[color:var(--brand)]/10" : color === "cyan" ? "text-[color:var(--brand-2)] bg-[color:var(--brand-2)]/10" : "text-foreground bg-secondary";
  return (
    <div className="flex min-w-[160px] items-center gap-3 rounded-xl border border-border bg-card p-3 shadow-sm card-hover">
      <div className={`flex h-9 w-9 items-center justify-center rounded-lg ${accent}`}>
        <Icon className="h-4.5 w-4.5" />
      </div>
      <div>
        <div className="text-[13px] font-semibold text-foreground">{title}</div>
        <div className="text-[11px] text-muted-foreground">{subtitle}</div>
      </div>
    </div>
  );
}

function FlowMock() {
  return (
    <div className="relative mt-6">
      <svg className="pointer-events-none absolute inset-0 h-full w-full" preserveAspectRatio="none">
        <defs>
          <linearGradient id="line" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#2563EB" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#0EA5E9" stopOpacity="0.7" />
          </linearGradient>
        </defs>
      </svg>
      <div className="grid grid-cols-1 items-center gap-4 md:grid-cols-5">
        <FlowNode icon={Database} title="Trigger" subtitle="Novo lead · Webhook" />
        <Connector />
        <FlowNode icon={Cpu} title="IA Classifica" subtitle="GPT · Score 0–100" color="cyan" />
        <Connector />
        <FlowNode icon={GitBranch} title="Roteador" subtitle="Quente · Frio" />
      </div>
      <div className="mt-4 grid grid-cols-1 items-center gap-4 md:grid-cols-5">
        <div className="hidden md:block" />
        <div className="hidden md:block" />
        <div className="hidden md:block" />
        <Connector vertical />
        <FlowNode icon={Rocket} title="CRM + Slack" subtitle="Notifica vendedor" color="brand" />
      </div>
    </div>
  );
}

function Connector({ vertical = false }: { vertical?: boolean }) {
  return (
    <div className={`hidden md:flex ${vertical ? "h-6 items-start justify-center" : "items-center justify-center"}`}>
      <svg width="100%" height="20" viewBox="0 0 100 20" className="overflow-visible">
        <line x1="0" y1="10" x2="100" y2="10" stroke="url(#line)" strokeWidth="1.5" strokeDasharray="4 4" strokeDashoffset="100" style={{ animation: "dash 1.6s linear infinite" }} />
        <circle cx="100" cy="10" r="2.5" fill="#0EA5E9" />
      </svg>
    </div>
  );
}

/* ---------- Logos / Social proof ---------- */

function LogosStrip() {
  const logos = ["n8n", "Zapier", "Make", "OpenAI", "Slack", "HubSpot", "Notion", "Airtable"];
  return (
    <div className="border-y border-border bg-[color:var(--surface)]">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-10">
        <span className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">Construído sobre o stack que o mercado já usa</span>
        <div className="grid w-full grid-cols-4 items-center gap-x-6 gap-y-4 md:grid-cols-8">
          {logos.map((l) => (
            <div key={l} className="text-center text-sm font-semibold text-muted-foreground/70 transition-colors hover:text-foreground">
              {l}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ---------- Problem ---------- */

function Problem() {
  const steps = [
    { label: "Aprende n8n", icon: Workflow },
    { label: "Aprende APIs", icon: Database },
    { label: "Aprende IA", icon: Cpu },
    { label: "Aprende workflows", icon: GitBranch },
  ];
  const pains = [
    "Não sabe quais automações têm demanda real",
    "Não sabe quanto cobrar por um projeto",
    "Não sabe como estruturar entregas",
    "Não sabe como apresentar soluções",
    "Não sabe por onde efetivamente começar",
  ];
  return (
    <Section id="problema">
      <SectionTitle
        eyebrow="O problema"
        icon={Target}
        title={<>Você está aprendendo automação… <span className="text-muted-foreground">mas ainda não sabe o que vender.</span></>}
      />
      <div className="mt-14 grid items-center gap-10 lg:grid-cols-[1.1fr_1fr]">
        <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
          <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Sua jornada hoje</div>
          <ol className="mt-4 space-y-3">
            {steps.map(({ label, icon: Icon }, i) => (
              <li key={label} className="flex items-center gap-3 rounded-xl border border-border bg-[color:var(--surface)] px-4 py-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-card text-[color:var(--brand)] ring-soft">
                  <Icon className="h-4 w-4" />
                </div>
                <span className="text-sm font-medium text-foreground">{label}</span>
                <span className="ml-auto text-xs text-muted-foreground">passo {i + 1}</span>
              </li>
            ))}
            <li className="flex items-center gap-3 rounded-xl border border-destructive/30 bg-destructive/10 px-4 py-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-card text-destructive ring-soft">
                <X className="h-4 w-4" />
              </div>
              <span className="text-sm font-semibold text-destructive">Continua sem clientes</span>
            </li>
          </ol>
        </div>
        <ul className="space-y-3">
          {pains.map((p) => (
            <li key={p} className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 shadow-xs card-hover">
              <div className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-destructive/10 text-destructive">
                <X className="h-3.5 w-3.5" />
              </div>
              <span className="text-sm text-foreground">{p}</span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

/* ---------- Real Pain ---------- */

function RealPain() {
  return (
    <Section id="dor">
      <div className="relative overflow-hidden rounded-3xl border border-border bg-[color:var(--surface)] p-10 md:p-16">
        <div className="pointer-events-none absolute inset-0 bg-dots opacity-60" />
        <div className="relative mx-auto max-w-3xl text-center">
          <Eyebrow icon={Eye}>A dor real</Eyebrow>
          <h2 className="mt-5 text-balance text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            O problema não é aprender automação. <br className="hidden md:block" />
            <span className="text-gradient">É não saber transformar conhecimento em dinheiro.</span>
          </h2>
          <figure className="mx-auto mt-10 max-w-2xl rounded-2xl border border-border bg-card p-7 text-left shadow-md">
            <div className="text-[color:var(--brand)] text-3xl leading-none">“</div>
            <blockquote className="-mt-2 text-lg font-medium leading-relaxed text-foreground">
              Tenho medo de passar meses estudando automação e descobrir que não consigo transformar isso em faturamento.
            </blockquote>
            <figcaption className="mt-4 text-xs font-medium uppercase tracking-wider text-muted-foreground">— você, todo domingo à noite</figcaption>
          </figure>
        </div>
      </div>
    </Section>
  );
}

/* ---------- Solution ---------- */

function Solution() {
  const steps = [
    { icon: Target, title: "Problema", desc: "O que a empresa sente todos os dias." },
    { icon: Sparkles, title: "Solução", desc: "Qual automação resolve, com clareza." },
    { icon: Workflow, title: "Workflow", desc: "Fluxograma visual: entrada → saída." },
    { icon: Rocket, title: "Aplicação comercial", desc: "Como vender, para quem, por quanto." },
  ];
  return (
    <Section id="solucao">
      <SectionTitle
        eyebrow="A solução"
        icon={Boxes}
        title={<>Conheça o <span className="text-brand-gradient">Nexus Automation Pack</span></>}
        sub="Uma biblioteca visual criada para mostrar exatamente quais automações possuem potencial comercial — e como aplicá-las."
      />
      <div className="mt-14 grid gap-4 md:grid-cols-4">
        {steps.map(({ icon: Icon, title, desc }, i) => (
          <div key={title} className="group relative rounded-2xl border border-border bg-card p-6 shadow-sm card-hover">
            <div className="flex items-center justify-between">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl text-[color:var(--brand)]" style={{ background: "linear-gradient(135deg, oklch(0.546 0.21 263 / 0.10), oklch(0.72 0.14 230 / 0.10))" }}>
                <Icon className="h-5 w-5" />
              </div>
              <span className="text-xs font-semibold text-muted-foreground">0{i + 1}</span>
            </div>
            <h3 className="mt-5 text-base font-semibold text-foreground">{title}</h3>
            <p className="mt-1.5 text-sm text-muted-foreground">{desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ---------- Mechanism ---------- */

function Mechanism() {
  const items = [
    { icon: TrendingUp, title: "O que o mercado compra", desc: "Mapeamos automações com demanda real, por nicho e por porte de empresa.", tag: "Demanda" },
    { icon: Workflow, title: "Como a automação funciona", desc: "Cada caso vem com fluxograma, entradas, decisões e saídas.", tag: "Arquitetura" },
    { icon: Award, title: "Como transformar em serviço", desc: "Quem compra, como apresentar, como precificar e como entregar.", tag: "Comercial" },
  ];
  return (
    <Section id="metodo">
      <SectionTitle
        eyebrow="Mecanismo único"
        icon={Compass}
        title={<>Pare de estudar ferramentas. <span className="text-muted-foreground">Comece a estudar oportunidades.</span></>}
        sub="Cada automação do pack responde a três perguntas que ferramentas isoladas nunca respondem."
      />
      <div className="mt-14 grid gap-5 md:grid-cols-3">
        {items.map(({ icon: Icon, title, desc, tag }) => (
          <div key={title} className="relative overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-sm card-hover">
            <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-[color:var(--brand)]/40 to-transparent" />
            <span className="inline-flex rounded-full bg-[color:var(--brand)]/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-[color:var(--brand)]">{tag}</span>
            <div className="mt-5 flex h-11 w-11 items-center justify-center rounded-xl bg-[color:var(--surface)] text-foreground ring-soft">
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="mt-5 text-lg font-semibold text-foreground">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ---------- Modules ---------- */

function Modules() {
  const modules = [
    {
      tag: "Módulo 01",
      icon: LineChart,
      title: "O que o mercado compra",
      bullets: ["Casos reais por nicho", "Oportunidades por porte de empresa", "Aplicações empresariais validadas", "Mapa de demanda comercial"],
    },
    {
      tag: "Módulo 02",
      icon: Workflow,
      title: "Como a automação funciona",
      bullets: ["Fluxogramas detalhados", "Arquitetura passo a passo", "Entradas, processamentos e decisões", "Saídas e integrações"],
    },
    {
      tag: "Módulo 03",
      icon: BriefcaseIcon,
      title: "Como transformar em serviço",
      bullets: ["Quem é o comprador ideal", "Como apresentar a solução", "Como gerar e comunicar valor", "Como fechar o projeto"],
    },
  ];
  return (
    <Section id="modulos">
      <SectionTitle
        eyebrow="Dentro do pack"
        icon={Layers}
        title="Três módulos. Uma jornada completa."
        sub="Da identificação da oportunidade até a entrega do serviço."
      />
      <div className="mt-14 grid gap-5 lg:grid-cols-3">
        {modules.map(({ tag, icon: Icon, title, bullets }) => (
          <article key={tag} className="relative flex flex-col rounded-2xl border border-border bg-card p-7 shadow-sm card-hover">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">{tag}</span>
              <div className="flex h-9 w-9 items-center justify-center rounded-lg text-[color:var(--brand)]" style={{ background: "linear-gradient(135deg, oklch(0.546 0.21 263 / 0.12), oklch(0.72 0.14 230 / 0.12))" }}>
                <Icon className="h-4.5 w-4.5" />
              </div>
            </div>
            <h3 className="mt-5 text-xl font-semibold text-foreground">{title}</h3>
            <ul className="mt-5 space-y-2.5">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--brand)]" /> <span className="text-foreground/90">{b}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}


/* ---------- Gallery ---------- */

function Gallery() {
  const items = [
    { title: "Qualificação de Leads · IA", node: <FlowMini nodes={[Database, Cpu, GitBranch, Rocket]} labels={["Lead", "Score", "Rota", "CRM"]} /> },
    { title: "Cobrança Automática", node: <FlowMini nodes={[Clock, Database, Zap, Check]} labels={["Vencimento", "Status", "Disparo", "Baixa"]} /> },
    { title: "Onboarding de Cliente", node: <FlowMini nodes={[Users, BookOpen, Workflow, Rocket]} labels={["Compra", "Material", "Tarefas", "Sucesso"]} /> },
    { title: "SDR com IA · WhatsApp", node: <FlowMini nodes={[MessageSquare, Cpu, GitBranch, Rocket]} labels={["Msg", "Intenção", "Rota", "Agenda"]} /> },
    { title: "Relatórios Comerciais", node: <FlowMini nodes={[Database, Cpu, LineChart, BookOpen]} labels={["Fontes", "Cálculo", "Gráficos", "PDF"]} /> },
    { title: "Sincronia CRM ↔ Planilha", node: <FlowMini nodes={[Database, Workflow, GitBranch, Database]} labels={["CRM", "Map", "Diff", "Sheet"]} /> },
  ];
  return (
    <Section id="galeria">
      <SectionTitle
        eyebrow="Demonstração"
        icon={Eye}
        title="Veja o material por dentro"
        sub="Páginas, fluxogramas e exemplos de aplicações reais — pensados para escanear rápido."
      />
      <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {items.map(({ title, node }) => (
          <figure key={title} className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm card-hover">
            <div className="aspect-[4/3] bg-[color:var(--surface)] p-5">
              <div className="flex h-full flex-col">
                <div className="mb-3 flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-border" />
                  <span className="h-2 w-2 rounded-full bg-border" />
                  <span className="h-2 w-2 rounded-full bg-border" />
                </div>
                <div className="flex flex-1 items-center justify-center">{node}</div>
              </div>
            </div>
            <figcaption className="flex items-center justify-between border-t border-border px-5 py-3.5">
              <span className="text-sm font-semibold text-foreground">{title}</span>
              <span className="text-xs text-muted-foreground">PDF · Visual</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}


function FlowMini({ nodes, labels }: { nodes: Array<React.ComponentType<{ className?: string }>>; labels: string[] }) {
  return (
    <div className="grid w-full grid-cols-4 items-center gap-2">
      {nodes.map((Icon, i) => (
        <div key={i} className="flex flex-col items-center">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-card text-[color:var(--brand)] shadow-xs">
            <Icon className="h-4.5 w-4.5" />
          </div>
          <span className="mt-2 text-[10px] font-medium text-muted-foreground">{labels[i]}</span>
        </div>
      ))}
    </div>
  );
}

/* ---------- Transformation (before/after) ---------- */

function Transformation() {
  const before = [
    "Aprende sem direção comercial",
    "Não sabe o que vender",
    "Não entende demanda",
    "Insegurança ao precificar",
  ];
  const after = [
    "Visão comercial clara",
    "Sabe exatamente o que entregar",
    "Identifica oportunidades reais",
    "Confiança para fechar projetos",
  ];
  return (
    <Section id="transformacao">
      <SectionTitle
        eyebrow="Transformação"
        icon={Sparkles}
        title="O que muda depois do Nexus Automation Pack"
      />
      <div className="mt-14 grid gap-5 md:grid-cols-2">
        <div className="rounded-2xl border border-border bg-[color:var(--surface)] p-7">
          <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Antes</div>
          <ul className="mt-4 space-y-3">
            {before.map((b) => (
              <li key={b} className="flex items-start gap-3 text-sm text-foreground/80">
                <X className="mt-0.5 h-4 w-4 shrink-0 text-destructive" /> {b}
              </li>
            ))}
          </ul>
        </div>
        <div className="relative overflow-hidden rounded-2xl border border-[color:var(--brand)]/20 bg-card p-7 shadow-md">
          <div className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-[color:var(--brand)] to-transparent" />
          <div className="text-xs font-semibold uppercase tracking-wider text-[color:var(--brand)]">Depois</div>
          <ul className="mt-4 space-y-3">
            {after.map((a) => (
              <li key={a} className="flex items-start gap-3 text-sm text-foreground">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--brand)]" /> {a}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}

/* ---------- Benefits ---------- */

function Benefits() {
  const benefits = [
    { icon: Target, title: "Descubra automações vendáveis", desc: "Pare de chutar — saiba o que o mercado já paga." },
    { icon: TrendingUp, title: "Entenda oportunidades", desc: "Demanda real por nicho e por porte de empresa." },
    { icon: Workflow, title: "Aprenda lógica de workflows", desc: "Pense em entradas, decisões e saídas." },
    { icon: Award, title: "Confiança comercial", desc: "Apresente soluções com clareza de quem entende." },
    { icon: Compass, title: "Visão estratégica", desc: "Saia da execução pura e ganhe perspectiva." },
    { icon: Clock, title: "Economize meses", desc: "Atalho para evitar tentativa e erro infinitos." },
  ];
  return (
    <Section id="beneficios">
      <SectionTitle eyebrow="Benefícios" icon={Sparkles} title="Por que o pack acelera quem está começando" />
      <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {benefits.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="group rounded-2xl border border-border bg-card p-6 shadow-xs card-hover">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[color:var(--surface)] text-[color:var(--brand)] ring-soft transition-transform group-hover:scale-110">
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="mt-5 text-base font-semibold text-foreground">{title}</h3>
            <p className="mt-1.5 text-sm text-muted-foreground">{desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ---------- Offer ---------- */

function Offer() {
  const includes = [
    "Biblioteca Premium com +50 automações",
    "Guias visuais por automação",
    "Fluxogramas detalhados",
    "Estudos de aplicação comercial",
    "Atualizações futuras incluídas",
    "Acesso vitalício ao material",
  ];
  return (
    <Section id="oferta">
      <SectionTitle eyebrow="Oferta" icon={Boxes} title="Tudo que você recebe" sub="Acesso imediato a uma biblioteca pensada para gerar resultado comercial." />
      <div className="mt-14 grid gap-6 lg:grid-cols-[1.1fr_1fr]">
        <div className="rounded-2xl border border-border bg-card p-7 shadow-sm">
          <ul className="grid gap-3 sm:grid-cols-2">
            {includes.map((it) => (
              <li key={it} className="flex items-start gap-3 rounded-xl border border-border bg-[color:var(--surface)] p-4">
                <div className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-[color:var(--brand)]/10 text-[color:var(--brand)]">
                  <Check className="h-3.5 w-3.5" />
                </div>
                <span className="text-sm font-medium text-foreground">{it}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative overflow-hidden rounded-2xl border border-[color:var(--brand)]/25 bg-card p-8 shadow-lg">
          <div className="pointer-events-none absolute -right-16 -top-16 h-60 w-60 rounded-full" style={{ background: "radial-gradient(circle, oklch(0.546 0.21 263 / 0.15), transparent 70%)" }} />
          <span className="silver-chip inline-flex rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider">Acesso completo</span>
          <h3 className="mt-5 text-2xl font-bold tracking-tight text-foreground">Nexus Automation Pack</h3>
          <p className="mt-2 text-sm text-muted-foreground">Pagamento único · Acesso imediato</p>
          <div className="mt-6 flex items-end gap-3">
            <span className="text-5xl font-bold tracking-tight text-foreground">R$ 27<span className="text-2xl text-muted-foreground">,90</span></span>
            <span className="mb-1 text-sm text-muted-foreground line-through">R$ 97</span>
          </div>
          <div className="mt-6">
            <PrimaryButton>{CTA_PRIMARY}</PrimaryButton>
          </div>
          <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1.5"><ShieldCheck className="h-3.5 w-3.5 text-[color:var(--brand)]" /> 7 dias de garantia</span>
            <span className="inline-flex items-center gap-1.5"><Zap className="h-3.5 w-3.5 text-[color:var(--brand)]" /> Acesso vitalício</span>
            <span className="inline-flex items-center gap-1.5"><Layers className="h-3.5 w-3.5 text-[color:var(--brand)]" /> Atualizações grátis</span>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ---------- Guarantee ---------- */

function Guarantee() {
  return (
    <Section id="garantia">
      <div className="relative mx-auto max-w-3xl overflow-hidden rounded-3xl border border-border bg-card p-10 text-center shadow-sm">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl text-[color:var(--brand)]" style={{ background: "linear-gradient(135deg, oklch(0.546 0.21 263 / 0.12), oklch(0.72 0.14 230 / 0.12))" }}>
          <ShieldCheck className="h-7 w-7" />
        </div>
        <h3 className="mt-6 text-2xl font-bold tracking-tight text-foreground md:text-3xl">Garantia incondicional de 7 dias</h3>
        <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground md:text-base">
          Se o material não agregar valor real ao seu caminho, é só pedir reembolso. Sem perguntas, sem fricção.
        </p>
      </div>
    </Section>
  );
}

/* ---------- FAQ ---------- */

function FAQ() {
  const faqs = [
    { q: "Sou iniciante, esse material serve para mim?", a: "Sim. O pack é pensado para quem está começando e quer enxergar o cenário comercial antes de mergulhar em ferramentas." },
    { q: "Preciso saber programar?", a: "Não. Os fluxogramas são visuais e usam ferramentas no-code/low-code populares como n8n, Make e Zapier." },
    { q: "Funciona para freelancers?", a: "Sim — foi desenhado especialmente para quem quer transformar conhecimento técnico em projetos vendáveis." },
    { q: "É só teoria?", a: "Não. Cada automação inclui caso de aplicação, arquitetura visual e direção comercial de venda." },
    { q: "Como recebo o acesso?", a: "O acesso é imediato após a compra, enviado por e-mail e disponível em uma área online." },
    { q: "Existem atualizações?", a: "Sim. Novas automações e revisões são adicionadas e você recebe sem custo adicional." },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <Section id="faq">
      <SectionTitle eyebrow="Perguntas frequentes" icon={Eye} title="Tudo que você precisa saber" />
      <div className="mx-auto mt-12 max-w-3xl divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
        {faqs.map((item, i) => {
          const isOpen = open === i;
          return (
            <button
              key={item.q}
              onClick={() => setOpen(isOpen ? null : i)}
              className="block w-full text-left"
              aria-expanded={isOpen}
            >
              <div className="flex items-center justify-between gap-4 px-6 py-5 transition-colors hover:bg-[color:var(--surface)]">
                <span className="text-[15px] font-semibold text-foreground">{item.q}</span>
                <ChevronDown className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
              </div>
              <div
                className="grid overflow-hidden px-6 transition-all duration-300"
                style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
              >
                <div className="min-h-0">
                  <p className="pb-5 text-sm leading-relaxed text-muted-foreground">{item.a}</p>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </Section>
  );
}

/* ---------- Final CTA ---------- */

function FinalCTA() {
  return (
    <Section id="final" className="!pb-32">
      <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-10 text-center text-foreground md:p-16">
        <div className="pointer-events-none absolute inset-0 opacity-50" style={{ background: "radial-gradient(ellipse 60% 50% at 50% 0%, oklch(0.546 0.21 263 / 0.6), transparent 60%)" }} />
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.07]" />
        <div className="relative mx-auto max-w-3xl">
          <Eyebrow icon={Rocket}>Última chamada</Eyebrow>
          <h2 className="mt-5 text-balance text-3xl font-bold tracking-tight md:text-5xl">
            Pare de aprender automação sem direção.<br />
            <span className="text-brand-gradient">Comece a construir soluções que empresas compram.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-foreground/70">
            Acesso imediato. Garantia de 7 dias. Atualizações incluídas.
          </p>
          <div className="mt-8 flex justify-center">
            <PrimaryButton>Quero acessar o Nexus Automation Pack</PrimaryButton>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ---------- Footer ---------- */

function Footer() {
  return (
    <footer className="border-t border-border bg-[color:var(--surface)]">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 md:flex-row">
        <div className="flex items-center gap-2.5">
          <img src={logoAsset.url} alt="Nexus" className="h-6 w-6" />
          <span className="text-sm font-semibold text-foreground">Nexus Automation Pack</span>
        </div>
        <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Nexus. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

/* ---------- Page ---------- */

function Landing() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <LogosStrip />
      <Problem />
      <RealPain />
      <Solution />
      <Mechanism />
      <Modules />
      <Gallery />
      <Transformation />
      <Benefits />
      <Offer />
      <Guarantee />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
