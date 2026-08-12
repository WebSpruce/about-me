import { aboutData } from '../data/about';

export function About() {
  return (
    <section id="about" className="scroll-mt-20 py-24 px-6 bg-zinc-950">
      <div className="max-w-2xl mx-auto">
        <p className="text-sm uppercase tracking-widest text-zinc-500 mb-3">
          {aboutData.eyebrow}
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
          {aboutData.heading}
        </h2>

        <div className="space-y-6">
          {aboutData.paragraphs.map((paragraph, i) => (
            <p key={i} className="text-zinc-400 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}