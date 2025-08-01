// Υπολογίζει το πραγματικό viewport height ΜΙΑ φορά κατά το load
(() => {
  const setAppHeight = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  };

  window.addEventListener('load', () => {
    setTimeout(setAppHeight, 50);  // μικρή καθυστέρηση για iOS UI
  });
})();

