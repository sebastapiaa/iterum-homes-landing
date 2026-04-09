import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://iterumhomes.com";
const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Iterum Homes — Cash Home Buyers in San Diego",
    template: "%s | Iterum Homes",
  },
  description:
    "Sell your San Diego home fast for cash. We buy houses in any condition — no repairs, no agents, no fees. Get a no-obligation cash offer in 24 hours.",
  keywords: [
    "sell house fast San Diego",
    "cash home buyers San Diego",
    "we buy houses San Diego",
    "sell house as-is",
    "San Diego real estate",
    "foreclosure help San Diego",
    "inherited property San Diego",
  ],
  authors: [{ name: "Iterum Homes" }],
  creator: "Iterum Homes",
  publisher: "Iterum Homes",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Iterum Homes",
    title: "Iterum Homes — Cash Home Buyers in San Diego",
    description:
      "Sell your San Diego home fast for cash. No repairs, no agents, no fees. Get a no-obligation cash offer in 24 hours.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Iterum Homes — San Diego Cash Home Buyers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Iterum Homes — Cash Home Buyers in San Diego",
    description:
      "Sell your San Diego home fast for cash. No repairs, no agents, no fees.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  // Add to verification when you set up Google Search Console:
  // verification: { google: "your-verification-code" },
};

// Schema.org LocalBusiness JSON-LD — huge for local SEO
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: "Iterum Homes",
  description:
    "Cash home buyers serving all of San Diego County. We buy houses fast in any condition with no fees, no repairs, and no agents.",
  url: SITE_URL,
  telephone: "+1-619-473-2033",
  email: "info@iterumhomes.com",
  priceRange: "$$",
  areaServed: {
    "@type": "City",
    name: "San Diego",
    "@id": "https://www.wikidata.org/wiki/Q16552",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "San Diego",
    addressRegion: "CA",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 32.7157,
    longitude: -117.1611,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    opens: "08:00",
    closes: "20:00",
  },
  sameAs: [],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {children}
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}');
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
