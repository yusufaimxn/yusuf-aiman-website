"use client";

import Link from "next/link";
import { Medal } from "lucide-react";
import type { CSSProperties } from "react";
import { useMemo, useState } from "react";
import { AchievementCard, AchievementIconView } from "@/components/achievements/AchievementCard";
import { AnimatedCounter } from "@/components/motion/AnimatedCounter";
import { Reveal } from "@/components/motion/Reveal";
import { achievements, projects, type AchievementCategory } from "@/data/portfolio";

type FilterValue = "All Achievements" | AchievementCategory;

const categories: FilterValue[] = [
  "All Achievements",
  "Academic",
  "Entrepreneurship",
  "Leadership",
  "Technology",
  "Communication",
  "Personal",
];

const journey = [
  { year: "2021", description: "Completed Quran memorisation of 30 Juz." },
  { year: "2023", description: "Began Foundation in Medical Science at Management & Science University." },
  { year: "2024", description: "Continued academic development at Multimedia University in Information Technology." },
  { year: "2026", description: "Founded Omni Systems Technology and continued building software products and digital systems." },
];

const featuredDescription = "The venture represents an important milestone in combining software development, product thinking, and entrepreneurship.";

export function AchievementsHero() {
  return (
    <section className="achievements-hero">
      <div className="container achievements-hero-grid">
        <Reveal className="achievements-hero-copy">
          <p className="eyebrow">Recognition / 06</p>
          <h1>Milestones that<br />define my <span className="achievement-gradient-text">journey.</span></h1>
          <p className="achievements-hero-description">A collection of academic achievements, leadership experiences, entrepreneurial milestones, and personal accomplishments that reflect my commitment to learning, building, and growing.</p>
        </Reveal>

        <Reveal className="achievement-hero-visual" delay={0.1} distance={22}>
          <div className="achievement-hero-grid-lines" aria-hidden="true" />
          <div className="achievement-hero-orbit achievement-hero-orbit-one" aria-hidden="true" />
          <div className="achievement-hero-orbit achievement-hero-orbit-two" aria-hidden="true" />
          <div className="achievement-hero-orbit achievement-hero-orbit-three" aria-hidden="true" />
          <span className="achievement-hero-node achievement-hero-node-one" aria-hidden="true" />
          <span className="achievement-hero-node achievement-hero-node-two" aria-hidden="true" />
          <span className="achievement-hero-node achievement-hero-node-three" aria-hidden="true" />
          <div className="achievement-emblem" aria-hidden="true"><Medal size={42} strokeWidth={1.15} /></div>
          <div className="achievement-hero-label"><span>PROFILE / 006</span><span>RECOGNITION SYSTEM</span></div>
          <div className="achievement-hero-footer"><span>ACADEMIC</span><span>LEADERSHIP</span><span>BUILDING</span></div>
        </Reveal>
      </div>
    </section>
  );
}

export function AchievementOverview() {
  const academicCount = achievements.filter((achievement) => achievement.statGroup === "academic").length;
  const leadershipCommunityCount = achievements.filter((achievement) => achievement.statGroup === "leadership-community").length;
  const stats = [
    { index: "01", value: achievements.length, label: "Recognitions & milestones", accent: "#4f8cff" },
    { index: "02", value: academicCount, label: "Academic recognitions", accent: "#06B6D4" },
    { index: "03", value: leadershipCommunityCount, label: "Leadership & community milestones", accent: "#14B8A6" },
    { index: "04", value: projects.length, label: "Digital projects documented", accent: "#A855F7" },
  ];

  return (
    <section className="section achievements-overview-section">
      <div className="container">
        <Reveal className="achievements-section-intro">
          <p className="eyebrow">01 / Achievement overview</p>
          <h2>A record of learning,<br />responsibility, and momentum.</h2>
        </Reveal>
        <div className="achievements-stats-grid">
          {stats.map((stat, index) => <Reveal key={stat.index} delay={index * 0.05} distance={16}>
            <article className="achievement-stat-card" style={{ "--stat-accent": stat.accent } as CSSProperties}>
              <span className="achievement-stat-index">{stat.index}</span>
              <strong><AnimatedCounter value={stat.value} /></strong>
              <span className="achievement-stat-label">{stat.label}</span>
            </article>
          </Reveal>)}
        </div>
      </div>
    </section>
  );
}

export function FeaturedAchievement() {
  const featured = achievements.find((achievement) => achievement.featured) ?? achievements[3];
  return (
    <section className="section featured-achievement-section">
      <div className="container">
        <Reveal className="achievements-section-intro">
          <p className="eyebrow">02 / Featured milestone</p>
          <h2>Building something<br />of my own.</h2>
        </Reveal>
        <Reveal className="featured-achievement-card" distance={24}>
          <div className="featured-achievement-content">
            <div className="featured-achievement-kicker"><span className="featured-achievement-icon"><AchievementIconView achievement={featured} size={19} /></span><span>Featured achievement</span></div>
            <h3>{featured.title} <span>of</span><br />{featured.organization}</h3>
            <div className="featured-achievement-meta"><span>{featured.category}</span><span>{featured.year}</span></div>
            <p>{"Founded Omni Systems Technology, a Malaysian technology business focused on developing digital products, software solutions, business systems, and practical technology experiences."}</p>
            <p>{featuredDescription}</p>
            <span className="achievement-badge">Entrepreneurship</span>
          </div>
          <div className="featured-achievement-visual" aria-label="Abstract connected technology system visual" role="img">
            <div className="featured-visual-grid" aria-hidden="true" />
            <div className="featured-visual-ring featured-visual-ring-one" aria-hidden="true" />
            <div className="featured-visual-ring featured-visual-ring-two" aria-hidden="true" />
            <div className="featured-visual-line featured-visual-line-one" aria-hidden="true" />
            <div className="featured-visual-line featured-visual-line-two" aria-hidden="true" />
            <span className="featured-visual-node featured-visual-node-one" aria-hidden="true" />
            <span className="featured-visual-node featured-visual-node-two" aria-hidden="true" />
            <span className="featured-visual-node featured-visual-node-three" aria-hidden="true" />
            <div className="featured-visual-panel"><span>OMNI SYSTEMS</span><strong>Building useful systems</strong><small>software / products / operations</small></div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function AchievementCollection() {
  const [activeCategory, setActiveCategory] = useState<FilterValue>("All Achievements");
  const counts = useMemo(() => Object.fromEntries(categories.map((category) => [category, category === "All Achievements" ? achievements.length : achievements.filter((achievement) => achievement.category === category).length])), []);
  const filteredAchievements = useMemo(() => activeCategory === "All Achievements" ? achievements : achievements.filter((achievement) => achievement.category === activeCategory), [activeCategory]);

  return (
    <section className="section achievements-collection-section" id="achievement-collection">
      <div className="container">
        <Reveal className="achievements-section-intro achievements-collection-intro">
          <div><p className="eyebrow">03 / Achievement collection</p><h2>Every milestone has<br />a story behind it.</h2></div>
          <p>Recognition is not the destination. It is a record of the discipline, people, and practice that made the next step possible.</p>
        </Reveal>
        <div className="achievement-filter-bar" role="group" aria-label="Filter achievements by category">
          {categories.map((category) => <button className={`achievement-filter ${activeCategory === category ? "is-active" : ""}`} key={category} type="button" aria-pressed={activeCategory === category} onClick={() => setActiveCategory(category)}><span>{category}</span><small>{counts[category]}</small></button>)}
        </div>
        <p className="achievement-results" aria-live="polite">Showing {filteredAchievements.length} of {achievements.length} recognitions</p>
        <div className="achievements-collection-grid">{filteredAchievements.map((achievement, index) => <Reveal className="achievement-card-wrap" key={achievement.id} delay={Math.min(index * 0.035, 0.25)} distance={18}><AchievementCard achievement={achievement} index={index} /></Reveal>)}</div>
      </div>
    </section>
  );
}

export function AchievementTimeline() {
  return (
    <section className="section achievement-timeline-section">
      <div className="container">
        <Reveal className="achievements-section-intro">
          <p className="eyebrow">04 / The journey</p>
          <h2>Progress built<br />over time.</h2>
          <p>Every milestone represents a different stage of learning, responsibility, and growth.</p>
        </Reveal>
        <div className="achievement-timeline">{journey.map((item, index) => <Reveal className="achievement-timeline-item" key={item.year} delay={index * 0.06} distance={18}><div className="achievement-timeline-marker"><span>{item.year}</span><i aria-hidden="true" /></div><p>{item.description}</p></Reveal>)}</div>
      </div>
    </section>
  );
}

export function AchievementsCTA() {
  return (
    <section className="section achievements-cta-section">
      <div className="container">
        <Reveal className="achievements-cta-panel">
          <div><p className="eyebrow">05 / Beyond the milestones</p><h2>Achievements matter.<br /><span>What I build matters more.</span></h2><p>These milestones reflect my journey so far, but the work continues through the products I develop, the problems I solve, and the people I collaborate with.</p></div>
          <div className="achievements-cta-actions"><Link className="button button-primary" href="/projects">Explore My Projects <span aria-hidden="true">↗</span></Link><Link className="button button-secondary" href="/experience">View My Experience <span aria-hidden="true">↗</span></Link></div>
        </Reveal>
      </div>
    </section>
  );
}

export function AchievementsPageContent() {
  return <main className="achievements-page"><AchievementsHero /><AchievementOverview /><FeaturedAchievement /><AchievementCollection /><AchievementTimeline /><AchievementsCTA /></main>;
}
