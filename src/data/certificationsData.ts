export interface Certification {
  title: string
  issuer: string
  shortIssuer: string
  date: string
  description: string
  link: string
  image?: string
  tags: string[]
  themeColor: string // CSS color token or hex for the theme highlight
  bgColor: string // CSS color/alpha background for the issuer badge circle
}

export const CERTIFICATIONS_DATA: Certification[] = [
  {
    title: "AWS Certified AI Practitioner",
    issuer: "Amazon Web Services (AWS)",
    shortIssuer: "AWS",
    date: "November 9, 2025",
    description: "An AWS Certified AI Practitioner can design and implement foundational AI solutions using core AWS ML services and best practices.",
    tags: ["Artificial Intelligence (AI)", "Generative AI", "LLM", "RAG", "Machine Learning (ML)", "AWS Bedrock", "AWS SageMaker"],
    link: "https://www.credly.com/badges/c6bad7d1-0b19-4336-ad25-51d93253c83d",
    themeColor: "#FF9900",
    bgColor: "rgba(255, 153, 0, 0.1)"
  },
  {
    title: "Stripe Certified Professional Developer",
    issuer: "Stripe",
    shortIssuer: "Stripe",
    date: "February 28, 2025",
    description: "A Stripe Certified Professional Developer can integrate eCommerce payment solutions using Stripe APIs and built-in surfaces.",
    tags: ["Payments, Payouts & Webhooks", "Payment Intents", "Radar (Fraud Detection)", "Setup Intents"],
    link: "https://stripecertifications.credential.net/359488b7-a684-4f97-8b7c-b35d1491988b#acc.DJrhUjAT",
    themeColor: "#635BFF",
    bgColor: "rgba(99, 91, 255, 0.1)"
  },
  {
    title: "Stripe Certified Billing Developer",
    issuer: "Stripe",
    shortIssuer: "Stripe",
    date: "April 16, 2025",
    description: "A Stripe Certified Billing Developer can integrate recurring revenue solutions using Stripe APIs.",
    tags: ["Subscription Models", "Customer Billing Portals", "Metered Billing", "Webhooks Integrations"],
    link: "https://stripecertifications.credential.net/6f2782a7-a8b5-4a9f-81d9-9f8ee6e5f655#acc.KEoMyfaZ",
    themeColor: "#635BFF",
    bgColor: "rgba(99, 91, 255, 0.1)"
  },
  {
    title: "Stripe Certified Associate Developer",
    issuer: "Stripe",
    shortIssuer: "Stripe",
    date: "February 24, 2025",
    description: "A Stripe Certified Associate Developer can develop payment integrations using low-code and no-code solutions from Stripe.",
    tags: ["Payment Intents", "Setup Intents", "Stripe Link"],
    link: "https://stripecertifications.credential.net/fdd57974-f6ac-4a59-b45b-c112278c717f#acc.oO4fGKqB",
    themeColor: "#635BFF",
    bgColor: "rgba(99, 91, 255, 0.1)"
  }
]
