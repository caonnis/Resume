import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Ariel Onnis - QA Engineer & CSM® | Lawyer",
  description:
    "Experienced QA Engineer and Certified ScrumMaster with expertise in IoT testing, healthcare compliance, and data governance. Legal background with focus on blockchain and crypto assets.",
  keywords:
    "QA Engineer, Quality Assurance, IoT Testing, Scrum Master, ISTQB, Healthcare Compliance, Data Governance, Blockchain, Argentina",
  authors: [{ name: "Ariel Onnis" }],
  creator: "Ariel Onnis",
  publisher: "Ariel Onnis",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://arielonnis.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Ariel Onnis - QA Engineer & CSM® | Lawyer",
    description:
      "Experienced QA Engineer and Certified ScrumMaster with expertise in IoT testing, healthcare compliance, and data governance.",
    url: "https://arielonnis.com",
    siteName: "Ariel Onnis Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ariel Onnis - QA Engineer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ariel Onnis - QA Engineer & CSM® | Lawyer",
    description:
      "Experienced QA Engineer and Certified ScrumMaster with expertise in IoT testing, healthcare compliance, and data governance.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.png" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-TR3C5Q3C9J"></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-TR3C5Q3C9J');
          `}
        </script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
