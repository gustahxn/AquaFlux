"use client";

import { useRouter } from "next/navigation";

const plans = [
  {
    name: "Starter",
    price: "R$ 49/mês",
    description: "Para projetos iniciais e validação de ideias",
    features: [
      "Até 3 projetos",
      "Dashboard básico",
      "Métricas de usuários",
      "Relatórios semanais",
      "Suporte por email",
    ],
  },
  {
    name: "Pro",
    price: "R$ 129/mês",
    description: "Para times em crescimento orientados a dados",
    features: [
      "Projetos ilimitados",
      "Dashboard avançado",
      "Insights comportamentais",
      "Funis de conversão",
      "Exportação de relatórios",
      "Suporte prioritário",
    ],
  },
  {
    name: "Enterprise",
    price: "Sob consulta",
    description: "Para empresas em escala e operações complexas",
    features: [
      "Tudo do plano Pro",
      "Dashboards personalizados",
      "Integrações dedicadas",
      "SLAs e suporte dedicado",
      "Onboarding assistido",
    ],
  },
];

export default function PricingPage() {
  const router = useRouter(); // ✅ AQUI

  return (
    <main className="min-h-screen bg-background px-6 py-20">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-3">
          <h1 className="text-4xl font-semibold">
            Planos pensados para escalar
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm">
            Escolha o plano ideal de acordo com o estágio do seu produto.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="rounded-xl border-2 border-border p-6 flex flex-col justify-between bg-card"
            >
              <div className="space-y-5">
                <div className="space-y-1">
                  <h2 className="text-lg font-medium">{plan.name}</h2>
                  <p className="text-xs text-muted-foreground">
                    {plan.description}
                  </p>
                </div>

                <p className="text-2xl font-semibold">{plan.price}</p>

                <ul className="space-y-2 text-sm text-muted-foreground">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <span className="text-primary">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <button className="mt-6 rounded-md border-2 border-neutral-400 py-2 text-sm hover:bg-accent transition cursor-pointer">
                Selecionar plano
              </button>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={() => router.back()}
            className="text-xs text-muted-foreground hover:text-foreground transition cursor-pointer"
          >
            Voltar para o site
          </button>
        </div>
      </div>
    </main>
  );
}
