import { Link } from "@tanstack/react-router";
import { SITE, waLink } from "@/lib/site";
import logo from "@/assets/jain-logo.png.asset.json";

export function Footer() {
  return (
    <footer className="border-t border-border bg-[color-mix(in_oklab,var(--mint)_25%,var(--background))]">
      <div className="container-x px-6 py-16 grid gap-10 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2.5 mb-3">
            <img src={logo.url} alt={`${SITE.name} logo`} className="h-10 w-10 object-contain" />
            <span className="font-display text-lg">{SITE.name}</span>
          </div>

          <p className="text-sm text-muted-foreground leading-relaxed">
            {SITE.nameHi} — your trusted neighbourhood pharmacy serving
            Panchkula with care.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-medium mb-3 text-foreground">Explore</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-primary">Home</Link></li>
            <li><Link to="/contents" className="hover:text-primary">Contents</Link></li>
            <li><Link to="/why-choose-us" className="hover:text-primary">Why Choose Us</Link></li>
            <li><Link to="/about" className="hover:text-primary">About</Link></li>
            <li><Link to="/visit" className="hover:text-primary">Visit Us</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-medium mb-3 text-foreground">Contact</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>{SITE.address}</li>
            <li><a href={`tel:${SITE.phoneIntl}`} className="hover:text-primary">{SITE.phone}</a></li>
            <li><a href={waLink("Hello!")} className="hover:text-primary">Message us</a></li>
            <li>{SITE.hours}</li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-medium mb-3 text-foreground">Follow</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href={SITE.instagram} target="_blank" rel="noreferrer" className="hover:text-primary">Instagram</a></li>
            <li><a href={waLink("Hi!")} className="hover:text-primary">Message us</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} {SITE.name}. All rights reserved.
      </div>
    </footer>
  );
}
