import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center items-center bg-indigo-50 text-gray-800"
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to simplify your hiring process?
          </h2>
          <Separator className="max-w-md mx-auto mb-10 bg-gray-300" />
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mb-8 text-lg text-gray-600 max-w-2xl mx-auto">
            Start automating your HR follow-ups today. Let{" "}
            <span className="font-semibold text-indigo-600">NextStep</span>{" "}
            handle communication — while you focus on hiring the best talent.
          </p>

          <Button
            asChild
            size="lg"
            className="bg-indigo-600 text-white hover:bg-indigo-700 transition"
          >
            <a
              href="https://t.me/AlvinRich33"
              target="_blank"
              rel="noopener noreferrer"
            >
              Launch on Telegram
            </a>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
