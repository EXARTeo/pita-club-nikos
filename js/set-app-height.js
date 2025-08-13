/* 
 *js/set-app-height.js
 * Σταθεροποιεί το mobile viewport height χωρίς "jump",
 * αποθηκεύει την τιμή ανά tab (sessionStorage) και ανανεώνει μόνο σε rotation.
 */
(() => {
  const KEY = 'vhPx_v1';

  const isMobile = /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(navigator.userAgent);

  const measure = () =>
    ((window.visualViewport && window.visualViewport.height) || window.innerHeight) * 0.01;

  const setVar = (px) =>
    document.documentElement.style.setProperty('--vh', px + 'px');

  const save = (px) =>
    sessionStorage.setItem(KEY, String(px));

  // 1) Βάλε τιμή ΠΡΙΝ το πρώτο paint (διαβάζουμε αποθήκη ή μετράμε τώρα)
  let saved = sessionStorage.getItem(KEY);
  let px = saved ? parseFloat(saved) : measure();
  if (!saved) save(px);
  setVar(px);

  // 2) Ξεκλείδωμα UI μόλις δέσει το DOM (όχι στο load για να μην αργεί)
  document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.remove('loading');
    document.body.classList.add('loaded');
  });

  // 3) Ανανεώσεις χωρίς jump
  if (isMobile) {
    // ΜΟΝΟ σε rotation. Μικρή καθυστέρηση για να σταθεροποιηθεί το viewport.
    window.addEventListener('orientationchange', () => {
      setTimeout(() => {
        const p = measure();
        save(p);
        setVar(p);
      }, 250);
    }, { passive: true });
  } else {
    // Desktop: σε resize.
    window.addEventListener('resize', () => {
      const p = measure();
      save(p);
      setVar(p);
    });
  }
})();
