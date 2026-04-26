import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logo.webp";

const navLinks = ["Home", "About", "Products", "Services", "Contact"];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background shadow-sm">
      <div className="container flex items-center justify-between py-4">
        <a href="#" className="flex items-center gap-2">
          <img src={logo} alt="Simba Cement" className="h-12 w-auto" />
        </a>
        <ul className="hidden gap-8 md:flex">
          {navLinks.map((l) => (
            <li key={l}>
              <a href={`#${l.toLowerCase()}`} className="text-sm font-medium uppercase tracking-wide text-foreground transition-colors hover:text-primary">
                {l}
              </a>
            </li>
          ))}
        </ul>
        <a href="https://wa.me/254731030404" target="_blank" rel="noopener noreferrer" className="hidden rounded bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/85 md:inline-block">
          Get a Quote
        </a>
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <div className="border-t bg-background px-6 pb-6 md:hidden">
          {navLinks.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)} className="block py-3 text-sm font-medium uppercase text-foreground">
              {l}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
