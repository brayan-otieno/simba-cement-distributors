import { Truck, Building2, Users, MapPin } from "lucide-react";
import cementTruck from "@/assets/cement-truck.jpg";

const stats = [
  { icon: Truck, value: "15,000+", label: "Deliveries Made" },
  { icon: Building2, value: "2,500+", label: "Projects Supplied" },
  { icon: Users, value: "1,200+", label: "Happy Clients" },
  { icon: MapPin, value: "47", label: "Counties Covered" },
];

const Stats = () => (
  <section className="relative py-20">
    <img src={cementTruck} alt="Cement truck" className="absolute inset-0 h-full w-full object-cover" loading="lazy" width={800} height={600} />
    <div className="hero-overlay absolute inset-0" />
    <div className="container relative z-10">
      <div className="mb-12 text-center">
        <p className="mb-2 font-heading text-sm uppercase tracking-[0.2em] text-primary">Our Impact</p>
        <h2 className="font-heading text-3xl font-bold uppercase text-accent-foreground md:text-4xl">Trusted Across The Nation</h2>
      </div>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <s.icon size={32} className="mx-auto mb-3 text-primary" />
            <p className="font-heading text-4xl font-bold text-accent-foreground">{s.value}</p>
            <p className="mt-1 text-sm uppercase tracking-wide text-accent-foreground/70">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Stats;
