import { Truck, Factory, ShieldCheck, Clock } from "lucide-react";

const services = [
  { icon: Truck, title: "Fast Delivery", desc: "Same-day and next-day delivery to any construction site nationwide." },
  { icon: Factory, title: "Bulk Supply", desc: "Large-scale orders for commercial and infrastructure projects." },
  { icon: ShieldCheck, title: "Quality Certified", desc: "All products meet international construction standards." },
  { icon: Clock, title: "24/7 Ordering", desc: "Place orders around the clock through our dedicated support line." },
];

const Services = () => (
  <section id="services" className="bg-background py-20">
    <div className="container">
      <div className="mb-12 text-center">
        <p className="mb-2 font-heading text-sm uppercase tracking-[0.2em] text-primary">What We Offer</p>
        <h2 className="font-heading text-3xl font-bold uppercase text-accent md:text-4xl">Our Services</h2>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((s) => (
          <div key={s.title} className="group rounded-lg border bg-card p-8 text-center transition-all hover:-translate-y-1 hover:shadow-lg">
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
              <s.icon size={28} />
            </div>
            <h3 className="mb-2 font-heading text-lg font-semibold uppercase text-accent">{s.title}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
