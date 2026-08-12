import { heroData } from '../data/hero'
import { SocialLinks } from '../components/SocialLinks'

export function Hero() {
    return(
        <section className="min-h-screen flex flex-col items-center justify-center px-6 bg-zinc-950 text-center">
            <img
                src={heroData.photoUrl} alt={heroData.name}
                className="w-32 h-32 rounded-full object-cover mb-6 border-2 border-zinc-700"/>
            <p className="text-sm uppercase tracking-widest text-zinc-500 mb-4">
              {heroData.location}
            </p>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              {heroData.name}
            </h1>
            <h2 className="text-xl md:text-2xl text-zinc-400 mb-6">
              {heroData.role}
            </h2>
            <p className="max-w-xl text-zinc-400 mb-8 leading-relaxed">
              {heroData.tagline}
            </p>
            <SocialLinks links={heroData.socialLinks} />
        </section>
    );
}