import { SiGithub } from '@icons-pack/react-simple-icons';
import { User, Mail } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import type { ComponentType } from 'react';


export const iconMap: Record<'github' | 'linkedin' | 'email', ComponentType<{ size?: number; color?: string }>> = {
  github: SiGithub,
  linkedin: User,
  email: Mail as LucideIcon,
};