import { Bell, Clock, Headphones } from "lucide-react";

const stats = [
  {
    icon: Bell,
    title: "Automatische Benachrichtigungen",
    description: "SMS und E-Mail inklusive",
  },
  {
    icon: Clock,
    title: "Schnelle Einrichtung",
    description: "Ohne technische Vorkenntnisse",
  },
  {
    icon: Headphones,
    title: "Deutschsprachiger Support",
    description: "Schnelle und kompetente Hilfe",
  },
];

export function StatsSection() {
  return (
    <section className="border-y border-border bg-secondary/30 px-6 py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 sm:grid-cols-3">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/5">
                <stat.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-serif text-lg text-foreground">
                {stat.title}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
