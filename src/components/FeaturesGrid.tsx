import ScrollReveal from "./ScrollReveal";

interface Feature {
  title: string;
  desc: string;
  image: string;
  alt: string;
  large?: boolean;
}

const features: Feature[] = [
  {
    title: "Pack Desportivo M Pro",
    desc: "A moldura preta mate dos frisos M Shadow Line, travoes vermelhos desportivos e quatro ponteiras de escape pretas destacam o aspeto dinamico.",
    image:
      "https://bmw.scene7.com/is/image/BMW/g06_exterior_highlight_m-sport-package?wid=2560&hei=2560",
    alt: "BMW X6 com Pack Desportivo M Pro",
    large: true,
  },
  {
    title: 'Jantes M de 22"',
    desc: "Menos peso, mais impacto. O estilo de raios V 747 acentua o visual desportivo.",
    image:
      "https://bmw.scene7.com/is/image/BMW/g06_exterior_22-inch-m-light-alloy-wheels?wid=2560&hei=2560",
    alt: "Jantes de liga leve M de 22 polegadas",
  },
  {
    title: "Escape Desportivo M",
    desc: "Som decididamente desportivo que varia de acordo com a situacao de conducao.",
    image:
      "https://bmw.scene7.com/is/image/BMW/g06_exterior_m-sport-exhaust-system?wid=2560&hei=2560",
    alt: "Sistema de escape desportivo M do BMW X6",
  },
];

export default function FeaturesGrid() {
  return (
    <section className="py-[clamp(4rem,10vh,8rem)] px-[clamp(1.5rem,5vw,6rem)] max-w-[1400px] mx-auto">
      <ScrollReveal className="mb-16 max-w-[600px]">
        <div className="flex items-center gap-2 text-[0.7rem] font-semibold tracking-[0.18em] uppercase text-bmw-blue mb-5 before:content-[''] before:w-6 before:h-px before:bg-bmw-blue">
          Design
        </div>
        <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] font-bold tracking-tight text-bmw-white leading-tight">
          Caracter marcante em cada detalhe.
        </h2>
      </ScrollReveal>

      <div className="grid grid-cols-1 lg:grid-cols-[7fr_5fr] grid-rows-[auto_auto] gap-6">
        {features.map((f, i) => (
          <ScrollReveal
            key={f.title}
            delay={i * 100}
            className={`group relative rounded-[2rem] overflow-hidden bg-bmw-surface border border-bmw-border transition-all duration-600 hover:border-bmw-overlay-border hover:-translate-y-1 hover:shadow-[0_24px_60px_-12px_var(--card-shadow-hover)] ${
              f.large ? "lg:row-span-2" : ""
            }`}
          >
            {/* Inner highlight */}
            <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0_1px_1px_rgba(255,255,255,0.06)] pointer-events-none z-2" />
            <img
              src={f.image}
              alt={f.alt}
              loading="lazy"
              className="w-full h-full object-cover min-h-[300px] transition-transform duration-[1s] group-hover:scale-105"
              style={{ transitionTimingFunction: "var(--ease-spring)" }}
            />
            <div className="absolute bottom-0 left-0 right-0 p-8 z-1" style={{ background: "var(--feature-card-overlay)" }}>
              <h3 className="font-display text-[1.3rem] font-bold text-bmw-white mb-2">
                {f.title}
              </h3>
              <p className="text-[0.85rem] text-bmw-muted leading-relaxed max-w-[45ch]">
                {f.desc}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
