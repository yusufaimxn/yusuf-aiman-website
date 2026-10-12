import Link from "next/link";
import { ArrowUpRight, Code2, Instagram, Layers3, Linkedin, Mail, Smartphone, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { AnimatedCounter } from "@/components/motion/AnimatedCounter";
import { Reveal } from "@/components/motion/Reveal";
import { TextReveal } from "@/components/motion/TextReveal";
import { TypewriterText } from "@/components/motion/TypewriterText";
import { InteractiveWorkspace } from "@/components/hero/InteractiveWorkspace";
import { CinematicPortrait } from "@/components/portraits/CinematicPortrait";
import { FeaturedProjectsCarousel } from "@/components/home/FeaturedProjectsCarousel";
import { TechnologyMarquee } from "@/components/home/TechnologyMarquee";
import { ExperienceTimeline } from "@/components/home/ExperienceTimeline";
import { MilestonesCarousel } from "@/components/home/MilestonesCarousel";
import { projects, socialLinks } from "@/data/portfolio";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Yusuf Aiman | Full-Stack Developer & Software Engineer",
  description: "Explore Yusuf Aiman's software development portfolio, featuring web applications, mobile projects, business systems, technical skills, and professional experience.",
  path: "/",
});

const expertise = [
  { icon: Code2, title: "Full-Stack Development", description: "Turning complex requirements into clear, reliable web systems." },
  { icon: Smartphone, title: "Mobile Applications", description: "Designing practical mobile experiences for people on the move." },
  { icon: Layers3, title: "UI/UX & Product", description: "Bringing product thinking and interface craft into the same room." },
  { icon: Sparkles, title: "Digital Solutions", description: "Building focused tools for businesses, teams, and growing ideas." },
];

const heroSocialLinks = [
  ...socialLinks,
  { label: "Email", href: "mailto:myusufaiman05@gmail.com" },
];

function socialIcon(label: string) {
  if (label === "LinkedIn") return Linkedin;
  if (label === "Instagram") return Instagram;
  return Mail;
}

export default function Home() {
  return (
    <main>
      <section className="hero container">
        <div className="hero-grid">
          <div>
            <Reveal distance={18}><p className="eyebrow">Hello, I&apos;m Yusuf Aiman</p></Reveal>
            <div className="hero-role-line"><span>currently /</span><TypewriterText roles={["Full-Stack Developer", "Software Engineer", "Technology Entrepreneur", "Product Builder"]} /></div>
            <TextReveal lines={[{ text: "I build digital" }, { text: "experiences" }, { text: "that work.", accent: true }]} />
            <Reveal delay={0.48} distance={18}><p className="hero-copy">A full-stack developer and software engineer who enjoys turning complex ideas into thoughtful, functional digital products.</p></Reveal>
            <Reveal delay={0.62} distance={14}><div className="hero-actions"><Link className="button button-primary" href="/projects">Explore projects <ArrowUpRight size={16} /></Link><Link className="button button-secondary" href="/resume">View resume <ArrowUpRight size={16} /></Link></div></Reveal>
            <Reveal delay={0.76} distance={10}><div className="hero-links">{heroSocialLinks.map((social) => { const Icon = socialIcon(social.label); return <a href={social.href} target={social.label === "Email" ? undefined : "_blank"} rel={social.label === "Email" ? undefined : "noreferrer"} key={social.label}><Icon size={16} strokeWidth={1.8} aria-hidden="true" /><span>{social.label}</span><span aria-hidden="true">↗</span></a>; })}</div></Reveal>
          </div>
          <InteractiveWorkspace />
        </div>
      </section>

      <TechnologyMarquee />

      <section className="section section-border"><div className="container"><Reveal><div className="intro-grid"><div><p className="eyebrow">01 / The person behind the work</p><CinematicPortrait className="intro-portrait" imageSrc="/assets/yusuf professional 1 no bg (new).png" alt="Yusuf Aiman in a professional suit" variant="cinematic" size="md" showMetadata metadata={{ role: "Full-Stack Developer", location: "Cyberjaya" }} /></div><div className="intro-copy"><p><strong>More than just writing code.</strong> From Islamic education and science to medical science, information technology, and entrepreneurship, my path has always been about learning how different systems fit together.</p><div className="mini-stats"><div className="mini-stat"><strong><AnimatedCounter value={12} suffix="+" /></strong><span>ventures explored</span></div><div className="mini-stat"><strong><AnimatedCounter value={30} /></strong><span>juz memorised</span></div><div className="mini-stat"><strong><AnimatedCounter value={projects.length} /></strong><span>projects documented</span></div></div><Link className="text-link" href="/about">Read my story <ArrowUpRight size={15} /></Link></div></div></Reveal></div></section>

      <section className="section home-services-section"><div className="container"><SectionHeading eyebrow="02 / What I do" title="Build with clarity. Ship with intent." description="The best work sits at the intersection of engineering discipline, product thinking, and a genuine respect for the people using what we make." /><div className="expertise-grid">{expertise.map((item, index) => { const Icon = item.icon; return <Reveal key={item.title} delay={index * 0.07} distance={20}><article className="expertise-card"><div className="expertise-card-top"><span className="expertise-icon"><Icon size={18} strokeWidth={1.7} /></span><span className="expertise-number">0{index + 1}</span></div><h3>{item.title}</h3><p>{item.description}</p></article></Reveal>; })}</div></div></section>

      <section className="section section-border"><div className="container"><SectionHeading eyebrow="03 / Selected work" title="A growing body of useful things." description="A selection of projects across web applications, mobile products, business systems, and the experiments in between." /><Reveal distance={24}><FeaturedProjectsCarousel /></Reveal><Reveal className="center-link" delay={0.25} distance={14}><Link className="button button-secondary" href="/projects">View all projects <ArrowUpRight size={16} /></Link></Reveal></div></section>

      <section className="section section-border home-experience-section"><div className="container"><SectionHeading eyebrow="04 / Experience" title="Learning by doing." description="Experience across software, digital marketing, entrepreneurship, and leadership has shaped how I approach problems today." /><ExperienceTimeline /><Link className="text-link home-experience-link" href="/experience">Explore the full timeline <ArrowUpRight size={15} /></Link></div></section>

      <section className="section section-tight home-milestones-section"><div className="container"><SectionHeading eyebrow="05 / Milestones" title="The milestones behind the momentum." description="A collection of achievements that reflect my academic journey, leadership experience, entrepreneurial growth, and personal development." align="right" /><MilestonesCarousel /></div></section>

      <section className="cta-section"><Reveal className="container" distance={24}><p className="eyebrow">06 / Your next chapter</p><h2>Let&apos;s build something meaningful.</h2><p>I&apos;m open to software development opportunities, professional collaborations, and conversations about technology and digital products.</p><Link className="button button-primary" href="/contact">Get in touch <ArrowUpRight size={16} /></Link></Reveal></section>
    </main>
  );
}
