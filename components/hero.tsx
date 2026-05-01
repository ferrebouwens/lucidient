"use client";

import { motion } from "framer-motion";
import { GeometricBg } from "./geometric-bg";
import { TextScramble } from "./text-scramble";
import { ArrowRight, ChevronDown } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <GeometricBg />
      
      <motion.div
        className="absolute top-32 right-[15%] w-16 h-16 border-2 border-olive/20 rotate-45"
        animate={{ rotate: [45, 55, 45] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-40 left-[10%] w-12 h-12 border-2 border-burnt/15 rotate-12"
        animate={{ rotate: [12, 22, 12] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 right-[8%] w-8 h-8 bg-olive/10 rotate-45"
        animate={{ rotate: [45, 135, 45] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 bg-olive/10 text-olive text-sm font-medium tracking-wide uppercase">
            <span className="w-2 h-2 bg-olive rounded-full animate-pulse" />
            AI Agency
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-4xl sm:text-5xl lg:text-7xl font-bold text-charcoal tracking-tight leading-tight mb-6"
        >
          <TextScramble text="AI Workflows That" delay={600} />
          <br />
          <span className="bg-gradient-to-r from-olive to-burnt bg-clip-text text-transparent">
            <TextScramble text="Actually Work" delay={1200} />
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-lg sm:text-xl text-charcoal/60 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Custom agents and automation built for your business — no fluff, just results.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#services"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-olive text-white font-semibold hover:bg-olive-dark transition-all duration-200 hover:scale-[1.02]"
          >
            View Our Services
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#portfolio"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-charcoal/20 text-charcoal font-semibold hover:border-olive hover:text-olive transition-all duration-200"
          >
            See Our Work
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown size={24} className="text-charcoal/30" />
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute -bottom-20 -left-10 text-[20rem] font-bold text-charcoal/[0.03] leading-none pointer-events-none select-none">
        01
      </div>
    </section>
  );
}
