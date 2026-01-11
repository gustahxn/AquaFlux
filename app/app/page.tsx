import { Sidebar } from "components/ui/sidebar";
import { Header } from "components/ui/header";
import { StatCard } from "components/ui/stat-card";
import { MetricsChart } from "components/ui/metrics-chart";

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-muted/40">
      <Sidebar />

      <main className="flex-1 p-6 space-y-6">
        <Header />

        <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <StatCard title="Usuários ativos" value="1.248" />
          <StatCard title="Receita mensal" value="R$ 32.400" />
          <StatCard title="Taxa de conversão" value="4,8%" />
          <StatCard title="Sessões semanais" value="9.321" />
        </section>

        <section className="rounded-xl border bg-card p-6 space-y-4">
          <h3 className="font-semibold">
            Crescimento de usuários (últimos 7 dias)
          </h3>

          <MetricsChart />
        </section>
      </main>
    </div>
  );
}
