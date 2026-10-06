import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, ChevronDown, CircleCheck, Sparkles } from "lucide-react";
import ringHero from "../assets/smart-ring-hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Smart Ring Product Reviewer | Pulse Circle" },
      { name: "description", content: "Apply to review an Oura Ring and earn a potential $750 reward after completing all program requirements." },
      { property: "og:title", content: "Smart Ring Product Reviewer | Pulse Circle" },
      { property: "og:description", content: "Share your experience with an Oura Ring through our independent reviewer program." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const steps = [
  { title: "Reserve your review spot", body: "Start with a quick eligibility check and confirm that the program is available in your area." },
  { title: "Tell us about your routine", body: "Share a few basics about your sleep, recovery goals, and preferred ring size." },
  { title: "Complete the partner activities", body: "Finish 4–5 clearly marked offers that support this independent research program." },
  { title: "Unlock your $750 reward", body: "After every requirement is confirmed, you’ll receive instructions for collecting your reward." },
];

const faqs = [
  ["Is this an official Oura program?", "No. Pulse Circle is an independent reviewer program and is not affiliated with, sponsored by, or endorsed by Oura Health Oy."],
  ["Do I automatically receive $750?", "The $750 is a potential reward. You must meet the eligibility rules and complete all required partner activities before verification."],
  ["Will any partner activities cost money?", "Some optional partner offers may include a purchase or subscription. Every requirement and price is shown before you choose to continue."],
  ["How long does verification take?", "Most completed submissions are reviewed within several business days. Timing can vary if information is missing."],
  ["What happens to my information?", "Your details are used to administer the program and verify participation. Review the program privacy terms before submitting information."],
];

function Index() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <header className="border-b border-border bg-background/95">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 md:px-8">
          <a href="#top" className="flex items-center gap-3" aria-label="Pulse Circle home">
            <span className="grid size-10 place-items-center rounded-full border border-border bg-secondary"><span className="size-4 rounded-full border-[3px] border-primary" /></span>
            <span><span className="block font-display text-lg font-semibold">PULSE CIRCLE</span><span className="block text-[10px] uppercase tracking-[0.22em] text-muted-foreground">Independent reviewer panel</span></span>
          </a>
          <a href="#faq" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">FAQ</a>
        </div>
      </header>

      <div className="border-b border-primary/30 bg-primary px-4 py-3 text-center text-sm font-semibold text-primary-foreground">
        <Sparkles className="mr-2 inline size-4" aria-hidden="true" /> Limited review intake — potential $750 reward
      </div>

      <section id="top" className="mx-auto grid min-h-[760px] max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-[1.05fr_.95fr] md:px-8 md:py-20">
        <div className="relative order-2 text-center md:order-1 md:text-left">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-primary">Oura Ring experience study</p>
          <h1 className="font-display text-5xl font-semibold leading-[1.02] md:text-7xl">Become a smart ring reviewer.</h1>
          <div className="my-7 inline-flex items-baseline gap-2 rounded-full bg-secondary px-6 py-3 ring-1 ring-border">
            <span className="text-sm text-muted-foreground">Potential reward</span><strong className="text-2xl text-accent">$750</strong>
          </div>
          <p className="mx-auto max-w-xl text-lg leading-8 text-muted-foreground md:mx-0">Share your real-world experience with sleep, readiness, and recovery tracking through our independent product feedback program.</p>
          <a href="#steps" className="mt-9 inline-flex min-h-14 items-center justify-center gap-3 rounded-md bg-primary px-8 text-sm font-bold uppercase tracking-[0.14em] text-primary-foreground shadow-lg shadow-primary/20 transition-transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background">Check eligibility <ArrowRight className="size-5" /></a>
          <p className="mt-4 text-xs text-muted-foreground">No payment is required to check eligibility.</p>
        </div>
        <div className="order-1 md:order-2">
          <div className="relative mx-auto aspect-square max-w-[540px] overflow-hidden rounded-[2rem] border border-border bg-card shadow-2xl">
            <img src={ringHero} alt="Silver smart ring with inner health sensors" width={1200} height={1200} className="h-full w-full object-cover" />
            <div className="absolute bottom-4 left-4 rounded-md border border-border bg-background/85 px-3 py-2 text-left backdrop-blur"><span className="block text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Focus</span><span className="text-sm font-semibold">Sleep · Readiness · Recovery</span></div>
          </div>
        </div>
      </section>

      <section aria-label="Program summary" className="border-y border-border bg-secondary/60">
        <div className="mx-auto grid max-w-6xl grid-cols-3 divide-x divide-border px-2 md:px-8">
          {[['$750','Potential reward'],['4–5','Partner activities'],['Limited','Enrollment window']].map(([value,label]) => <div key={label} className="px-2 py-7 text-center md:py-9"><strong className="block font-display text-xl text-accent md:text-3xl">{value}</strong><span className="mt-1 block text-[9px] uppercase tracking-[0.12em] text-muted-foreground md:text-xs">{label}</span></div>)}
        </div>
      </section>

      <section id="steps" className="mx-auto max-w-4xl px-5 py-24 md:px-8">
        <div className="mb-14"><p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-primary">How participation works</p><h2 className="font-display text-4xl font-semibold md:text-5xl">Four clear steps from start to reward.</h2></div>
        <div className="border-t border-border">
          {steps.map((step, index) => <article key={step.title} className="grid gap-4 border-b border-border py-9 sm:grid-cols-[72px_1fr] sm:gap-8"><span className="font-display text-xl text-primary">0{index + 1}</span><div><h3 className="mb-3 text-xl font-semibold">{step.title}</h3><p className="max-w-2xl leading-7 text-muted-foreground">{step.body}</p></div></article>)}
        </div>
        <div className="mt-10 flex items-start gap-3 rounded-md border border-border bg-card p-5 text-sm text-muted-foreground"><CircleCheck className="mt-0.5 size-5 shrink-0 text-accent" /><p>Requirements are presented before you commit. Read each offer carefully and keep your confirmation details.</p></div>
      </section>

      <section id="faq" className="border-y border-border bg-card/60 px-5 py-24 md:px-8">
        <div className="mx-auto max-w-4xl"><p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-primary">Need to know</p><h2 className="mb-12 font-display text-4xl font-semibold md:text-5xl">Frequently asked questions.</h2>
          <div className="divide-y divide-border border-y border-border">{faqs.map(([question,answer], index) => <details key={question} className="group" open={index === 0}><summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-lg font-semibold"><span>{question}</span><ChevronDown className="size-5 shrink-0 text-primary transition-transform group-open:rotate-180" /></summary><p className="max-w-3xl pb-7 pr-10 leading-7 text-muted-foreground">{answer}</p></details>)}</div>
        </div>
      </section>

      <footer className="px-5 py-10 md:px-8"><div className="mx-auto max-w-6xl text-xs leading-5 text-muted-foreground"><p className="mb-3 font-semibold text-foreground">Independent program disclosure</p><p>Pulse Circle is not affiliated with, sponsored by, or endorsed by Oura Health Oy. Oura and Oura Ring are trademarks of their respective owner. Reward eligibility depends on completing all stated requirements. This program does not provide medical advice.</p><p className="mt-5">© 2026 Pulse Circle</p></div></footer>
    </main>
  );
}
