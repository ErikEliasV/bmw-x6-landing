import ScrollReveal from "./ScrollReveal";

export default function DesignSection() {
  return (
    <section id="design" className="py-[clamp(4rem,10vh,8rem)]">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-0 lg:min-h-[80vh]">
        {/* Image */}
        <ScrollReveal className="relative overflow-hidden aspect-video lg:aspect-auto">
          <img
            src="https://bmw.scene7.com/is/image/BMW/g06_intro?wid=2560&hei=2560"
            alt="BMW X6 estacionado ao sol em frente a edificio de tijolos"
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-[1.2s] hover:scale-104"
            style={{ transitionTimingFunction: "var(--ease-spring)" }}
          />
          {/* Gradient that blends image edges into the page bg */}
          <div
            className="absolute inset-0 pointer-events-none hidden lg:block"
            style={{ background: "var(--design-image-fade)" }}
          />
          <div
            className="absolute inset-0 pointer-events-none lg:hidden"
            style={{ background: "var(--image-overlay)" }}
          />
        </ScrollReveal>

        {/* Text */}
        <div className="flex flex-col justify-center p-[clamp(2rem,5vw,6rem)]">
          <ScrollReveal>
            <div className="flex items-center gap-2 text-[0.7rem] font-semibold tracking-[0.18em] uppercase text-bmw-blue mb-5 before:content-[''] before:w-6 before:h-px before:bg-bmw-blue">
              Exterior
            </div>
            <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] font-bold tracking-tight text-bmw-white leading-tight mb-4">
              Uma presenca que inspira.
            </h2>
            <p className="text-base text-bmw-muted leading-relaxed max-w-[55ch]">
              O BMW X6 M60i xDrive inspira gracas ao maximo de 390 kW (530 cv) e
              a uma excecional dinamica de conducao. A frente contornada com
              grelha em duplo rim iluminada, a linha de tejadilho fluida e a
              traseira desenhada formam uma silhueta repleta de personalidade.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
