(function () {
  try {
    var preference = localStorage.getItem('theme-preference') || 'system';
    var dark = preference === 'dark'
      || (preference === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
    if (dark) document.documentElement.classList.add('dark');
  } catch (_) {
    // Le stockage peut être indisponible dans certains contextes privés.
  }
})();
