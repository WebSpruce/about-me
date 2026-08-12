import { heroData } from '../data/hero';
import { SocialLinks } from '../components/SocialLinks';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-10 px-6 border-t border-zinc-800">
      <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-zinc-500">
          © {year} {heroData.name}
        </p>
        <SocialLinks links={heroData.socialLinks} />
      </div>
    </footer>
  );
}