
// Program filter (progressive enhancement: default shows all)
(function(){
  const grid = document.getElementById('programGrid');
  const buttons = document.querySelectorAll('.filter-btn');
  if (!grid || !buttons.length) return;
  const cards = grid.querySelectorAll('.program-card');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      cards.forEach(card => {
        const show = filter === 'all' || card.dataset.category === filter;
        card.classList.toggle('d-none', !show);
      });
    });
  });
})();

// News search + category filter
(function(){
  const grid = document.getElementById('newsGrid');
  const input = document.getElementById('newsSearch');
  const select = document.getElementById('newsFilter');
  if (!grid) return;
  const cards = [...grid.querySelectorAll('.news-card')];
  const run = () => {
    const q = (input?.value || '').toLowerCase();
    const cat = select?.value || 'all';
    cards.forEach(card => {
      const inCat = cat === 'all' || card.dataset.category === cat;
      const text = card.textContent.toLowerCase();
      const match = !q || text.includes(q);
      card.classList.toggle('d-none', !(inCat && match));
    });
  };
  input?.addEventListener('input', run);
  select?.addEventListener('change', run);
})();
