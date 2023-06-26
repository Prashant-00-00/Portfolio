// Toggle navigation menu
const toggleMenu = () => {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('open');
  };
  
  // Smooth scrolling for anchor links
  const smoothScroll = (target) => {
    const element = document.querySelector(target);
    window.scrollTo({
      top: element.offsetTop,
      behavior: 'smooth',
    });
  };
  
  // Add event listeners
  document.addEventListener('DOMContentLoaded', () => {
    // Toggle menu on hamburger icon click
    const hamburger = document.querySelector('.hamburger');
    hamburger.addEventListener('click', toggleMenu);
  
    // Smooth scroll on anchor link click
    const links = document.querySelectorAll('nav ul li a');
    links.forEach((link) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = e.target.getAttribute('href');
        smoothScroll(target);
        toggleMenu(); // Close menu after navigation
      });
    });
  
    // Apply smooth scrolling to all internal anchor links
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    internalLinks.forEach((link) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = e.target.getAttribute('href');
        smoothScroll(target);
      });
    });
  });
  