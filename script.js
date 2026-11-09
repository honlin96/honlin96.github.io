document.querySelectorAll('.print-button').forEach(button => button.addEventListener('click', () => window.print()));
document.getElementById('year').textContent = new Date().getFullYear();
if ('IntersectionObserver' in window) {
  const links = [...document.querySelectorAll('nav a')];
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      links.forEach(link => {
        const active = link.hash === '#' + entry.target.id;
        link.classList.toggle('active', active);
        if (active) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    });
  }, { rootMargin: '-10% 0px -60% 0px' });
  document.querySelectorAll('main > section[id]').forEach(section => observer.observe(section));
}
