import ScrollReveal from "./ScrollReveal";

const interiorCards = [
  {
    title: "Volante M em Pele",
    desc: "Sensacao de conducao direta e desportiva com botoes multifuncoes e perfil para os polegares.",
    image:
      "https://bmw.scene7.com/is/image/BMW/g06_interior_m-leather-steering-wheel?wid=2560&hei=2560",
    alt: "Volante M em pele do BMW X6",
  },
  {
    title: "Ecra Curvo",
    desc: "Instrumentos digitais e infotenimento num unico painel elegante.",
    image:
      "https://bmw.scene7.com/is/image/BMW/g06_interior_curved-display?wid=2560&hei=2560",
    alt: "Ecra curvo e luz ambiente no BMW X6",
  },
  {
    title: "Bancos Desportivos M",
    desc: "Apoio lateral preciso para seguranca e conforto mesmo nas curvas.",
    image:
      "https://bmw.scene7.com/is/image/BMW/g06_interior_sport-seats?wid=2560&hei=2560",
    alt: "Bancos desportivos M do BMW X6",
  },
  {
    title: "Bowers & Wilkins Diamond",
    desc: "Experiencia sonora com qualidade de estudio em todos os bancos.",
    image:
      "https://bmw.scene7.com/is/image/BMW/g06_comfort-features_bowers-wilkins-diamond-surround-sound?wid=2560&hei=2560",
    alt: "Sistema de som Bowers and Wilkins Diamond do BMW X6",
  },
];

export default function InteriorShowcase() {
  return (
    <section
      id="interior"
      className="py-[clamp(4rem,10vh,8rem)] px-[clamp(1.5rem,5vw,6rem)] max-w-[1400px] mx-auto"
    >
      <ScrollReveal className="mb-16 max-w-[600px]">
        <div className="flex items-center gap-2 text-[0.7rem] font-semibold tracking-[0.18em] uppercase text-bmw-blue mb-5 before:content-[''] before:w-6 before:h-px before:bg-bmw-blue">
          Interior
        </div>
        <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] font-bold tracking-tight text-bmw-white leading-tight mb-4">
          Conforto em todos os bancos. Estilo em cada detalhe.
        </h2>
        <p className="text-base text-bmw-muted leading-relaxed max-w-[55ch]">
          O interior do BMW X6 destaca-se pelo design claro, materiais modernos
          e foco no condutor. Espaco generoso e monitores digitais transformam
          cada viagem.
        </p>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {interiorCards.map((card, i) => (
          <ScrollReveal
            key={card.title}
            delay={i * 100}
            className="group relative rounded-[2rem] overflow-hidden aspect-video cursor-pointer"
          >
            <img
              src={card.image}
              alt={card.alt}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-[1s] group-hover:scale-106"
              style={{ transitionTimingFunction: "var(--ease-spring)" }}
            />
            <div className="absolute inset-0 flex flex-col justify-end p-8 opacity-0 transition-opacity duration-600 group-hover:opacity-100" style={{ background: "var(--image-overlay)" }}>
              <h4 className="font-display text-[1.1rem] font-semibold text-bmw-white mb-1.5">
                {card.title}
              </h4>
              <p className="text-[0.8rem] text-bmw-muted leading-relaxed">
                {card.desc}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
