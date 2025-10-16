"use client";

import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero({
  goToSection,
}: {
  goToSection: (i: number) => void;
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex flex-col justify-center items-center text-center bg-indigo-100"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 bg-[url('/background-pattern.svg')] bg-cover bg-center opacity-30"
      />

      <motion.div style={{ y }} className="relative z-10 max-w-3xl px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-800">
          Automate your candidate follow-up process with{" "}
          <span className="text-indigo-600">NextStep</span>
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8 text-lg">
          Streamline your HR workflow. Save time, reduce errors, and keep your
          candidates informed automatically — all from one smart platform.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button
            onClick={() => goToSection(1)}
            className="bg-indigo-600 hover:bg-indigo-700 cursor-pointer"
          >
            Explore Features
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
