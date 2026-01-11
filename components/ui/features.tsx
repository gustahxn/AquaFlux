import { Card, CardContent } from "components/ui/card";

const items = [
  {
    title: "Insights em tempo real",
    desc: "Veja métricas fluindo conforme seus usuários interagem.",
  },
  {
    title: "Design fluido",
    desc: "Interface clara inspirada em água e movimento.",
  },
  { title: "Automação inteligente", desc: "Menos esforço, mais resultado." },
  { title: "Escalável", desc: "Feito para crescer junto com seu produto." },
];

export function Features() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <Card
            key={item.title}
            className="hover:-translate-y-1 hover:shadow-lg transition"
          >
            <CardContent className="p-6 space-y-2">
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
