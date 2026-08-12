import type { SocialLink } from '../types/hero';
import { iconMap } from '../lib/icons';

interface SocialLinksProps {
  links: SocialLink[];
}

export function SocialLinks({ links }: SocialLinksProps) {
  return (
    <div className="flex gap-4">
      {links.map((link) => {
        const Icon = iconMap[link.icon];
        return (
          <a
            key={link.label}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
            className="text-zinc-400 hover:text-white transition-colors"
          >
            <Icon size={22} />
          </a>
        );
      })}
    </div>
  );
}