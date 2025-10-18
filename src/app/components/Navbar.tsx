"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Navbar({
  goToSection,
}: {
  goToSection: (i: number) => void;
}) {
  const menuItems = [
    { label: "Home", index: 0 },
    { label: "Features", index: 1 },
    { label: "Workflow", index: 2 },
    { label: "About", index: 3 },
    { label: "Contact", index: 4 },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/70 backdrop-blur-md z-50 shadow-sm border-b">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-2">
        <div
          className="flex items-center cursor-pointer"
          onClick={() => goToSection(0)}
        >
          <Image
            src="/NextStep.png"
            alt="NextStep Logo"
            width={140}
            height={40}
            priority
            className="object-contain transition-all duration-300 hover:scale-105"
          />
        </div>

        <div className="hidden md:flex gap-6 text-gray-700 justify-center flex-1">
          {menuItems.map((item) => (
            <button
              key={item.index}
              onClick={() => goToSection(item.index)}
              className="hover:text-indigo-600 transition cursor-pointer"
            >
              {item.label}
            </button>
          ))}
        </div>

        <Button className="cursor-pointer" onClick={() => goToSection(4)}>
          Get Started
        </Button>
      </div>
    </nav>
  );
}
