import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";

const plans = [
  {
    name: "Starter",
    price: "19",
    description:
      "Ideal für kleine Restaurants mit geringem Reservierungsaufkommen.",
    features: [
      "Bis zu 100 Reservierungen/Monat",
      "1 Restaurant",
      "2 Bereich (z.B. Innen, Terrasse, VIP)",
      "E-Mail-Bestätigungen",
      "Detailliertes E-Mail-Log",
      "Statistiken & Berichte",
      "E-Mail-Support",
    ],
  },
  {
    name: "Professional",
    price: "39",
    description: "Für wachsende Betriebe mit erweiterten Anforderungen.",
    features: [
      "Bis zu 500 Reservierungen/Monat",
      "Bis zu 3 Restaurants",
      "Bis zu 5 Bereiche (z.B. Innen, Terrasse, VIP)",
      "E-Mail-Bestätigungen",
      "Detailliertes E-Mail-Log",
      "Statistiken & Berichte",
      "Prioritäts-Support",
      "QR-Code Check-in",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: null,
    priceLabel: "Auf Anfrage",
    description: "Komplettlösung für etablierte Gastronomiebetriebe.",
    features: [
      "Unbegrenzte Reservierungen",
      "Unbegrenzte Restaurants",
      "Unbegrenzte Bereiche (Innen, Terrasse, VIP, etc.)",
      "Alle Starter & Pro Funktionen",
      "Dedizierter Account-Manager",
      "API-Zugang",
      "Individuelle Anpassungen",
      "SLA-Garantie",
    ],
  },
];

const addons = [
  {
    name: "SMS-Erinnerungen",
    price: "0,09",
    unit: "pro SMS",
    description:
      "Automatische SMS-Benachrichtigungen für Bestätigungen und Erinnerungen.",
  },
  {
    name: "Newsletter-Anmeldung",
    price: "5",
    unit: "/Monat",
    description:
      "Sammeln Sie E-Mail-Adressen Ihrer Gäste für Marketing-Zwecke.",
  },
];

export function PricingSection() {
  return (
    <section
      id="preise"
      className="border-y border-border bg-secondary/30 px-6 py-24 lg:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Preise
          </p>
          <h2 className="font-serif text-3xl tracking-tight text-foreground sm:text-4xl">
            Transparente Preisgestaltung
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Wählen Sie das passende Paket für Ihr Restaurant. Alle Pläne
            beinhalten eine 30-tägige kostenlose Testphase.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative rounded-lg border bg-card p-6 ${
                plan.popular ? "border-primary shadow-lg" : "border-border"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 right-6 rounded bg-primary px-3 py-1 text-xs text-primary-foreground">
                  Beliebt
                </div>
              )}
              <h3 className="mb-2 font-serif text-xl text-foreground">
                {plan.name}
              </h3>
              <div className="mb-4 flex items-baseline gap-1">
                {plan.price ? (
                  <>
                    <span className="font-serif text-4xl text-foreground">
                      {plan.price}€
                    </span>
                    <span className="text-sm text-muted-foreground">
                      /Monat
                    </span>
                  </>
                ) : (
                  <span className="font-serif text-2xl text-foreground">
                    {plan.priceLabel}
                  </span>
                )}
              </div>
              <p className="mb-6 text-sm text-muted-foreground">
                {plan.description}
              </p>
              <ul className="mb-6 space-y-3">
                {plan.features.map((feature, j) => (
                  <li
                    key={j}
                    className="flex items-center gap-2 text-sm text-foreground"
                  >
                    <Check className="h-4 w-4 text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link href="https://www.bukio.hu/auth/register">
                <Button
                  className={`w-full ${
                    plan.popular
                      ? "bg-primary text-primary-foreground hover:bg-primary/90"
                      : "border-border bg-transparent text-foreground hover:bg-secondary"
                  }`}
                  variant={plan.popular ? "default" : "outline"}
                >
                  {plan.price ? "Kostenlos testen" : "Kontakt aufnehmen"}
                </Button>
              </Link>
            </div>
          ))}
        </div>

        {/* Addons */}
        <div className="mt-12">
          <p className="mb-6 text-center text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Optionale Erweiterungen
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:max-w-2xl lg:mx-auto">
            {addons.map((addon, i) => (
              <div
                key={i}
                className="flex items-center justify-between rounded-lg border border-border bg-card p-4"
              >
                <div>
                  <p className="font-medium text-foreground">{addon.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {addon.description}
                  </p>
                </div>
                <div className="text-right shrink-0 ml-4">
                  <span className="font-serif text-lg text-foreground">
                    {addon.price}€
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {addon.unit}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 rounded-lg border border-border bg-card p-8 text-center lg:p-12">
          <h3 className="font-serif text-2xl text-foreground">
            Starten Sie Ihre kostenlose Testphase
          </h3>
          <p className="mt-2 text-muted-foreground">
            Ohne Verpflichtungen, keine Kreditkarte erforderlich.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="https://www.bukio.hu/auth/register">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Test starten
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Button
              variant="outline"
              size="lg"
              className="border-border bg-transparent text-foreground hover:bg-secondary"
            >
              Fragen stellen
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
