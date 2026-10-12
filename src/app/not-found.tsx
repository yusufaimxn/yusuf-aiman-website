import Link from "next/link";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({ title: "Page Not Found | Yusuf Aiman", description: "The requested Yusuf Aiman portfolio page could not be found.", path: "/404", noIndex: true });

export default function NotFound() {
  return <main className="container page-hero"><p className="eyebrow">404 / Route not found</p><h1>That page is not in the system.</h1><p className="page-hero-copy">The page may have moved, or the link is still waiting to be documented.</p><Link className="button button-primary" href="/">Return home ↗</Link></main>;
}
