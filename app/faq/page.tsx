"use client";

import { useState } from "react";
import Link from "next/link";

const faqs = [
  {
    question: "O AquaFlux coleta dados reais?",
    answer:
      "Não. O AquaFlux é um projeto demonstrativo com foco em design, UX e arquitetura. Nenhum dado real é coletado ou armazenado.",
  },
  {
    question: "Posso usar este projeto como bas?",
    answer:
      "Sim. A estrutura segue padrões modernos e pode ser expandida com autenticação real, banco de dados e APIs.",
  },
  {
    question: "Os gráficos representam dados reais?",
    answer:
      "Os gráficos são ilustrativos e simulam métricas comuns de produtos digitais, como usuários ativos e crescimento.",
  },
  {
    question: "Existe integração com outras ferramentas?",
    answer:
      "Nesta versão não. O layout, porém, já prevê integrações futuras como analytics, CRM e plataformas de pagamento.",
  },
  {
    question: "Posso personalizar temas e cores?",
    answer:
      "Sim. O projeto usa tokens de design e Tailwind, facilitando customização de cores, fontes e modo escuro.",
  },
];

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  function toggle(index: number) {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  }

  return (
    <main className="min-h-screen bg-background px-6 py-20">
      <div className="max-w-3xl mx-auto space-y-10">
        <div className="text-center space-y-3">
          <h1 className="text-4xl font-semibold">Perguntas frequentes</h1>
          <p className="text-sm text-muted-foreground">
            Tudo o que você precisa saber sobre o AquaFlux
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openItems.includes(index);

            return (
              <div
                key={faq.question}
                className="rounded-xl border border-border p-5"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between text-left cursor-pointer"
                >
                  <span className="font-medium">{faq.question}</span>
                  <span className="text-muted-foreground">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        <div className="flex justify-center gap-6">
          <Link
            href="/"
            className="text-sm text-muted-foreground hover:text-foreground transition"
          >
            Voltar para o site
          </Link>
          <Link
            href="/pricing"
            className="text-sm text-muted-foreground hover:text-foreground transition"
          >
            Ver planos
          </Link>
        </div>
      </div>
    </main>
  );
}
