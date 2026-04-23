import { Truck, ShieldCheck, Headphones } from "lucide-react";

const items = [
  { icon: Truck, text: "Fast Delivery — Nakuru & Nairobi" },
  { icon: ShieldCheck, text: "Genuine Products" },
  { icon: Headphones, text: "24/7 Support" },
];

const TopBar = () => (
  <div className="bg-accent text-accent-foreground">
    <div className="container flex flex-wrap items-center justify-center gap-6 py-2 text-xs md:justify-end md:gap-8">
      {items.map((i) => (
        <span key={i.text} className="flex items-center gap-2">
          <i.icon size={14} className="text-primary" />
          {i.text}
        </span>
      ))}
    </div>
  </div>
);

export default TopBar;
