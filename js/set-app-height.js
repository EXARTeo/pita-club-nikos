(() => {
  const isMobile = /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(navigator.userAgent);

  const setAppHeight = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    // Μόνο στο load αφαιρούμε το loading
    document.body.classList.remove('loading');
    document.body.classList.add('loaded');
  };

  // Αν δεν έχει την loading, βάλε την (backup)
  if (!document.body.classList.contains('loading')) {
    document.body.classList.add('loading');
  }

  if (isMobile) {
    // Μόνο στην αρχή και όταν αλλάζει προσανατολισμός (rotation)
    window.addEventListener('load', setAppHeight);
    window.addEventListener('orientationchange', setAppHeight);
  } else {
    // Σε desktop κάνε update σε κάθε resize
    window.addEventListener('load', setAppHeight);
    window.addEventListener('resize', setAppHeight);
  }
})();