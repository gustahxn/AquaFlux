import Link from "next/link";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-background flex flex-col">
      <header className="flex justify-between items-center px-8 py-6">
        <h1 className="font-bold text-xl">AquaFlux</h1>
        <nav className="flex gap-6 text-sm">
          <Link href="/pricing">Preços</Link>
          <Link href="/faq">FAQ</Link>
          <Link href="/login">Entrar</Link>
        </nav>
      </header>

      <section className="flex-1 flex flex-col items-center justify-center text-center px-6 space-y-6">
        <h2 className="text-4xl font-bold animate-fade-in">
          Cresça com clareza. Decida com dados.
        </h2>

        <p className="max-w-xl text-muted-foreground">
          Insights, métricas e inteligência de produto em um só lugar.
        </p>

        <div className="flex gap-4">
          <Link
            href="/login"
            className="rounded-md bg-primary px-6 py-3 text-primary-foreground
             transition-all duration-200
             hover:ring-2 hover:ring-primary/30"
          >
            Começar agora
          </Link>

          <Link
            href="/pricing"
            className="rounded-md border-2 px-6 py-3 hover:border-neutral-400"
          >
            Ver planos
          </Link>
        </div>
      </section>

      <footer className="border-t border-neutral-300 border-2 px-6 py-10 text-center text-sm text-muted-foreground">
        <p>© 2026 AquaFlux — Plataforma fictícia para fins educacionais</p>
      </footer>
    </main>
  );
}
