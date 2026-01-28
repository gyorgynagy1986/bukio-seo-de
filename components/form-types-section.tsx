import { Button } from "@/components/ui/button";
import { Check, Sparkles } from "lucide-react";

const formTypes = [
  {
    title: "Klassisches Formular",
    description:
      "Einfache, einseitige Buchungsoberfläche mit allen notwendigen Feldern.",
    features: [
      "Alle Daten auf einer Seite",
      "Blitzschnelles Ausfüllen",
      "Übersichtliche Struktur",
      "Responsives Design",
    ],
    popular: false,
  },
  {
    title: "Schritt-für-Schritt-Prozess",
    description:
      "Mehrstufige Buchung, die den Gast durch den gesamten Prozess führt.",
    features: [
      "Logische Schritte",
      "Abschnittsweise Dateneingabe",
      "Fortschrittsanzeige",
      "Höhere Abschlussrate",
    ],
    popular: true,
  },
  {
    title: "Chatbot-basierte Buchung",
    description: "Konversationelle Oberfläche mit KI-Unterstützung.",
    features: [
      "Natürlicher Dialog",
      "KI-gestützte Fragen",
      "Einzigartiges Nutzererlebnis",
      "Intelligente Empfehlungen",
    ],
    popular: false,
  },
];

const extras = [
  {
    title: "Jederzeit wechselbar",
    description: "Zwischen den Formulartypen kannst du jederzeit wechseln.",
  },
  {
    title: "20+ vordefinierte Farben",
    description: "Wähle aus getesteten, professionellen Farbpaletten.",
  },
  {
    title: "Vollständige Markenanpassung",
    description: "Eigenes Logo und Markenfarben verwenden.",
  },
];

export function FormTypesSection() {
  return (
    <section id="formulare" className="px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 max-w-2xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Buchungsoberflächen
          </p>
          <h2 className="font-serif text-3xl tracking-tight text-foreground sm:text-4xl">
            Verschiedene Buchungsformulare
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Wähle aus drei verschiedenen Buchungsstilen – alle vollständig
            anpassbar.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {formTypes.map((form, i) => (
            <div
              key={i}
              className={`relative rounded-lg border bg-card p-6 ${
                form.popular ? "border-primary shadow-lg" : "border-border"
              }`}
            >
              {form.popular && (
                <div className="absolute -top-3 left-6 flex items-center gap-1 rounded bg-primary px-3 py-1 text-xs text-primary-foreground">
                  <Sparkles className="h-3 w-3" />
                  Beliebt
                </div>
              )}
              <h3 className="mb-2 font-serif text-xl text-foreground">
                {form.title}
              </h3>
              <p className="mb-6 text-sm text-muted-foreground">
                {form.description}
              </p>
              <ul className="mb-6 space-y-3">
                {form.features.map((feature, j) => (
                  <li
                    key={j}
                    className="flex items-center gap-2 text-sm text-foreground"
                  >
                    <Check className="h-4 w-4 text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 border-border bg-transparent text-foreground hover:bg-secondary"
                >
                  Ansehen
                </Button>
                <Button
                  size="sm"
                  className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  Ausprobieren
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-lg border border-border bg-card p-8">
          <p className="mb-6 text-sm font-medium uppercase tracking-widest text-muted-foreground">
            In deinem Konto · In allen Paketen enthalten
          </p>
          <div className="grid gap-6 sm:grid-cols-3">
            {extras.map((extra, i) => (
              <div key={i}>
                <h4 className="mb-1 font-medium text-foreground">
                  {extra.title}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {extra.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
