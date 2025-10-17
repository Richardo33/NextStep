import { Separator } from "@/components/ui/separator";
import Reveal from "./Reveal";
import { Users, Zap, Smile } from "lucide-react";

export default function About() {
  const stats = [
    {
      icon: <Users className="w-6 h-6 text-indigo-600" />,
      label: "HR Teams Using NextStep",
      value: "50+",
    },
    {
      icon: <Zap className="w-6 h-6 text-indigo-600" />,
      label: "Automation Speed",
      value: "3x Faster",
    },
    {
      icon: <Smile className="w-6 h-6 text-indigo-600" />,
      label: "Candidate Satisfaction",
      value: "95%",
    },
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center items-center bg-white"
    >
      <div className="max-w-5xl mx-auto px-6 text-center">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
            The Story Behind <span className="text-indigo-600">NextStep</span>
          </h2>
          <Separator className="max-w-md mx-auto mb-8" />
        </Reveal>

        <Reveal delay={0.2}>
          <p className="text-gray-700 max-w-3xl mx-auto text-lg leading-relaxed mb-12">
            NextStep was created to simplify one of HR’s most time-consuming
            tasks — following up with candidates. Built by developers who
            understand hiring challenges, NextStep combines automation, clarity,
            and empathy to make communication effortless.
          </p>
        </Reveal>

        <Reveal delay={0.4}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition"
              >
                <div className="flex justify-center mb-2">{stat.icon}</div>
                <h3 className="text-2xl font-bold text-indigo-600">
                  {stat.value}
                </h3>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
