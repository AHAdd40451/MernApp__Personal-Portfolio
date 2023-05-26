/* eslint-disable no-unused-vars */
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
      const sections = ['header', 'about', 'experience', 'services', 'work', 'contact'];
      const scrollPosition = window.scrollY + 200;

      const activeElement = sections
        .map(section => ({
          id: section,
          element: document.getElementById(section),
        }))
        .find(({ element }) => {
          if (element) {
            const { offsetTop, offsetHeight } = element;
            const sectionTop = offsetTop;
            const sectionBottom = sectionTop + offsetHeight;
            return scrollPosition >= sectionTop && scrollPosition <= sectionBottom;
          }
          return false;
        });

      if (activeElement) {
        setActiveSection(activeElement.id);
        setActiveNav(`#${activeElement.id}`);
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
