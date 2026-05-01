"use client";

import { ScrollReveal } from "./scroll-reveal";
import Image from "next/image";

const team = [
  {
    name: "Alex Chen",
    role: "Founder & AI Engineer",
    bio: "Building intelligent systems that solve real business problems.",
    avatar: "/images/team-1.jpg",
  },
  {
    name: "Maya Rodriguez",
    role: "Workflow Architect",
    bio: "Designing automation that actually works in production.",
    avatar: "/images/team-2.jpg",
  },
  {
    name: "Jordan Park",
    role: "Creative Developer",
    bio: "Crafting experiences that blend design and technology.",
    avatar: "/images/team-3.jpg",
  },
];

export function Team() {
  return (
    <section id="about" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-olive tracking-wide uppercase">About</span>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal tracking-tight">
              Meet The Team
            </h2>
            <p className="mt-4 text-lg text-charcoal/60 max-w-2xl mx-auto">
              Real people building real solutions. We&apos;re a small team with big capabilities.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {team.map((member, index) => (
            <ScrollReveal key={member.name} delay={index * 0.15}>
              <div className="group text-center">
                <div className="relative w-32 h-32 mx-auto mb-6 overflow-hidden border-2 border-border group-hover:border-olive/30 transition-colors">
                  <Image
                    src={member.avatar}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-olive/20 to-burnt/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <h3 className="text-xl font-bold text-charcoal">{member.name}</h3>
                <p className="mt-1 text-sm font-semibold text-olive uppercase tracking-wide">
                  {member.role}
                </p>
                <p className="mt-3 text-charcoal/60 leading-relaxed">{member.bio}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <div className="absolute -bottom-10 -right-10 text-[16rem] font-bold text-charcoal/[0.03] leading-none pointer-events-none select-none">
        04
      </div>
    </section>
  );
}
