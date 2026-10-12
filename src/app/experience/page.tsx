import Link from "next/link";
import { ArrowDownToLine, ArrowUpRight, BriefcaseBusiness, GraduationCap, Handshake, MapPin } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { TextReveal } from "@/components/motion/TextReveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { EngineeringDomains } from "@/components/experience/EngineeringDomains";
import { ProfessionalTimeline } from "@/components/experience/ProfessionalTimeline";
import { careerMilestones, entrepreneurshipAreas, leadershipExperience } from "@/data/experience";
import { resumePdfUrl } from "@/data/resume";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Experience | Yusuf Aiman — Software Developer",
  description: "Explore Yusuf Aiman's professional experience in software development, digital marketing, entrepreneurship, and organisational leadership.",
  path: "/experience",
});

export default function ExperiencePage() {
  return <main className="experience-page">
    <section className="experience-page-hero page-hero"><div className="container experience-hero-inner"><p className="eyebrow">Experience / 02</p><TextReveal lines={[{ text: "Experience that shaped" }, { text: "how I build." }]} /><p className="experience-hero-description">From digital marketing and entrepreneurship to software development and organisational leadership, each experience has shaped how I approach technology, people, and problem-solving.</p><div className="experience-hero-meta"><span><BriefcaseBusiness size={14} /> Software & product work</span><span><MapPin size={14} /> Cyberjaya, Malaysia</span></div></div></section>

    <section className="section experience-professional-section"><div className="container"><SectionHeading eyebrow="01 / Professional experience" title="The roles that shaped my work." description="A timeline of the roles where I learned to connect technical decisions with people, process, and practical outcomes." /><ProfessionalTimeline /></div></section>

    <section className="section section-border experience-engineering-section"><div className="container"><SectionHeading eyebrow="02 / Engineering experience" title="Building software across different domains." description="Selected domains from the existing project and skills dataset. Open each card to see the related work and capabilities." /><EngineeringDomains /></div></section>

    <section className="section section-border experience-entrepreneurship-section"><div className="container"><div className="experience-split-heading"><div><p className="eyebrow">03 / Entrepreneurship</p><h2>Learning business by doing business.</h2></div><p>Before founding Omni Systems Technology, I explored more than 12 business ventures across digital products, online services, and physical retail. These experiences helped me understand customer needs, marketing, sales, product development, and business operations.</p></div><div className="experience-entrepreneurship-layout"><Reveal className="experience-entrepreneurship-note"><span className="experience-entrepreneurship-mark">12<span>+</span></span><p>ventures explored before founding a technology business</p></Reveal><div className="experience-area-grid">{entrepreneurshipAreas.map((area, index) => <Reveal className="experience-area-card" key={area.title} delay={index * 0.04}><span>0{index + 1}</span><h3>{area.title}</h3><p>{area.description}</p></Reveal>)}</div></div></div></section>

    <section className="section section-border experience-leadership-section"><div className="container"><SectionHeading eyebrow="04 / Leadership experience" title="Learning to lead, collaborate & deliver." description="Leadership has been a practical education in communication, responsibility, and making a shared outcome possible." /><div className="experience-leadership-grid">{leadershipExperience.map((item, index) => <Reveal className="experience-leadership-card" key={item.role} delay={index * 0.06}><div className="experience-leadership-card-top"><span>0{index + 1}</span>{index === 0 ? <Handshake size={20} /> : index === 1 ? <BriefcaseBusiness size={20} /> : <GraduationCap size={20} />}</div><h3>{item.role}</h3><p className="experience-leadership-org">{item.organisation}</p><p>{item.responsibilities}</p><p><strong>Programmes</strong><br />{item.programmes}</p><div className="experience-tag-list">{item.skills.map((skill) => <span key={skill}>{skill}</span>)}</div></Reveal>)}</div></div></section>

    <section className="section section-border experience-milestones-section"><div className="container"><SectionHeading eyebrow="05 / Career milestones" title="A journey of continuous growth." description="The progression is not a straight line. It is a series of useful changes in direction." /><div className="experience-milestone-timeline">{careerMilestones.map((milestone, index) => <Reveal className="experience-milestone" key={milestone.year} delay={index * 0.06}><div className="experience-milestone-year">{milestone.year}</div><div><h3>{milestone.title}</h3><p>{milestone.description}</p></div></Reveal>)}</div></div></section>

    <section className="cta-section experience-closing-section"><div className="container"><p className="eyebrow">06 / Let&apos;s connect</p><h2>Let&apos;s build something meaningful.</h2><p>I&apos;m always interested in opportunities to build useful software, collaborate with thoughtful teams, and contribute to meaningful digital products.</p><div className="experience-closing-actions"><Link className="button button-primary" href="/projects">Explore projects <ArrowUpRight size={16} /></Link><a className="button button-secondary" href={resumePdfUrl} download><ArrowDownToLine size={16} /> Download resume</a><Link className="text-link" href="/contact">Contact me <ArrowUpRight size={15} /></Link></div></div></section>
  </main>;
}
