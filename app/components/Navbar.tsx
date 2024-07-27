"use client";

import React, { useState, useRef, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { Link as LinkType, SocialIcon, links, social } from './data';
import logo from '../images/logo.svg'; // Ensure this path is correct
import Image from 'next/image';

const Navbar: React.FC = () => {
  const [showLinks, setShowLinks] = useState<boolean>(false);
  const linksContainerRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLUListElement>(null);

  const toggleLinks = () => {
    setShowLinks(prevShowLinks => !prevShowLinks); // Toggle function
  };

  useEffect(() => {
    if (linksContainerRef.current && linksRef.current) {
      const linksHeight = linksRef.current.getBoundingClientRect().height;
      linksContainerRef.current.style.height = showLinks ? `${linksHeight}px` : '0px';
    }
  }, [showLinks]);

  return (
    <nav>
      <div className='nav-center'>
        <div className='nav-header'>
          {/* <Image src={logo} className='logo' alt='logo' /> */}
          <h1>Logo </h1>
          <h1 className="text-[#4AA6E8] font-extrabold text-2xl hidden md:block">
            शिवभक्त युवक मंडळ
          </h1>
          <button className='nav-toggle' onClick={toggleLinks}>
            <FaBars />
          </button>
        </div>
        <div className='links-container  ' ref={linksContainerRef}>
          <ul className='links' ref={linksRef}>
            {links.map((link: LinkType) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <ul className='social-icons'>
          {social.map((socialIcon: SocialIcon) => {
            const { id, url, icon: IconComponent } = socialIcon;
            return (
              <li key={id} className="px-4">
                <a href={url}><IconComponent /></a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
