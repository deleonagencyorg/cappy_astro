// src/config/routes.ts
export interface RouteConfig {
  id: string; // Identificador único para la ruta (ej: 'home', 'contact')
  slugs: { [key: string]: string }; // Mapeo de idioma a slug (ej: { es: 'contacto', en: 'contact' })
  contentComponent: string; // Ruta al componente Astro que renderiza el contenido (ej: '@/components/pages/ContactPage.astro')
}

export const routesConfig: RouteConfig[] = [
  {
    id: 'home',
    slugs: { es: '', en: '' }, // Slug vacío para la página de inicio base del idioma
    contentComponent: '@/views/Home/index.astro',
  },
  {
    id: 'contact',
    slugs: { es: 'contacto', en: 'contact' },
    contentComponent: '@/views/Contact/index.astro',
  },
  {
    id: 'recipes',
    slugs: { es: 'recetas', en: 'recipes' },
    contentComponent: '@/views/Recipes/index.astro',
  },
  {
    id: 'news',
    slugs: { es: 'blog', en: 'blog' },
    contentComponent: '@/views/News/index.astro',
  },
  {
    id: 'products',
    slugs: { es: 'productos', en: 'products' },
    contentComponent: '@/views/Products/index.astro',
  },
  {
    id: 'brands',
    slugs: { es: 'marcas', en: 'brands' },
    contentComponent: '@/views/Brands/index.astro',
  },
  {
    id: 'yummiesone',
    slugs: { es: 'yummiesone', en: 'yummiesone' },
    contentComponent: '@/views/YummiesOne/index.astro',
  },
  {
    id: 'about_us',
    slugs: { es: 'nosotros', en: 'about-us' },
    contentComponent: '@/views/AboutUs/index.astro',
  },
  // ... Agrega más rutas aquí
];

// Función helper para obtener una ruta por ID
export function getRouteById(id: string): RouteConfig | undefined {
  return routesConfig.find(route => route.id === id);
}

// Función helper para encontrar una ruta por slug y lang
export function findRouteBySlug(lang: string, slug: string): RouteConfig | undefined {
  return routesConfig.find(route => route.slugs[lang] === slug);
}
