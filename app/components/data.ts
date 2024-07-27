import { type } from 'os';
import React from 'react';
import { FaBehance, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';

// Define the types for link and social objects
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

export type EventImages ={
  id:number,
  image:string,
  name:string,
  title:string,
  info:string
}
export const eventImages:EventImages[] = [
  {
    id: 1,
    image: 'https://www.course-api.com/images/people/person-1.jpeg',
    name: 'maria ferguson',
    title: 'office manager',
    info:
      'Fingerstache umami squid, kinfolk subway tile selvage tumblr man braid viral kombucha gentrify fanny pack raclette pok pok mustache.',
  },
  {
    id: 2,
    image: 'https://www.course-api.com/images/people/person-4.jpeg',
    name: 'john doe',
    title: 'regular guy',
    info:
      'Gastropub sustainable tousled prism occupy. Viral XOXO roof party brunch actually, chambray listicle microdosing put a bird on it paleo subway tile squid umami.',
  },
  {
    id: 3,
    image: 'https://www.course-api.com/images/people/person-3.jpeg',
    name: 'peter smith',
    title: 'product designer',
    info:
      'Drinking vinegar polaroid street art echo park, actually semiotics next level butcher master cleanse hammock flexitarian ethical paleo.',
  },
  {
    id: 4,
    image: 'https://www.course-api.com/images/people/person-2.jpeg',
    name: 'susan andersen',
    title: 'the boss',
    info:
      'Marfa af yr 3 wolf moon kogi, readymade distillery asymmetrical seitan kale chips fingerstache cloud bread mustache twee messenger bag. ',
  },
];



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
  {
    id: 3,
    url: '/events',
    text: 'events',
  },
  {
    id: 4,
    url: '/contact',
    text: 'contact',
  },

];

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
