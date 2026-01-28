import {
  LayoutGrid,
  Users,
  BarChart3,
  Mail,
  Bell,
  QrCode,
  Timer,
  Settings,
  Smartphone,
} from "lucide-react";

const features = [
  {
    icon: LayoutGrid,
    title: "Visueller Tischplan",
    description:
      "Übersichtliche Tischanordnung mit Echtzeitdaten und PDF-Export-Funktion.",
  },
  {
    icon: Users,
    title: "Gästedatenbank",
    description:
      "Umfassende Gästeprofile mit früheren Reservierungen und individuellen Präferenzen.",
  },
  {
    icon: BarChart3,
    title: "Detaillierte Statistiken",
    description:
      "Echtzeitberichte, Umsatzanalysen und Geschäftskennzahlen an einem Ort.",
  },
  {
    icon: Mail,
    title: "Automatische E-Mails",
    description:
      "Buchungsbestätigung, Erinnerungen und Anfragen für Gästefeedback.",
  },
  {
    icon: Bell,
    title: "Sofortige Benachrichtigungen",
    description:
      "Echtzeit-Push-Nachrichten bei neuen Reservierungen, Änderungen und Stornierungen.",
  },
  {
    icon: QrCode,
    title: "QR-Code Check-in",
    description:
      "Personalisierter QR-Code für jeden Gast für einen einfachen Check-in.",
  },
  {
    icon: Timer,
    title: "Intelligente Zeitplanung",
    description:
      "Automatisch berechnete Reservierungsdauer basierend auf der Gästezahl.",
  },
  {
    icon: Settings,
    title: "Individuelle Einstellungen",
    description:
      "Anpassbare Öffnungszeiten, besondere Tage und eigene Buchungsregeln.",
  },
  {
    icon: Smartphone,
    title: "Auf allen Geräten verfügbar",
    description:
      "Vollständig responsive Oberfläche auf Smartphone, Tablet und Computer.",
  },
];

export function FeaturesSection() {
  return (
    <section id="funktionen" className="px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 max-w-2xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Systemfunktionen
          </p>
          <h2 className="font-serif text-3xl tracking-tight text-foreground sm:text-4xl">
            Komplette Restaurant-Reservierungslösung
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Von der Tischreservierung bis zur Geschäftsanalyse – alle Tools auf
            einer Plattform.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <div
              key={i}
              className="group rounded-lg border border-border bg-card p-6 transition-all hover:border-primary/20 hover:shadow-lg"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded bg-primary/5 transition-colors group-hover:bg-primary/10">
                <feature.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mb-2 font-serif text-lg text-foreground">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
