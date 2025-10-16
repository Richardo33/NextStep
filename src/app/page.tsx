"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Workflow from "./components/Workflow";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";

export default function HomePage() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<"up" | "down">("down");

  const goToSection = (i: number) => {
    setDirection(i > index ? "down" : "up");
    setIndex(i);
  };

  const sections = [
    <Hero key="hero" goToSection={goToSection} />,
    <Features key="features" />,
    <Workflow key="workflow" />,
    <About key="about" />,
    <Contact key="contact" />,
  ];

  useEffect(() => {
    let isScrolling = false;
    const handleScroll = (e: WheelEvent) => {
      if (isScrolling) return;
      isScrolling = true;

      if (e.deltaY > 0 && index < sections.length - 1) {
        setDirection("down");
        setIndex((p) => p + 1);
      } else if (e.deltaY < 0 && index > 0) {
        setDirection("up");
        setIndex((p) => p - 1);
      }

      setTimeout(() => (isScrolling = false), 900);
    };
    window.addEventListener("wheel", handleScroll);
    return () => window.removeEventListener("wheel", handleScroll);
  }, [index, sections.length]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" && index < sections.length - 1) {
        setDirection("down");
        setIndex((p) => p + 1);
      } else if (e.key === "ArrowUp" && index > 0) {
        setDirection("up");
        setIndex((p) => p - 1);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [index, sections.length]);

  return (
    <>
      <Navbar goToSection={goToSection} />
      <div className="relative w-full h-screen overflow-hidden">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={index}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-full h-full"
          >
            {sections[index]}
          </motion.div>
        </AnimatePresence>
      </div>
      <Footer goToSection={goToSection} />
    </>
  );
}

const variants = {
  enter: (direction: "up" | "down") => ({
    y: direction === "down" ? 100 : -100,
    opacity: 0,
  }),
  center: {
    y: 0,
    opacity: 1,
  },
  exit: (direction: "up" | "down") => ({
    y: direction === "down" ? -100 : 100,
    opacity: 0,
  }),
};
