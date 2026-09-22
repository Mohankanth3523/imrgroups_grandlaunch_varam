// Single source of truth for every project fact used across the site.
// Every value here comes directly from the material supplied by IMR Groups —
// nothing below is invented.

export const project = {
  name: "Varam Classic Garden",
  developer: "IMR Groups",
  tagline: "An address of quiet distinction",

  launchDateLabel: "27 September 2026",
  launchDateLong: "Sunday, 27th September 2026",
  // ISO datetime used by the live countdown (IST, UTC+5:30)
  launchDateISO: "2026-09-27T09:00:00+05:30",

  priceFrom: "18",
  priceUnit: "Lakhs*",
  priceNote: "*Price subject to plot size & location within the layout",

  plotCount: 95,

  approvals: ["DTCP", "RERA", "HNTDA"] as const,

  amenities: [
    "Black Top Roads",
    "Street Lights",
    "Water Facility",
    "Beautiful Park",
    "STP Facility",
    "Children's Play Area",
  ] as const,

  gatedCommunity: {
    title: "Fully Gated Community",
    sub: "24×7 Secured Living",
  },

  address: {
    village: "Bodichipalli Village",
    lines: ["Hosur Union, Denkanikotta Taluk", "Krishnagiri District, Tamil Nadu"],
    landmarks: ["Near Tata Electronics Company", "Anusonai, Hosur"],
  },

  contact: {
    displayPhone: "+91 72006 62328",
    phoneE164: "917200662328",
    telHref: "tel:+917200662328",
  },

  mapsUrl: "https://maps.app.goo.gl/Q1HttSYa2z44SPif7",

  whatsapp: {
    general:
      "https://wa.me/917200662328?text=Hi%2C%20I%27m%20interested%20in%20Varam%20Classic%20Garden.%20Please%20share%20more%20details.",
    siteVisit:
      "https://wa.me/917200662328?text=Hi%2C%20I%27d%20like%20to%20book%20a%20free%20cab%20for%20a%20family%20site%20visit%20to%20Varam%20Classic%20Garden.",
  },

  assets: {
    masterPlan: "/assets/master-plan.jpg",
    masterPlanWebp: "/assets/master-plan.webp",
    layoutDetail: "/assets/layout-plan-detail.jpg",
    layoutDetailWebp: "/assets/layout-plan-detail.webp",
    logo: "/assets/logo.png",
  },
} as const;
