export const SITE = {
  name: "Jain Medical Hall",
  nameHi: "जैन मेडिकल हॉल",
  phone: "098727 30293",
  phoneIntl: "+919872730293",
  whatsapp: "919872730293",
  address: "Sector 25, Panchkula Extension, Jhiwri Wala, Panchkula, Haryana 134116",
  hours: "Open daily until 10 PM",
  rating: "4.8",
  reviews: 19,
  instagram: "https://instagram.com/", // replace with provided link
  mapsEmbed: "https://www.google.com/maps?q=Sector+25+Panchkula+Extension+Haryana+134116&output=embed",
  mapsDirections: "https://www.google.com/maps/dir/?api=1&destination=Sector+25+Panchkula+Extension+Haryana+134116",
};

export function waLink(message: string) {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;
}
