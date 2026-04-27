import { Mail, Phone } from "lucide-react";

const Footer = () => (
  <footer className="bg-accent py-16 text-accent-foreground">
    <div className="container">
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <h3 className="mb-4 font-heading text-xl font-bold uppercase">
            Simba<span className="text-primary"> Cement</span>
          </h3>
          <p className="text-sm leading-relaxed text-accent-foreground/70">
            Authorised distributor of premium cement, blocks, tiles & building materials across Nakuru & Nairobi.
          </p>
        </div>
        <div>
          <h4 className="mb-4 font-heading text-sm font-semibold uppercase tracking-wider text-primary">Quick Links</h4>
          <ul className="space-y-2 text-sm text-accent-foreground/70">
            {["Home", "About", "Products", "Services", "Contact"].map((l) => (
              <li key={l}><a href={`#${l.toLowerCase()}`} className="transition-colors hover:text-primary">{l}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="mb-4 font-heading text-sm font-semibold uppercase tracking-wider text-primary">We Distribute</h4>
          <ul className="space-y-2 text-sm text-accent-foreground/70">
            <li><a href="#products" className="transition-colors hover:text-primary">Cement (various brands)</a></li>
            <li><a href="#products" className="transition-colors hover:text-primary">Blocks & Building Materials</a></li>
            <li><a href="#products" className="transition-colors hover:text-primary">Roofing Sheets & Tiles</a></li>
            <li><a href="#products" className="transition-colors hover:text-primary">Steel & Reinforcement Bars</a></li>
            <li><a href="#products" className="transition-colors hover:text-primary">Interlocking Pavers</a></li>
            <li><a href="#services" className="transition-colors hover:text-primary">Countrywide Delivery</a></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-4 font-heading text-sm font-semibold uppercase tracking-wider text-primary">Contact</h4>
          <div className="space-y-3 text-sm text-accent-foreground/70">
            <p className="flex items-center gap-2"><Mail size={14} className="text-primary" /> simbacement@test.com</p>
            <p className="flex items-center gap-2"><Phone size={14} className="text-primary" /> 0731030404 (WhatsApp)</p>
          </div>
        </div>
      </div>
      <div className="mt-12 border-t border-accent-foreground/10 pt-8 text-center text-xs text-accent-foreground/50">
        © {new Date().getFullYear()} Simba Cement — Authorised Building Materials Distributor. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
