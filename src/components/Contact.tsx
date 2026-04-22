import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => (
  <section id="contact" className="bg-concrete py-20">
    <div className="container">
      <div className="mb-12 text-center">
        <p className="mb-2 font-heading text-sm uppercase tracking-[0.2em] text-primary">Get In Touch</p>
        <h2 className="font-heading text-3xl font-bold uppercase text-accent md:text-4xl">Contact Us</h2>
      </div>
      <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2">
        <div className="space-y-6">
          <p className="leading-relaxed text-muted-foreground">
            Ready to place an order or need a custom quote? Reach out to our team and we'll get back to you promptly.
          </p>
          <div className="flex items-start gap-4">
            <Mail size={20} className="mt-1 shrink-0 text-primary" />
            <div>
              <p className="font-semibold text-accent">Email</p>
              <a href="mailto:simbacement@test.com" className="text-muted-foreground transition-colors hover:text-primary">simbacement@test.com</a>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Phone size={20} className="mt-1 shrink-0 text-primary" />
            <div>
              <p className="font-semibold text-accent">WhatsApp for Orders</p>
              <a href="https://wa.me/254731030404" className="text-muted-foreground transition-colors hover:text-primary">0731030404</a>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <MapPin size={20} className="mt-1 shrink-0 text-primary" />
            <div>
              <p className="font-semibold text-accent">Location</p>
              <p className="text-muted-foreground">Nakuru & Nairobi, Kenya</p>
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
