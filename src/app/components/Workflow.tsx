"use client";

import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Reveal from "./Reveal";
import Lottie from "lottie-react";

import botAnimation from "@/animations/bot-automation.json"; // pastikan file ada di /src/animations

export default function Workflow() {
  const steps = [
    {
      title: "1. Import Candidate Data",
      desc: "Upload or connect your spreadsheet containing candidate names, emails, and test results.",
    },
    {
      title: "2. AI Analyzes the Results",
      desc: "NextStep automatically classifies the outcome — pass or fail — based on your data.",
    },
    {
      title: "3. Automated Message Delivery",
      desc: "Personalized follow-up messages are sent automatically via Email or Telegram.",
    },
  ];

  return (
    <section
      id="workflow"
      className="min-h-screen flex flex-col justify-center items-center bg-indigo-100 py-20 pb-32"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
            How <span className="text-indigo-600">NextStep</span> Works
          </h2>
          <Separator className="max-w-md mx-auto mb-12" />
        </Reveal>

        {/* Animation (centered) */}
        <div className="flex justify-center mb-12">
          <Lottie
            animationData={botAnimation}
            loop
            autoplay
            className="w-[260px] md:w-[340px]"
          />
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-6 text-left items-stretch justify-center">
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.2}>
              <Card className="hover:shadow-md transition h-full flex flex-col justify-between bg-white">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold">
                    {s.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-gray-600">{s.desc}</p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
