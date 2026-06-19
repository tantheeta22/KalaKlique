import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { DeliveryForm } from "@/components/DeliveryForm";
import { InstagramSection } from "@/components/InstagramSection";
import { SITE, waLink } from "@/lib/site";
import hero from "@/assets/hero-pharmacy.jpg";
import logo from "@/assets/jain-logo.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Jain Medical Hall — Trusted Pharmacy in Panchkula" },
      { name: "description", content: "Genuine medicines, free home delivery, BP & weight checks. Your trusted pharmacy in Sector 25, Panchkula." },
      { property: "og:title", content: "Jain Medical Hall — Trusted Pharmacy in Panchkula" },
      { property: "og:description", content: "Genuine medicines, free home delivery, BP & weight checks." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[color-mix(in_oklab,var(--mint)_35%,var(--background))] to-background" />
        <div className="absolute -top-20 -right-20 -z-10 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="container-x px-6 pt-10 pb-24 md:py-28 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 reveal">
            <div className="flex items-center gap-3 mb-5 animate-fade-in">
              <img
                src={logo.url}
                alt={`${SITE.name} logo`}
                className="h-14 w-14 md:h-16 md:w-16 object-contain float-y drop-shadow-md"
              />
              <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-primary">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                {SITE.nameHi} · Since the neighbourhood
              </span>
            </div>
            <h1 className="mt-2 text-5xl md:text-6xl lg:text-7xl leading-[1.05]">
              Your trusted <em className="text-primary not-italic">neighbourhood</em> pharmacy.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
              Quality medicines, reliable healthcare support, and convenient
              services — all under one roof in Sector 25, Panchkula.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#order" className="btn-primary">Order Medicine →</a>
              <a
                href={waLink("Hi! I'd like to check the availability of a product: ")}
                className="btn-secondary"
              >
                Check Availability
              </a>
              <Link to="/visit" className="btn-secondary">Visit Us</Link>
            </div>
            <div className="mt-10 flex items-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-amber-500 text-lg">★</span>
                <span className="font-medium">{SITE.rating}</span>
                <span className="text-muted-foreground">({SITE.reviews} reviews)</span>
              </div>
              <div className="h-6 w-px bg-border" />
              <span className="text-muted-foreground">Open until 10 PM daily</span>
            </div>
          </div>
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-primary/20 to-mint/40 -rotate-3" />
              <img
                src={hero}
                alt="Friendly pharmacist at Jain Medical Hall"
                className="relative rounded-[2.5rem] shadow-2xl w-full h-full object-cover float-y"
                width={1024}
                height={1024}
              />
              <div className="absolute -bottom-8 -left-4 md:-left-8 glass-card rounded-2xl p-5 md:p-6 w-60 md:w-72 animate-fade-in shadow-soft">
                <p className="text-xs uppercase tracking-wider text-primary font-medium">Today</p>
                <p className="font-display text-lg md:text-xl mt-1 leading-tight">Free BP check available</p>
                <p className="text-xs text-muted-foreground mt-1">Walk in any time before 10 PM</p>
              </div>
              <div className="absolute -top-8 -right-4 md:-right-8 glass-card rounded-2xl p-5 md:p-6 w-56 md:w-64 animate-fade-in shadow-soft">
                <p className="text-xs uppercase tracking-wider text-primary font-medium">Home Delivery</p>
                <p className="font-display text-lg md:text-xl mt-1 leading-tight">Within Panchkula</p>
                <p className="text-xs text-muted-foreground mt-1">Free · Same-day for in-stock</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="section pt-0">
        <div className="container-x px-6">
          <div className="glass-card rounded-3xl p-8 md:p-12 grid md:grid-cols-4 gap-8">
            {[
              { t: "Genuine Medicines", d: "Sourced from authorised distributors only." },
              { t: "Personal Care", d: "Friendly guidance from your local pharmacist." },
              { t: "Convenient Delivery", d: "Doorstep delivery within Panchkula." },
              { t: "Customer First", d: "Care and trust built over the years." },
            ].map((x) => (
              <div key={x.t}>
                <div className="h-10 w-10 rounded-xl bg-primary/10 grid place-items-center text-primary mb-3">✦</div>
                <h3 className="text-lg">{x.t}</h3>
                <p className="text-sm text-muted-foreground mt-1.5">{x.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section pt-0">
        <div className="container-x px-6">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.25em] text-primary">Our Services</span>
            <h2 className="text-4xl md:text-5xl mt-3">Free everyday healthcare, on us.</h2>
          </div>
          <div className="mt-12 grid md:grid-cols-3 gap-5">
            {[
              { t: "Free Blood Pressure Check", d: "Monitor your health regularly with our complimentary BP checking service.", i: "♥" },
              { t: "Free Weight Check", d: "Track your fitness and wellness journey with quick weight checks.", i: "⚖" },
              { t: "Free Home Delivery", d: "Get medicines delivered conveniently to your doorstep.", i: "↳" },
            ].map((s) => (
              <div key={s.t} className="group rounded-3xl bg-card border border-border p-8 hover:shadow-soft hover:-translate-y-1 transition-all">
                <div className="h-12 w-12 rounded-2xl bg-mint text-primary grid place-items-center text-2xl mb-5">{s.i}</div>
                <h3 className="text-xl">{s.t}</h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{s.d}</p>
                <a href={waLink(`Hi, I'd like to know about: ${s.t}`)} className="mt-5 inline-flex text-sm text-primary group-hover:gap-2 gap-1 transition-all">
                  Request now <span>→</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DELIVERY FORM */}
      <section id="order" className="section pt-0">
        <div className="container-x px-6 grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5">
            <span className="text-xs uppercase tracking-[0.25em] text-primary">Home Delivery</span>
            <h2 className="text-4xl md:text-5xl mt-3">Need medicines delivered?</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Share a few details and we'll confirm your order shortly.
              Free delivery across Panchkula.
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              {["Confirmed shortly", "Same-day for in-stock items", "Cash or UPI on delivery"].map((x) => (
                <li key={x} className="flex items-center gap-3 text-muted-foreground">
                  <span className="h-5 w-5 rounded-full bg-primary/10 text-primary grid place-items-center text-xs">✓</span>
                  {x}
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-7">
            <DeliveryForm />
          </div>
        </div>
      </section>

      <InstagramSection />
    </Layout>
  );
}
