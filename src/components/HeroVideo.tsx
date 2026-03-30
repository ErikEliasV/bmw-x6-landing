"use client";

import { useCallback, useEffect, useRef, useState } from "react";

function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t;
}

function smoothScrollTo(targetY: number) {
  let current = window.scrollY;
  let raf = 0;
  const tick = () => {
    current = lerp(current, targetY, 0.07);
    if (Math.abs(current - targetY) < 1) {
      window.scrollTo(0, targetY);
      return;
    }
    window.scrollTo(0, current);
    raf = requestAnimationFrame(tick);
  };
  const onWheel = () => { cancelAnimationFrame(raf); };
  window.addEventListener("wheel", onWheel, { once: true, passive: true });
  window.addEventListener("touchstart", onWheel, { once: true, passive: true });
  raf = requestAnimationFrame(tick);
}

export default function HeroVideo() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const indicatorRef = useRef<HTMLDivElement>(null);

  const currentTimeRef = useRef(0);
  const targetTimeRef = useRef(0);
  const rafRef = useRef(0);
  const [ready, setReady] = useState(false);
  const durationRef = useRef(0);

  useEffect(() => {
    const video = videoRef.current;
    const wrapper = wrapperRef.current;
    if (!video || !wrapper) return;

    const onMeta = () => {
      durationRef.current = video.duration;
      video.currentTime = 0;
      setReady(true);
    };

    if (video.readyState >= 1) {
      onMeta();
    } else {
      video.addEventListener("loadedmetadata", onMeta);
    }

    const onScroll = () => {
      const duration = durationRef.current;
      if (!duration) return;

      const wrapperTop = wrapper.offsetTop;
      const scrollableDistance = wrapper.offsetHeight - window.innerHeight;
      const scrolled = window.scrollY - wrapperTop;
      const progress = Math.max(0, Math.min(1, scrolled / scrollableDistance));

      targetTimeRef.current = progress * duration;

      // Update progress bar directly (no need to lerp this)
      if (progressRef.current) {
        progressRef.current.style.width = `${progress * 100}%`;
      }

      // Fade hero content
      if (contentRef.current) {
        if (progress > 0.08) {
          contentRef.current.style.opacity = "0";
          contentRef.current.style.transform = "translateY(-2rem)";
          contentRef.current.style.pointerEvents = "none";
        } else {
          contentRef.current.style.opacity = "1";
          contentRef.current.style.transform = "translateY(0)";
          contentRef.current.style.pointerEvents = "";
        }
      }

      // Fade scroll indicator
      if (indicatorRef.current) {
        indicatorRef.current.style.opacity = progress > 0.02 ? "0" : "1";
      }
    };

    // Smooth lerp animation loop
    const tick = () => {
      const diff = Math.abs(targetTimeRef.current - currentTimeRef.current);
      if (diff > 0.005) {
        currentTimeRef.current = lerp(
          currentTimeRef.current,
          targetTimeRef.current,
          0.1
        );
        if (video.readyState >= 2) {
          video.currentTime = currentTimeRef.current;
        }
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafRef.current);
      video.removeEventListener("loadedmetadata", onMeta);
    };
  }, []);

  return (
    <div ref={wrapperRef} className="relative h-[300vh]">
      <section className="sticky top-0 h-dvh flex items-end overflow-hidden">
        {/* Video background */}
        <div className="absolute inset-0 z-0">
          <video
            ref={videoRef}
            src={`${process.env.NEXT_PUBLIC_BASE_PATH}/video-hero.mp4`}
            muted
            playsInline
            preload="auto"
            className="w-full h-full object-cover object-[center_40%]"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 hero-gradient pointer-events-none" />
        </div>

        {/* Hero content */}
        <div
          ref={contentRef}
          className="relative z-2 px-[clamp(1.5rem,5vw,6rem)] pb-[clamp(3rem,8vh,6rem)] max-w-[900px] transition-all duration-300"
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-bmw-blue/15 border border-bmw-blue/30 rounded-full text-[0.7rem] font-semibold tracking-[0.18em] uppercase text-bmw-blue mb-6 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            BMW X-Series
          </div>
          <h1
            className="font-display text-[clamp(3rem,8vw,6.5rem)] font-extrabold leading-[0.95] tracking-tighter text-bmw-white mb-6 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.5s" }}
          >
            THE X6.
            <br />
            Puro Instinto.
          </h1>
          <p
            className="text-[clamp(1rem,1.5vw,1.2rem)] text-bmw-muted max-w-[50ch] leading-relaxed mb-10 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.7s" }}
          >
            Uma presenca marcante que cativa com design distinto, perfil estilo
            coupe e sofisticacao tecnica. 530 cv de potencia que transformam
            cada viagem numa experiencia visceral.
          </p>
          <div
            className="flex gap-4 flex-wrap opacity-0 animate-fade-up"
            style={{ animationDelay: "0.9s" }}
          >
            <a
              href="https://configure.bmw.pt/pt_PT/configure/G06/41EX/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-bmw-blue text-white rounded-full text-[0.9rem] font-semibold tracking-wide no-underline overflow-hidden transition-all duration-500 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(28,105,212,0.3)] active:translate-y-0 active:scale-98"
              style={{ transitionTimingFunction: "var(--ease-spring)" }}
            >
              <span className="relative z-1">Configure o Seu</span>
              <span className="relative z-1 w-7 h-7 rounded-full bg-white/15 flex items-center justify-center transition-transform duration-500 group-hover:translate-x-0.5 group-hover:scale-105">
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
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
              <span className="absolute inset-0 bg-gradient-to-br from-transparent to-white/15 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </a>
            <a
              href="#design"
              onClick={(e) => {
                e.preventDefault();
                const el = document.querySelector("#design");
                if (el) smoothScrollTo(el.getBoundingClientRect().top + window.scrollY - 80);
              }}
              className="inline-flex items-center gap-3 px-8 py-4 text-bmw-white border rounded-full text-[0.9rem] font-medium no-underline transition-all duration-500 hover:-translate-y-px active:scale-98"
              style={{
                background: "var(--hero-btn-secondary-bg)",
                borderColor: "var(--hero-btn-secondary-border)",
                transitionTimingFunction: "var(--ease-spring)",
              }}
            >
              Explorar
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          ref={indicatorRef}
          className="absolute bottom-8 right-[clamp(1.5rem,5vw,6rem)] z-2 flex flex-col items-center gap-2 transition-opacity duration-400 max-md:hidden"
        >
          <span className="text-[0.65rem] tracking-[0.2em] uppercase text-bmw-muted [writing-mode:vertical-rl]">
            Scroll
          </span>
          <div className="w-px h-12 bg-gradient-to-b from-bmw-blue to-transparent animate-scroll-pulse" />
        </div>

        {/* Progress bar */}
        <div
          ref={progressRef}
          className="absolute bottom-0 left-0 h-[3px] bg-bmw-blue z-10 transition-[width] duration-50"
          style={{ width: "0%" }}
        />
      </section>
    </div>
  );
}
