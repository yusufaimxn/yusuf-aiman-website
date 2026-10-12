import { ResumePageContent } from "@/components/resume/ResumePageContent";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Resume | Yusuf Aiman — Full-Stack Developer",
  description: "View Yusuf Aiman's professional resume, technical capabilities, education, experience, and software development background.",
  path: "/resume",
});

export default function ResumePage() {
  return <ResumePageContent />;
}
