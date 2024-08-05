import { type } from 'os';
import React from 'react';
import { FaBehance, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';

export type Link = {
  id: number;
  url: string;
  text: string;
};

export type SocialIcon = {
  id: number;
  url: string;
  icon: React.ComponentType;
};





export const links: Link[] = [
  {
    id: 1,
    url: '/',
    text: 'home',
  },
  {
    id: 2,
    url: '/about',
    text: 'about',
  },
  
];
export type NavLinkType={
  id:number,
  link:string
}
export const navLinks:NavLinkType[]=[
  {
    id: 1,
    link: 'events',
  },
  {
    id: 2,
    link: 'team',
  },
  {
    id: 3,
    link: 'about',
  },  
]

export const social: SocialIcon[] = [
  {
    id: 1,
    url: 'https://www.facebook.com',
    icon: FaFacebook,
  },
  {
    id: 2,
    url: 'https://www.twitter.com',
    icon: FaTwitter,
  },
  {
    id: 3,
    url: 'https://www.linkedin.com',
    icon: FaLinkedin,
  },
  {
    id: 4,
    url: 'https://www.behance.net',
    icon: FaBehance,
  },
];
