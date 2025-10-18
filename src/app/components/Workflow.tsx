"use client";

import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Reveal from "./Reveal";
import Lottie from "lottie-react";
import { FileSpreadsheet, Info } from "lucide-react";

import botAnimation from "@/animations/bot-automation.json";

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
      className="min-h-screen flex flex-col justify-center items-center bg-indigo-100 py-20"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
            How <span className="text-indigo-600">NextStep</span> Works
          </h2>
          <Separator className="max-w-md mx-auto mb-12" />
        </Reveal>

        <div className="flex justify-center mb-6">
          <Lottie
            animationData={botAnimation}
            loop
            autoplay
            className="w-[180px] md:w-[220px]"
          />
        </div>

        <div className="grid md:grid-cols-3 gap-6 text-left items-stretch justify-center mb-16">
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

        <Reveal delay={0.3}>
          <Card className="bg-white shadow-md max-w-3xl mx-auto text-left">
            <CardHeader className="flex items-center gap-3 border-b border-gray-200">
              <Info className="text-indigo-600 w-6 h-6" />
              <CardTitle>CSV Template Guide</CardTitle>
            </CardHeader>
            <CardContent className="pt-4 pb-6 text-gray-700 space-y-3">
              <p>
                To ensure your data is processed correctly, make sure your CSV
                file includes the following columns:
              </p>

              <ul className="list-disc ml-6 space-y-1">
                <li>
                  <code>name</code> — Candidate’s full name
                </li>
                <li>
                  <code>email</code> — Candidate’s email address
                </li>
                <li>
                  <code>result</code> — Test outcome (<b>Pass</b> / <b>Fail</b>)
                </li>
                <li>
                  <code>next_stage</code> — Next step or interview stage
                  (optional)
                </li>
                <li>
                  <code>notes</code> — Additional remarks (optional)
                </li>
              </ul>

              <div className="mt-6 text-center">
                <Button
                  asChild
                  className="bg-indigo-600 hover:bg-indigo-700 text-white"
                >
                  <a
                    href="/templates/nextstep-candidate-template.csv"
                    download
                    className="flex items-center gap-2"
                  >
                    <FileSpreadsheet className="w-4 h-4" />
                    Download CSV Template
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </Reveal>
      </div>
    </section>
  );
}
