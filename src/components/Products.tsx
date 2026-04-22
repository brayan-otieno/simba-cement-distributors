import { Package } from "lucide-react";

const products = [
  { name: "OPC 42.5N", desc: "Ordinary Portland Cement for general construction, foundations, and structural work.", tag: "Best Seller" },
  { name: "PPC 32.5R", desc: "Portland Pozzolana Cement ideal for plastering, block work, and finishing applications.", tag: "Popular" },
  { name: "Cement 52.5N", desc: "High-strength cement for heavy-duty infrastructure, bridges, and high-rise buildings.", tag: "Premium" },
  { name: "Bulk Cement", desc: "Loose cement supply for large-scale commercial and industrial construction projects.", tag: "Industrial" },
];

const Products = () => (
  <section id="products" className="bg-background py-20">
    <div className="container">
      <div className="mb-12 text-center">
        <p className="mb-2 font-heading text-sm uppercase tracking-[0.2em] text-primary">Our Range</p>
        <h2 className="font-heading text-3xl font-bold uppercase text-accent md:text-4xl">Cement Products</h2>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((p) => (
          <div key={p.name} className="group overflow-hidden rounded-lg border bg-card transition-all hover:-translate-y-1 hover:shadow-lg">
            <div className="flex h-48 items-center justify-center bg-concrete">
              <Package size={64} className="text-steel/40 transition-colors group-hover:text-primary" />
            </div>
            <div className="p-6">
              <span className="mb-2 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">{p.tag}</span>
              <h3 className="mb-2 font-heading text-xl font-bold uppercase text-accent">{p.name}</h3>
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
              <a href="#contact" className="text-sm font-semibold text-primary transition-colors hover:text-primary/80">
                Order Now →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Products;
