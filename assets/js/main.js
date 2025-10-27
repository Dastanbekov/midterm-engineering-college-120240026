
// Year
document.getElementById('year').textContent = new Date().getFullYear();

// Active nav link based on current file
(function(){
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.navbar .nav-link').forEach(a => {
    if (a.getAttribute('href') === path) a.classList.add('active', 'fw-semibold');
  });
})();

// Back to top button
(function(){
  const btn = document.getElementById('backToTop');
  const onScroll = () => {
    if (window.scrollY > 600) btn.style.display = 'block';
    else btn.style.display = 'none';
  };
  window.addEventListener('scroll', onScroll);
  btn.addEventListener('click', () => window.scrollTo({top:0, behavior:'smooth'}));
})();

// Theme toggle with localStorage and Bootstrap 5.3 color modes
(function(){
  const root = document.documentElement;
  const saved = localStorage.getItem('theme');
  if (saved) root.setAttribute('data-bs-theme', saved);
  const btn = document.getElementById('themeToggle');
  if (btn){
    const applyLabel = () => {
      const mode = root.getAttribute('data-bs-theme') || 'light';
      btn.setAttribute('aria-pressed', mode === 'dark' ? 'true' : 'false');
      btn.textContent = mode === 'dark' ? 'Light' : 'Dark';
    };
    applyLabel();
    btn.addEventListener('click', () => {
      const current = root.getAttribute('data-bs-theme') || 'light';
      const next = current === 'light' ? 'dark' : 'light';
      root.setAttribute('data-bs-theme', next);
      localStorage.setItem('theme', next);
      applyLabel();
    });
  }
})();
