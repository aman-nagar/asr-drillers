export const siteConfig = {
  name: "ASR Drillers",
  siteUrl: "https://asrdrillers.com",
  phone: "+91-98765-43210",
  whatsapp: "+919876543210",
  email: "info@asrdrillers.com",
  foundingYear: 2012,
  yearsActive: "14+",
  defaultOgImage: "/og-image.svg",
  logoPath: "/logo.svg",
  appleTouchIcon: "/favicon.svg",
  organizationDescription:
    "Leading boring machine manufacturer in India. 14+ years experience, 500+ happy customers.",
  address: {
    streetAddress: "Pukhrayan Industrial Area",
    addressLocality: "Kanpur",
    addressRegion: "Uttar Pradesh",
    postalCode: "208201",
    addressCountry: "IN",
  },
} as const;

export function getAbsoluteUrl(path: string) {
  return new URL(path, siteConfig.siteUrl).toString();
}

export function getWhatsAppNumber() {
  return siteConfig.whatsapp.replace(/[^0-9]/g, "");
}
