import { Button } from "components/ui/button";

export function Hero() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-28 text-center">
      <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
        Fluxo claro.
        <br />
        Decisões inteligentes.
      </h1>

      <p className="mt-6 text-muted-foreground max-w-xl mx-auto">
        O AquaFlux conecta seus dados em tempo real para você enxergar o que
        realmente importa.
      </p>

      <div className="mt-10 flex justify-center gap-4">
        <Button
          size="lg"
          className="bg-gradient-to-r from-sky-500 to-emerald-400 hover:opacity-90"
        >
          Começar agora
        </Button>

        <Button size="lg" variant="outline">
          Ver demo
        </Button>
      </div>
    </section>
  );
}
