"use client";

import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  return (
    <main className="flex min-h-screen">
      <section className="hidden md:flex w-1/2 items-center justify-center bg-primary relative overflow-hidden">

        <div className="relative z-10 text-center text-primary-foreground max-w-md space-y-6">
          <h1 className="text-4xl font-bold">AquaFlux!</h1>
          <p className="text-lg opacity-90">
            Inteligência de crescimento para produtos digitais.
          </p>
        </div>
      </section>

      <section className="flex w-full md:w-1/2 items-center justify-center bg-background">
        <div className="w-full max-w-sm space-y-8 p-8">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold">Acessar</h2>
            <p className="text-sm text-muted-foreground">
              Interface demonstrativa. Nenhum dado informado será armazenado.
            </p>
          </div>

          <div className="space-y-4">
            <input
              placeholder="Email"
              className="w-full rounded-md border px-3 py-2 outline-none focus:ring-1 focus:ring-primary"
            />
            <input
              placeholder="Senha"
              type="password"
              className="w-full rounded-md border px-3 py-2 outline-none focus:ring-1 focus:ring-primary"
            />

            <button
              onClick={() => router.push("/app")}
              className="w-full rounded-md bg-primary py-2.5 text-primary-foreground
                   transition-all hover:opacity-90 hover:-translate-y-px
                   cursor-pointer"
            >
              Entrar
            </button>
          </div>

          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Esqueceu sua senha?</span>
          </div>

          <div className="pt-4 border-t text-center">
            <button
              onClick={() => router.push("/")}
              className="text-sm text-muted-foreground hover:text-foreground transition cursor-pointer"
            >
              Voltar para o site
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
