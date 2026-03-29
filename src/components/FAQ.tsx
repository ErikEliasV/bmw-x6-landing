"use client";

import { useState } from "react";
import ScrollReveal from "./ScrollReveal";

const faqItems = [
  {
    question: "Qual e a potencia do BMW X6?",
    answer:
      "O BMW X6 M60i xDrive gera ate 390 kW (530 cv) e tem um binario maximo de 750 Nm. O motor V8 TwinPower Turbo proporciona uma aceleracao poderosa, ao passo que o sistema de tracao integral xDrive garante excelente estabilidade.",
  },
  {
    question: "Qual e o volume da bagageira do BMW X6?",
    answer:
      "O generoso volume da bagageira de 580 a 1.530 litros no BMW X6 M60i xDrive oferece muito espaco para todas as suas aventuras.",
  },
  {
    question: "Quais sao as dimensoes do BMW X6?",
    answer:
      "O BMW X6 M60i xDrive tem 4.960 mm de comprimento, 2.004 mm de largura e 1.700 mm de altura. A distancia entre eixos de 2.975 mm garante um espaco generoso no interior.",
  },
  {
    question: "Com que rapidez acelera dos 0 aos 100 km/h?",
    answer:
      "O BMW X6 M60i xDrive faz uma impressionante aceleracao dos 0 aos 100 km/h em apenas 4,3 segundos.",
  },
  {
    question: "Onde e fabricado o BMW X6?",
    answer:
      "O BMW X6 e produzido na fabrica do BMW Group em Spartanburg, EUA.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="py-[clamp(4rem,10vh,8rem)] px-[clamp(1.5rem,5vw,6rem)] max-w-[1400px] mx-auto">
      <ScrollReveal className="mb-16 max-w-[600px]">
        <div className="flex items-center gap-2 text-[0.7rem] font-semibold tracking-[0.18em] uppercase text-bmw-blue mb-5 before:content-[''] before:w-6 before:h-px before:bg-bmw-blue">
          FAQ
        </div>
        <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] font-bold tracking-tight text-bmw-white leading-tight">
          Perguntas frequentes.
        </h2>
      </ScrollReveal>

      <ScrollReveal>
        <div className="max-w-[800px]">
          {faqItems.map((item, i) => (
            <div
              key={i}
              className={`border-b border-bmw-border overflow-hidden ${
                i === 0 ? "border-t" : ""
              } ${openIndex === i ? "faq-open" : ""}`}
            >
              <button
                onClick={() => toggle(i)}
                aria-expanded={openIndex === i}
                className="w-full bg-transparent border-none text-bmw-white font-body text-[1.05rem] font-semibold text-left py-6 cursor-pointer flex justify-between items-center gap-4 transition-colors duration-300 hover:text-bmw-blue"
                style={{ transitionTimingFunction: "var(--ease-spring)" }}
              >
                {item.question}
                <span className="faq-icon" />
              </button>
              <div
                className="overflow-hidden transition-all duration-500"
                style={{
                  maxHeight: openIndex === i ? "300px" : "0",
                  paddingBottom: openIndex === i ? "1.5rem" : "0",
                  transitionTimingFunction: "var(--ease-spring)",
                }}
              >
                <p className="text-[0.95rem] text-bmw-muted leading-relaxed max-w-[60ch]">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}
