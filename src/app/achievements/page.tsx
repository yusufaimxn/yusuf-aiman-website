import { AchievementsPageContent } from "@/components/achievements/AchievementsPage";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Achievements & Leadership | Yusuf Aiman",
  description: "Explore Yusuf Aiman's academic achievements, entrepreneurial milestones, leadership experience, and community involvement.",
  path: "/achievements",
});

export default function AchievementsPage() {
  return <AchievementsPageContent />;
}
