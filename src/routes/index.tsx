import { createFileRoute } from "@tanstack/react-router";
import logoAsset from "@/assets/logo_nexus.png.asset.json";
import {
  Check, X, ArrowRight, ShieldCheck, Sparkles, Workflow,
  Compass, BookOpen, Briefcase, Calculator, Map as MapIcon,
  MessageSquare, ChevronDown, Star, Infinity as InfinityIcon,
} from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nexus Automation Pack — Automações que o mercado compra" },
      { name: "description", content: "Biblioteca premium de automações comerciais documentadas: o que empresas pagam, como funciona e como vender. Acesso imediato por R$ 27,90." },
      { property: "og:title", content: "Nexus Automation Pack" },
      { property: "og:description", content: "Pare de estudar ferramentas. Comece a entregar projetos que o mercado já compra." },
      { property: "og:image", content: logoAsset.url },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: logoAsset.url },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@400;500;600;700&display=swap" },
    ],
  }),
  component: Landing,
});

const CTA_TEXT = "Quero acessar agora por R$ 27,90";
const CHECKOUT_URL = "#oferta";

function Section({ children, id, className = "" }: { children: React.ReactNode; id?: string; className?: string }) {
  return (
    <section id={id} className={`relative mx-auto w-full max-w-6xl px-6 py-24 md:py-32 ${className}`}>
      {children}
    </section>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-3.5 py-1.5 text-xs uppercase tracking-[0.18em] text-silver-dim backdrop-blur">
      <span className="h-1 w-1 rounded-full bg-silver" />
      {children}
    </div>
  );
}

function PrimaryButton({ children, href = CHECKOUT_URL, size = "lg" }: { children: React.ReactNode; href?: string; size?: "lg" | "md" }) {
  const pad = size === "lg" ? "px-8 py-4 text-base" : "px-6 py-3 text-sm";
  return (
    <a
      href={href}
      className={`group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full font-semibold text-primary-foreground transition-all ${pad}`}
      style={{ background: "var(--gradient-silver)", boxShadow: "0 10px 40px -10px oklch(0.92 0.005 250 / 0.4), inset 0 1px 0 oklch(1 0 0 / 0.5)" }}
    >
      <span className="relative z-10">{children}</span>
      <ArrowRight className="relative z-10 h-4 w-4 transition-transform group-hover:translate-x-1" />
      <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
    </a>
  );
}

function Landing() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      {/* Ambient background */}
      <div className="pointer-events-none fixed inset-0 bg-noise opacity-80" />
      <div className="pointer-events-none fixed inset-0" style={{
        backgroundImage: "radial-gradient(1px 1px at 20% 30%, oklch(1 0 0 / 0.06), transparent), radial-gradient(1px 1px at 70% 80%, oklch(1 0 0 / 0.04), transparent), radial-gradient(2px 2px at 40% 60%, oklch(1 0 0 / 0.03), transparent)",
        backgroundSize: "400px 400px",
      }} />

      <Nav />
      <Hero />
      <Pain />
      <SocialProof1 />
      <CTAIntermediate />
      <Method />
      <ForWhom />
      <Deliverables />
      <Bonuses />
      <ValueStack />
      <SocialProof2 />
      <Support />
      <Guarantee />
      <Authority />
      <FAQ />
      <FinalOffer />
      <Footer />
    </main>
  );
}

function Nav() {
  return (
    <header className="relative z-20 mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6">
      <a href="#" className="flex items-center gap-3">
        <img src={logoAsset.url} alt="Nexus" className="h-10 w-10 rounded-full object-cover ring-silver" />
        <span className="font-display text-xl tracking-wide text-silver">Nexus</span>
      </a>
      <nav className="hidden items-center gap-8 text-sm text-silver-dim md:flex">
        <a href="#metodo" className="transition-colors hover:text-foreground">Método</a>
        <a href="#entrega" className="transition-colors hover:text-foreground">O que recebe</a>
        <a href="#faq" className="transition-colors hover:text-foreground">FAQ</a>
      </nav>
      <PrimaryButton size="md">R$ 27,90</PrimaryButton>
    </header>
  );
}

function Hero() {
  return (
    <Section className="!py-20 md:!py-28">
      <div className="relative grid items-center gap-16 lg:grid-cols-[1.1fr_1fr]">
        <div className="space-y-8">
          <Eyebrow>Nexus Automation Pack · Plug & Play</Eyebrow>
          <h1 className="font-display text-5xl leading-[1.05] tracking-tight md:text-7xl">
            Quem sabe criar automações <em className="text-silver">já tem</em> o que o mercado quer comprar.
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-silver-dim">
            O problema não é falta de conhecimento técnico. É não saber quais projetos existem, como funcionam e por que uma empresa pagaria por eles. Solução visual, prática e pronta para consultar agora.
          </p>
          <ul className="space-y-4">
            {[
              "Você aprende ferramentas, mas continua sem saber o que oferecer. Aqui você vê, com fluxo e aplicação comercial, o que empresas já compram.",
              "Você monta workflows, mas trava na apresentação. Cada automação vem com o problema que resolve, perfil do cliente e argumento de valor.",
              "Você evolui tecnicamente, mas não financeiramente. Conecte o que já sabe com projetos que têm demanda real.",
            ].map((b, i) => (
              <li key={i} className="flex gap-3 text-sm leading-relaxed text-silver-dim md:text-base">
                <Check className="mt-1 h-4 w-4 shrink-0 text-silver" strokeWidth={2.5} />
                <span>{b}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap items-center gap-5 pt-2">
            <PrimaryButton>Quero ver as automações que o mercado compra</PrimaryButton>
            <span className="text-xs uppercase tracking-widest text-silver-dim">
              Acesso imediato · Garantia 7 dias
            </span>
          </div>
        </div>

        {/* Visual */}
        <div className="relative">
          <div className="absolute -inset-10 -z-10 rounded-full opacity-40 blur-3xl"
            style={{ background: "radial-gradient(circle, oklch(0.6 0.04 250) 0%, transparent 70%)" }} />
          <div className="relative aspect-square overflow-hidden rounded-3xl border border-border bg-card glow">
            <img src={logoAsset.url} alt="Nexus Automation Pack" className="h-full w-full object-cover" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background via-background/60 to-transparent p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-widest text-silver-dim">Edição 2026</p>
                  <p className="font-display text-2xl text-silver">Automation Pack</p>
                </div>
                <div className="rounded-full border border-border bg-background/80 px-3 py-1.5 text-xs backdrop-blur">
                  PDF Interativo
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

function Pain() {
  return (
    <Section>
      <div className="mx-auto max-w-3xl space-y-8 text-center">
        <Eyebrow>A lacuna invisível</Eyebrow>
        <h2 className="font-display text-4xl leading-tight md:text-5xl">
          O maior problema de quem aprende automação <em className="text-silver">não é técnico</em>.
        </h2>
      </div>
      <div className="mx-auto mt-16 max-w-3xl space-y-6 text-lg leading-relaxed text-silver-dim">
        <p>Você assistiu os vídeos. Fez o curso. Criou os workflows de teste. Entendeu APIs, gatilhos, condições e integrações.</p>
        <p>E mesmo assim, quando alguém te pergunta <span className="text-foreground">"o que você faz?"</span>, a resposta trava na garganta.</p>
        <p>Não porque você não sabe. Mas porque você não consegue visualizar como aquilo que você sabe fazer se transforma em algo que uma empresa reconhece como problema e está disposta a pagar para resolver.</p>
        <blockquote className="border-l-2 border-silver/40 pl-6 font-display text-2xl italic text-foreground md:text-3xl">
          Isso tem um nome: a Lacuna da Virada Comercial.
        </blockquote>
        <p>É o espaço entre dominar a ferramenta e saber o que construir com ela. Cursos técnicos não ensinam essa parte. Vídeos do YouTube não cobrem essa parte. Comunidades falam de ferramentas, não de projetos vendáveis.</p>
        <p>Então você continua estudando. Mais um curso. Mais uma integração. Mais um workflow. E a sensação que fica é de estar correndo numa esteira. Muito movimento. Pouco avanço.</p>
        <p>Nos bastidores, o pensamento que você raramente fala em voz alta: <span className="text-foreground">"E se eu aprender tudo isso e ninguém quiser comprar?"</span></p>
        <p>O inimigo aqui não é você. É um mercado de educação em automação que ensina ferramentas mas não ensina o negócio por trás delas.</p>
      </div>
    </Section>
  );
}

const testimonials1 = [
  { name: "Lucas M.", text: "Ficou 4 meses aprendendo n8n, criou dezenas de workflows de teste, mas não conseguia imaginar o que apresentaria para um cliente.", highlight: "Fechou o primeiro projeto freelancer em 3 semanas por R$ 1.800." },
  { name: "Renata C.", text: "Sabia usar Make e Zapier, mas achava que seus workflows eram simples demais para cobrar. Ao ver a estrutura completa, percebeu que já tinha capacidade para 11 das automações listadas.", highlight: "Cobrou o primeiro por R$ 2.400." },
  { name: "Diego F.", text: "Estava prestes a desistir de automação. Com o material em mãos, identificou 3 nichos onde seus workflows tinham demanda direta.", highlight: "Agendou as primeiras duas reuniões comerciais em menos de 2 semanas." },
];

function SocialProof1() {
  return (
    <Section>
      <div className="mx-auto mb-16 max-w-3xl text-center">
        <Eyebrow>Quem saiu do estudo</Eyebrow>
        <h2 className="mt-6 font-display text-4xl leading-tight md:text-5xl">
          Do modo estudo para o modo projeto — como foi.
        </h2>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {testimonials1.map((t) => (
          <article key={t.name} className="group relative flex flex-col gap-5 rounded-2xl border border-border bg-card p-7 ring-silver transition-all hover:-translate-y-1">
            <div className="flex gap-0.5 text-silver">
              {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
            </div>
            <p className="text-sm leading-relaxed text-silver-dim">{t.text}</p>
            <p className="text-sm font-medium leading-relaxed text-foreground">{t.highlight}</p>
            <div className="mt-auto flex items-center gap-3 pt-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-secondary font-display text-silver">
                {t.name[0]}
              </div>
              <div>
                <p className="text-sm font-medium">{t.name}</p>
                <p className="text-xs text-silver-dim">Aluno Nexus</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

function CTAIntermediate() {
  return (
    <Section className="!py-16">
      <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-10 md:p-16">
        <div className="absolute inset-0 -z-10 opacity-60" style={{ background: "radial-gradient(circle at 80% 50%, oklch(0.25 0.01 250), transparent 60%)" }} />
        <div className="grid items-center gap-8 md:grid-cols-[1fr_auto]">
          <p className="max-w-2xl font-display text-2xl leading-snug text-foreground md:text-3xl">
            Se você se reconheceu, o que você precisa não é mais teoria técnica. É <em className="text-silver">referências prontas</em> de projetos reais com lógica, fluxo e aplicação comercial.
          </p>
          <PrimaryButton>Acessar as automações</PrimaryButton>
        </div>
      </div>
    </Section>
  );
}

const methodSteps = [
  { n: "01", icon: Compass, title: "Descobrir", subtitle: "O que o mercado compra", body: "Biblioteca de automações comerciais documentadas: nome da solução, objetivo, problema que resolve, nichos indicados e resultado final. Você para de imaginar e começa a ver o que já tem demanda comprovada." },
  { n: "02", icon: Workflow, title: "Entender", subtitle: "Como a automação funciona", body: "Cada projeto destrinchado em blocos visuais: entrada, processamento, regras de decisão, execuções automáticas e resultado. Você passa a compreender a arquitetura — não só copiar fluxos." },
  { n: "03", icon: Briefcase, title: "Monetizar", subtitle: "Como vender o projeto", body: "Perfil do cliente ideal, dor principal, valor percebido e aplicações por nicho. Você sai com vocabulário, argumentação e clareza para apresentar a solução sem parecer amador." },
];

function Method() {
  return (
    <Section id="metodo">
      <div className="mx-auto max-w-3xl text-center">
        <Eyebrow>Método Nexus</Eyebrow>
        <h2 className="mt-6 font-display text-4xl leading-tight md:text-5xl">
          Da pergunta <em className="text-silver">"o que eu poderia criar?"</em> para <em className="text-silver">"eu sei exatamente o que vender"</em>.
        </h2>
        <p className="mt-6 text-lg text-silver-dim">
          Biblioteca digital premium em PDF interativo. Sem aulas longas. Você abre qualquer automação e em poucos minutos entende o problema, o fluxo e o cliente que pagaria por ela.
        </p>
      </div>
      <div className="mt-20 grid gap-6 md:grid-cols-3">
        {methodSteps.map((s) => (
          <div key={s.n} className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 ring-silver">
            <div className="absolute right-6 top-6 font-display text-6xl text-silver/10">{s.n}</div>
            <s.icon className="h-7 w-7 text-silver" strokeWidth={1.5} />
            <h3 className="mt-6 font-display text-3xl">{s.title}</h3>
            <p className="text-sm uppercase tracking-widest text-silver-dim">{s.subtitle}</p>
            <p className="mt-5 text-sm leading-relaxed text-silver-dim">{s.body}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function ForWhom() {
  const yes = [
    "Freelancers que já sabem usar n8n, Make ou Zapier mas ainda não fecharam o primeiro projeto pago",
    "Profissionais em transição que querem entrar com visão de negócio, não só técnica",
    "Iniciantes intermediários que precisam de referências reais para ganhar confiança comercial",
    "Quem quer descobrir quais automações têm demanda antes de investir mais tempo em ferramentas",
    "Quem sabe criar workflows mas não saberia apresentar uma proposta hoje",
  ];
  const no = [
    "Profissionais avançados que já vendem automação regularmente e têm carteira ativa",
    "Empresários que querem comprar automações para o próprio negócio",
    "Pessoas sem nenhum contato com ferramentas de automação",
    "Quem busca atalho que gera cliente sem desenvolver habilidade técnica ou comercial",
  ];
  return (
    <Section>
      <div className="mx-auto max-w-3xl text-center">
        <Eyebrow>Perfil</Eyebrow>
        <h2 className="mt-6 font-display text-4xl leading-tight md:text-5xl">
          Construído para um perfil específico.
        </h2>
      </div>
      <div className="mt-16 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-border bg-card p-8">
          <p className="text-sm uppercase tracking-widest text-silver">Para você se</p>
          <ul className="mt-6 space-y-4">
            {yes.map((y) => (
              <li key={y} className="flex gap-3 text-sm leading-relaxed text-silver-dim">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-silver" strokeWidth={2.5} />
                <span>{y}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-border bg-card/40 p-8">
          <p className="text-sm uppercase tracking-widest text-muted-foreground">Não é para você se</p>
          <ul className="mt-6 space-y-4">
            {no.map((n) => (
              <li key={n} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                <X className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={2.5} />
                <span>{n}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}

const deliverables = [
  { icon: BookOpen, title: "Biblioteca de Automações Comerciais", price: "R$ 97", body: "Coleção documentada com nome, objetivo, problema, nichos, benefícios e resultado. Você vê o que o mercado compra antes de oferecer." },
  { icon: Workflow, title: "Engenharia Visual dos Workflows", price: "R$ 127", body: "Cada automação em blocos visuais: entrada, processamento, regras, execuções e resultado. Você entende a lógica — não só o passo a passo." },
  { icon: Briefcase, title: "Guia de Aplicação Comercial", price: "R$ 97", body: "Perfil do cliente ideal, dor principal, valor percebido e aplicações por nicho. Você sai sabendo o que dizer em uma reunião." },
];

function Deliverables() {
  return (
    <Section id="entrega">
      <div className="mx-auto max-w-3xl text-center">
        <Eyebrow>O que você recebe</Eyebrow>
        <h2 className="mt-6 font-display text-4xl leading-tight md:text-5xl">
          Três pilares. Uma biblioteca completa.
        </h2>
      </div>
      <div className="mt-16 grid gap-6 md:grid-cols-3">
        {deliverables.map((d) => (
          <div key={d.title} className="flex flex-col rounded-2xl border border-border bg-card p-8 ring-silver">
            <d.icon className="h-7 w-7 text-silver" strokeWidth={1.5} />
            <h3 className="mt-6 font-display text-2xl leading-tight">{d.title}</h3>
            <p className="mt-4 flex-1 text-sm leading-relaxed text-silver-dim">{d.body}</p>
            <div className="mt-6 flex items-center justify-between border-t border-border pt-5">
              <span className="text-xs uppercase tracking-widest text-silver-dim">Valor individual</span>
              <span className="font-display text-xl text-silver">{d.price}</span>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

const bonuses = [
  { icon: MessageSquare, n: "Bônus 01", title: "Roteiro de Primeira Reunião", price: "R$ 47", body: "Script de perguntas e estrutura de conversa para a primeira reunião comercial. Cobre como identificar o problema, apresentar sem jargão e chegar ao valor sem insegurança." },
  { icon: MapIcon, n: "Bônus 02", title: "Mapa de Nichos com Demanda", price: "R$ 37", body: "Segmentos com demanda ativa e ciclo curto. Para cada nicho: problema comum, automação mais comprada e argumento que ressoa com o decisor." },
  { icon: Calculator, n: "Bônus 03", title: "Calculadora de Precificação", price: "R$ 47", body: "Planilha prática para calcular o valor de um projeto. 3 modelos: por hora, por projeto e por resultado. Você chega à proposta com número justificado." },
];

function Bonuses() {
  return (
    <Section>
      <div className="mx-auto max-w-3xl text-center">
        <Eyebrow>+ Bônus inclusos</Eyebrow>
        <h2 className="mt-6 font-display text-4xl leading-tight md:text-5xl">
          Além do material principal.
        </h2>
      </div>
      <div className="mt-16 space-y-4">
        {bonuses.map((b) => (
          <div key={b.title} className="group flex flex-col gap-6 rounded-2xl border border-border bg-card p-8 md:flex-row md:items-center">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-border bg-secondary">
              <b.icon className="h-7 w-7 text-silver" strokeWidth={1.5} />
            </div>
            <div className="flex-1">
              <p className="text-xs uppercase tracking-widest text-silver-dim">{b.n}</p>
              <h3 className="mt-1 font-display text-2xl">{b.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-silver-dim">{b.body}</p>
            </div>
            <div className="shrink-0 text-left md:text-right">
              <p className="text-xs uppercase tracking-widest text-silver-dim">Valor</p>
              <p className="font-display text-2xl text-silver">{b.price}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

const stack = [
  ["Biblioteca de Automações Comerciais", "R$ 97,00"],
  ["Engenharia Visual dos Workflows", "R$ 127,00"],
  ["Guia de Aplicação Comercial", "R$ 97,00"],
  ["Bônus 01 · Roteiro de Primeira Reunião", "R$ 47,00"],
  ["Bônus 02 · Mapa de Nichos com Demanda", "R$ 37,00"],
  ["Bônus 03 · Calculadora de Precificação", "R$ 47,00"],
];

function ValueStack() {
  return (
    <Section>
      <div className="mx-auto max-w-3xl text-center">
        <Eyebrow>Stack de valor</Eyebrow>
        <h2 className="mt-6 font-display text-4xl leading-tight md:text-5xl">
          O que está incluso. Quanto vale.
        </h2>
      </div>
      <div className="mx-auto mt-16 max-w-3xl overflow-hidden rounded-2xl border border-border bg-card">
        <ul className="divide-y divide-border">
          {stack.map(([item, price]) => (
            <li key={item} className="flex items-center justify-between px-6 py-5 text-sm md:text-base">
              <span className="text-silver-dim">{item}</span>
              <span className="font-medium text-foreground">{price}</span>
            </li>
          ))}
        </ul>
        <div className="border-t border-border bg-secondary/50 px-6 py-5">
          <div className="flex items-center justify-between text-sm md:text-base">
            <span className="text-silver-dim">Valor total</span>
            <span className="font-display text-2xl text-silver line-through opacity-60">R$ 452,00</span>
          </div>
          <div className="mt-3 flex items-end justify-between">
            <span className="text-xs uppercase tracking-widest text-silver">Hoje por</span>
            <span className="font-display text-5xl leading-none text-silver md:text-6xl">R$ 27,90</span>
          </div>
        </div>
      </div>
      <div className="mt-10 flex justify-center">
        <PrimaryButton>{CTA_TEXT}</PrimaryButton>
      </div>
    </Section>
  );
}

const testimonials2 = [
  { antes: "Sabia configurar fluxos no n8n, tinha estudado 5 meses, mas travava em \"o que exatamente eu ofereço?\".", virada: "Usou a biblioteca para identificar 8 projetos que já sabia executar e com demanda comprovada.", resultado: "Fechou o primeiro por R$ 2.200 em menos de 30 dias. Hoje está no terceiro cliente." },
  { antes: "Usava Make para automações pessoais e achava que precisava de muito mais para cobrar.", virada: "Ao ver o Guia de Aplicação Comercial, percebeu que o \"simples demais\" é o que pequenas empresas pagam R$ 800–1.500.", resultado: "Faturou R$ 4.600 nos primeiros 2 meses com 3 pequenos negócios locais." },
  { antes: "Vinha do administrativo, tinha feito curso, mas sentia que ainda não estava \"pronto\".", virada: "O Roteiro de Primeira Reunião deu estrutura para a abordagem comercial.", resultado: "Primeiro cliente na primeira semana: escritório de contabilidade, R$ 1.200." },
  { antes: "Tinha medo de parecer amador. Sabia criar mas não sabia falar em linguagem de negócio.", virada: "O Guia mostrou como apresentar pelo problema que resolve, não pela tecnologia.", resultado: "Fechou contrato de R$ 3.800 com uma clínica falando em tempo economizado." },
];

function SocialProof2() {
  return (
    <Section>
      <div className="mx-auto max-w-3xl text-center">
        <Eyebrow>Antes · Virada · Resultado</Eyebrow>
        <h2 className="mt-6 font-display text-4xl leading-tight md:text-5xl">
          Quem já tinha o técnico e precisava só da <em className="text-silver">visão comercial</em>.
        </h2>
      </div>
      <div className="mt-16 grid gap-6 md:grid-cols-2">
        {testimonials2.map((t, i) => (
          <article key={i} className="rounded-2xl border border-border bg-card p-8">
            <div className="space-y-5 text-sm leading-relaxed">
              <div>
                <p className="text-xs uppercase tracking-widest text-silver-dim">Antes</p>
                <p className="mt-1.5 text-silver-dim">{t.antes}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-silver-dim">Virada</p>
                <p className="mt-1.5 text-silver-dim">{t.virada}</p>
              </div>
              <div className="rounded-xl border border-border bg-secondary/60 p-4">
                <p className="text-xs uppercase tracking-widest text-silver">Resultado</p>
                <p className="mt-1.5 font-medium text-foreground">{t.resultado}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

function Support() {
  return (
    <Section className="!py-20">
      <div className="grid gap-12 rounded-3xl border border-border bg-card p-10 md:grid-cols-3 md:p-14">
        <div className="md:col-span-1">
          <Eyebrow>Acesso e suporte</Eyebrow>
          <h2 className="mt-6 font-display text-3xl leading-tight md:text-4xl">
            Material de consulta independente.
          </h2>
        </div>
        <div className="grid gap-6 md:col-span-2 md:grid-cols-3">
          {[
            { icon: Sparkles, title: "Acesso imediato", body: "PDF interativo liberado após confirmação do pagamento." },
            { icon: InfinityIcon, title: "Vitalício", body: "Sem prazo de expiração. Download e consulta livres." },
            { icon: MessageSquare, title: "Suporte por email", body: "Retorno em até 48h úteis para dúvidas sobre o conteúdo." },
          ].map((s) => (
            <div key={s.title}>
              <s.icon className="h-6 w-6 text-silver" strokeWidth={1.5} />
              <h3 className="mt-4 font-display text-xl">{s.title}</h3>
              <p className="mt-2 text-sm text-silver-dim">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function Guarantee() {
  return (
    <Section>
      <div className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-border bg-card p-10 text-center md:p-16">
        <div className="absolute inset-0 -z-10 opacity-50" style={{ background: "radial-gradient(circle at 50% 0%, oklch(0.25 0.01 250), transparent 70%)" }} />
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-silver/40 bg-secondary">
          <ShieldCheck className="h-9 w-9 text-silver" strokeWidth={1.5} />
        </div>
        <p className="mt-6 text-sm uppercase tracking-[0.25em] text-silver-dim">Garantia incondicional</p>
        <h2 className="mt-3 font-display text-5xl md:text-6xl">
          <span className="text-silver">7 dias</span> ou seu dinheiro de volta.
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-silver-dim">
          Acesse o material completo, navegue por todas as automações, teste os bônus. Se em 7 dias decidir que não é o que precisava, devolvemos 100% do valor. Sem pergunta, sem formulário, sem burocracia.
        </p>
        <p className="mt-6 font-display text-2xl text-foreground">
          O risco é zero. A decisão é sua.
        </p>
      </div>
    </Section>
  );
}

function Authority() {
  return (
    <Section>
      <div className="grid items-center gap-12 md:grid-cols-[auto_1fr]">
        <div className="relative mx-auto h-64 w-64 overflow-hidden rounded-3xl border border-border bg-card glow">
          <img src={logoAsset.url} alt="Nexus" className="h-full w-full object-cover" />
        </div>
        <div>
          <Eyebrow>Por que este material existe</Eyebrow>
          <h2 className="mt-6 font-display text-4xl leading-tight md:text-5xl">
            Documentação do que levou anos para aprender.
          </h2>
          <div className="mt-8 space-y-5 text-base leading-relaxed text-silver-dim">
            <p>O Nexus Automation Pack não surgiu de teoria. Surgiu da observação de um padrão repetido: profissionais com capacidade técnica real travam exatamente no mesmo ponto — a transição do aprendizado para o projeto comercial.</p>
            <p>Porque nunca tiveram acesso a referências organizadas de como projetos reais são estruturados e vendidos.</p>
            <p className="text-foreground">Este material é a documentação do que levou anos para aprender — e que, com acesso estruturado, pode ser assimilado em horas.</p>
          </div>
        </div>
      </div>
    </Section>
  );
}

const faqs = [
  { q: "Preciso ter experiência avançada em automação?", a: "Não. O material é para quem já tem conhecimento básico ou intermediário, conhece o conceito de workflow e já usou n8n, Make ou Zapier. Se você está do zero, o passo anterior é ter esse contato básico antes de usar o Nexus." },
  { q: "Quanto tempo preciso para consumir o material?", a: "É formato de consulta, não curso linear. Você abre qualquer automação e entende em menos de 15 minutos. Muitos passam 2 a 3 horas na primeira leitura e depois usam como referência pontual ao prospectar ou montar propostas." },
  { q: "Funciona para quem quer trabalhar com n8n?", a: "Sim. A maioria tem compatibilidade direta com n8n. O raciocínio de workflow e aplicação comercial funcionam independente da ferramenta, mas a lógica é construída com n8n em mente." },
  { q: "Em quanto tempo consigo o primeiro cliente?", a: "Depende da sua disponibilidade para prospecção. Quem usa o Roteiro de Primeira Reunião e o Mapa de Nichos com agilidade relata primeiros resultados entre 2 e 6 semanas. O material elimina a incerteza que impede de começar." },
  { q: "E se não funcionar para mim?", a: "Você tem 7 dias de garantia incondicional. Acessa tudo, avalia e, se não for o que precisava, devolve 100% sem nenhuma pergunta. Risco financeiro zero." },
  { q: "Qual a diferença para um curso de automação?", a: "Um curso ensina a usar a ferramenta. O Nexus mostra quais projetos existem, como são construídos e por que uma empresa pagaria. São etapas diferentes da mesma jornada — usam-se em paralelo." },
  { q: "O acesso é vitalício?", a: "Sim. Após a compra, o PDF fica disponível para download e consulta sem prazo de expiração." },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <Section id="faq">
      <div className="mx-auto max-w-3xl text-center">
        <Eyebrow>FAQ</Eyebrow>
        <h2 className="mt-6 font-display text-4xl leading-tight md:text-5xl">
          Perguntas antes da decisão.
        </h2>
      </div>
      <div className="mx-auto mt-16 max-w-3xl space-y-3">
        {faqs.map((f, i) => {
          const isOpen = open === i;
          return (
            <div key={f.q} className="overflow-hidden rounded-2xl border border-border bg-card">
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left transition-colors hover:bg-secondary/40"
              >
                <span className="font-display text-lg md:text-xl">{f.q}</span>
                <ChevronDown className={`h-5 w-5 shrink-0 text-silver transition-transform ${isOpen ? "rotate-180" : ""}`} />
              </button>
              {isOpen && (
                <div className="border-t border-border px-6 py-5 text-sm leading-relaxed text-silver-dim">
                  {f.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </Section>
  );
}

function FinalOffer() {
  return (
    <Section id="oferta">
      <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-10 md:p-16">
        <div className="absolute inset-0 -z-10" style={{ background: "radial-gradient(circle at 50% 0%, oklch(0.22 0.01 250), transparent 70%)" }} />
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow>Oferta final</Eyebrow>
          <h2 className="mt-6 font-display text-5xl leading-tight md:text-6xl">
            Tudo incluído. <em className="text-silver">Uma decisão simples.</em>
          </h2>
        </div>
        <ul className="mx-auto mt-12 max-w-2xl divide-y divide-border border-y border-border">
          {stack.map(([item, price]) => (
            <li key={item} className="flex items-center justify-between gap-4 py-4 text-sm md:text-base">
              <span className="flex items-center gap-3 text-silver-dim">
                <Check className="h-4 w-4 text-silver" strokeWidth={2.5} />
                {item}
              </span>
              <span className="text-foreground">{price}</span>
            </li>
          ))}
        </ul>
        <div className="mx-auto mt-10 max-w-2xl text-center">
          <p className="text-sm uppercase tracking-widest text-silver-dim">Valor total dos componentes</p>
          <p className="mt-1 font-display text-2xl text-silver-dim line-through">R$ 452,00</p>
          <p className="mt-6 text-sm uppercase tracking-widest text-silver">Hoje por</p>
          <p className="font-display text-7xl leading-none text-silver md:text-8xl">R$ 27,90</p>
          <div className="mt-10">
            <PrimaryButton>{CTA_TEXT}</PrimaryButton>
          </div>
          <p className="mt-6 text-xs text-silver-dim">
            Acesso imediato após confirmação · Garantia incondicional de 7 dias
          </p>
          <p className="mt-2 text-xs text-muted-foreground">
            Ao continuar, você concorda com os termos de uso e a política de privacidade.
          </p>
        </div>
      </div>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-10 text-xs text-silver-dim md:flex-row">
        <div className="flex items-center gap-3">
          <img src={logoAsset.url} alt="Nexus" className="h-7 w-7 rounded-full object-cover" />
          <span className="font-display text-base text-silver">Nexus Automation Pack</span>
        </div>
        <p>© {new Date().getFullYear()} Nexus. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
