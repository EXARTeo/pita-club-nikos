// Animation for overflow hero
window.addEventListener('scroll', () => {
  const hero = document.getElementById('hero');
  const scrollY = window.scrollY;
  const maxScroll = window.innerHeight; // Ύψος του hero

  // Υπολογίζουμε μια τιμή opacity από 1 σε 0 ανάλογα με το scroll
  let opacity = 1 - scrollY / maxScroll;
  if (opacity < 0) opacity = 0;

  hero.style.opacity = opacity;

  // Προαιρετικά κάνουμε scale μικρότερο
  let scale = 1 - scrollY / (maxScroll * 5);
  if (scale < 0.95) scale = 0.95;

  hero.style.transform = `scale(${scale})`;
});

// Hero link working
document.querySelector('.brand').addEventListener('click', e => {
  e.preventDefault();
  window.scrollTo({top: 0, behavior: 'smooth'});
});


// Mobile nav toggle + UX helpers
document.addEventListener('DOMContentLoaded', () => {

  const burger = document.querySelector('.burger');
  const navLinks = document.querySelector('.nav-links');
  
  burger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    document.body.classList.toggle('no-scroll', navLinks.classList.contains('open'));
  });

  /* CLOSE when tapping a link!!! (TODO maybe delete) */
  navLinks.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', () => {
      navLinks.classList.remove('open');
      document.body.classList.remove('no-scroll');
    })
  );

  // Scroll spy for active nav links
  const sections = document.querySelectorAll('section[id]');
  const navA     = document.querySelectorAll('.nav-links a');
  
  const spy      = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navA.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + entry.target.id));
      }
    });
  }, {threshold: 0.6});
  sections.forEach(sec => spy.observe(sec));

  // Header shadow on scroll
  const header = document.querySelector('header');
  window.addEventListener('scroll', () => header.classList.toggle('scrolled', window.scrollY > 0));

  //Dynamic year of the footer!
  document.getElementById("year").textContent = new Date().getFullYear();
});


//Gallery
document.addEventListener('DOMContentLoaded', () => {
  const triggers = document.querySelectorAll('.lightbox-trigger');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');

  triggers.forEach(trigger => {
    trigger.addEventListener('click', e => {
      e.preventDefault();
      lightboxImg.src = trigger.href;
      lightbox.style.opacity = '1';
      lightbox.style.pointerEvents = 'auto';
    });
  });

  document.querySelector('.lightbox-close').addEventListener('click', () => {
    lightbox.style.opacity = '0';
    lightbox.style.pointerEvents = 'none';
    lightboxImg.src = '';
  });
});
