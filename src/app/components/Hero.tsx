"use client";

import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Lottie from "lottie-react";
import hrAnimation from "@/animations/hr-animation.json";

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
      className="relative min-h-screen flex flex-col md:flex-row justify-center items-center text-center bg-indigo-100 px-6"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 bg-[url('/background-pattern.svg')] bg-cover bg-center opacity-30"
      />

      <motion.div
        style={{ y }}
        className="relative z-10 max-w-xl text-gray-800 md:text-left text-center"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Automate your candidate follow-up process with{" "}
          <span className="text-indigo-600">NextStep</span>
        </h1>
        <p className="text-gray-600 mb-8 text-lg">
          Streamline your HR workflow. Save time, reduce errors, and keep your
          candidates informed automatically — all from one smart platform.
        </p>
        <Button
          onClick={() => goToSection(1)}
          className="bg-indigo-600 hover:bg-indigo-700 cursor-pointer"
        >
          Explore Features
        </Button>
      </motion.div>

      <motion.div
        style={{ y }}
        className="relative z-10 w-[320px] md:w-[450px] mt-10 md:mt-0"
      >
        <Lottie
          animationData={hrAnimation}
          loop
          autoplay
          className="w-full h-auto"
        />
      </motion.div>
    </section>
  );
}
