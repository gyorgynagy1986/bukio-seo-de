"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Wie schnell kann das System eingeführt werden?",
    answer:
      "Die Einführung dauert in der Regel 1-2 Tage. Nach der Registrierung ist die Oberfläche sofort verfügbar, die Grundeinstellungen können in wenigen Minuten vorgenommen werden. Unser Team hilft Ihnen bei Bedarf während des gesamten Prozesses.",
  },
  {
    question: "Was passiert nach Ablauf der Testphase?",
    answer:
      "Nach der 30-tägigen kostenlosen Testphase erstellen wir auf Basis Ihrer Nutzungsdaten ein individuelles Angebot, oder Sie können eines unserer bestehenden Pakete wählen.",
  },
  {
    question: "Kann die Buchungsoberfläche angepasst werden?",
    answer:
      "Ja, wir haben mehr als 20 Farbpaletten zur Auswahl. Auf Wunsch können wir auch ein Buchungsformular erstellen, das zum Corporate Design Ihres Restaurants passt.",
  },
  {
    question: "Muss ich für automatische E-Mails extra bezahlen?",
    answer: "Nein, diese sind im Paketpreis enthalten.",
  },
  {
    question: "Können Browser-Benachrichtigungen eingestellt werden?",
    answer:
      "Ja, dies kann mit einem Klick im Admin-Bereich aktiviert werden und kann jederzeit wieder deaktiviert werden.",
  },
  {
    question: "Gibt es eine Vertragsbindung oder langfristige Verträge?",
    answer:
      "Es gibt keine Mindestlaufzeit. Wir arbeiten mit monatlichen Abonnements, die jederzeit gekündigt werden können. Flexibilität ist uns wichtig.",
  },
  {
    question: "Wie funktioniert die Preisgestaltung genau?",
    answer:
      "Die Preisgestaltung basiert auf der tatsächlichen Nutzung: Wir berücksichtigen die Anzahl der Reservierungen, die aktiven Funktionen und die Anzahl der Restaurants. So zahlen Sie nur für das, was Sie tatsächlich nutzen.",
  },
  {
    question: "Welchen Kundensupport bietet ihr an?",
    answer:
      "Wir sind 7 Tage die Woche per Telefon und E-Mail erreichbar. Die meisten Anfragen beantworten wir innerhalb von 24 Stunden.",
  },
  {
    question: "Kann ich meine bestehenden Daten importieren?",
    answer:
      "Selbstverständlich. Wir helfen Ihnen bei der Übertragung bestehender Gästedaten und Reservierungshistorien. Wir unterstützen Excel, CSV und andere Formate.",
  },
  {
    question: "Ist das System DSGVO-konform?",
    answer:
      "Ja, unser System ist vollständig DSGVO-konform. Die Daten werden verschlüsselt gespeichert, und alle erforderlichen Datenschutzfunktionen sind verfügbar.",
  },
  {
    question: "Kann die Oberfläche auch mobil genutzt werden?",
    answer:
      "Ja, das System ist vollständig responsiv. Es lässt sich auf dem Smartphone und Tablet genauso komfortabel bedienen wie auf dem Desktop-Computer.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-3xl">
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Fragen und Antworten
          </p>
          <h2 className="font-serif text-3xl tracking-tight text-foreground sm:text-4xl">
            Häufig gestellte Fragen
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Wir haben die am häufigsten gestellten Fragen und Antworten
            zusammengestellt.
          </p>
        </div>

        <div className="divide-y divide-border rounded-lg border border-border">
          {faqs.map((faq, i) => (
            <div key={i}>
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex w-full items-center justify-between px-6 py-5 text-left transition-colors hover:bg-secondary/30"
              >
                <span className="pr-4 font-medium text-foreground">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === i && (
                <div className="px-6 pb-5">
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-lg border border-border bg-card p-8 text-center">
          <p className="text-muted-foreground">
            Haben Sie Ihre Antwort nicht gefunden?
          </p>
          <Button className="mt-4 bg-primary text-primary-foreground hover:bg-primary/90">
            Fragen Sie uns
          </Button>
        </div>
      </div>
    </section>
  );
}
