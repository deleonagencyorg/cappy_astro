// Función para manejar las animaciones de entrada
let observer;

function markBounce(el, delayMs) {
  if (!el || !(el instanceof HTMLElement)) return;
  if (el.dataset.animate) return;
  el.dataset.animate = 'bounce';
  el.dataset.animateDelay = String(delayMs || 0);
}

function applyAutoTargets() {
  const main = document.querySelector('main');
  if (!(main instanceof HTMLElement)) return;

  const topLevel = Array.from(main.children).filter((n) => n instanceof HTMLElement);
  topLevel.forEach((el, idx) => markBounce(el, idx * 80));

  // Animar headings y cards comunes dentro de cada bloque principal
  const MAX_PER_BLOCK = 40;
  const MAX_TOTAL = 180;
  let total = 0;

  topLevel.forEach((block, bIndex) => {
    if (!(block instanceof HTMLElement)) return;

    const candidates = block.querySelectorAll(
      'section, article, header, h1, h2, h3, p, ul, ol, li, a, button, img, .shadow-xl, .shadow-lg'
    );

    let added = 0;
    candidates.forEach((node) => {
      if (total >= MAX_TOTAL) return;
      if (added >= MAX_PER_BLOCK) return;
      if (!(node instanceof HTMLElement)) return;

      // Evitar tocar contenido dentro de Astro islands (React/Vue/Svelte) para no romper hydration
      if (node.closest('astro-island') || node.closest('[data-no-animate]')) return;

      // Evitar animar cosas UI que suelen ser fixed/menus
      if (node.closest('#mobile-menu') || node.closest('[data-gallery-root] #gallery-modal')) return;

      // No re-etiquetar si ya existe data-animate
      if (node.dataset.animate) return;

      const delay = 80 + bIndex * 60 + added * 22;
      markBounce(node, delay);
      added += 1;
      total += 1;
    });
  });
}

function initAnimations() {
  if (observer) {
    try {
      observer.disconnect();
    } catch {
    }
  }

  applyAutoTargets();

  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -10% 0px',
    threshold: 0.12
  };

  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const el = entry.target;

      if (el.classList.contains('bounce-on-scroll')) {
        el.classList.add('bounce-in');
        el.classList.remove('bounce-on-scroll');
      } else {
        const direction = el.dataset.animateDirection || 'up';
        el.classList.add('animate-in', `animate-from-${direction}`);
      }

      if (observer) observer.unobserve(el);
    });
  }, observerOptions);

  const bounceTargets = document.querySelectorAll('[data-animate="bounce"]');
  bounceTargets.forEach((el) => {
    if (!(el instanceof HTMLElement)) return;
    if (el.classList.contains('bounce-in')) return;
    el.classList.add('bounce-on-scroll');
    const delay = el.dataset.animateDelay || el.dataset.delay || '0';
    el.style.animationDelay = `${delay}ms`;
    observer.observe(el);
  });

  const legacyTargets = document.querySelectorAll('.animate-on-scroll');
  legacyTargets.forEach((el) => {
    if (!(el instanceof HTMLElement)) return;
    if (el.classList.contains('animate-in')) return;
    const delay = el.dataset.animateDelay || el.dataset.delay || '0';
    el.style.transitionDelay = `${delay}ms`;
    observer.observe(el);
  });
}

if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', initAnimations);
  document.addEventListener('astro:page-load', initAnimations);
  document.addEventListener('astro:after-swap', initAnimations);
}
