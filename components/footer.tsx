import Link from "next/link";

const navigation = {
  features: [
    { name: "Funktionen", href: "#funktionen" },
    { name: "Preise", href: "#preise" },
    { name: "Buchungsformulare", href: "#formulare" },
  ],
  support: [
    { name: "Kontakt", href: "#kontakt" },
    { name: "FAQ", href: "#faq" },
    { name: "hello@bukio.hu", href: "mailto:hello@bukio.hu" },
  ],
  legal: [
    { name: "Datenschutzerklärung", href: "/datenschutz" },
    { name: "Impressum", href: "/impressum" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border bg-background px-6 py-12 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded bg-primary">
                <span className="font-serif text-lg font-medium text-primary-foreground">
                  B
                </span>
              </div>
              <span className="font-serif text-xl tracking-tight text-foreground">
                Bukio
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Professionelle Reservierungssoftware für Restaurants.
              Automatisieren Sie Ihre Reservierungsverwaltung und steigern Sie
              Ihren Umsatz.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-medium uppercase tracking-widest text-muted-foreground">
              Funktionen
            </h3>
            <ul className="space-y-3">
              {navigation.features.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-foreground transition-colors hover:text-muted-foreground"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-medium uppercase tracking-widest text-muted-foreground">
              Support
            </h3>
            <ul className="space-y-3">
              {navigation.support.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-foreground transition-colors hover:text-muted-foreground"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-medium uppercase tracking-widest text-muted-foreground">
              Rechtliches
            </h3>
            <ul className="space-y-3">
              {navigation.legal.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-foreground transition-colors hover:text-muted-foreground"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8">
          <p className="text-center text-sm text-muted-foreground">
            © 2026{" "}
            <a target="_blank" href="https://www.bukio.hu/">
              {" "}
              Bukio.
            </a>{" "}
            Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
}
