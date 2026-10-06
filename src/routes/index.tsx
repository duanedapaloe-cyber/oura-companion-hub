import { createFileRoute } from "@tanstack/react-router";
import { ChevronDown, Heart, Sparkles, Moon } from "lucide-react";
import ringHero from "../assets/smart-ring-hero.jpg";

const CTA_URL = "https://linkthem.net/aff_c?offer_id=3541&aff_id=115643";

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
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-xl px-5 py-12 md:py-20">
        <section id="top" className="text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium text-muted-foreground">
            <Sparkles className="size-3.5 text-primary" />
            Limited review intake — women’s wellness edition
          </div>
          <img
            src={ringHero}
            alt="Silver smart ring with inner health sensors"
            width={1200}
            height={1200}
            className="mx-auto mb-8 aspect-square w-56 rounded-full border-4 border-accent object-cover shadow-lg md:w-64"
          />
          <h1 className="text-3xl font-semibold leading-tight md:text-4xl">
            Become a smart ring reviewer.
          </h1>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Share your real-world experience with sleep, cycle, and recovery tracking through our independent product feedback program — designed with women’s wellness in mind.
          </p>
          <p className="mt-6 text-muted-foreground">
            Potential reward <strong className="text-2xl font-semibold text-primary">$750</strong>
          </p>
          <a
            href={CTA_URL}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="mt-6 inline-block w-full rounded-full bg-primary px-6 py-4 text-base font-semibold text-primary-foreground shadow-md transition-colors hover:bg-primary/85 sm:w-auto sm:px-12"
          >
            Check eligibility
          </a>
          <p className="mt-3 text-xs text-muted-foreground">No payment is required to check eligibility.</p>

          <div className="mt-10 grid grid-cols-3 gap-3 text-center">
            <div className="rounded-2xl border border-border bg-card p-4">
              <Heart className="mx-auto mb-2 size-5 text-primary" />
              <p className="text-xs leading-snug text-muted-foreground">Cycle &amp; sleep insights</p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-4">
              <Moon className="mx-auto mb-2 size-5 text-primary" />
              <p className="text-xs leading-snug text-muted-foreground">Recovery tracking</p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-4">
              <Sparkles className="mx-auto mb-2 size-5 text-primary" />
              <p className="text-xs leading-snug text-muted-foreground">$750 potential reward</p>
            </div>
          </div>
        </section>

        <hr className="my-14 border-border" />

        <section id="steps">
          <h2 className="text-center text-xl font-semibold">How participation works</h2>
          <p className="mt-2 text-center text-muted-foreground">Four clear steps from start to reward.</p>
          <ol className="mt-8 space-y-8">
            {steps.map((step, index) => (
              <li key={step.title} className="border-l-2 border-primary/40 pl-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-primary">Step {index + 1}</p>
                <h3 className="mt-1 font-medium">{step.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
              </li>
            ))}
          </ol>
          <p className="mt-8 text-sm text-muted-foreground">
            Requirements are presented before you commit. Read each offer carefully and keep your confirmation details.
          </p>
          <a
            href={CTA_URL}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="mt-8 block w-full rounded-full bg-primary px-6 py-4 text-center text-base font-semibold text-primary-foreground shadow-md transition-colors hover:bg-primary/85"
          >
            Start my eligibility check
          </a>
        </section>

        <hr className="my-14 border-border" />

        <section id="faq">
          <h2 className="text-center text-xl font-semibold">Frequently asked questions</h2>
          <div className="mt-8 divide-y divide-border border-y border-border">
            {faqs.map(([question, answer]) => (
              <details key={question} className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-sm font-medium">
                  <span>{question}</span>
                  <ChevronDown className="size-4 shrink-0 text-muted-foreground transition-transform group-open:rotate-180" />
                </summary>
                <p className="pb-4 pr-8 text-sm leading-relaxed text-muted-foreground">{answer}</p>
              </details>
            ))}
          </div>
        </section>

        <footer className="mt-14 border-t border-border pt-8 text-center text-xs leading-relaxed text-muted-foreground">
          <p className="mb-3 font-medium text-foreground">Independent program disclosure</p>
          <p>
            Pulse Circle is not affiliated with, sponsored by, or endorsed by Oura Health Oy. Oura and Oura Ring are trademarks of their
            respective owner. Reward eligibility depends on completing all stated requirements. This program does not provide medical advice.
          </p>
          <p className="mt-4">© 2026 Pulse Circle</p>
        </footer>
      </div>
    </main>
  );
}
