"use client";

import { ScrollReveal } from "./scroll-reveal";
import { ArrowRight } from "lucide-react";

export function FooterCta() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal tracking-tight">
            Ready to Automate Your Workflow?
          </h2>
          <p className="mt-4 text-lg text-charcoal/60 max-w-2xl mx-auto">
            Let&apos;s build something that saves you time and grows your business.
          </p>
          <div className="mt-10">
            <a
              href="#pricing"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-olive text-white font-semibold hover:bg-olive-dark transition-all duration-200 hover:scale-[1.02]"
            >
              Get Started
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
