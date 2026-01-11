import Link from "next/link";
import { Button } from "components/ui/button";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/70 backdrop-blur">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="font-bold text-lg text-sky-600 hover:text-sky-700"
        >
          AquaFlux
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm">
          <Link href="/dashboard" className="hover:text-sky-600">
            Dashboard
          </Link>
          <Link href="/insights" className="hover:text-sky-600">
            Insights
          </Link>
          <Link href="/pricing" className="hover:text-sky-600">
            Pricing
          </Link>
        </nav>

        <Button
          asChild
          className="bg-linear-to-r from-sky-500 to-emerald-400 hover:opacity-90"
        >
          <Link href="/dashboard">Entrar</Link>
        </Button>
      </div>
    </header>
  );
}
