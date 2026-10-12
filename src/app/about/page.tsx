import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, BriefcaseBusiness, Clapperboard, Megaphone, MapPin, Sparkles, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { AnimatedCounter } from "@/components/motion/AnimatedCounter";
import { Reveal } from "@/components/motion/Reveal";
import { TextReveal } from "@/components/motion/TextReveal";
import { CinematicPortrait } from "@/components/portraits/CinematicPortrait";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { AboutCapabilityGrid } from "@/components/about/AboutCapabilityGrid";
import { AboutJourneyTimeline } from "@/components/about/AboutJourneyTimeline";
import { aboutLeadership, aboutPrinciples, beyondTechnology } from "@/data/about";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "About Yusuf Aiman | Developer, Founder & Entrepreneur",
  description: "Learn about Yusuf Aiman's journey through technology, entrepreneurship, education, leadership, and software development.",
  path: "/about",
});

const beyondIcons: Record<string, LucideIcon> = { briefcase: BriefcaseBusiness, megaphone: Megaphone, users: Users, clapperboard: Clapperboard };

export default function AboutPage() {
  return <main className="about-page">
    <section className="about-page-hero page-hero">
      <div className="container about-hero-grid">
        <div className="about-hero-copy">
          <p className="eyebrow">About / 01</p>
          <TextReveal lines={[{ text: "Curious by nature." }, { text: "Intentional by practice." }]} />
          <p className="about-hero-description">I&apos;m Yusuf Aiman, a full-stack developer, technology entrepreneur, and Information Technology undergraduate based in Cyberjaya, Malaysia.</p>
          <div className="about-hero-meta"><span><MapPin size={14} /> Cyberjaya, Selangor</span><span><Sparkles size={14} /> Always learning, always building</span></div>
        </div>
        <CinematicPortrait className="about-hero-portrait" imageSrc="/assets/yusuf professional 2 no bg (new).png" alt="Yusuf Aiman looking toward the future in a professional suit" variant="editorial" size="lg" priority showMetadata metadata={{ role: "Developer / Founder", location: "Cyberjaya" }} />
      </div>
    </section>

    <section className="section about-story-section">
      <div className="container">
        <div className="about-story-layout">
          <Reveal className="about-section-intro"><p className="eyebrow">01 / The person behind the code</p><p className="about-aside-note">A multidisciplinary path into technology.<br /><br /><span>Different chapters, one perspective.</span></p></Reveal>
          <Reveal className="about-story-copy" delay={0.08}><h2>More Than Just a Developer.</h2><p>My journey has never followed a single path. I started with Islamic education and science before pursuing medical science and eventually discovering my passion for information technology.</p><p>Along the way, I explored entrepreneurship, digital marketing, creative work, and leadership. Each experience taught me something different about people, systems, communication, and problem-solving.</p><p>Today, I bring those perspectives together as a full-stack developer and founder of Omni Systems Technology, where I work on building digital products and practical technology solutions.</p><p>I believe good software is not simply about writing code. It&apos;s about understanding problems, making thoughtful decisions, and building something that genuinely helps people.</p><Link className="text-link" href="/contact">Start a conversation <ArrowUpRight size={15} /></Link></Reveal>
        </div>
      </div>
    </section>

    <section className="section section-border about-journey-section">
      <div className="container"><SectionHeading eyebrow="02 / My journey" title="An unconventional path into technology." description="Education gave me foundations. Work and building gave those foundations a direction." /><div className="about-journey-layout"><AboutJourneyTimeline /><CinematicPortrait className="about-tahfiz-portrait" imageSrc="/assets/yusuf tahfiz no bg (new).png" alt="Yusuf Aiman during his tahfiz education" variant="minimal" size="sm" showMetadata={false} metadata={{ role: "Early foundations", location: "Malaysia" }} /></div></div>
    </section>

    <section className="section section-border about-builder-section">
      <div className="container"><SectionHeading eyebrow="03 / The builder mindset" title="I learn by building." description="I prefer practical projects, real problems, and the steady feedback loop of making something better." />
        <div className="about-builder-grid"><Reveal className="about-builder-copy"><p>I&apos;ve always been drawn to creating things, whether it&apos;s a digital product, a business idea, a marketing campaign, or a software system.</p><p>Over the years, I&apos;ve explored more than <strong>12 business ventures</strong> across digital products, services, and retail. Those experiences taught me how to recognise opportunities, communicate with customers, test ideas, and take responsibility for outcomes.</p><p>That same mindset shapes how I approach software development today. I prefer learning through practical projects, solving real problems, and improving through continuous iteration.</p></Reveal><CinematicPortrait className="about-builder-portrait" imageSrc="/assets/yusuf casual 1 no bg (new).png" alt="Yusuf Aiman in a casual black shirt" variant="casual" size="md" showMetadata={false} /><Reveal className="about-highlight-grid" delay={0.08}><article className="about-highlight-card about-highlight-card-large"><span>01</span><strong><AnimatedCounter value={12} suffix="+" /></strong><p>Business ventures explored</p></article><article className="about-highlight-card"><span>02</span><strong><AnimatedCounter value={30} /></strong><p>Juz memorised</p></article><article className="about-highlight-card"><span>03</span><strong>2026</strong><p>Omni Systems founded</p></article></Reveal></div>
      </div>
    </section>

    <section className="section section-border about-capability-section"><div className="container"><SectionHeading eyebrow="04 / What I build" title="Turning ideas into working systems." description="The work sits at the intersection of software, product thinking, and a clear understanding of who the system is for." /><AboutCapabilityGrid /></div></section>

    <section className="section section-border about-beyond-section"><div className="container"><SectionHeading eyebrow="05 / Beyond technology" title="Different experiences. One perspective." description="Technology is only one part of the work. The rest is understanding people, context, and the reason something needs to exist." /><div className="about-beyond-layout"><div className="about-beyond-grid">{beyondTechnology.map((item, index) => { const Icon = beyondIcons[item.icon]; return <Reveal className="about-beyond-card" key={item.title} delay={index * 0.05}><span className="about-beyond-icon"><Icon size={19} /></span><span className="about-card-index">0{index + 1}</span><h3>{item.title}</h3><p>{item.description}</p></Reveal>; })}</div><CinematicPortrait className="about-beyond-portrait" imageSrc="/assets/yusuf casual 2 no bg (new).png" alt="Yusuf Aiman thinking in a casual black shirt" variant="casual" size="md" showMetadata metadata={{ role: "Curious by nature", location: "Beyond code" }} /></div></div></section>

    <section className="section section-border about-leadership-section"><div className="container"><SectionHeading eyebrow="06 / Building beyond the screen" title="Leadership, community & collaboration." description="The best work I have been part of has involved coordinating people, making space for ideas, and following through together." /><div className="about-leadership-layout"><Reveal className="about-leadership-image"><Image src="/assets/program tangan kita bahasa kita.png" alt="Tangan Kita Bahasa Kita university programme" fill sizes="(max-width: 720px) 100vw, 560px" /><span>University programme · MMU</span></Reveal><div className="about-leadership-list">{aboutLeadership.map((item, index) => <Reveal className="about-leadership-item" key={item.role} delay={index * 0.06}><span className="about-card-index">0{index + 1}</span><div><h3>{item.role}</h3><p className="about-leadership-org">{item.organisation}</p><p>{item.description}</p></div></Reveal>)}</div></div></div></section>

    <section className="section section-border about-principles-section"><div className="container"><SectionHeading eyebrow="07 / My principles" title="The principles behind my work." description="Simple standards I return to when a project becomes more complex, uncertain, or important." /><div className="about-principles-grid">{aboutPrinciples.map((principle, index) => <Reveal className={`about-principle-card about-principle-card-${index + 1}`} key={principle.title} delay={index * 0.035}><span>0{index + 1}</span><h3>{principle.title}</h3><p>{principle.description}</p></Reveal>)}</div></div></section>

    <section className="cta-section about-closing-section"><div className="container"><p className="eyebrow">08 / What&apos;s next</p><h2>Still learning. Always building.</h2><p>I don&apos;t see technology as a destination. I see it as a way to keep learning, solving problems, and creating meaningful opportunities.</p><div className="about-closing-actions"><Link className="button button-primary" href="/experience">Explore my experience <ArrowUpRight size={16} /></Link><Link className="button button-secondary" href="/projects">View my projects <ArrowUpRight size={16} /></Link><Link className="text-link" href="/contact">Get in touch <ArrowUpRight size={15} /></Link></div></div></section>
  </main>;
}
