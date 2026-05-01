"use client";

import { ScrollReveal } from "./scroll-reveal";
import { Check, ExternalLink } from "lucide-react";

const plans = [
  {
    name: "Starter",
    description: "Perfect for simple automations and single agents",
    features: [
      "Single AI agent setup",
      "Basic workflow automation",
      "Email support",
      "1 revision round",
      "Delivery in 5-7 days",
    ],
    cta: "View on Fiverr",
    href: "https://fiverr.com",
    popular: false,
  },
  {
    name: "Professional",
    description: "For businesses needing complex workflows and integrations",
    features: [
      "Multiple AI agents",
      "Complex multi-step workflows",
      "App integrations (5+ tools)",
      "Priority support",
      "3 revision rounds",
      "Delivery in 7-14 days",
    ],
    cta: "View on Fiverr",
    href: "https://fiverr.com",
    popular: true,
  },
  {
    name: "Enterprise",
    description: "Custom solutions, priority support, dedicated team",
    features: [
      "Custom AI solution",
      "Unlimited workflows",
      "Full system integration",
      "Dedicated support",
      "Unlimited revisions",
      "Ongoing maintenance",
    ],
    cta: "Contact Us",
    href: "#pricing",
    popular: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 lg:py-32 relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-olive tracking-wide uppercase">Pricing</span>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal tracking-tight">
              Choose Your Plan
            </h2>
            <p className="mt-4 text-lg text-charcoal/60 max-w-2xl mx-auto">
              Flexible packages designed for your needs. Click through to Fiverr for pricing details.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, index) => (
            <ScrollReveal key={plan.name} delay={index * 0.15}>
              <div
                className={`relative border p-8 transition-all duration-300 hover:shadow-lg ${
                  plan.popular
                    ? "border-olive bg-olive/[0.02]"
                    : "border-border hover:border-olive/30"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1 bg-olive text-white text-xs font-semibold uppercase tracking-wide">
                      Most Popular
                    </span>
                  </div>
                )}

                <h3 className="text-2xl font-bold text-charcoal">{plan.name}</h3>
                <p className="mt-2 text-charcoal/60">{plan.description}</p>

                <div className="my-6 h-px bg-border" />

                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check size={18} className="text-olive mt-0.5 flex-shrink-0" />
                      <span className="text-charcoal/70">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <a
                    href={plan.href}
                    target={plan.href.startsWith("http") ? "_blank" : undefined}
                    rel={plan.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className={`inline-flex items-center justify-center gap-2 w-full py-3 font-semibold transition-all duration-200 hover:scale-[1.02] ${
                      plan.popular
                        ? "bg-olive text-white hover:bg-olive-dark"
                        : "border-2 border-charcoal/20 text-charcoal hover:border-olive hover:text-olive"
                    }`}
                  >
                    {plan.cta}
                    {plan.href.startsWith("http") && <ExternalLink size={16} />}
                  </a>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <div className="absolute -bottom-10 -left-10 text-[16rem] font-bold text-charcoal/[0.03] leading-none pointer-events-none select-none">
        05
      </div>
    </section>
  );
}
