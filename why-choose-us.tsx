import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { SITE, waLink } from "@/lib/site";

export const Route = createFileRoute("/why-choose-us")({
  head: () => ({
    meta: [
      { title: "Why Choose Us — Jain Medical Hall" },
      { name: "description", content: "Trusted medicines, convenient location, customer satisfaction and easy ordering — discover why Panchkula chooses Jain Medical Hall." },
      { property: "og:title", content: "Why Choose Us — Jain Medical Hall" },
      { property: "og:description", content: "Healthcare with trust & care." },
    ],
  }),
  component: WhyUs,
});

const reviews = [
  { q: "Great help given and great service.", a: "Verified customer" },
  { q: "Excellent dealing and very professional behaviour with human touch.", a: "Verified customer" },
];

function WhyUs() {
  return (
    <Layout>
      <section className="section">
        <div className="container-x px-6">
          <span className="text-xs uppercase tracking-[0.25em] text-primary">Why Choose Us</span>
          <h1 className="text-5xl md:text-7xl mt-3 max-w-3xl leading-[1.05]">
            Healthcare with <em className="text-primary not-italic">trust & care</em>.
          </h1>

          <div className="mt-16 grid md:grid-cols-2 gap-5">
            {[
              { t: "Trusted Medicines", d: "Providing reliable healthcare products with customer-focused service from authorised distributors." },
              { t: "Convenient Location", d: "Serving the Panchkula community with accessible pharmacy solutions in Sector 25 Extension." },
              { t: "Customer Satisfaction", d: `Rated ${SITE.rating}★ by ${SITE.reviews} customers who trust us with their family's care.` },
              { t: "Easy Ordering", d: "Quick assistance, home delivery and easy medicine requests — the simple way." },
            ].map((x) => (
              <div key={x.t} className="rounded-3xl border border-border bg-card p-8">
                <div className="h-10 w-10 rounded-xl bg-primary text-primary-foreground grid place-items-center mb-4">✦</div>
                <h3 className="text-2xl">{x.t}</h3>
                <p className="text-muted-foreground mt-3 leading-relaxed">{x.d}</p>
              </div>
            ))}
          </div>

          <div className="mt-20 glass-card rounded-3xl p-10 md:p-14">
            <div className="flex items-center gap-3 mb-2 text-amber-500 text-2xl">★★★★★</div>
            <p className="text-sm text-muted-foreground">{SITE.rating} average from {SITE.reviews} reviews</p>
            <div className="mt-8 grid md:grid-cols-2 gap-6">
              {reviews.map((r) => (
                <figure key={r.q} className="rounded-2xl bg-background border border-border p-6">
                  <blockquote className="font-display text-xl leading-snug">"{r.q}"</blockquote>
                  <figcaption className="text-sm text-muted-foreground mt-4">— {r.a}</figcaption>
                </figure>
              ))}
            </div>
          </div>

          <div className="mt-16 flex flex-wrap gap-3">
            <a href={waLink("Hi, I'd like to place an order.")} className="btn-primary">Chat with us</a>
            <Link to="/visit" className="btn-secondary">Visit Us</Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
