/**
 * Navegación con transiciones suaves (cross-fade)
 * Al hacer clic en cualquier enlace interno, hace fade out, navega, y fade in
 */

function initNavigationTransitions() {
  // Crear overlay para la transición
  const overlay = document.createElement('div');
  overlay.id = 'nav-transition-overlay';
  overlay.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #FFED00;
    opacity: 0;
    pointer-events: none;
    z-index: 9998;
    transition: opacity 300ms ease-in-out;
  `;
  document.body.appendChild(overlay);

  // Detectar todos los links internos en el documento
  document.addEventListener('click', (e) => {
    const link = e.target.closest('a[href]');
    
    if (!link) return;
    
    const href = link.getAttribute('href');
    const currentOrigin = window.location.origin;
    const linkUrl = new URL(href, currentOrigin);
    
    // Solo aplicar transición a links internos
    if (linkUrl.origin !== currentOrigin) return;
    
    // Saltar si es un hash anchor (#)
    if (href.startsWith('#')) return;
    
    // Saltar si es el mismo path
    if (linkUrl.pathname === window.location.pathname) return;
    
    // Saltar si tiene atributo data-preserve-utm (links externos)
    if (link.getAttribute('data-preserve-utm')) return;
    
    // Prevenir navegación por defecto y hacer transición
    e.preventDefault();
    
    // Fade out
    overlay.style.opacity = '1';
    
    // Navegar después del fade
    setTimeout(() => {
      window.location.href = href;
    }, 200);
  });

  // Fade in cuando la página cargue (usando Astro's page-load event)
  document.addEventListener('astro:page-load', () => {
    overlay.style.opacity = '0';
  });

  // También para transiciones de Astro View Transitions
  document.addEventListener('astro:after-swap', () => {
    overlay.style.opacity = '0';
  });
}

// Ejecutar cuando el DOM esté listo
if (typeof window !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initNavigationTransitions);
  } else {
    initNavigationTransitions();
  }
}
