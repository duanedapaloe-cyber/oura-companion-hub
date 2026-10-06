import { createFileRoute } from "@tanstack/react-router";
import { ChevronDown } from "lucide-react";
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
    <main className="min-h-screen bg-white text-neutral-900">
      <div className="mx-auto max-w-2xl px-5 py-16 md:py-24">
        <section id="top" className="text-center">
          <img
            src={ringHero}
            alt="Silver smart ring with inner health sensors"
            width={1200}
            height={1200}
            className="mx-auto mb-10 aspect-square w-64 rounded-full border border-neutral-200 object-cover md:w-72"
          />
          <h1 className="text-3xl font-semibold leading-tight md:text-4xl">Become a smart ring reviewer.</h1>
          <p className="mt-4 leading-relaxed text-neutral-600">
            Share your real-world experience with sleep, readiness, and recovery tracking through our independent product feedback program.
          </p>
          <p className="mt-6 text-neutral-600">
            Potential reward <strong className="text-neutral-900">$750</strong>
          </p>
          <a
            href="#steps"
            className="mt-6 inline-block rounded-md bg-neutral-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-neutral-700"
          >
            Check eligibility
          </a>
          <p className="mt-3 text-xs text-neutral-500">No payment is required to check eligibility.</p>
        </section>

        <hr className="my-16 border-neutral-200" />

        <section id="steps">
          <h2 className="text-xl font-semibold">How participation works</h2>
          <p className="mt-2 text-neutral-600">Four clear steps from start to reward.</p>
          <ol className="mt-8 space-y-8">
            {steps.map((step, index) => (
              <li key={step.title} className="border-l-2 border-neutral-200 pl-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500">Step {index + 1}</p>
                <h3 className="mt-1 font-medium">{step.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-neutral-600">{step.body}</p>
              </li>
            ))}
          </ol>
          <p className="mt-8 text-sm text-neutral-600">
            Requirements are presented before you commit. Read each offer carefully and keep your confirmation details.
          </p>
        </section>

        <hr className="my-16 border-neutral-200" />

        <section id="faq">
          <h2 className="text-xl font-semibold">Frequently asked questions</h2>
          <div className="mt-8 divide-y divide-neutral-200 border-y border-neutral-200">
            {faqs.map(([question, answer]) => (
              <details key={question} className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-sm font-medium">
                  <span>{question}</span>
                  <ChevronDown className="size-4 shrink-0 text-neutral-500 transition-transform group-open:rotate-180" />
                </summary>
                <p className="pb-4 pr-8 text-sm leading-relaxed text-neutral-600">{answer}</p>
              </details>
            ))}
          </div>
        </section>

        <footer className="mt-16 border-t border-neutral-200 pt-8 text-xs leading-relaxed text-neutral-500">
          <p className="mb-3 font-medium text-neutral-700">Independent program disclosure</p>
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
