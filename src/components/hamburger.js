const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
if (hamburger && navLinks) {
  // Toggle menu visibility
  const toggleMenu = () => {
    navLinks.classList.toggle('open'); 

    const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
    hamburger.setAttribute('aria-expanded', !isExpanded);
  };
  hamburger.addEventListener('click', toggleMenu);
  window.addEventListener('click', (event) => {
    if (!navLinks.contains(event.target) && !hamburger.contains(event.target)) {
      navLinks.classList.remove('open'); 
      hamburger.setAttribute('aria-expanded', 'false');
    }
  });
} else {
  console.error('Hamburger or navLinks not found.');
}
