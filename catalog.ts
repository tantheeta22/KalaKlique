export type Category = {
  slug: string;
  name: string;
  description: string;
  items: { name: string; description: string }[];
};

export const CATEGORIES: Category[] = [
  {
    slug: "medicines",
    name: "Medicines",
    description: "Prescription and over-the-counter medicines for everyday care.",
    items: [
      { name: "Pain Relief Tablets", description: "Relief from headaches and body pain." },
      { name: "Fever Medication", description: "Reduces fever and discomfort." },
      { name: "Cold & Cough Syrups", description: "Soothes throat and clears congestion." },
      { name: "Antacids", description: "Fast relief for acidity and indigestion." },
      { name: "Antibiotics (Rx)", description: "Available on valid prescription." },
      { name: "Diabetes Care", description: "Sugar control medicines and supplies." },
      { name: "BP & Heart Care", description: "Cardiac and blood pressure medicines." },
      { name: "Allergy Relief", description: "Antihistamines for seasonal allergies." },
    ],
  },
  {
    slug: "healthcare-products",
    name: "Healthcare Products",
    description: "Devices and essentials for monitoring and managing health at home.",
    items: [
      { name: "Digital Thermometer", description: "Accurate temperature readings." },
      { name: "BP Monitor", description: "Home blood pressure monitoring." },
      { name: "Glucometer & Strips", description: "Easy daily sugar tracking." },
      { name: "Pulse Oximeter", description: "Quick oxygen level checks." },
      { name: "Nebulizer", description: "For respiratory care at home." },
      { name: "First Aid Kits", description: "Everyday emergency essentials." },
    ],
  },
  {
    slug: "personal-care",
    name: "Personal Care",
    description: "Daily hygiene and personal care essentials.",
    items: [
      { name: "Face Wash & Cleansers", description: "Gentle skin cleansing." },
      { name: "Moisturisers", description: "Hydration for every skin type." },
      { name: "Sunscreens", description: "Daily UV protection." },
      { name: "Hand Sanitisers", description: "Germ-free on the go." },
      { name: "Oral Care", description: "Toothpaste, brushes and mouthwash." },
      { name: "Hair Care", description: "Shampoos and scalp care." },
    ],
  },
  {
    slug: "wellness",
    name: "Wellness Products",
    description: "Vitamins, supplements and wellness boosters.",
    items: [
      { name: "Multivitamins", description: "Daily nutrition support." },
      { name: "Protein Supplements", description: "Strength and recovery." },
      { name: "Calcium & Vitamin D", description: "Bone and joint health." },
      { name: "Immunity Boosters", description: "Year-round wellness." },
      { name: "Ayurvedic Tonics", description: "Traditional wellness blends." },
    ],
  },
  {
    slug: "baby-care",
    name: "Baby Care",
    description: "Gentle, trusted essentials for little ones.",
    items: [
      { name: "Baby Diapers", description: "Soft and absorbent." },
      { name: "Baby Lotion & Oil", description: "Nourishing daily care." },
      { name: "Baby Shampoo", description: "Tear-free formulas." },
      { name: "Feeding Bottles", description: "Safe BPA-free options." },
      { name: "Baby Formula", description: "Nutrition for growing babies." },
    ],
  },
  {
    slug: "pharmacy-essentials",
    name: "Pharmacy Essentials",
    description: "Everyday pharmacy supplies and small medical needs.",
    items: [
      { name: "Bandages & Gauze", description: "Wound care essentials." },
      { name: "Antiseptic Liquids", description: "Cuts and scrape protection." },
      { name: "Cotton & Swabs", description: "Daily care basics." },
      { name: "Masks (Surgical & N95)", description: "Everyday protection." },
      { name: "Heat & Cold Packs", description: "Pain and swelling relief." },
    ],
  },
];

export const findCategory = (slug: string) => CATEGORIES.find((c) => c.slug === slug);
