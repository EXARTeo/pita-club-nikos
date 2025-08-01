// sets --vh custom property on page load
(() => {
  const setAppHeight = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    document.body.classList.remove('loading');
  };

  // Εκτελείται μόλις φορτωθεί το DOM (όχι μετά εικόνες, fonts κλπ)
  document.body.classList.add('loading');
  document.addEventListener('DOMContentLoaded', setAppHeight);
})();
