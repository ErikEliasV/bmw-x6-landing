import BmwLogo from "./BmwLogo";

const footerLinks = [
  {
    label: "BMW.pt",
    href: "https://www.bmw.pt/pt/index.html",
  },
  {
    label: "Dados Tecnicos",
    href: "https://www.bmw.pt/pt/all-models/x-series/x6/bmw-x6-dados-tecnicos.html",
  },
  {
    label: "Financial Services",
    href: "https://www.bmw.pt/pt/bmw-financial-services.html",
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-bmw-border px-[clamp(1.5rem,5vw,6rem)] py-12">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <a href="#">
          <BmwLogo className="w-14 h-14 opacity-60 transition-opacity duration-400 hover:opacity-100" />
        </a>

        <p className="text-[0.75rem] text-bmw-muted tracking-wide">
          BMW X6. Prazer de conduzir.
        </p>

        <ul className="flex gap-8 list-none">
          {footerLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[0.75rem] text-bmw-muted no-underline transition-colors duration-300 hover:text-bmw-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
