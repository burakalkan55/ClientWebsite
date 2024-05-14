import React, { useState, useEffect } from 'react';
import navTitle from "../images/Title.png";
import { GiHamburgerMenu, GiCancel } from "react-icons/gi";
import "../Styles/Navbar.scss";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Sayfa kaydırıldığında olay dinleyicisi
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Temizlik
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`navbar ${isMenuOpen ? 'open' : ''} ${isScrolled ? 'scrolled' : ''}`}>
      <div className='nav-title'>
        <img src={navTitle} alt='Navbar Title' />
      </div>

      <button className='hamburger' onClick={toggleMenu}>
        {isMenuOpen ? <GiCancel className='icon' /> : <GiHamburgerMenu className='icon' />}
      </button>

      <div className={isMenuOpen ? 'navigating' : 'navs'}>
        <ul>
          <li><a href='/'>Home</a></li>
          <li><a href='#hero'>About</a></li>
          <li><a href='#features'>Features</a></li>
          <li><a href='#pricing'>Pricing</a></li>
          <li><a href='#company'>Company</a></li>
        </ul>
      </div>

      <div className='nav-button'>
        <button className='nv-button'>
          <a href='#contact'>Contact</a>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
