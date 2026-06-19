import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { InstagramSection } from "@/components/InstagramSection";
import { SITE, waLink } from "@/lib/site";

export const Route = createFileRoute("/visit")({
  head: () => ({
    meta: [
      { title: "Visit Us — Jain Medical Hall" },
      { name: "description", content: "Visit Jain Medical Hall in Sector 25, Panchkula Extension. Open daily until 10 PM. Call 098727 30293." },
      { property: "og:title", content: "Visit Us — Jain Medical Hall" },
      { property: "og:description", content: "Sector 25, Panchkula Extension. Open daily until 10 PM." },
    ],
  }),
  component: Visit,
});

function Visit() {
  return (
    <Layout>
      <section className="section">
        <div className="container-x px-6">
          <span className="text-xs uppercase tracking-[0.25em] text-primary">Visit Us</span>
          <h1 className="text-5xl md:text-7xl mt-3 max-w-3xl leading-[1.05]">
            Stop by <em className="text-primary not-italic">Jain Medical Hall</em>.
          </h1>

          <div className="mt-14 grid lg:grid-cols-12 gap-8">
            <div className="lg:col-span-5 space-y-5">
              <InfoCard label="Address" value={SITE.address} />
              <InfoCard label="Phone" value={SITE.phone} href={`tel:${SITE.phoneIntl}`} />
              <InfoCard label="Hours" value={SITE.hours} />
              <div className="flex flex-wrap gap-3 pt-2">
                <a href={SITE.mapsDirections} target="_blank" rel="noreferrer" className="btn-primary">Get Directions</a>
                <a href={`tel:${SITE.phoneIntl}`} className="btn-secondary">Call Now</a>
                <a href={waLink("Hi! I'd like to ask a question.")} className="btn-secondary">Message us</a>
              </div>
            </div>
            <div className="lg:col-span-7">
              <div className="rounded-3xl overflow-hidden border border-border shadow-soft aspect-[4/3] bg-muted">
                <iframe
                  src={SITE.mapsEmbed}
                  className="w-full h-full"
                  loading="lazy"
                  title="Jain Medical Hall location"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <InstagramSection heading="Stay Connected" cta="View Instagram" />
    </Layout>
  );
}

function InfoCard({ label, value, href }: { label: string; value: string; href?: string }) {
  const Inner = (
    <div className="rounded-3xl border border-border bg-card p-6 hover:shadow-soft transition-shadow">
      <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">{label}</span>
      <p className="mt-2 text-lg">{value}</p>
    </div>
  );
  return href ? <a href={href} className="block">{Inner}</a> : Inner;
}
