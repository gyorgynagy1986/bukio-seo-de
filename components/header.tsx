"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

interface HeaderProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

const navItems = [
  { href: "#funktionen", label: "Funktionen" },
  { href: "#formulare", label: "Formulare" },
  { href: "#preise", label: "Preise" },
  { href: "#faq", label: "FAQ" },
  { href: "#kontakt", label: "Kontakt" },
];

export function Header({ mobileMenuOpen, setMobileMenuOpen }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
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

        <div className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-4 lg:flex">
          <Link href="https://www.bukio.hu/auth/signin">
            <Button variant="ghost" size="sm" className="text-muted-foreground">
              Anmelden
            </Button>
          </Link>
          <Link href='https://www.bukio.hu/auth/register'>
            <Button
              size="sm"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Kostenlos testen
            </Button>
          </Link>
        </div>

        <button
          type="button"
          className="lg:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6 text-foreground" />
          ) : (
            <Menu className="h-6 w-6 text-foreground" />
          )}
        </button>
      </nav>

      {mobileMenuOpen && (
        <div className="border-t border-border lg:hidden">
          <div className="space-y-1 px-6 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex flex-col gap-2 pt-4">
              <Button
                variant="ghost"
                size="sm"
                className="justify-start text-muted-foreground"
              >
                Anmelden
              </Button>
              <Button
                size="sm"
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Kostenlos testen
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
