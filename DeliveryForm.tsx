import { useEffect, useRef, useState } from "react";
import { SITE, waLink } from "@/lib/site";

type SavedCustomer = { name: string; phone: string; address: string };
const STORAGE_KEY = "jmh_customer_v1";

type Mode = "text" | "prescription";

export function DeliveryForm() {
  const [done, setDone] = useState(false);
  const [remembered, setRemembered] = useState<SavedCustomer | null>(null);
  const [editDetails, setEditDetails] = useState(false);
  const [mode, setMode] = useState<Mode>("text");
  const [prescriptionFile, setPrescriptionFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);
  const cameraRef = useRef<HTMLInputElement>(null);

  const [form, setForm] = useState({
    name: "", phone: "", medicine: "", address: "", notes: "",
  });

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const saved = JSON.parse(raw) as SavedCustomer;
        setRemembered(saved);
        setForm((f) => ({ ...f, ...saved }));
      }
    } catch {}
  }, []);

  useEffect(() => {
    if (!prescriptionFile) { setPreview(null); return; }
    const url = URL.createObjectURL(prescriptionFile);
    setPreview(url);
    return () => URL.revokeObjectURL(url);
  }, [prescriptionFile]);

  const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [k]: e.target.value });

  const onPickFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (f) setPrescriptionFile(f);
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const customer: SavedCustomer = { name: form.name, phone: form.phone, address: form.address };
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(customer)); } catch {}

    const medicineLine = mode === "prescription"
      ? "Medicine: (Prescription photo attached)"
      : `Medicine: ${form.medicine}`;

    const msg = `*New Delivery Request — ${SITE.name}*
Name: ${form.name}
Phone: ${form.phone}
${medicineLine}
Address: ${form.address}
Notes: ${form.notes || "—"}`;

    // Try native share with file (mobile) so the image goes through to WhatsApp.
    if (mode === "prescription" && prescriptionFile) {
      const nav = navigator as Navigator & { canShare?: (d: ShareData) => boolean };
      const shareData: ShareData = { text: msg, files: [prescriptionFile] };
      if (nav.canShare && nav.canShare(shareData)) {
        try {
          await nav.share(shareData);
          setDone(true);
          return;
        } catch {
          // user cancelled or failed — fall back to WhatsApp link
        }
      }
      // Fallback: open WhatsApp text and instruct user to attach the photo.
      const fallbackMsg = msg + "\n\n(Please attach the prescription photo in the next message.)";
      window.open(waLink(fallbackMsg), "_blank");
    } else {
      window.open(waLink(msg), "_blank");
    }
    setDone(true);
  };

  const resetForNewRequest = () => {
    setDone(false);
    setMode("text");
    setPrescriptionFile(null);
    setForm((f) => ({
      name: remembered?.name ?? "",
      phone: remembered?.phone ?? "",
      address: remembered?.address ?? "",
      medicine: "",
      notes: "",
    }));
  };

  const forgetMe = () => {
    try { localStorage.removeItem(STORAGE_KEY); } catch {}
    setRemembered(null);
    setEditDetails(true);
    setForm({ name: "", phone: "", medicine: "", address: "", notes: "" });
  };

  if (done) {
    return (
      <div className="glass-card rounded-3xl p-10 text-center">
        <div className="mx-auto h-14 w-14 rounded-full bg-primary/10 grid place-items-center text-primary text-2xl mb-4">✓</div>
        <h3 className="text-2xl">Request sent</h3>
        <p className="text-muted-foreground mt-2 max-w-md mx-auto">
          We've received your request and will confirm shortly.
        </p>
        <button className="btn-primary mt-6" onClick={resetForNewRequest}>
          Place another request
        </button>
      </div>
    );
  }

  const showSavedSummary = remembered && !editDetails;

  return (
    <form onSubmit={submit} className="glass-card rounded-3xl p-6 md:p-10 grid gap-5">
      {/* Customer details */}
      {showSavedSummary ? (
        <div className="rounded-2xl border border-primary/20 bg-primary/5 p-4 flex items-start justify-between gap-3">
          <div className="text-sm">
            <p className="font-medium text-foreground">Delivering to {remembered!.name}</p>
            <p className="text-muted-foreground mt-0.5">{remembered!.phone}</p>
            <p className="text-muted-foreground">{remembered!.address}</p>
          </div>
          <div className="flex flex-col gap-1 text-xs">
            <button type="button" onClick={() => setEditDetails(true)} className="text-primary hover:underline">Edit</button>
            <button type="button" onClick={forgetMe} className="text-muted-foreground hover:underline">Forget me</button>
          </div>
        </div>
      ) : (
        <div className="grid gap-4">
          <div className="grid md:grid-cols-2 gap-4">
            <Field label="Customer Name" value={form.name} onChange={update("name")} required />
            <Field label="Mobile Number" type="tel" value={form.phone} onChange={update("phone")} required />
          </div>
          <Field label="Delivery Address" value={form.address} onChange={update("address")} required />
        </div>
      )}

      {/* Medicine input — choose mode */}
      <div>
        <label className="text-xs uppercase tracking-wider text-muted-foreground">Medicine</label>
        <div className="mt-2 inline-flex rounded-full border border-border p-1 bg-background">
          <button
            type="button"
            onClick={() => setMode("text")}
            className={`px-4 py-1.5 text-xs rounded-full transition ${mode === "text" ? "bg-primary text-primary-foreground" : "text-muted-foreground"}`}
          >
            Type medicine name
          </button>
          <button
            type="button"
            onClick={() => setMode("prescription")}
            className={`px-4 py-1.5 text-xs rounded-full transition ${mode === "prescription" ? "bg-primary text-primary-foreground" : "text-muted-foreground"}`}
          >
            Upload prescription
          </button>
        </div>

        {mode === "text" ? (
          <input
            value={form.medicine}
            onChange={update("medicine")}
            required
            placeholder="e.g. Crocin 500mg, Dolo, etc."
            className="mt-3 w-full rounded-full border border-input bg-background px-5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          />
        ) : (
          <div className="mt-3 grid gap-3">
            <div className="flex flex-wrap gap-2">
              <button type="button" onClick={() => fileRef.current?.click()} className="btn-secondary !py-2 !px-4 text-sm">
                📁 Choose from gallery
              </button>
              <button type="button" onClick={() => cameraRef.current?.click()} className="btn-secondary !py-2 !px-4 text-sm">
                📷 Take photo now
              </button>
              <input ref={fileRef} type="file" accept="image/*" hidden onChange={onPickFile} />
              <input ref={cameraRef} type="file" accept="image/*" capture="environment" hidden onChange={onPickFile} />
            </div>
            {preview && (
              <div className="relative rounded-2xl overflow-hidden border border-border max-w-xs">
                <img src={preview} alt="Prescription preview" className="w-full h-48 object-cover" />
                <button
                  type="button"
                  onClick={() => setPrescriptionFile(null)}
                  className="absolute top-2 right-2 h-7 w-7 rounded-full bg-background/90 text-foreground text-xs"
                  aria-label="Remove"
                >
                  ✕
                </button>
              </div>
            )}
            {!prescriptionFile && (
              <p className="text-xs text-muted-foreground">
                Upload a clear photo of your prescription. On mobile, it'll be sent directly.
              </p>
            )}
          </div>
        )}
      </div>

      <div>
        <label className="text-xs uppercase tracking-wider text-muted-foreground">Additional Notes</label>
        <textarea
          value={form.notes}
          onChange={update("notes")}
          rows={3}
          className="mt-1 w-full rounded-2xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      <button
        type="submit"
        disabled={mode === "prescription" && !prescriptionFile}
        className="btn-primary justify-center mt-1 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Send Request
      </button>
    </form>
  );
}

function Field({ label, ...rest }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="text-xs uppercase tracking-wider text-muted-foreground">{label}</label>
      <input
        {...rest}
        className="mt-1 w-full rounded-full border border-input bg-background px-5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
      />
    </div>
  );
}
