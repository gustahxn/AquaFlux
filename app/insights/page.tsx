"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export default function InsightsPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-muted/40 p-6">
      <main className="mx-auto max-w-7xl space-y-6">
        <div className="space-y-2">
          <button
            onClick={() => router.back()}
            className="flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar
          </button>
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-foreground">
              Insights do Produto
            </h1>
            <p className="text-sm text-muted-foreground">
              Análises baseadas no comportamento recente dos usuários.
            </p>
          </div>
        </div>

        <section className="grid gap-4 md:grid-cols-4">
          <div className="rounded-xl border bg-card text-card-foreground p-6 shadow-sm">
            <h3 className="text-sm font-medium text-muted-foreground">
              Conversão geral
            </h3>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-2xl font-bold">4,8%</span>
              <span className="text-xs text-emerald-600 font-medium">
                +0.4%
              </span>
            </div>
          </div>

          <div className="rounded-xl border bg-card text-card-foreground p-6 shadow-sm">
            <h3 className="text-sm font-medium text-muted-foreground">
              Retenção (7 dias)
            </h3>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-2xl font-bold">62%</span>
              <span className="text-xs text-muted-foreground">Estável</span>
            </div>
          </div>

          <div className="rounded-xl border bg-card text-card-foreground p-6 shadow-sm">
            <h3 className="text-sm font-medium text-muted-foreground">
              Tempo médio
            </h3>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-2xl font-bold">3m 42s</span>
              <span className="text-xs text-emerald-600 font-medium">+12s</span>
            </div>
          </div>

          <div className="rounded-xl border bg-card text-card-foreground p-6 shadow-sm">
            <h3 className="text-sm font-medium text-muted-foreground">
              Churn estimado
            </h3>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-2xl font-bold">1,9%</span>
              <span className="text-xs text-muted-foreground">Na meta</span>
            </div>
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border bg-card text-card-foreground p-6 shadow-sm space-y-4">
            <div>
              <h2 className="font-semibold text-lg">
                Comportamento de navegação
              </h2>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Usuários que acessam a página de planos apresentam uma taxa de
                conversão{" "}
                <span className="font-medium text-foreground">2,1x maior</span>{" "}
                do que usuários que não visualizam preços.
              </p>
            </div>
            <div className="rounded-lg bg-muted/50 p-4">
              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-1">
                Recomendação
              </p>
              <p className="text-sm font-medium">
                Destacar CTA para planos após a segunda sessão.
              </p>
            </div>
          </div>

          <div className="rounded-xl border bg-card text-card-foreground p-6 shadow-sm space-y-4">
            <div>
              <h2 className="font-semibold text-lg">Engajamento inicial</h2>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                <span className="font-medium text-foreground">78%</span> dos
                usuários ativos interagem com o dashboard nas primeiras 24 horas
                após o login.
              </p>
            </div>
            <div className="rounded-lg bg-muted/50 p-4">
              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-1">
                Recomendação
              </p>
              <p className="text-sm font-medium">
                Onboarding guiado aumenta retenção inicial.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-xl border bg-card text-card-foreground p-6 shadow-sm">
          <h2 className="font-semibold mb-4">Principais descobertas</h2>
          <ul className="space-y-3">
            <li className="flex items-start text-sm text-muted-foreground">
              <span className="mr-2 text-foreground">•</span>
              <span>
                Usuários recorrentes acessam insights{" "}
                <strong className="font-medium text-foreground">
                  3x por semana
                </strong>
                .
              </span>
            </li>
            <li className="flex items-start text-sm text-muted-foreground">
              <span className="mr-2 text-foreground">•</span>
              <span>
                Sessões mais longas ocorrem entre{" "}
                <strong className="font-medium text-foreground">
                  9h e 11h
                </strong>
                .
              </span>
            </li>
            <li className="flex items-start text-sm text-muted-foreground">
              <span className="mr-2 text-foreground">•</span>
              <span>CTA no dashboard converte melhor que no footer.</span>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}
