import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { CATEGORIES, findCategory } from "@/lib/catalog";
import { waLink } from "@/lib/site";

export const Route = createFileRoute("/contents/$category")({
  head: ({ params }) => {
    const c = findCategory(params.category);
    const name = c?.name ?? "Category";
    return {
      meta: [
        { title: `${name} — Jain Medical Hall` },
        { name: "description", content: c?.description ?? "Browse our catalogue." },
        { property: "og:title", content: `${name} — Jain Medical Hall` },
        { property: "og:description", content: c?.description ?? "" },
      ],
    };
  },
  loader: ({ params }) => {
    const c = findCategory(params.category);
    if (!c) throw notFound();
    return { category: c };
  },
  component: CategoryPage,
  notFoundComponent: () => (
    <Layout>
      <section className="section">
        <div className="container-x px-6 text-center">
          <h1 className="text-4xl">Category not found</h1>
          <Link to="/contents" className="btn-secondary mt-6 inline-flex">Back to catalogue</Link>
        </div>
      </section>
    </Layout>
  ),
});

function CategoryPage() {
  const { category } = Route.useLoaderData();
  return (
    <Layout>
      <section className="section">
        <div className="container-x px-6">
          <Link to="/contents" className="text-sm text-muted-foreground hover:text-primary">← All categories</Link>
          <div className="mt-6 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-primary">Category</span>
              <h1 className="text-5xl md:text-6xl mt-3">{category.name}</h1>
              <p className="text-muted-foreground mt-3 max-w-xl">{category.description}</p>
            </div>
            <a href={waLink(`Hi, I'd like to enquire about products in ${category.name}.`)} className="btn-primary self-start">
              Ask us
            </a>
          </div>

          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {category.items.map((it: { name: string; description: string }) => (
              <div key={it.name} className="rounded-3xl border border-border bg-card p-6 flex flex-col">
                <span className="text-[10px] uppercase tracking-widest text-muted-foreground">{category.name}</span>
                <h3 className="text-lg mt-2">{it.name}</h3>
                <p className="text-sm text-muted-foreground mt-2 flex-1">{it.description}</p>
                <a
                  href={waLink(`Hi, is "${it.name}" available?`)}
                  className="mt-5 inline-flex items-center gap-2 text-sm text-primary"
                >
                  Ask us →
                </a>
              </div>
            ))}
          </div>

          <div className="mt-20 border-t border-border pt-12">
            <h3 className="text-2xl mb-6">Other categories</h3>
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.filter((c) => c.slug !== category.slug).map((c) => (
                <Link
                  key={c.slug}
                  to="/contents/$category"
                  params={{ category: c.slug }}
                  className="rounded-full border border-border px-4 py-2 text-sm hover:bg-mint hover:border-primary/20"
                >
                  {c.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
