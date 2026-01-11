import { StatCard } from "components/ui/stat-card";

export default function InsightsPage() {
  return (
    <main className="p-6 space-y-8">
      <div>
        <h1 className="text-2xl font-semibold">Insights do Produto</h1>
        <p className="text-sm text-muted-foreground">
          Análises baseadas no comportamento dos usuários
        </p>
      </div>

      <section className="grid md:grid-cols-4 gap-6">
        <StatCard title="Conversão geral" value="4,8%" />
        <StatCard title="Retenção (7 dias)" value="62%" />
        <StatCard title="Tempo médio" value="3m 42s" />
        <StatCard title="Churn estimado" value="1,9%" />
      </section>

      <section className="grid md:grid-cols-2 gap-6">
        <div className="border rounded-xl p-6 space-y-3 bg-card">
          <h2 className="font-medium">Comportamento de navegação</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Usuários que acessam a página de planos apresentam uma taxa de
            conversão 2,1x maior do que usuários que não visualizam preços.
          </p>
          <p className="text-sm text-muted-foreground">
            Recomendação: destacar CTA para planos após a segunda sessão.
          </p>
        </div>

        <div className="border rounded-xl p-6 space-y-3 bg-card">
          <h2 className="font-medium">Engajamento inicial</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            78% dos usuários ativos interagem com o dashboard nas primeiras 24
            horas após o login.
          </p>
          <p className="text-sm text-muted-foreground">
            Recomendação: onboarding guiado aumenta retenção inicial.
          </p>
        </div>
      </section>

      <section className="border rounded-xl p-6 bg-card space-y-4">
        <h2 className="font-medium">Principais descobertas</h2>

        <ul className="space-y-3 text-sm text-muted-foreground">
          <li>• Usuários recorrentes acessam insights 3x por semana</li>
          <li>• Sessões mais longas ocorrem entre 9h e 11h</li>
          <li>• CTA no dashboard converte melhor que no footer</li>
        </ul>
      </section>
    </main>
  );
}
