import {
  Award,
  BookOpen,
  CalendarDays,
  Code2,
  GraduationCap,
  Heart,
  Lightbulb,
  Medal,
  Mic2,
  Network,
  Rocket,
  UsersRound,
} from "lucide-react";
import type { CSSProperties } from "react";
import type { Achievement } from "@/data/portfolio";

type AchievementIcon = typeof GraduationCap;

const iconMap: Record<string, AchievementIcon> = {
  "graduation-cap": GraduationCap,
  award: Award,
  medal: Medal,
  rocket: Rocket,
  lightbulb: Lightbulb,
  users: UsersRound,
  calendar: CalendarDays,
  network: Network,
  book: BookOpen,
  microphone: Mic2,
  heart: Heart,
  code: Code2,
};

export function AchievementIconView({ achievement, size = 20 }: { achievement: Achievement; size?: number }) {
  const Icon = iconMap[achievement.icon] ?? Award;
  return <Icon aria-hidden="true" size={size} strokeWidth={1.7} />;
}

export function AchievementCard({ achievement, index, compact = false }: { achievement: Achievement; index: number; compact?: boolean }) {
  return (
    <article className={`achievement-showcase-card${compact ? " achievement-showcase-card-compact" : ""}`} style={{ "--achievement-accent": achievement.accentColor, "--achievement-gradient": achievement.gradient } as CSSProperties}>
      <div className="achievement-card-topline"><span className="achievement-card-index">{String(index + 1).padStart(2, "0")}</span><span className="achievement-card-category">{achievement.category}</span><span className="achievement-card-icon"><AchievementIconView achievement={achievement} size={19} /></span></div>
      <div className="achievement-card-main"><h3>{achievement.title}</h3><p className="achievement-card-organization">{achievement.organization}</p><p className="achievement-card-description">{achievement.description}</p></div>
      <div className="achievement-card-bottom"><span className="achievement-card-badge">{achievement.category}</span>{achievement.year && <span className="achievement-card-year">{achievement.year}</span>}</div>
    </article>
  );
}
