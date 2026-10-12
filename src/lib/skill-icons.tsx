import type { LucideIcon } from "lucide-react";
import {
  Accessibility,
  BatteryCharging,
  Bot,
  Boxes,
  BriefcaseBusiness,
  Cable,
  ChartColumn,
  ClipboardList,
  Clapperboard,
  Code2,
  Component,
  Database,
  FileCode2,
  FileText,
  ListTodo,
  ListChecks,
  Megaphone,
  Mic,
  MonitorSmartphone,
  MousePointer2,
  Palette,
  PanelsTopLeft,
  Route,
  Server,
  ShieldCheck,
  Smartphone,
  UsersRound,
  Workflow,
} from "lucide-react";
import {
  siAndroid,
  siCss,
  siDart,
  siFigma,
  siFlutter,
  siGit,
  siGithub,
  siHtml5,
  siJavascript,
  siLaravel,
  siNextdotjs,
  siPhp,
  siPostgresql,
  siReact,
  siSupabase,
  siTailwindcss,
  siTypescript,
  siVercel,
  type SimpleIcon,
} from "simple-icons";

export type SkillIconDefinition =
  | { type: "brand"; icon: SimpleIcon; color: string }
  | { type: "lucide"; icon: LucideIcon; color: string };

const brand = (icon: SimpleIcon, color = `#${icon.hex}`): SkillIconDefinition => ({ type: "brand", icon, color });
const capability = (icon: LucideIcon, color = "#4F8CFF"): SkillIconDefinition => ({ type: "lucide", icon, color });

export const skillIconRegistry: Record<string, SkillIconDefinition> = {
  javascript: brand(siJavascript),
  typescript: brand(siTypescript),
  php: brand(siPhp),
  dart: brand(siDart),
  html5: brand(siHtml5),
  css3: brand(siCss),
  react: brand(siReact),
  nextjs: brand(siNextdotjs, "#FFFFFF"),
  "tailwind-css": brand(siTailwindcss),
  laravel: brand(siLaravel),
  supabase: brand(siSupabase),
  flutter: brand(siFlutter),
  "backend-development": capability(Server),
  "database-management": capability(Database),
  "system-planning": capability(ClipboardList),
  "mobile-application-development": capability(Smartphone),
  "software-development": capability(Code2),
  "product-development": capability(Boxes),
  "technical-documentation": capability(FileCode2),
  "responsive-web-design": capability(MonitorSmartphone),
  "component-architecture": capability(Boxes),
  "form-validation": capability(ListChecks),
  "dynamic-routing": capability(Route),
  "web-accessibility": capability(Accessibility),
  "visual-studio-code": capability(Code2),
  vercel: brand(siVercel, "#FFFFFF"),
  git: brand(siGit),
  github: brand(siGithub, "#FFFFFF"),
  figma: brand(siFigma),
  "ui-ux-design": capability(MousePointer2),
  "design-systems": capability(Component),
  chatgpt: capability(Bot),
  "digital-marketing": capability(Megaphone),
  analytics: capability(ChartColumn),
  "content-creation": capability(FileText),
  canva: capability(Palette),
  capcut: capability(Clapperboard),
  entrepreneurship: capability(BriefcaseBusiness),
  leadership: capability(UsersRound),
  "public-speaking": capability(Mic),
  "project-management": capability(ListTodo),
  postgresql: brand(siPostgresql),
  "rest-api-integration": capability(Cable),
  "ai-assisted-development": capability(Bot),
  "workflow-automation": capability(Workflow),
  android: brand(siAndroid),
  "mobile-testing": capability(BatteryCharging),
  "server-validation": capability(ShieldCheck),
  "frontend-panels": capability(PanelsTopLeft),
};

export function getSkillIconDefinition(iconKey: string): SkillIconDefinition {
  return skillIconRegistry[iconKey] ?? capability(Bot);
}

export function validateSkillIconRegistry(skillIds: readonly string[]) {
  return skillIds.filter((skillId) => !skillIconRegistry[skillId]);
}
