import { Sidebar } from "components/ui/sidebar";
import { Header } from "components/ui/header";
import { StatCard } from "components/ui/stat-card";

export function Dashboard() {
  return (
    <div className="flex min-h-125">
      <Sidebar />
      <div className="flex-1 p-6 space-y-6">
        <Header />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <StatCard title="Usuários" value="1.248" />
          <StatCard title="Receita" value="R$ 32.400" />
          <StatCard title="Conversão" value="4.8%" />
          <StatCard title="Sessões" value="9.321" />
        </div>
      </div>
    </div>
  );
}
