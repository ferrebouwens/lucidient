"use client";

import { useRef, useState } from "react";
import { ScrollReveal } from "./scroll-reveal";
import { Bot, Workflow, Globe, Box, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Bot,
    title: "AI Agents",
    description: "Intelligent agents that handle tasks, answer questions, and integrate with your tools.",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description: "Complex multi-step workflows that connect your apps and eliminate manual work.",
  },
  {
    icon: Globe,
    title: "Web Design",
    description: "Beautiful, fast websites built with modern tech — from landing pages to full webapps.",
  },
  {
    icon: Box,
    title: "3D & Creative",
    description: "Interactive 3D experiences, visualizations, and creative tech solutions.",
  },
];

function TiltCard({ service, index }: { service: typeof services[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState("perspective(1000px) rotateX(0deg) rotateY(0deg)");

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;
    setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`);
  };

  const handleMouseLeave = () => {
    setTransform("perspective(1000px) rotateX(0deg) rotateY(0deg)");
  };

  const Icon = service.icon;

  return (
    <ScrollReveal delay={index * 0.1}>
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ transform }}
        className="group relative bg-white border border-border p-8 transition-all duration-200 hover:border-olive/30 hover:shadow-lg cursor-default"
      >
        <div className="w-12 h-12 bg-olive/10 flex items-center justify-center mb-6 group-hover:bg-olive/20 transition-colors">
          <Icon size={24} className="text-olive" />
        </div>

        <h3 className="text-xl font-bold text-charcoal mb-3">{service.title}</h3>
        <p className="text-charcoal/60 leading-relaxed mb-4">{service.description}</p>

        <a
          href="#pricing"
          className="inline-flex items-center gap-2 text-sm font-semibold text-olive hover:text-burnt transition-colors group/link"
        >
          Learn more
          <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
        </a>

        <div className="absolute top-0 right-0 w-0 h-0 border-t-[40px] border-t-olive/10 border-l-[40px] border-l-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
    </ScrollReveal>
  );
}

export function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-olive tracking-wide uppercase">Services</span>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal tracking-tight">
              What We Build
            </h2>
            <p className="mt-4 text-lg text-charcoal/60 max-w-2xl mx-auto">
              From intelligent agents to complex automations, we craft solutions that solve real problems.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <TiltCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>

      <div className="absolute -bottom-10 -right-10 text-[16rem] font-bold text-charcoal/[0.03] leading-none pointer-events-none select-none">
        02
      </div>
    </section>
  );
}
