import heroBg from "@/assets/hero-bg.webp";

const Hero = () => (
  <section id="home" className="relative flex min-h-[85vh] items-center">
    <img src={heroBg} alt="Cement plant" className="absolute inset-0 h-full w-full object-cover" width={1920} height={1080} />
    <div className="hero-overlay absolute inset-0" />
    <div className="container relative z-10 py-20">
      <p className="mb-4 font-heading text-sm uppercase tracking-[0.3em] text-primary">
        Your Trusted Construction Supplier
      </p>
      <h1 className="mb-6 max-w-3xl font-heading text-5xl font-bold uppercase leading-tight text-accent-foreground md:text-7xl">
        Quality Building<br />
        <span className="text-primary">Materials Delivered</span>
      </h1>
      <p className="mb-8 max-w-xl text-lg text-accent-foreground/80">
        Authorised distributor of premium cement, blocks, tiles & building materials in Nakuru and Nairobi. Fast delivery, competitive prices, trusted by contractors.
      </p>
      <div className="flex flex-wrap gap-4">
        <a href="https://wa.me/254731030404" target="_blank" rel="noopener noreferrer" className="glow-cyan rounded bg-primary px-8 py-3.5 font-semibold text-primary-foreground transition-colors hover:bg-primary/85">
          Get a Quote
        </a>
        <a href="https://wa.me/254731030404?text=I%20would%20like%20to%20place%20an%20order" target="_blank" rel="noopener noreferrer" className="rounded border border-primary/40 bg-primary/10 px-8 py-3.5 font-semibold text-primary-foreground transition-colors hover:bg-primary/20">
          Order Now
        </a>
      </div>
    </div>
  </section>
);

export default Hero;
