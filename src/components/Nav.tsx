import { navLinks } from '../data/nav';
import { heroData } from '../data/hero';

export function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-zinc-950/70 border-b border-zinc-800">
      <nav className="max-w-3xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#hero" className="text-sm font-semibold text-white">
          {heroData.name}
        </a>

        <ul className="flex gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-zinc-400 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}