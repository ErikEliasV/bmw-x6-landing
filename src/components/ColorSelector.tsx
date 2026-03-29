"use client";

import { useState } from "react";
import ScrollReveal from "./ScrollReveal";

interface ColorOption {
  name: string;
  swatch: string;
  image: string;
}

const colors: ColorOption[] = [
  {
    name: "Le Mans Blue Metallic",
    swatch: "#1B3A6B",
    image:
      "https://prod.cosy.bmw.cloud/bmwweb/cosySec?COSY-EU-100-7331cqgv2Z7d%25i02uCaY3MuO2kdGmT35sgXAObQi10tTkh6ekxhY64XRTnjtzL1Abpos9kJSVqTMu0tVKLB9SrU8vJdoF7GqYuzHVPRdgShtDjux2YIxZU2hilpRBqSrxlpKAuhFqIbC7NNRUQu1uO30kxbZLId4VTnHCrms8fnOl6JQD0mbH8aGDmIqQmSTKL6ifG93CiWw8jS%259mlD3R%256kRvXId4pw9CRAcFSk%25Nl6JyVAfVUa2rZpRBpEHmH6725zZ7dgMuJfRUgRiWvW5GvSvO5J19xEMWq10s9O9zQE4riIit3scZwBwRIrxRteIocZ857MBTkRUgChe845GvloMjegp2XHhDWv6jQ%25oq12YDaf4uLjmqn1c5JDyLOExy%25qTJIs8eSL3uBrUMtJdSeZL4NuzVMRJseSkNh5urzVA0ogSLwNF4HvVJA0Kc%252NpQ4Wxfj0L9cP81D4tmxbUEqczZ89GsLxgIUiprJ8vDGw6ZuU5dptYRSGww67m5VpK6YCygNLc3mlTv0JnvyX324uOKTQdjcSI93azDxVyrdnkq8WplzOALUPwnkIFJGbhTABKup9oRFeWS6iHgKMPVYw2OWhbNmtw4Po90y7ZvbHi4TCnR9%25wc3ZmeiftxdRyww178z5hhtECUkgu77slGAv7SCrXpF2YclZQ6KjPpXRaYWDbHQ5nmPnqNagOybO54",
  },
  {
    name: "Verde Isle of Man",
    swatch: "#2D5A3D",
    image:
      "https://prod.cosy.bmw.cloud/bmwweb/cosySec?COSY-EU-100-7331cqgv2Z7d%25i02uCaY3MuO2kdGmT35sgXAObQi10tTkh6ekxhY64XRTnjtzL1Abpos9kJSVqTMu0tVKLB9SrW4dJdoF7GqYuzHVPRdgShtDjux2YIxZU2hilpRBqSrxlpKAuhFqIbC7NNRUQu1uO30kxbZLId4VTnHCrms8fnOl6JQD0mbH8aGDmIqQmSTKL6ifG93CiWw8jS%259mlD3R%256kRvXId4pw9CRAcFSk%25Nl6JyVAfVUa2rZpRBpEHmH6725zZ7dgMyDURUgRiWvW5GvSvO5J19xEMWq10s9O9zQE4riIit3scZwBwRIrxRteIocZ857MBTkRUgChe845GvloMjegp2XHhDWv6jQ%25oq12YDaf4uLjmqn1c5JDyLOExy%25qTJIs8eSL3uBrUMtJdSeZL4NuzVMRJseSkNh5urzVA0ogSLwNF4HvVJA0Kc%252NpQ4Wxfj0L9cP81D4tmxbUEqczZ89GsLxgIUiprJ8vDGw6ZuU5dptYRSGww67m5VpK6YCygNLc3mlTv0JnvyX324uOKTQdjcSI93azDxVyrdnkq8WplzOALUPwnkIFJGbhTABKup9oRFeWS6iHgKMPVYw2OWhbNmtw4Po90y7ZvbHi4TCnR9%25wc3ZmeiftxdRyww178z5hhtECUkgu77slGAv7SCrXpF2YclZQ6KjPpXRaYWDbHQ5nmPnqNagOybO54",
  },
  {
    name: "Cinza Frozen Pure",
    swatch: "#C0C0C0",
    image:
      "https://prod.cosy.bmw.cloud/bmwweb/cosySec?COSY-EU-100-7331cqgv2Z7d%25i02uCaY3MuO2kdGmT35sgXAObQi10tTkh6ekxhY64XRTnjtzL1Abpos9kJSVqTMu0tVKLB9SrW5wJdoF7GqYuzHVPRdgShtDjux2YIxZU2hilpRBqSrxlpKAuhFqIbC7NNRUQu1uO30kxbZLId4VTnHCrms8fnOl6JQD0mbH8aGDmIqQmSTKL6ifG93CiWw8jS%259mlD3R%256kRvXId4pw9CRAcFSk%25Nl6JyVAfVUa2rZpRBpEHmH6725zZ7dgMyHkRUgRiWvW5GvSvO5J19xEMWq10s9O9zQE4riIit3scZwBwRIrxRteIocZ857MBTkRUgChe845GvloMjegp2XHhDWv6jQ%25oq12YDaf4uLjmqn1c5JDyLOExy%25qTJIs8eSL3uBrUMtJdSeZL4NuzVMRJseSkNh5urzVA0ogSLwNF4HvVJA0Kc%252NpQ4Wxfj0L9cP81D4tmxbUEqczZ89GsLxgIUiprJ8vDGw6ZuU5dptYRSGww67m5VpK6YCygNLc3mlTv0JnvyX324uOKTQdjcSI93azDxVyrdnkq8WplzOALUPwnkIFJGbhTABKup9oRFeWS6iHgKMPVYw2OWhbNmtw4Po90y7ZvbHi4TCnR9%25wc3ZmeiftxdRyww178z5hhtECUkgu77slGAv7SCrXpF2YclZQ6KjPpXRaYWDbHQ5nmPnqNagOybO54",
  },
  {
    name: "Preto Carbon",
    swatch: "#1a1a1a",
    image:
      "https://prod.cosy.bmw.cloud/bmwweb/cosySec?COSY-EU-100-7331cqgv2Z7d%25i02uCaY3MuO2kdGmT35sgXAObQi10tTkh6ekxhY64XRTnjtzL1Abpos9kJSVqTMu0tVKLB9Srq1kJdoF7GqYuzHVPRdgShtDjux2YIxZU2hilpRBqSrxlpKAuhFqIbC7NNRUQu1uO30kxbZLId4VTnHCrms8fnOl6JQD0mbH8aGDmIqQmSTKL6ifG93CiWw8jS%259mlD3R%256kRvXId4pw9CRAcFSk%25Nl6JyVAfVUa2rZpRBpEHmH6725zZ7dgMrIpRUgRiWvW5GvSvO5J19xEMWq10s9O9zQE4riIit3scZwBwRIrxRteIocZ857MBTkRUgChe845GvloMjegp2XHhDWv6jQ%25oq12YDaf4uLjmqn1c5JDyLOExy%25qTJIs8eSL3uBrUMtJdSeZL4NuzVMRJseSkNh5urzVA0ogSLwNF4HvVJA0Kc%252NpQ4Wxfj0L9cP81D4tmxbUEqczZ89GsLxgIUiprJ8vDGw6ZuU5dptYRSGww67m5VpK6YCygNLc3mlTv0JnvyX324uOKTQdjcSI93azDxVyrdnkq8WplzOALUPwnkIFJGbhTABKup9oRFeWS6iHgKMPVYw2OWhbNmtw4Po90y7ZvbHi4TCnR9%25wc3ZmeiftxdRyww178z5hhtECUkgu77slGAv7SCrXpF2YclZQ6KjPpXRaYWDbHQ5nmPnqNagOybO54",
  },
  {
    name: "Cinza Brooklyn",
    swatch: "#5A5A5E",
    image:
      "https://prod.cosy.bmw.cloud/bmwweb/cosySec?COSY-EU-100-7331cqgv2Z7d%25i02uCaY3MuO2kdGmT35sgXAObQi10tTkh6ekxhY64XRTnjtzL1Abpos9kJSVqTMu0tVKLB9SrW4lJdoF7GqYuzHVPRdgShtDjux2YIxZU2hilpRBqSrxlpKAuhFqIbC7NNRUQu1uO30kxbZLId4VTnHCrms8fnOl6JQD0mbH8aGDmIqQmSTKL6ifG93CiWw8jS%259mlD3R%256kRvXId4pw9CRAcFSk%25Nl6JyVAfVUa2rZpRBpEHmH6725zZ7dgMyDWRUgRiWvW5GvSvO5J19xEMWq10s9O9zQE4riIit3scZwBwRIrxRteIocZ857MBTkRUgChe845GvloMjegp2XHhDWv6jQ%25oq12YDaf4uLjmqn1c5JDyLOExy%25qTJIs8eSL3uBrUMtJdSeZL4NuzVMRJseSkNh5urzVA0ogSLwNF4HvVJA0Kc%252NpQ4Wxfj0L9cP81D4tmxbUEqczZ89GsLxgIUiprJ8vDGw6ZuU5dptYRSGww67m5VpK6YCygNLc3mlTv0JnvyX324uOKTQdjcSI93azDxVyrdnkq8WplzOALUPwnkIFJGbhTABKup9oRFeWS6iHgKMPVYw2OWhbNmtw4Po90y7ZvbHi4TCnR9%25wc3ZmeiftxdRyww178z5hhtECUkgu77slGAv7SCrXpF2YclZQ6KjPpXRaYWDbHQ5nmPnqNagOybO54",
  },
];

export default function ColorSelector() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [fading, setFading] = useState(false);

  const handleColorChange = (index: number) => {
    if (index === activeIndex) return;
    setFading(true);
    setTimeout(() => {
      setActiveIndex(index);
      setFading(false);
    }, 350);
  };

  return (
    <section
      id="specs"
      className="py-[clamp(4rem,10vh,8rem)] px-[clamp(1.5rem,5vw,6rem)] max-w-[1400px] mx-auto"
    >
      <ScrollReveal className="mb-16 max-w-[600px]">
        <div className="flex items-center gap-2 text-[0.7rem] font-semibold tracking-[0.18em] uppercase text-bmw-blue mb-5 before:content-[''] before:w-6 before:h-px before:bg-bmw-blue">
          Cores
        </div>
        <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] font-bold tracking-tight text-bmw-white leading-tight">
          Escolha a sua personalidade.
        </h2>
      </ScrollReveal>

      <ScrollReveal>
        {/* Car image */}
        <div className="relative rounded-[2rem] overflow-hidden aspect-[21/9] max-md:aspect-video mb-8">
          <img
            src={colors[activeIndex].image}
            alt={`BMW X6 ${colors[activeIndex].name}`}
            loading="lazy"
            className="w-full h-full object-cover transition-all duration-800"
            style={{
              opacity: fading ? 0 : 1,
              transform: fading ? "scale(1.02)" : "scale(1)",
              transitionTimingFunction: "var(--ease-spring)",
            }}
          />
        </div>

        {/* Color swatches */}
        <div className="flex gap-4 justify-center">
          {colors.map((color, i) => (
            <button
              key={color.name}
              onClick={() => handleColorChange(i)}
              aria-label={color.name}
              className={`w-12 h-12 rounded-full border-2 transition-all duration-400 relative cursor-pointer after:absolute after:inset-[-4px] after:rounded-full after:border after:border-white/10 ${
                i === activeIndex
                  ? "border-bmw-blue scale-115"
                  : "border-transparent hover:scale-110"
              }`}
              style={{
                backgroundColor: color.swatch,
                transitionTimingFunction: "var(--ease-spring)",
              }}
            />
          ))}
        </div>

        {/* Color name */}
        <p
          className="text-center text-[0.85rem] text-bmw-muted mt-4 min-h-6 transition-opacity duration-400"
          style={{ opacity: fading ? 0 : 1 }}
        >
          {colors[activeIndex].name}
        </p>
      </ScrollReveal>
    </section>
  );
}
