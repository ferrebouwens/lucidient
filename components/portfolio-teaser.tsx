"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ScrollReveal } from "./scroll-reveal";
import { ArrowRight, ExternalLink } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "AI Sales Agent",
    tagline: "Automated lead qualification & outreach",
    image: "/images/portfolio-1.svg",
  },
  {
    title: "Workflow Engine",
    tagline: "Multi-app automation platform",
    image: "/images/portfolio-2.svg",
  },
  {
    title: "Brand Experience",
    tagline: "Interactive 3D product showcase",
    image: "/images/portfolio-3.svg",
  },
];

export function PortfolioTeaser() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  return (
    <section id="portfolio" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <ScrollReveal>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <span className="text-sm font-semibold text-olive tracking-wide uppercase">Portfolio</span>
              <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal tracking-tight">
                Selected Work
              </h2>
              <p className="mt-4 text-lg text-charcoal/60 max-w-xl">
                A glimpse of what we&apos;ve built for clients.
              </p>
            </div>
            <a
              href="/portfolio"
              className="inline-flex items-center gap-2 text-sm font-semibold text-olive hover:text-burnt transition-colors group"
            >
              View Full Portfolio
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </ScrollReveal>
      </div>

      <div ref={containerRef} className="relative">
        <motion.div
          style={{ x }}
          className="flex gap-6 px-4 sm:px-6 lg:px-8"
        >
          {projects.map((project, index) => (
            <ScrollReveal key={project.title} delay={index * 0.15}>
              <div className="group relative flex-shrink-0 w-[85vw] sm:w-[60vw] lg:w-[40vw] cursor-pointer">
                <div className="relative aspect-[4/3] bg-charcoal/5 overflow-hidden border border-border">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-charcoal/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <ExternalLink size={32} className="text-white" />
                  </div>
                </div>

                <div className="mt-4">
                  <h3 className="text-xl font-bold text-charcoal group-hover:text-olive transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-charcoal/60">{project.tagline}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </motion.div>
      </div>

      <div className="absolute -bottom-10 -left-10 text-[16rem] font-bold text-charcoal/[0.03] leading-none pointer-events-none select-none">
        03
      </div>
    </section>
  );
}
