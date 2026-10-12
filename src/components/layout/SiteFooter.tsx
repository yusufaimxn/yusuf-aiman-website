import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { navItems, socialLinks } from "@/data/portfolio";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div>
          <p className="eyebrow">Yusuf Aiman / 2026</p>
          <h2>Thoughtful software, built to move.</h2>
        </div>
        <Link className="button button-primary" href="/contact">Start a conversation <ArrowUpRight size={16} /></Link>
      </div>
      <div className="footer-bottom">
        <p>Full-Stack Developer · Software Engineer · Technology Entrepreneur</p>
        <div className="footer-links">
          {socialLinks.map((social) => <a href={social.href} target="_blank" rel="noreferrer" key={social.label}>{social.label}</a>)}
          <span className="footer-divider" />
          {navItems.slice(0, 4).map((item) => <Link href={item.href} key={item.href}>{item.label}</Link>)}
        </div>
      </div>
    </footer>
  );
}
