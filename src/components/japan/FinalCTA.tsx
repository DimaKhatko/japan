import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { sendToTelegram } from "@/lib/sendToTelegram";

const formSchema = z.object({
  name: z.string().trim().min(2, { message: "Будь ласка, вкажіть імʼя" }),
  phone: z.string().trim().min(5, { message: "Вкажіть номер телефону" }),
  email: z
    .string()
    .trim()
    .min(1, { message: "Вкажіть e-mail" })
    .email({ message: "Перевірте, будь ласка, адресу e-mail" }),
  promo: z.string().trim().optional(),
  children: z.string().trim().min(1, { message: "Це поле обовʼязкове" }),
  // Honeypot — must stay empty for real visitors.
  website: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

type Status = "idle" | "submitting" | "success" | "error";

export function FinalCTA() {
  const [status, setStatus] = useState<Status>("idle");

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      promo: "",
      children: "",
      website: "",
    },
  });

  const isSubmitting = status === "submitting";

  async function onSubmit(values: FormValues) {
    // Honeypot: a bot filled the hidden field — pretend everything is fine
    // and silently skip the actual submission.
    if (values.website) {
      form.reset();
      setStatus("success");
      return;
    }

    setStatus("submitting");

    const result = await sendToTelegram({
      name: values.name,
      phone: values.phone,
      email: values.email,
      promo: values.promo,
      children: values.children,
    });

    if (result.ok) {
      form.reset();
      setStatus("success");
    } else {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="relative overflow-hidden bg-grad-sakura py-20 lg:py-28">
      {/* Soft brand accents */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-violet-300/30 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-emerald-200/40 blur-3xl"
      />

      <div className="relative mx-auto max-w-xl px-5 lg:px-8">
        <div className="text-center">
          <div className="text-xs font-semibold uppercase tracking-widest text-violet-600">
            連絡 · Заявка
          </div>
          <h2 className="mt-4 text-balance font-display text-4xl font-black text-violet-700 sm:text-5xl">
            Хочете поїхати з нами до Японії?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-base text-foreground/70">
            Залиште заявку — і ми звʼяжемося з вами, розкажемо деталі й допоможемо з усім: від
            квитків до візи.
          </p>
        </div>

        {/* Light form card */}
        <div className="mt-10 rounded-3xl border border-violet-100 bg-white/90 p-6 shadow-card backdrop-blur-sm sm:p-8">
          {status === "success" ? (
            <div className="py-6 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-3xl">
                🌸
              </div>
              <h3 className="mt-4 font-display text-2xl font-bold text-foreground">
                Дякуємо, заявку отримано!
              </h3>
              <p className="mx-auto mt-2 max-w-sm text-foreground/70">
                Ми звʼяжемося з Вами найближчим часом. Якщо зручніше — можете написати нам напряму,
                посилання нижче.
              </p>
              <Button
                type="button"
                variant="outline"
                className="mt-6 border-violet-200 text-violet-700 hover:bg-violet-50 hover:text-violet-800"
                onClick={() => setStatus("idle")}
              >
                Надіслати ще одну заявку
              </Button>
            </div>
          ) : (
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Імʼя</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Ваше імʼя"
                          autoComplete="name"
                          className="h-11 rounded-xl bg-white focus-visible:ring-violet-400"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Телефон</FormLabel>
                      <FormControl>
                        <Input
                          type="tel"
                          inputMode="tel"
                          placeholder="+38 0__ ___ __ __"
                          autoComplete="tel"
                          className="h-11 rounded-xl bg-white focus-visible:ring-violet-400"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>E-mail</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          inputMode="email"
                          placeholder="you@example.com"
                          autoComplete="email"
                          className="h-11 rounded-xl bg-white focus-visible:ring-violet-400"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="promo"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Промокод{" "}
                        <span className="font-normal text-foreground/40">(за наявності)</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Якщо у Вас є промокод"
                          className="h-11 rounded-xl bg-white focus-visible:ring-violet-400"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="children"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Інформація про учасника</FormLabel>
                      <FormControl>
                        <Textarea
                          rows={3}
                          placeholder="Хто планує поїздку? Напр.: Софія, 14 років, або родина з 3 осіб"
                          className="rounded-xl bg-white focus-visible:ring-violet-400"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Honeypot — hidden from real users, catches bots. */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute left-[-9999px] h-0 w-0 overflow-hidden opacity-0"
                >
                  <label htmlFor="website">Website</label>
                  <input
                    id="website"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    {...form.register("website")}
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="h-12 w-full rounded-xl bg-violet-600 text-base font-semibold text-white shadow-sm transition hover:bg-violet-700"
                >
                  {isSubmitting ? "Надсилаємо…" : "Залишити заявку"}
                </Button>

                {status === "error" && (
                  <p className="rounded-xl bg-amber-50 px-4 py-3 text-center text-sm text-amber-800">
                    Не вдалося надіслати заявку. Спробуйте ще раз або напишіть нам напряму —
                    посилання нижче.
                  </p>
                )}
              </form>
            </Form>
          )}

          {/* Fallback contacts — always available as a backup */}
          <div className="mt-6 flex flex-col items-center gap-3 border-t border-violet-100 pt-6 sm:flex-row sm:justify-center">
            <span className="text-sm text-foreground/50">Звʼязатись з нами напряму</span>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href="tel:+380662217373"
                className="inline-flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full border border-violet-200 px-4 py-2 text-sm font-medium text-violet-700 transition hover:bg-violet-50"
              >
                <span>📞</span>
                <span className="whitespace-nowrap">+38 066 221 73 73</span>
              </a>
              <a
                href="https://t.me/point_camp"
                target="_blank"
                rel="noreferrer"
                className="inline-flex shrink-0 items-center gap-2 rounded-full border border-violet-200 px-4 py-2 text-sm font-medium text-violet-700 transition hover:bg-violet-50"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden>
                  <path d="M9.7 15.3l-.4 4c.6 0 .8-.3 1.1-.6l2.7-2.5 5.5 4c1 .6 1.7.3 2-1l3.6-16.9c.3-1.5-.6-2.1-1.6-1.7L1 8.5C-.4 9.1-.4 10 .7 10.4l5.6 1.7L19 4.4c.6-.3 1.2-.1.7.3" />
                </svg>
                Telegram
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-foreground/45">
          Point Camp · 2026 — подорож, яку згадуватимуть усе життя.
        </div>
      </div>
    </section>
  );
}
