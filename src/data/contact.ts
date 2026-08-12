import type { ContactData } from '../types/contact';
import { socialLinks } from './socialLinks';

const linkedin = socialLinks.find((link) => link.icon === 'linkedin');

export const contactData: ContactData = {
  eyebrow: 'Contact',
  heading: "Let's talk.",
  message:
    "If you want to talk. The fastest way to reach me is on LinkedIn.",
  linkedinUrl: linkedin?.url ?? 'https://www.linkedin.com/in/kacper-świerczek/',
};