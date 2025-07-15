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
