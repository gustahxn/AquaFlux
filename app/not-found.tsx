"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-background px-6">
      <div className="max-w-md w-full flex flex-col items-center text-center space-y-6">
        <h1 className="text-6xl font-semibold whitespace-nowrap">
          404 — Não encontrado
        </h1>

        <p className="text-sm text-muted-foreground">
          A página que você tentou acessar não existe.
        </p>

        <div className="flex gap-3">
          <Link
            href="/"
            className="rounded-md border-2 px-4 py-2 text-sm hover:border-neutral-400 transition"
          >
            Voltar para o site
          </Link>

          <Link
            href="/login"
            className="rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground hover:opacity-90 transition"
          >
            Ir para login
          </Link>
        </div>
      </div>
    </main>
  );
}
