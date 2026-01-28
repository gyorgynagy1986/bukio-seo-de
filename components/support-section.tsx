import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Calendar, Activity, Shield } from "lucide-react"
import supportPhoto from '../public/support.webp'

const supportFeatures = [
  {
    icon: Calendar,
    title: "7 Tage die Woche erreichbar",
    description: "Bei technischen Fragen und Einstellungen stehen wir jeden Tag zur Verfügung.",
  },
  {
    icon: Activity,
    title: "Rund-um-die-Uhr Systemüberwachung",
    description: "Unsere automatischen Überwachungssysteme beobachten den Service kontinuierlich.",
  },
  {
    icon: Shield,
    title: "Geschützter Datenschutz",
    description: "Verschlüsselte Kommunikation und regelmäßige automatische Backups.",
  },
]

export function SupportSection() {
  return (
    <section className="border-y border-border bg-secondary/30 px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-muted-foreground">
              Premium-Support
            </p>
            <h2 className="font-serif text-3xl tracking-tight text-foreground sm:text-4xl">
              Zuverlässige Infrastruktur für Ihren Betrieb
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Die Gastronomie steht niemals still – deshalb garantiert unser System stabilen und kontinuierlich überwachten Betrieb.
            </p>
            <div className="mt-8 space-y-6">
              {supportFeatures.map((feature, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded bg-primary/5">
                    <feature.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">{feature.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                Kontakt aufnehmen
              </Button>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="relative aspect-square w-full max-w-md overflow-hidden rounded-lg">
              <Image
                src={supportPhoto}
                alt="Kundenservice-Team"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}