import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => (
  <section id="home" className="relative flex min-h-[85vh] items-center">
    <img src={heroBg} alt="Cement plant" className="absolute inset-0 h-full w-full object-cover" width={1920} height={1080} />
    <div className="hero-overlay absolute inset-0" />
    <div className="container relative z-10 py-20">
      <p className="mb-4 font-heading text-sm uppercase tracking-[0.3em] text-primary">
        Building Strong Foundations
      </p>
      <h1 className="mb-6 max-w-3xl font-heading text-5xl font-bold uppercase leading-tight text-accent-foreground md:text-7xl">
        Premium Cement<br />
        <span className="text-primary">Delivered Nationwide</span>
      </h1>
      <p className="mb-8 max-w-xl text-lg text-accent-foreground/80">
        Trusted by contractors and builders across the country. Superior quality cement for every project — from foundations to finishing.
      </p>
      <div className="flex flex-wrap gap-4">
        <a href="#products" className="glow-cyan rounded bg-primary px-8 py-3.5 font-semibold text-primary-foreground transition-colors hover:bg-primary/85">
          Explore Products
        </a>
        <a href="#contact" className="rounded border border-primary/40 bg-primary/10 px-8 py-3.5 font-semibold text-primary-foreground transition-colors hover:bg-primary/20">
          Contact Us
        </a>
      </div>
    </div>
  </section>
);

export default Hero;
