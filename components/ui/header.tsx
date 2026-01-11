"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export function Header() {
  const router = useRouter();
  const pathname = usePathname();

  const nav = [
    { label: "Home", href: "/" },
    { label: "Insights", href: "/insights" },
    { label: "Planos", href: "/pricing" },
  ];

  return (
    <header className="flex items-center justify-between rounded-xl border bg-card px-6 py-4">
      <div>
        <h2 className="font-semibold">AquaFlux</h2>
        <p className="text-xs text-muted-foreground">
          Plataforma de inteligência de crescimento
        </p>
      </div>

      <nav className="flex items-center gap-6">
        {nav.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`text-sm transition ${
              pathname === item.href
                ? "text-foreground font-medium"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {item.label}
          </Link>
        ))}

        <button
          onClick={() => router.push("/login")}
          className="text-sm text-muted-foreground hover:text-foreground transition"
        >
          Sair
        </button>
      </nav>
    </header>
  );
}
