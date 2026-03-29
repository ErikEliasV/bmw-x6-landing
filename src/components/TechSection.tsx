import ScrollReveal from "./ScrollReveal";

const techItems = [
  {
    title: "Assistente de Conducao Professional",
    desc: "Mantem-no ativamente na faixa de rodagem ate 210 km/h e a uma distancia segura. Em transito para-e-arranca, o BMW trava ate a imobilizacao e volta a arrancar automaticamente.",
  },
  {
    title: "Assistente de Estacionamento Professional",
    desc: "O BMW encontra automaticamente um lugar e estaciona de forma independente. Manobras de ate 200 metros, monitorizadas a partir do smartphone.",
  },
  {
    title: "BMW Digital Key",
    desc: "Desbloqueie e ponha em marcha o seu BMW com smartphone ou smartwatch. A chave digital pode ser partilhada com ate cinco pessoas.",
  },
  {
    title: "Head-Up Display",
    desc: "Informacoes de navegacao e conducao projetadas diretamente no campo de visao. Visao Aumentada com imagem de video em tempo real.",
  },
  {
    title: "xOffroad",
    desc: "Quatro modos Offroad que adaptam a tracao integral xDrive para conduzir com seguranca sobre areia, pedras, cascalho e neve.",
  },
];

export default function TechSection() {
  return (
    <section
      id="technology"
      className="py-[clamp(4rem,10vh,8rem)] px-[clamp(1.5rem,5vw,6rem)] max-w-[1400px] mx-auto"
    >
      <ScrollReveal className="mb-16 max-w-[600px]">
        <div className="flex items-center gap-2 text-[0.7rem] font-semibold tracking-[0.18em] uppercase text-bmw-blue mb-5 before:content-[''] before:w-6 before:h-px before:bg-bmw-blue">
          Tecnologia
        </div>
        <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] font-bold tracking-tight text-bmw-white leading-tight">
          Inteligentemente ao seu lado.
        </h2>
      </ScrollReveal>

      <div className="flex flex-col">
        {techItems.map((item, i) => (
          <ScrollReveal key={item.title}>
            <div
              className={`grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-3 lg:gap-12 py-12 border-b border-bmw-border items-center transition-all duration-500 hover:pl-4 ${
                i === 0 ? "border-t" : ""
              }`}
              style={{ transitionTimingFunction: "var(--ease-spring)" }}
            >
              <h3 className="font-display text-[1.5rem] font-bold text-bmw-white">
                {item.title}
              </h3>
              <p className="text-[0.95rem] text-bmw-muted leading-relaxed max-w-[55ch]">
                {item.desc}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
