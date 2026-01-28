import { Clock, MapPin, Phone, Mail, AlertCircle } from "lucide-react";

const bookings = [
  {
    time: "13:00",
    duration: "1 Std.",
    name: "Schmidt Anna",
    status: "pending",
    phone: "+4915012345678",
    email: "schmidt.anna@email.de",
    guests: 2,
    area: "Terrasse",
  },
  {
    time: "13:30",
    duration: "1,5 Std.",
    name: "Müller Peter",
    status: "confirmed",
    phone: "+4915098765432",
    guests: 6,
    area: "Innenbereich",
    table: "Tisch 5",
  },
  {
    time: "14:30",
    duration: "3 Std.",
    name: "Weber Katharina",
    status: "confirmed",
    phone: "+4915076543210",
    email: "weber.katharina@email.de",
    guests: 3,
    area: "Innenbereich",
    table: "Tisch 4",
    note: "Allergie: Nüsse",
  },
  {
    time: "15:00",
    duration: "2,5 Std.",
    name: "Fischer Lars",
    status: "confirmed",
    phone: "+4917055512345",
    guests: 3,
    area: "Terrasse",
    table: "Tisch 2",
  },
  {
    time: "17:00",
    duration: "2 Std.",
    name: "Becker Eva",
    status: "confirmed",
    phone: "+4917045678901",
    email: "becker.eva@email.de",
    guests: 2,
    area: "Innenbereich",
    table: "Tisch 7",
  },
];

export function BookingDemoSection() {
  const confirmedCount = bookings.filter(
    (b) => b.status === "confirmed",
  ).length;
  const totalGuests = bookings.reduce((acc, b) => acc + b.guests, 0);

  return (
    <section className="border-y border-border bg-secondary/30 px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 max-w-2xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Reservierungsübersicht
          </p>
          <h2 className="font-serif text-3xl tracking-tight text-foreground sm:text-4xl">
            Alle Reservierungen auf einen Blick
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Echtzeit-Übersicht aller Tagesreservierungen mit Gästedaten und
            Status.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-4">
          <div className="lg:col-span-3">
            <div className="overflow-hidden rounded-lg border border-border bg-card">
              <div className="border-b border-border bg-secondary/50 px-6 py-4">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <h3 className="font-serif text-lg text-foreground">
                      Alle Reservierungen
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      31. Dezember, Mittwoch
                    </p>
                  </div>
                  <div className="flex gap-6">
                    <div className="text-center">
                      <p className="text-2xl font-medium text-foreground">
                        {bookings.length}
                      </p>
                      <p className="text-xs text-muted-foreground">Heute</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-medium text-foreground">
                        {totalGuests}
                      </p>
                      <p className="text-xs text-muted-foreground">Gäste</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-medium text-foreground">
                        {confirmedCount}
                      </p>
                      <p className="text-xs text-muted-foreground">Bestätigt</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="divide-y divide-border">
                {bookings.map((booking, i) => (
                  <div
                    key={i}
                    className="p-4 transition-colors hover:bg-secondary/30"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div className="flex gap-4">
                        <div className="text-center">
                          <p className="font-mono text-lg font-medium text-foreground">
                            {booking.time}
                          </p>
                          <div className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Clock className="h-3 w-3" />
                            {booking.duration}
                          </div>
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <p className="font-medium text-foreground">
                              {booking.name}
                            </p>
                            <span
                              className={`rounded px-2 py-0.5 text-xs ${
                                booking.status === "confirmed"
                                  ? "bg-primary/10 text-primary"
                                  : "bg-accent/10 text-accent"
                              }`}
                            >
                              {booking.status === "confirmed"
                                ? "Bestätigt"
                                : "Ausstehend"}
                            </span>
                          </div>
                          <div className="mt-1 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Phone className="h-3 w-3" />
                              {booking.phone}
                            </span>
                            {booking.email && (
                              <span className="flex items-center gap-1">
                                <Mail className="h-3 w-3" />
                                {booking.email}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-sm">
                        <span className="text-muted-foreground">
                          {booking.guests} Pers.
                        </span>
                        <span className="flex items-center gap-1 text-muted-foreground">
                          <MapPin className="h-3 w-3" />
                          {booking.area}
                        </span>
                        {booking.table && (
                          <span className="rounded bg-secondary px-2 py-1 text-xs text-foreground">
                            {booking.table}
                          </span>
                        )}
                        {booking.note && (
                          <span className="flex items-center gap-1 text-xs text-accent">
                            <AlertCircle className="h-3 w-3" />
                            {booking.note}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-card p-6">
              <p className="text-4xl font-medium text-foreground">
                {bookings.length}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">Heute</p>
            </div>
            <div className="rounded-lg border border-border bg-card p-6">
              <p className="text-4xl font-medium text-foreground">
                {totalGuests}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">Gäste</p>
            </div>
            <div className="rounded-lg border border-border bg-card p-6">
              <p className="text-4xl font-medium text-foreground">
                {confirmedCount}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">Bestätigt</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
