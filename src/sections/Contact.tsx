import { User } from 'lucide-react';
import { contactData } from '../data/contact';

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 py-24 px-6 ">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-sm uppercase tracking-widest text-zinc-500 mb-3">
          {contactData.eyebrow}
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          {contactData.heading}
        </h2>
        <p className="text-zinc-400 mb-10 leading-relaxed">
          {contactData.message}
        </p>

        <a
          href={contactData.linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-zinc-950 font-medium hover:bg-zinc-200 transition-colors"
        >
          <User size={18} />
          Contact me on LinkedIn
        </a>
      </div>
    </section>
  );
}