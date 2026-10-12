import type { Metadata } from "next";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { AmbientBackground } from "@/components/background/AmbientBackground";
import { PageTransition } from "@/components/motion/PageTransition";
import { ScrollProgress } from "@/components/motion/ScrollProgress";
import { StructuredData } from "@/components/seo/StructuredData";
import { personSchema, siteName, siteUrl, websiteSchema } from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Yusuf Aiman | Full-Stack Developer & Software Engineer",
    template: "%s | Yusuf Aiman",
  },
  applicationName: "Yusuf Aiman Portfolio",
  authors: [{ name: "Yusuf Aiman", url: siteUrl }],
  creator: siteName,
  publisher: siteName,
  description: "Explore the portfolio of Yusuf Aiman, a full-stack developer and software engineer based in Cyberjaya, Malaysia. Discover web applications, mobile projects, technical skills, experience, and digital products.",
  keywords: ["Yusuf Aiman", "full-stack developer", "software engineer", "technology entrepreneur", "Cyberjaya", "Malaysia"],
  alternates: { canonical: siteUrl },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Yusuf Aiman | Full-Stack Developer & Software Engineer",
    description: "Explore Yusuf Aiman's software development portfolio, featuring web applications, mobile projects, business systems, technical skills, and professional experience.",
    url: siteUrl,
    siteName,
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Yusuf Aiman — Full-Stack Developer and Software Engineer" }],
  },
  twitter: { card: "summary_large_image", title: "Yusuf Aiman | Full-Stack Developer & Software Engineer", description: "Explore Yusuf Aiman's software development portfolio, featuring web applications, mobile projects, business systems, technical skills, and professional experience.", images: ["/opengraph-image"] },
  icons: { icon: [{ url: "/icon.png", type: "image/png" }, { url: "/favicon.ico", type: "image/x-icon" }], apple: [{ url: "/apple-icon.png", type: "image/png" }] },
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" data-theme="dark"><body><StructuredData data={[{ ...personSchema, "@id": `${siteUrl}/#person` }, { ...websiteSchema, "@id": `${siteUrl}/#website` }]} /><div className="site-shell"><AmbientBackground /><ScrollProgress /><SiteHeader /><PageTransition>{children}</PageTransition><SiteFooter /></div></body></html>;
}
