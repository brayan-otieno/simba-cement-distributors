import cementBags from "@/assets/cement-bags.webp";

const About = () => (
  <section id="about" className="bg-concrete py-20">
    <div className="container grid items-center gap-12 lg:grid-cols-2">
      <div className="overflow-hidden rounded-lg">
        <img src={cementBags} alt="Cement bags in warehouse" className="h-full w-full object-cover" loading="lazy" width={800} height={600} />
      </div>
      <div>
        <p className="mb-2 font-heading text-sm uppercase tracking-[0.2em] text-primary">About Us</p>
        <h2 className="mb-6 font-heading text-3xl font-bold uppercase text-accent md:text-4xl">
          Your Reliable Building<br />Materials Distributor
        </h2>
        <p className="mb-4 leading-relaxed text-muted-foreground">
          Simba Cement is a leading distributor of premium construction materials serving Nakuru, Nairobi, and surrounding areas. We supply top-brand cement, blocks, tiles, pavers, and roofing materials to contractors, developers, and homebuilders.
        </p>
        <p className="mb-8 leading-relaxed text-muted-foreground">
          With competitive pricing, a dedicated delivery fleet, and a wide product range from trusted manufacturers, we ensure your construction materials arrive on time, every time — keeping your projects on schedule and on budget.
        </p>
        <a href="#contact" className="inline-block rounded bg-primary px-8 py-3 font-semibold text-primary-foreground transition-colors hover:bg-primary/85">
          Learn More
        </a>
      </div>
    </div>
  </section>
);

export default About;
