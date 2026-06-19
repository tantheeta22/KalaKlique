import { useEffect, useState } from "react";
import { SITE, waLink } from "@/lib/site";

const KEY = "jmh_welcome_seen";

export function WelcomePopup() {
  const [open, setOpen] = useState(false);
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!localStorage.getItem(KEY)) {
      const t = setTimeout(() => setOpen(true), 1200);
      return () => clearTimeout(t);
    }
  }, []);

  const close = () => {
    localStorage.setItem(KEY, "1");
    setOpen(false);
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const clean = phone.replace(/\D/g, "");
    if (clean.length < 10) return;
    setSubmitted(true);
    const msg = `Hello ${SITE.name}! My number is ${clean}. Please send me your free healthcare service details, home delivery info, and store details.`;
    window.open(waLink(msg), "_blank");
    setTimeout(close, 1200);
  };

  if (!open) return null;

  const qrSrc = `https://api.qrserver.com/v1/create-qr-code/?size=240x240&margin=8&data=${encodeURIComponent(
    waLink("Hello! Please send me your healthcare service details.")
  )}`;

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-foreground/40 backdrop-blur-sm p-4 animate-in fade-in duration-300">
      <div className="glass-card relative w-full max-w-lg rounded-3xl p-8 animate-in zoom-in-95 duration-300 bg-card">
        <button
          onClick={close}
          aria-label="Close"
          className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full hover:bg-muted text-muted-foreground"
        >
          ✕
        </button>
        <div className="flex flex-col items-center text-center">
          <span className="text-xs uppercase tracking-[0.25em] text-primary mb-3">
            Free · Quick update
          </span>
          <h2 className="text-2xl md:text-3xl">
            Get Free Healthcare Service Details
          </h2>
          <p className="text-sm text-muted-foreground mt-3 max-w-sm">
            Scan the QR code or enter your mobile number to instantly receive
            our free service details.
          </p>
          <div className="my-6 rounded-2xl border border-border bg-background p-3">
            <img src={qrSrc} alt="QR code" width={200} height={200} className="rounded-xl" />
          </div>
          <form onSubmit={submit} className="w-full space-y-3">
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Your mobile number"
              className="w-full rounded-full border border-input bg-background px-5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
            <button type="submit" className="btn-primary w-full justify-center">
              {submitted ? "Opening chat…" : "Send Me Details"}
            </button>
          </form>
          <button onClick={close} className="mt-4 text-xs text-muted-foreground hover:text-foreground">
            Maybe later
          </button>
        </div>
      </div>
    </div>
  );
}
