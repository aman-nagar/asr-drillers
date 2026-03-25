export const siteConfig = {
  name: "ASR Drillers",
  siteUrl: "https://asrdrillers.com",
  phone: "+91-9695041919",
  whatsapp: "+919695041919",
  email: "asrdrillers@gmail.com",
  foundingYear: 2012,
  yearsActive: "25+",
  defaultOgImage: "/og-image.svg",
  logoPath: "/logo.svg",
  appleTouchIcon: "/favicon.svg",
  organizationDescription:
    "Leading boring machine manufacturer in India. 14+ years experience, 500+ happy customers.",
  address: {
    streetAddress: "Jaunpur",
    addressLocality: "Varanasi",
    addressRegion: "Uttar Pradesh",
    postalCode: "208201",
    addressCountry: "IN",
  },
};

export function getAbsoluteUrl(path) {
  return new URL(path, siteConfig.siteUrl).toString();
}

export function getWhatsAppNumber() {
  return siteConfig.whatsapp.replace(/[^0-9]/g, "");
}
