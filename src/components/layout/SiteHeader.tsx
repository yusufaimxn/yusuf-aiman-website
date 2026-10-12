"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BriefcaseBusiness,
  ChevronRight,
  Command,
  FileText,
  FolderKanban,
  House,
  Mail,
  Menu,
  MessageCircle,
  Moon,
  Search,
  Sun,
  Trophy,
  UserRound,
  Wrench,
  X,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";
import type { KeyboardEvent as ReactKeyboardEvent } from "react";
import { navItems, socialLinks } from "@/data/portfolio";
import { CommandPalette } from "@/components/layout/CommandPalette";

const mobileNavIcons: Record<string, LucideIcon> = {
  Home: House,
  About: UserRound,
  Experience: BriefcaseBusiness,
  Projects: FolderKanban,
  Skills: Wrench,
  Achievements: Trophy,
  Resume: FileText,
  Contact: Mail,
};

export function SiteHeader() {
  const pathname = usePathname();
  const whatsappLink = socialLinks.find((social) => social.label === "WhatsApp")?.href ?? "https://wa.me/601158955662";
  const [mobileOpen, setMobileOpen] = useState(false);
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [lightMode, setLightMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const reducedMotion = useReducedMotion();
  const menuButtonRef = useRef<HTMLButtonElement | null>(null);
  const mobileNavRef = useRef<HTMLElement | null>(null);

  const closeMobileMenu = useCallback(() => {
    if (!mobileOpen) return;
    setMobileOpen(false);
    window.requestAnimationFrame(() => menuButtonRef.current?.focus());
  }, [mobileOpen]);

  const handleMobileNavKeyDown = (event: ReactKeyboardEvent<HTMLElement>) => {
    if (event.key !== "Tab") return;

    const links = mobileNavRef.current?.querySelectorAll<HTMLAnchorElement>("a");
    if (!links?.length) return;

    const firstLink = links[0];
    const lastLink = links[links.length - 1];

    if (event.shiftKey && document.activeElement === firstLink) {
      event.preventDefault();
      lastLink.focus();
    } else if (!event.shiftKey && document.activeElement === lastLink) {
      event.preventDefault();
      firstLink.focus();
    }
  };

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setPaletteOpen((open) => !open);
      }

      if (event.key === "Escape" && mobileOpen) {
        event.preventDefault();
        closeMobileMenu();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [closeMobileMenu, mobileOpen]);

  useEffect(() => {
    document.documentElement.dataset.theme = lightMode ? "light" : "dark";
  }, [lightMode]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;

    const onPointerDown = (event: PointerEvent) => {
      const target = event.target as Node;
      if (!mobileNavRef.current?.contains(target) && !menuButtonRef.current?.contains(target)) {
        closeMobileMenu();
      }
    };

    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [closeMobileMenu, mobileOpen]);

  useEffect(() => {
    if (!mobileOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.requestAnimationFrame(() => mobileNavRef.current?.querySelector<HTMLAnchorElement>("a")?.focus());

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [mobileOpen]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1051px)");
    const closeOnDesktop = (event: MediaQueryListEvent) => {
      if (event.matches) setMobileOpen(false);
    };

    mediaQuery.addEventListener("change", closeOnDesktop);
    return () => mediaQuery.removeEventListener("change", closeOnDesktop);
  }, []);

  return (
    <>
      <header className={scrolled ? "site-header scrolled" : "site-header"}>
        <div className="nav-shell">
          <Link className="brand" href="/" onClick={closeMobileMenu} aria-label="Yusuf Aiman home">
            <span className="brand-name">Yusuf Aiman</span>
          </Link>

          <nav className="desktop-nav" aria-label="Primary navigation">
            {navItems.map((item) => (
              <Link className={pathname === item.href ? "active" : ""} href={item.href} key={item.href} aria-current={pathname === item.href ? "page" : undefined}>
                {pathname === item.href && <motion.span className="active-nav-indicator" layoutId="active-nav-indicator" transition={{ duration: reducedMotion ? 0 : 0.28, ease: [0.22, 1, 0.36, 1] }} aria-hidden="true" />}
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="nav-actions">
            <a className="header-connect" href={whatsappLink} target="_blank" rel="noreferrer" aria-label="Connect with Yusuf Aiman on WhatsApp">
              <MessageCircle size={15} strokeWidth={1.8} aria-hidden="true" />
              <span>Let&apos;s connect</span>
            </a>
            <button className="icon-button command-trigger" onClick={() => setPaletteOpen(true)} aria-label="Open command palette">
              <Search size={16} />
              <span className="shortcut"><Command size={12} />K</span>
            </button>
            <button className="icon-button theme-button" onClick={() => setLightMode((mode) => !mode)} aria-label="Toggle colour theme">
              {lightMode ? <Moon size={16} /> : <Sun size={16} />}
            </button>
            <button
              ref={menuButtonRef}
              className="icon-button mobile-menu-button"
              onClick={() => setMobileOpen((open) => !open)}
              aria-controls="mobile-navigation"
              aria-expanded={mobileOpen}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        <AnimatePresence initial={false}>
          {mobileOpen && (
            <motion.nav
              ref={mobileNavRef}
              id="mobile-navigation"
              className="mobile-nav"
              aria-label="Mobile navigation"
              initial={reducedMotion ? false : { opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={reducedMotion ? { opacity: 0 } : { opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: reducedMotion ? 0 : 0.25, ease: [0.22, 1, 0.36, 1] }}
              onKeyDown={handleMobileNavKeyDown}
            >
              <div className="mobile-nav-heading">
                <span>NAVIGATION</span>
                <span>01 / 08</span>
              </div>

              <div className="mobile-nav-list">
                {navItems.map((item) => {
                  const Icon = mobileNavIcons[item.label] ?? FolderKanban;
                  const active = pathname === item.href;

                  return (
                    <Link className={active ? "active" : ""} href={item.href} key={item.href} onClick={closeMobileMenu} aria-current={active ? "page" : undefined}>
                      <span className="mobile-nav-link-main">
                        <Icon size={17} strokeWidth={1.7} aria-hidden="true" />
                        <span>{item.label}</span>
                      </span>
                      <ChevronRight size={16} strokeWidth={1.7} aria-hidden="true" />
                    </Link>
                  );
                })}
              </div>

              <div className="mobile-nav-footer">
                <strong>Full-Stack Developer</strong>
                <span>Based in Cyberjaya, Malaysia</span>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>
      {paletteOpen && <CommandPalette onClose={() => setPaletteOpen(false)} />}
    </>
  );
}
