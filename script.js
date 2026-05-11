const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
  });
});
const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      fadeObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.12 
});

// Apply observer to every element with .fade-up class
document.querySelectorAll('.fade-up').forEach(el => {
  fadeObserver.observe(el);
});

const contactForm = document.getElementById('contactForm');
const formMsg     = document.getElementById('formMsg');

contactForm.addEventListener('submit', function (e) {
  e.preventDefault();

  
  formMsg.style.display = 'block';
  this.reset();
  setTimeout(() => {
    formMsg.style.display = 'none';
  }, 4000);
});

const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav-links a');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navItems.forEach(link => link.style.color = '');

      const activeLink = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
      if (activeLink) {
        activeLink.style.color = 'var(--accent)';
      }
    }
  });
}, {
  threshold: 0.4
});

sections.forEach(section => sectionObserver.observe(section));
