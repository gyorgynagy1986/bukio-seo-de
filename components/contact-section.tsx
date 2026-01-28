"use client";

import { useActionState } from "react";
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  Phone,
  Mail,
  Clock,
  ArrowRight,
  Loader2,
  CheckCircle,
} from "lucide-react";
import {
  submitContactForm,
  type ContactFormState,
} from "../lib/actions/contact-action";

const initialState: ContactFormState = {
  success: false,
  message: "",
};

export function ContactSection() {
  const [state, formAction, isPending] = useActionState(
    submitContactForm,
    initialState,
  );
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.success && formRef.current) {
      formRef.current.reset();
    }
  }, [state.success]);

  return (
    <section
      id="kontakt"
      className="border-t border-border bg-secondary/30 px-6 py-24 lg:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-muted-foreground">
              Kontakt
            </p>
            <h2 className="font-serif text-3xl tracking-tight text-foreground sm:text-4xl">
              Nehmen Sie Kontakt mit uns auf
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Haben Sie Fragen? Wir helfen Ihnen, die ideale Lösung für Ihr
              Restaurant zu finden.
            </p>

            <div className="mt-10 space-y-6">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/5">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Telefon</p>
                  <p className="font-medium text-foreground">
                    + 36 30 6564162
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/5">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">E-Mail</p>
                  <p className="font-medium text-foreground">hello@bukio.hu</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/5">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Antwortzeit</p>
                  <p className="font-medium text-foreground">
                    In der Regel innerhalb von 24 Stunden
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-border bg-card p-6 lg:p-8">
            <h3 className="mb-6 font-serif text-xl text-foreground">
              Nachricht senden
            </h3>

            {state.success ? (
              <div className="flex flex-col items-center justify-center py-8 text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <CheckCircle className="h-8 w-8 text-primary" />
                </div>
                <p className="text-lg font-medium text-foreground">
                  {state.message}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Wir werden uns in Kürze bei Ihnen melden.
                </p>
              </div>
            ) : (
              <form ref={formRef} action={formAction} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-medium text-foreground"
                    >
                      Name <span className="text-accent">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Ihr Name"
                      required
                      className={`w-full rounded border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 ${
                        state.errors?.name
                          ? "border-destructive focus:border-destructive focus:ring-destructive"
                          : "border-border focus:border-primary focus:ring-primary"
                      }`}
                    />
                    {state.errors?.name && (
                      <p className="mt-1 text-xs text-destructive">
                        {state.errors.name[0]}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="restaurant"
                      className="mb-2 block text-sm font-medium text-foreground"
                    >
                      Restaurantname
                    </label>
                    <input
                      type="text"
                      id="restaurant"
                      name="restaurant"
                      placeholder="Name des Restaurants"
                      className="w-full rounded border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium text-foreground"
                    >
                      E-Mail-Adresse <span className="text-accent">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="email@beispiel.de"
                      required
                      className={`w-full rounded border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 ${
                        state.errors?.email
                          ? "border-destructive focus:border-destructive focus:ring-destructive"
                          : "border-border focus:border-primary focus:ring-primary"
                      }`}
                    />
                    {state.errors?.email && (
                      <p className="mt-1 text-xs text-destructive">
                        {state.errors.email[0]}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm font-medium text-foreground"
                    >
                      Telefonnummer
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="+49 170 123 4567"
                      className="w-full rounded border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-foreground"
                  >
                    Nachricht
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Beschreiben Sie Ihre Fragen oder Anforderungen..."
                    className="w-full resize-none rounded border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="privacy"
                    name="privacy"
                    required
                    className={`mt-1 h-4 w-4 rounded text-primary focus:ring-primary ${
                      state.errors?.privacy
                        ? "border-destructive"
                        : "border-border"
                    }`}
                  />
                  <label
                    htmlFor="privacy"
                    className="text-sm text-muted-foreground"
                  >
                    Ich akzeptiere die{" "}
                    <a
                      href="/datenschutz"
                      className="text-primary hover:underline"
                    >
                      Datenschutzerklärung
                    </a>
                    . <span className="text-accent">*</span>
                  </label>
                </div>
                {state.errors?.privacy && (
                  <p className="text-xs text-destructive">
                    {state.errors.privacy[0]}
                  </p>
                )}

                {state.message && !state.success && (
                  <div className="rounded-lg bg-destructive/10 p-3 text-sm text-destructive">
                    {state.message}
                  </div>
                )}

                <Button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                  disabled={isPending}
                >
                  {isPending ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Wird gesendet...
                    </>
                  ) : (
                    <>
                      Nachricht senden
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
