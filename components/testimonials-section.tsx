import { Star, Users, Award, Headphones } from "lucide-react";

export function TestimonialsSection() {
  return (
    <section className="px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Kundenbewertungen
          </p>
          <h2 className="font-serif text-3xl tracking-tight text-foreground sm:text-4xl">
            Erfahrungen unserer Partner
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Hunderte Restaurants vertrauen bereits unserem Reservierungssystem
            deutschlandweit.
          </p>
        </div>

        <div className="mx-auto max-w-3xl">
          <blockquote className="rounded-lg border border-border bg-card p-8 lg:p-12">
            <div className="mb-6 flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-accent text-accent" />
              ))}
            </div>
            <p className="font-serif text-xl leading-relaxed text-foreground lg:text-2xl">
              &ldquo;Seit wir Bukio nutzen, sind unsere Reservierungen um 40%
              gestiegen. Die Automatisierung nimmt uns enorm viel Arbeit ab, und
              unsere Gäste schätzen die einfache
              Online-Buchungsmöglichkeit.&rdquo;
            </p>
            <footer className="mt-8 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <span className="font-serif text-lg">MS</span>
              </div>
              <div>
                <p className="font-medium text-foreground">Markus Schmidt</p>
                <p className="text-sm text-muted-foreground">
                  Restaurantinhaber, München
                </p>
              </div>
            </footer>
          </blockquote>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          <div className="flex items-center justify-center gap-3 rounded-lg border border-border bg-card p-6">
            <Users className="h-6 w-6 text-primary" />
            <div>
              <p className="text-2xl font-medium text-foreground">500+</p>
              <p className="text-sm text-muted-foreground">
                aktive Restaurants
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-3 rounded-lg border border-border bg-card p-6">
            <Award className="h-6 w-6 text-primary" />
            <div>
              <p className="text-2xl font-medium text-foreground">4.9/5</p>
              <p className="text-sm text-muted-foreground">Bewertung</p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-3 rounded-lg border border-border bg-card p-6">
            <Headphones className="h-6 w-6 text-primary" />
            <div>
              <p className="text-2xl font-medium text-foreground">100%</p>
              <p className="text-sm text-muted-foreground">
                deutschsprachiger Support
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
