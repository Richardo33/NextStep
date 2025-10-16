"use client";
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
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3">
        <div className="font-bold text-xl text-indigo-600">NextStep</div>
        <div className="hidden md:flex gap-6 text-gray-700">
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
