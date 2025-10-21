import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Reveal from "./Reveal";
import { Bot, FileSpreadsheet, LineChart, ShieldCheck } from "lucide-react";

export default function Features() {
  const features = [
    {
      title: "Smart Candidate Recognition",
      desc: "Automatically matches candidate names and test results even if the data format varies across spreadsheets.",
      icon: <FileSpreadsheet className="w-6 h-6 text-indigo-600" />,
    },
    {
      title: "Integrated Messaging Bot",
      desc: "Instantly connects to Telegram or Email to send personalized updates to candidates without switching platforms or repeating tasks.",
      icon: <Bot className="w-6 h-6 text-indigo-600" />,
    },
    {
      title: "Secure Data Handling",
      desc: "Your candidate data is encrypted and processed safely. No manual sharing — everything runs through automation.",
      icon: <ShieldCheck className="w-6 h-6 text-indigo-600" />,
    },
    {
      title: "Analytics Dashboard",
      desc: "Visualize the hiring process: see how many candidates passed, failed, and responded — all in one place.",
      icon: <LineChart className="w-6 h-6 text-indigo-600" />,
    },
  ];

  return (
    <section
      id="features"
      className="min-h-screen flex flex-col justify-center items-center bg-white"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
            What makes <span className="text-indigo-600">NextStep</span> stand
            out?
          </h2>
          <Separator className="max-w-md mx-auto mb-12" />
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.2}>
              <Card className="hover:shadow-md transition h-full flex flex-col justify-between text-left ">
                <CardHeader className="flex flex-col gap-3">
                  <div>{f.icon}</div>
                  <CardTitle className="text-lg font-semibold">
                    {f.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{f.desc}</p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
