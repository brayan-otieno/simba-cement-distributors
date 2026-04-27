import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Contact = () => (
  <section id="contact" className="bg-concrete py-20" itemScope itemType="https://schema.org/HardwareStore">
    <meta itemProp="name" content="Simba Cement Hardware" />
    <div className="container">
      <div className="mb-12 text-center">
        <p className="mb-2 font-heading text-sm uppercase tracking-[0.2em] text-primary">Get In Touch</p>
        <h2 className="font-heading text-3xl font-bold uppercase text-accent md:text-4xl">Contact Simba Cement Hardware</h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm text-muted-foreground">
          Authorised cement & building materials supplier serving Nairobi, Nakuru and countrywide. Browse our{" "}
          <a href="#products" className="text-primary underline-offset-2 hover:underline">product catalogue</a>,{" "}
          <a href="#services" className="text-primary underline-offset-2 hover:underline">delivery services</a>, or{" "}
          <a href="#about" className="text-primary underline-offset-2 hover:underline">learn more about us</a>.
        </p>
      </div>
      <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2">
        <div className="space-y-6">
          <p className="leading-relaxed text-muted-foreground">
            Need building materials or a custom quote? Reach out and our team will help you find the right products at the best prices.
          </p>
          <div className="flex items-start gap-4">
            <Mail size={20} className="mt-1 shrink-0 text-primary" />
            <div>
              <p className="font-semibold text-accent">Email</p>
              <a href="mailto:simbacement@test.com" itemProp="email" className="text-muted-foreground transition-colors hover:text-primary">simbacement@test.com</a>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Phone size={20} className="mt-1 shrink-0 text-primary" />
            <div>
              <p className="font-semibold text-accent">Call / WhatsApp for Orders</p>
              <a href="tel:+254731030404" itemProp="telephone" className="block text-muted-foreground transition-colors hover:text-primary">+254 731 030 404</a>
              <a href="https://wa.me/254731030404" target="_blank" rel="noopener noreferrer" className="text-xs text-primary hover:underline">Chat on WhatsApp →</a>
            </div>
          </div>
          <div className="flex items-start gap-4" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
            <MapPin size={20} className="mt-1 shrink-0 text-primary" />
            <div>
              <p className="font-semibold text-accent">Yard & Showroom</p>
              <p className="text-muted-foreground">
                <span itemProp="streetAddress">Industrial Area</span>,{" "}
                <span itemProp="addressLocality">Nairobi</span> &{" "}
                <span itemProp="addressLocality">Nakuru</span>,{" "}
                <span itemProp="addressCountry">Kenya</span>
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Clock size={20} className="mt-1 shrink-0 text-primary" />
            <div>
              <p className="font-semibold text-accent">Opening Hours</p>
              <p className="text-muted-foreground">Mon – Sat: 7:30 AM – 6:00 PM</p>
              <p className="text-xs text-muted-foreground">Sunday: Orders by WhatsApp only</p>
            </div>
          </div>
        </div>
        <form className="space-y-4 rounded-lg bg-card p-8 shadow-md" onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Full Name" className="w-full rounded border bg-background px-4 py-3 text-sm text-foreground outline-none focus:border-primary" />
          <input type="email" placeholder="Email Address" className="w-full rounded border bg-background px-4 py-3 text-sm text-foreground outline-none focus:border-primary" />
          <input type="text" placeholder="Phone Number" className="w-full rounded border bg-background px-4 py-3 text-sm text-foreground outline-none focus:border-primary" />
          <textarea placeholder="Your Message" rows={4} className="w-full resize-none rounded border bg-background px-4 py-3 text-sm text-foreground outline-none focus:border-primary" />
          <button type="submit" className="w-full rounded bg-primary py-3 font-semibold text-primary-foreground transition-colors hover:bg-primary/85">
            Send Message
          </button>
        </form>
      </div>
    </div>
  </section>
);

export default Contact;
