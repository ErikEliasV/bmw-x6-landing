import ScrollReveal from "./ScrollReveal";

export default function CTASection() {
  return (
    <section className="py-[clamp(6rem,14vh,10rem)] px-[clamp(1.5rem,5vw,6rem)] text-center relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none" style={{ background: "radial-gradient(circle, var(--cta-glow) 0%, transparent 70%)" }} />

      <ScrollReveal>
        <div className="flex items-center gap-2 text-[0.7rem] font-semibold tracking-[0.18em] uppercase text-bmw-blue mb-6 justify-center before:content-[''] before:w-6 before:h-px before:bg-bmw-blue">
          Configurar
        </div>
        <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] font-extrabold tracking-tighter text-bmw-white leading-[1.05] mb-6 relative">
          O seu BMW X6 espera por si.
        </h2>
        <p className="text-[1.1rem] text-bmw-muted max-w-[50ch] mx-auto leading-relaxed mb-10 relative">
          Configure o BMW X6 de acordo com os seus requisitos individuais.
          Escolha motor, cor, interiores e equipamento.
        </p>
        <div className="flex gap-4 flex-wrap justify-center">
          <a
            href="https://configure.bmw.pt/pt_PT/configure/G06/41EX/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-bmw-blue text-white rounded-full text-[0.9rem] font-semibold tracking-wide no-underline overflow-hidden transition-all duration-500 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(28,105,212,0.3)] active:translate-y-0 active:scale-98"
            style={{ transitionTimingFunction: "var(--ease-spring)" }}
          >
            Configure e Reserve
            <span className="w-7 h-7 rounded-full bg-white/15 flex items-center justify-center transition-transform duration-500 group-hover:translate-x-0.5 group-hover:scale-105">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </span>
            <span className="absolute inset-0 bg-gradient-to-br from-transparent to-white/15 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </a>
          <a
            href="https://www.bmw.pt/forms/rfo/rfo.html?modelRange=G06"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-bmw-overlay text-bmw-white border border-bmw-overlay-border rounded-full text-[0.9rem] font-medium no-underline transition-all duration-500 hover:bg-bmw-overlay-hover hover:border-bmw-overlay-border hover:-translate-y-px active:scale-98"
            style={{ transitionTimingFunction: "var(--ease-spring)" }}
          >
            Pedido de Proposta
          </a>
        </div>
      </ScrollReveal>
    </section>
  );
}
