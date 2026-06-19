import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { waLink } from "@/lib/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Jain Medical Hall" },
      { name: "description", content: "Jain Medical Hall is a trusted local pharmacy in Panchkula. Genuine medicines, helpful guidance and customer care with a personal touch." },
      { property: "og:title", content: "About — Jain Medical Hall" },
      { property: "og:description", content: "Making everyday healthcare simple, reliable, and convenient." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <Layout>
      <section className="section">
        <div className="container-x px-6 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <span className="text-xs uppercase tracking-[0.25em] text-primary">About</span>
            <h1 className="text-5xl md:text-7xl mt-3 leading-[1.05]">
              A pharmacy <em className="text-primary not-italic">built on trust</em>.
            </h1>
            <p className="mt-8 text-lg text-muted-foreground leading-relaxed">
              Jain Medical Hall is a trusted local pharmacy dedicated to making
              healthcare easier and more accessible. With a focus on genuine
              medicines, helpful guidance, and customer care, we serve our
              community with professionalism and a personal touch.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We're proud to be part of Panchkula's daily rhythm — from the
              prescription refill on the way home to the late-evening
              thermometer run. Whatever you need, we're here.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a href={waLink("Hi! I have a quick question.")} className="btn-primary">Ask a Question</a>
              <Link to="/visit" className="btn-secondary">Visit the Store</Link>
            </div>
          </div>
          <aside className="lg:col-span-5">
            <div className="glass-card rounded-3xl p-8">
              <span className="text-xs uppercase tracking-[0.25em] text-primary">Our Mission</span>
              <p className="font-display text-2xl mt-4 leading-snug">
                "Making everyday healthcare simple, reliable, and convenient."
              </p>
            </div>
            <div className="mt-5 grid grid-cols-2 gap-3">
              {[
                { n: "4.8★", l: "Customer rating" },
                { n: "Daily", l: "Open until 10 PM" },
                { n: "Free", l: "Home delivery" },
                { n: "Local", l: "Panchkula serving" },
              ].map((s) => (
                <div key={s.l} className="rounded-2xl bg-card border border-border p-5">
                  <div className="font-display text-2xl text-primary">{s.n}</div>
                  <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>
    </Layout>
  );
}
