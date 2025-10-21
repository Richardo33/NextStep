"use client";

import { useRef, useState } from "react";
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
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const resetForm = () => {
    setEmail("");
    setFile(null);
    setSuccess(false);
    setError(null);
    setLoading(false);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleOpenChange = (v: boolean) => {
    setOpen(v);
    if (!v) resetForm();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file || !email) {
      setError("Mohon isi email dan upload file CSV terlebih dahulu.");
      return;
    }

    setLoading(true);
    setSuccess(false);
    setError(null);

    try {
      const formData = new FormData();
      formData.append("hr_email", email);
      formData.append("file", file);

      const webhookUrl = "https://hooks.richardoo.cyou/webhook/nextstep/upload";

      const res = await fetch(webhookUrl, {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        setSuccess(true);
        setEmail("");
        setFile(null);
        if (fileInputRef.current) fileInputRef.current.value = "";
      } else {
        setError("Gagal mengirim file. Coba lagi nanti.");
      }
    } catch (err) {
      console.error(err);
      setError("Terjadi kesalahan saat mengirim data.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center items-center bg-indigo-100 text-gray-800"
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

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Dialog open={open} onOpenChange={handleOpenChange}>
              <DialogTrigger asChild>
                <Button
                  size="lg"
                  className="bg-indigo-600 text-white hover:bg-indigo-700 transition cursor-pointer w-full sm:w-auto"
                >
                  Try in Web
                </Button>
              </DialogTrigger>

              <DialogContent className="sm:max-w-md p-8 rounded-2xl">
                <DialogHeader>
                  <DialogTitle className="text-xl font-semibold text-indigo-600">
                    Upload Candidate List
                  </DialogTitle>
                  <DialogDescription className="text-gray-600">
                    Enter your email and upload your candidate list in CSV
                    format. NextStep will handle the rest automatically.
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
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (error || success) {
                        setError(null);
                        setSuccess(false);
                      }
                    }}
                    placeholder="Your HR email"
                    className="border rounded-md p-2 text-gray-800 focus:ring-2 focus:ring-indigo-500"
                  />
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept=".csv"
                    required
                    onChange={(e) => {
                      setFile(e.target.files?.[0] || null);
                      if (error || success) {
                        setError(null);
                        setSuccess(false);
                      }
                    }}
                    className="border rounded-md p-2 text-gray-800 focus:ring-2 focus:ring-indigo-500"
                  />

                  <Button
                    type="submit"
                    disabled={loading}
                    className="bg-indigo-600 hover:bg-indigo-700 text-white"
                  >
                    {loading ? "Processing..." : "Send File"}
                  </Button>

                  {success && (
                    <p className="text-green-600 font-medium text-sm mt-2">
                      File uploaded successfully! We will process your data
                      shortly.
                    </p>
                  )}

                  {error && (
                    <p className="text-red-600 font-medium text-sm mt-2">
                      {error}
                    </p>
                  )}
                </form>
              </DialogContent>
            </Dialog>

            <Button
              size="lg"
              variant="outline"
              className="border-indigo-600 text-indigo-600 hover:bg-indigo-50 transition cursor-pointer w-full sm:w-auto"
              asChild
            >
              <a
                href="https://t.me/NexxtStepBot"
                target="_blank"
                rel="noopener noreferrer"
              >
                Try in Telegram
              </a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
