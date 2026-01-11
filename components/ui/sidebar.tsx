import { Button } from "components/ui/button";

export function Sidebar() {
  return (
    <aside className="w-64 border-r bg-background p-6 hidden md:block">
      <div className="text-xl font-bold mb-6">AquaFlux -{">"}</div>
      <nav className="space-y-2">
        <Button variant="ghost" className="w-full justify-start">
          Overview
        </Button>
        <Button variant="ghost" className="w-full justify-start">
          Leads
        </Button>
        <Button variant="ghost" className="w-full justify-start">
          Relatórios
        </Button>
        <Button variant="ghost" className="w-full justify-start">
          Configurações
        </Button>
      </nav>
    </aside>
  );
}
