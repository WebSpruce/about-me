export interface SocialLink {
    label: string,
    url: string,
    icon: 'github' | 'linkedin'| 'email'
}

export interface HeroData {
    name: string,
    role: string,
    tagline: string;
    location: string;
    photoUrl: string;
    socialLinks: SocialLink[];
}