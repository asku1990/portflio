import { GitHubFillIcon } from "@/components/icons/GitHubFillIcon";
import { LinkedInFillIcon } from "@/components/icons/LinkedInFillIcon";

interface SocialIconProps {
  label: string;
  href: string;
}

export function SocialIcon({ label, href }: SocialIconProps) {
  const isLinkedIn = label === "LinkedIn" || href.includes("linkedin.com");
  const isGitHub = label === "GitHub" || href.includes("github.com");
  if (isLinkedIn) return <LinkedInFillIcon />;
  if (isGitHub) return <GitHubFillIcon />;
  return null;
}
