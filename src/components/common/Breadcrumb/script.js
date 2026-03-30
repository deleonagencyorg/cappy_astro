// Breadcrumb component script
document.addEventListener('DOMContentLoaded', () => {
  // Get all breadcrumb links
  const breadcrumbLinks = document.querySelectorAll('.breadcrumb-link');
  
  // Add active class to current path link
  breadcrumbLinks.forEach(link => {
    // Skip if it's already marked as current
    if (link.classList.contains('current')) return;
    
    // Check if the link href matches the current path
    if (link.getAttribute('href') === window.location.pathname) {
      link.classList.add('current');
    }
  });

  //evitar doble navegación
  let isNavigating = false; 

  window.addEventListener('localeChanged', (event) => {
    if (isNavigating) return; 

    const currentPath = window.location.pathname;
    const segments = currentPath.split('/').filter(Boolean);
    
    if (segments.length > 0) {
      const currentLocale = segments[0];
      const newLocale = event.detail.locale;
      
      // Only redirect if the current path starts with a locale
      if (['es', 'en'].includes(currentLocale) && currentLocale !== newLocale) {
        isNavigating = true; 
        const newPath = currentPath.replace(`/${currentLocale}`, `/${newLocale}`);
        window.location.href = newPath;
      }
    }
  });

  window.addEventListener('pageshow', () => {
    isNavigating = false;
  });
});
