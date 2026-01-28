import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Bell, QrCode, Check } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  const bookings = [
    {
      table: "2",
      tableNum: "1. Tisch",
      start: 13,
      duration: 2.5,
      name: "Schmidt M.",
      guests: 2,
      status: "confirmed",
    },
    {
      table: "2",
      tableNum: "1. Tisch",
      start: 18,
      duration: 2,
      name: "Weber K.",
      guests: 2,
      status: "confirmed",
    },
    {
      table: "2",
      tableNum: "2. Tisch",
      start: 12,
      duration: 2.5,
      name: "Müller Hans",
      guests: 2,
      status: "confirmed",
    },
    {
      table: "2",
      tableNum: "2. Tisch",
      start: 14.5,
      duration: 2,
      name: "Fischer Anna",
      guests: 2,
      status: "confirmed",
    },
    {
      table: "4",
      tableNum: "1. Tisch",
      start: 12,
      duration: 2.5,
      name: "Becker Sophia",
      guests: 4,
      status: "confirmed",
    },
    {
      table: "4",
      tableNum: "1. Tisch",
      start: 18,
      duration: 2.5,
      name: "Hoffmann Max",
      guests: 4,
      status: "confirmed",
    },
    {
      table: "4",
      tableNum: "2. Tisch",
      start: 13,
      duration: 2,
      name: "Wagner T.",
      guests: 3,
      status: "pending",
    },
    {
      table: "6",
      tableNum: "1. Tisch",
      start: 14.5,
      duration: 2.5,
      name: "Familie Schneider",
      guests: 6,
      status: "arrived",
    },
  ];

  const hours = [12, 13, 14, 15, 16, 17, 18, 19, 20];
  const currentHour = 15;

  const getBookingStyle = (start: number, duration: number) => {
    const startPercent = ((start - 12) / 8) * 100;
    const widthPercent = (duration / 8) * 100;
    return {
      left: `${startPercent}%`,
      width: `${widthPercent}%`,
    };
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmed":
        return "bg-primary/10 border-primary/20 text-primary";
      case "pending":
        return "bg-accent/10 border-accent/20 text-accent";
      case "arrived":
        return "bg-primary/20 border-primary/30 text-primary";
      default:
        return "bg-muted border-border text-muted-foreground";
    }
  };

  const tables = [
    { size: "2", num: "1. Tisch" },
    { size: "2", num: "2. Tisch" },
    { size: "4", num: "1. Tisch" },
    { size: "4", num: "2. Tisch" },
    { size: "6", num: "1. Tisch" },
  ];

  return (
    <section className="relative overflow-hidden px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center gap-12 lg:gap-16">
          {/* Hero Text - Centered */}
          <div className="max-w-3xl text-center">
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-muted-foreground">
              Reservierungssoftware für Restaurants
            </p>
            <h1 className="font-serif text-4xl leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              <span className="text-accent">Online Tischreservierung</span>
              <span className="text-balance">
                {" "}
                mit automatischen Erinnerungen
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Reduzieren Sie No-Shows um bis zu 70% durch automatische SMS- und
              E-Mail-Erinnerungen. Ihre Gäste buchen online – Sie behalten den
              Überblick. Kostenlos testen, keine Kreditkarte erforderlich.
            </p>
            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Link href="https://www.bukio.hu/auth/register">
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  30 Tage kostenlos testen
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>

            </div>
          </div>

          {/* Timeline Demo - Below */}
          <div className="relative w-full max-w-4xl">
            {/* Main Timeline Card */}
            <div className="overflow-hidden rounded-lg border border-border bg-card shadow-2xl">
              {/* Header */}
              <div className="border-b border-border bg-secondary/50 px-4 py-3">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1.5">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm font-medium text-foreground">
                      Zeitachse
                    </span>
                  </div>
                  <span className="text-sm text-muted-foreground">Heute</span>
                </div>
              </div>

              <div className="p-4">
                {/* Time Header */}
                <div className="mb-2 ml-24 flex">
                  {hours.map((hour) => (
                    <div
                      key={hour}
                      className="flex-1 text-center text-xs text-muted-foreground"
                    >
                      {hour}:00
                    </div>
                  ))}
                </div>

                {/* Section Label */}
                <div className="mb-3 flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-muted-foreground/30" />
                  <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                    Innenbereich
                  </span>
                </div>

                {/* Timeline Grid */}
                <div className="space-y-2">
                  {tables.map((table, tableIndex) => (
                    <div key={tableIndex} className="flex items-center gap-3">
                      {/* Table Info */}
                      <div className="flex w-20 items-center gap-2">
                        <div className="flex h-6 w-6 items-center justify-center rounded bg-primary text-xs font-bold text-primary-foreground">
                          {table.size}
                        </div>
                        <div>
                          <p className="text-xs font-medium text-foreground">
                            {table.num}
                          </p>
                          <div className="h-1 w-4 rounded-full bg-primary/60" />
                        </div>
                      </div>

                      {/* Timeline Row */}
                      <div className="relative h-10 flex-1 rounded bg-secondary/30">
                        {/* Current Time Indicator */}
                        <div
                          className="absolute top-0 h-full w-0.5 bg-accent z-10"
                          style={{ left: `${((currentHour - 12) / 8) * 100}%` }}
                        >
                          <div className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-accent" />
                        </div>

                        {/* Bookings */}
                        {bookings
                          .filter(
                            (b) =>
                              b.table === table.size &&
                              b.tableNum === table.num,
                          )
                          .map((booking, i) => (
                            <div
                              key={i}
                              className={`absolute top-1 bottom-1 flex items-center justify-center rounded border px-2 text-xs font-medium ${getStatusColor(booking.status)}`}
                              style={getBookingStyle(
                                booking.start,
                                booking.duration,
                              )}
                            >
                              <span className="truncate">
                                {booking.name} · {booking.guests} Pers.
                              </span>
                            </div>
                          ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Legend */}
                <div className="mt-4 flex items-center gap-4 text-xs">
                  <div className="flex items-center gap-1.5">
                    <div className="h-2.5 w-2.5 rounded-full bg-primary" />
                    <span className="text-muted-foreground">Bestätigt</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="h-2.5 w-2.5 rounded-full bg-accent" />
                    <span className="text-muted-foreground">Ausstehend</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="h-2.5 w-2.5 rounded-full bg-primary/60" />
                    <span className="text-muted-foreground">Angekommen</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Check-in Notification */}
            <div className="absolute -bottom-3 -right-3 rounded-lg border border-border bg-card p-3 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary">
                  <QrCode className="h-5 w-5 text-muted-foreground" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    Check-in
                  </p>
                  <p className="flex items-center gap-1 text-xs text-primary">
                    <Check className="h-3 w-3" />
                    Müller H. angekommen
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
