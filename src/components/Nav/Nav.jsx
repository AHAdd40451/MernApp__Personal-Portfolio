import React, { useEffect, useState } from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { MdWork } from 'react-icons/md';
import { BiBook } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';
import { BiMessageSquareDetail } from 'react-icons/bi';
import './Nav.css';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#header');
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'services', 'work', 'contact']; // Add the section IDs here

      const scrollPosition = window.scrollY + 200; // Adjust the value as needed

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const element = document.getElementById(section);
        if (element) {
          const sectionTop = element.offsetTop;
          const sectionBottom = sectionTop + element.offsetHeight;
          if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
            setActiveSection(section);
            setActiveNav(`#${section}`);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav>
      <a href="#header" onClick={() => setActiveNav('#header')} className={activeNav === '#header' ? 'active' : ''}>
        <AiOutlineHome />
      </a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}>
        <AiOutlineUser />
      </a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}>
        <BiBook />
      </a>
      <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}>
        <RiServiceLine />
      </a>
      <a href="#work" onClick={() => setActiveNav('#work')} className={activeNav === '#work' ? 'active' : ''}>
        <MdWork />
      </a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}>
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};

export default Nav;
