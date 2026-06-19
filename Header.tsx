import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { SITE, waLink } from "@/lib/site";
import logo from "@/assets/jain-logo.png.asset.json";


const nav = [
  { to: "/", label: "Home" },
  { to: "/contents", label: "Contents" },
  { to: "/why-choose-us", label: "Why Choose Us" },
  { to: "/about", label: "About" },
  { to: "/visit", label: "Visit Us" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div
        className={`container-x flex items-center justify-between px-5 ${
          scrolled ? "glass-card rounded-full px-5 py-2" : ""
        }`}
      >
        <Link to="/" className="flex items-center gap-2.5">
          <img src={logo.url} alt={`${SITE.name} logo`} className="h-11 w-11 object-contain" />
          <span className="hidden sm:flex flex-col leading-none">
            <span className="font-display text-lg">{SITE.name}</span>
            <span className="text-[10px] tracking-wider text-muted-foreground uppercase">
              Customer First · Panchkula
            </span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-7 text-sm">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-foreground/70 hover:text-primary transition-colors"
              activeProps={{ className: "text-primary font-medium" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href={waLink("Hi! I'd like to check the availability of a product: ")}
            className="btn-secondary !py-2 !px-4 text-sm hidden sm:inline-flex"
          >
            Check Availability
          </a>
          <Link
            to="/"
            hash="order"
            className="btn-primary !py-2 !px-4 text-sm"
          >
            Order Now
          </Link>
          <button
            onClick={() => setOpen(!open)}
            aria-label="Menu"
            className="md:hidden grid h-9 w-9 place-items-center rounded-full border border-border"
          >
            <span className="block h-[2px] w-4 bg-foreground" />
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden container-x mt-2 px-5">
          <div className="glass-card rounded-2xl p-4 flex flex-col gap-2">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-muted text-sm"
              >
                {n.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
