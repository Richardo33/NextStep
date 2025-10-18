"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import Reveal from "./Reveal";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return;

    setLoading(true);
    setSuccess(false);

    try {
      const formData = new FormData();
      formData.append("hr_email", email);
      formData.append("file", file);

      // Ganti URL berikut dengan webhook n8n kamu
      const webhookUrl =
        "https://your-n8n-url.ngrok-free.dev/webhook/nextstep/upload";

      const res = await fetch(webhookUrl, {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        setSuccess(true);
        setEmail("");
        setFile(null);
      } else {
        alert("⚠️ Gagal mengirim file. Coba lagi nanti.");
      }
    } catch (err) {
      console.error(err);
      alert("Terjadi kesalahan saat mengirim data.");
    } finally {
      setLoading(false);
    }
  };

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

          {/* 🔹 Dialog Form */}
          <Dialog>
            <DialogTrigger asChild>
              <Button
                size="lg"
                className="bg-indigo-600 text-white hover:bg-indigo-700 transition"
              >
                Upload CSV File
              </Button>
            </DialogTrigger>

            <DialogContent className="sm:max-w-md p-8 rounded-2xl">
              <DialogHeader>
                <DialogTitle className="text-xl font-semibold text-indigo-600">
                  Upload Candidate List
                </DialogTitle>
                <DialogDescription className="text-gray-600">
                  Enter your email and upload your candidate list in CSV format.
                  NextStep will handle the rest automatically.
                </DialogDescription>
              </DialogHeader>

              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-4 mt-4"
                encType="multipart/form-data"
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your HR email"
                  className="border rounded-md p-2 text-gray-800 focus:ring-2 focus:ring-indigo-500"
                />
                <input
                  type="file"
                  accept=".csv"
                  required
                  onChange={(e) => setFile(e.target.files?.[0] || null)}
                  className="border rounded-md p-2 text-gray-800 focus:ring-2 focus:ring-indigo-500"
                />

                <Button
                  type="submit"
                  disabled={loading}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white"
                >
                  {loading ? "Uploading..." : "Send File"}
                </Button>

                {success && (
                  <p className="text-green-600 font-medium text-sm mt-2">
                    ✅ File uploaded successfully! We will process your data
                    shortly.
                  </p>
                )}
              </form>
            </DialogContent>
          </Dialog>
        </Reveal>
      </div>
    </section>
  );
}
