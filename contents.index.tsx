import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { CATEGORIES } from "@/lib/catalog";

export const Route = createFileRoute("/contents/")({
  head: () => ({
    meta: [
      { title: "Contents — Jain Medical Hall" },
      { name: "description", content: "Explore medicines, healthcare products, personal care, wellness, baby care and more available at Jain Medical Hall." },
      { property: "og:title", content: "Contents — Jain Medical Hall" },
      { property: "og:description", content: "Browse our pharmacy catalogue by category." },
    ],
  }),
  component: Contents,
});

function Contents() {
  return (
    <Layout>
      <section className="section">
        <div className="container-x px-6">
          <span className="text-xs uppercase tracking-[0.25em] text-primary">Catalogue</span>
          <h1 className="text-5xl md:text-6xl mt-3 max-w-3xl">What you'll find at our store.</h1>
          <p className="mt-5 text-lg text-muted-foreground max-w-2xl">
            Browse by category. Tap any product to enquire — we'll
            check stock and confirm availability for you.
          </p>

          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {CATEGORIES.map((c) => (
              <Link
                key={c.slug}
                to="/contents/$category"
                params={{ category: c.slug }}
                className="group rounded-3xl border border-border bg-card p-7 hover:shadow-soft hover:-translate-y-1 transition-all"
              >
                <div className="flex items-start justify-between">
                  <div className="h-12 w-12 rounded-2xl bg-mint grid place-items-center text-primary text-xl">✚</div>
                  <span className="text-xs text-muted-foreground">{c.items.length} items</span>
                </div>
                <h3 className="text-xl mt-5">{c.name}</h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{c.description}</p>
                <span className="mt-6 inline-flex items-center gap-1 text-sm text-primary group-hover:gap-2 transition-all">
                  Explore <span>→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
