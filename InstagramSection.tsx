import { SITE } from "@/lib/site";

export function InstagramSection({
  heading = "Follow Our Healthcare Updates",
  cta = "Follow Us on Instagram",
}: {
  heading?: string;
  cta?: string;
}) {
  const tiles = [
    "from-emerald-200 to-emerald-50",
    "from-amber-100 to-emerald-100",
    "from-emerald-100 to-amber-50",
    "from-emerald-50 to-emerald-200",
    "from-amber-50 to-emerald-100",
    "from-emerald-100 to-amber-100",
  ];
  return (
    <section className="section">
      <div className="container-x">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-primary">Instagram</span>
            <h2 className="text-3xl md:text-4xl mt-2">{heading}</h2>
          </div>
          <a href={SITE.instagram} target="_blank" rel="noreferrer" className="btn-secondary self-start">
            {cta} →
          </a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
          {tiles.map((t, i) => (
            <a
              key={i}
              href={SITE.instagram}
              target="_blank"
              rel="noreferrer"
              className={`aspect-square rounded-2xl bg-gradient-to-br ${t} relative overflow-hidden group`}
            >
              <div className="absolute inset-0 grid place-items-center text-emerald-900/40 text-4xl font-display group-hover:scale-110 transition-transform">
                ♥
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
