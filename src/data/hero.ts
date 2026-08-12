import type { HeroData } from  '../types/hero';
import { socialLinks } from '../data/socialLinks';
import profilePhoto from '../assets/profile.jpg';

export const heroData: HeroData = {
  name: 'Kacper Świerczek',
  role: '.NET Developer',
  tagline:
    'I design scalable .NET applications using Clean Architecture, CQRS, and Dependency Injection - focused on maintainable, testable systems.',
  location: 'Katowice, Kraków - on-site, hybrid | Poland - hybrid, remote',
  photoUrl: profilePhoto,
  socialLinks,
};