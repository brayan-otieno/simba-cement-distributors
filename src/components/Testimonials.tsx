import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

const testimonials = [
  { name: "Rehema Akinyi", role: "Homeowner, Homa Bay", text: "Sourced all my building materials through this distributor. Genuine cement, blocks and roofing tiles delivered straight to my site in Homa Bay.", rating: 5 },
  { name: "Slyvia Wangare", role: "Contractor, Murang'a", text: "Their distributor prices on cement and steel saved my project a lot. Delivery to Murang'a was prompt and the team is very professional.", rating: 5 },
  { name: "Benson Ogaki", role: "Builder, Kisii", text: "I order BRC mesh and round bars regularly. Stock is always available and the pricing beats most suppliers in Kisii town.", rating: 5 },
  { name: "Felister Moraa", role: "Project Manager, Nyamira", text: "Reliable supply of roofing sheets and water tanks. They've been my trusted distributor for every site I run in Nyamira.", rating: 5 },
  { name: "Hassan Muhammed", role: "Hardware Owner, Kisauni", text: "As a retailer in Kisauni, I get the best wholesale prices here. Genuine products that keep my customers coming back.", rating: 5 },
  { name: "James Semo", role: "Civil Engineer, Nairobi", text: "From cement to building steel, this is my go-to distributor in Nairobi. Consistent quality and competitive pricing on every order.", rating: 5 },
  { name: "Titus Mugutian", role: "Developer, Kajiado", text: "Built two rental units with materials supplied from here. Tiles, roofing and chainlink fencing all delivered to Kajiado on time.", rating: 4 },
  { name: "Juma Otieno", role: "Contractor, Kisumu", text: "Best distributor I've worked with in Kisumu. Their team understands construction timelines and never disappoints on delivery.", rating: 5 },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const [isAnimating, setIsAnimating] = useState(false);

  const totalSlides = testimonials.length;

  const goTo = useCallback((index: number, dir: "left" | "right" = "right") => {
    if (isAnimating) return;
    setDirection(dir);
    setIsAnimating(true);
    setTimeout(() => {
      setCurrent(index);
      setTimeout(() => setIsAnimating(false), 50);
    }, 300);
  }, [isAnimating]);

  const next = useCallback(() => {
    goTo((current + 1) % totalSlides, "right");
  }, [current, totalSlides, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + totalSlides) % totalSlides, "left");
  }, [current, totalSlides, goTo]);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [isPaused, next]);

  const getVisible = (count: number) => {
    const items = [];
    for (let i = 0; i < count; i++) {
      items.push(testimonials[(current + i) % totalSlides]);
    }
    return items;
  };

  return (
    <section className="py-20 bg-secondary/30" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-accent mb-4 font-oswald uppercase tracking-wide">
            Trusted by Contractors & Builders Nationwide
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Hear from professionals who rely on us for genuine building materials, competitive prices, and dependable delivery across Kenya.
          </p>
        </div>

        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          role="region"
          aria-roledescription="carousel"
          aria-label="Customer testimonials"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "ArrowLeft") prev();
            if (e.key === "ArrowRight") next();
          }}
        >
          <div className="overflow-hidden px-2">
            <div
              className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-500 ease-in-out ${
                isAnimating
                  ? direction === "right"
                    ? "opacity-0 translate-x-8"
                    : "opacity-0 -translate-x-8"
                  : "opacity-100 translate-x-0"
              }`}
            >
              {getVisible(3).map((t, i) => (
                <div
                  key={`${current}-${i}`}
                  className={`bg-card rounded-2xl p-8 shadow-md border border-border/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 group ${
                    i === 2 ? "hidden lg:block" : i === 1 ? "hidden md:block" : ""
                  }`}
                >
                  <Quote className="w-8 h-8 text-primary/30 mb-4 group-hover:text-primary/60 transition-colors" />
                  <p className="text-foreground/80 leading-relaxed mb-6 text-sm md:text-base italic">
                    "{t.text}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary/15 flex items-center justify-center text-primary font-bold text-lg">
                      {t.name.charAt(0)}
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-foreground text-sm">{t.name}</p>
                      <p className="text-muted-foreground text-xs">{t.role}</p>
                    </div>
                  </div>
                  <div className="flex gap-0.5 mt-3">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star
                        key={s}
                        className={`w-4 h-4 ${s < t.rating ? "text-yellow-400 fill-yellow-400" : "text-muted-foreground/30"}`}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prev}
            className="absolute -left-2 md:-left-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card shadow-lg border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:scale-110 transition-all duration-200"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            className="absolute -right-2 md:-right-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card shadow-lg border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:scale-110 transition-all duration-200"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i, i > current ? "right" : "left")}
              className={`rounded-full transition-all duration-300 ${
                i === current
                  ? "w-8 h-3 bg-primary scale-110"
                  : "w-3 h-3 bg-muted-foreground/30 hover:bg-primary/50"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
