/* ============================================
   PORTFOLIO — script.js
   Author: [Your Name]
   ============================================ */


/* ── 1. HAMBURGER MENU (Mobile Nav Toggle) ── */

const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');

// Toggle the nav open/closed when hamburger is clicked
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Close the nav when any link is clicked
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
  });
});


/* ── 2. SCROLL FADE-IN ANIMATION ── */

// IntersectionObserver watches elements and adds .visible when they enter view
const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      fadeObserver.unobserve(entry.target); // stop watching once visible
    }
  });
}, {
  threshold: 0.12 // trigger when 12% of element is visible
});

// Apply observer to every element with .fade-up class
document.querySelectorAll('.fade-up').forEach(el => {
  fadeObserver.observe(el);
});


/* ── 3. CONTACT FORM (Mock Submit) ── */

const contactForm = document.getElementById('contactForm');
const formMsg     = document.getElementById('formMsg');

contactForm.addEventListener('submit', function (e) {
  e.preventDefault(); // prevent actual page reload

  // Show success message
  formMsg.style.display = 'block';

  // Reset all form fields
  this.reset();

  // Hide the message after 4 seconds
  setTimeout(() => {
    formMsg.style.display = 'none';
  }, 4000);
});


/* ── 4. ACTIVE NAV LINK HIGHLIGHT on scroll ── */

const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav-links a');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Remove active class from all links
      navItems.forEach(link => link.style.color = '');

      // Highlight the matching nav link
      const activeLink = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
      if (activeLink) {
        activeLink.style.color = 'var(--accent)';
      }
    }
  });
}, {
  threshold: 0.4 // section must be 40% visible to be considered active
});

sections.forEach(section => sectionObserver.observe(section));
