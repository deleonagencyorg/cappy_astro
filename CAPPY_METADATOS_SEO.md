# Metadatos SEO para Cappy - Snacks Yummies

**Documento de Referencia para Meta Titles, Meta Descriptions y Schemas Estructurados**

---

## 1. PÁGINA DE INICIO (HOME)

### Español

#### Meta Title
```
Cappy Snacks | Snacks Extruidos de Maíz Crujientes | Yummies
```
**Longitud**: 67 caracteres | **Recomendación**: Óptimo (50-60 caracteres)

#### Meta Description
```
Descubre Cappy, los snacks extruidos de maíz con sabor intenso. Infladitos, Gorditos y Tornitos con múltiples sabores. ¡Atrévete a ser diferente! Disponible en Centroamérica.
```
**Longitud**: 155 caracteres | **Recomendación**: Óptimo (150-160 caracteres)

#### Schema Estructurado (JSON-LD)
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Cappy Snacks",
  "alternateName": "Cappy Yummies",
  "url": "https://www.cappysnacks.com/es/",
  "logo": "https://www.cappysnacks.com/logo.png",
  "description": "Cappy es la marca líder de snacks extruidos de maíz en Centroamérica, ofreciendo productos crujientes con sabores intensos y variados.",
  "sameAs": [
    "https://www.facebook.com/SnacksYummies",
    "https://www.instagram.com/snacksyummies",
    "https://www.tiktok.com/@snacksyummies"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "Customer Service",
    "telephone": "+504-2275-3370",
    "areaServed": ["HN", "GT", "SV", "CR", "NI", "DO"]
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Barrio Morazán, Frente a Plantas Tropicales, Bulevar Suyapa",
    "addressLocality": "Tegucigalpa",
    "addressRegion": "Francisco Morazán",
    "postalCode": "Honduras",
    "addressCountry": "HN"
  }
}
```

---

### English

#### Meta Title
```
Cappy Snacks | Crispy Corn Extruded Snacks | Yummies
```
**Length**: 62 characters | **Recommendation**: Optimal (50-60 characters)

#### Meta Description
```
Discover Cappy, crispy corn extruded snacks with intense flavors. Infladitos, Gorditos, and Tornitos with multiple flavor options. Dare to be different! Available in Central America.
```
**Length**: 169 characters | **Recommendation**: Optimal (150-160 characters)

#### Structured Schema (JSON-LD)
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Cappy Snacks",
  "alternateName": "Cappy Yummies",
  "url": "https://www.cappysnacks.com/en/",
  "logo": "https://www.cappysnacks.com/logo.png",
  "description": "Cappy is the leading brand of corn extruded snacks in Central America, offering crispy products with intense and varied flavors.",
  "sameAs": [
    "https://www.facebook.com/SnacksYummies",
    "https://www.instagram.com/snacksyummies",
    "https://www.tiktok.com/@snacksyummies"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "Customer Service",
    "telephone": "+504-2275-3370",
    "areaServed": ["HN", "GT", "SV", "CR", "NI", "DO"]
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Barrio Morazán, Frente a Plantas Tropicales, Bulevar Suyapa",
    "addressLocality": "Tegucigalpa",
    "addressRegion": "Francisco Morazán",
    "postalCode": "Honduras",
    "addressCountry": "HN"
  }
}
```

---

## 2. PÁGINA DE PRODUCTOS

### Español

#### Meta Title
```
Productos Cappy | Snacks de Maíz Infladitos, Gorditos y Tornitos
```
**Longitud**: 67 caracteres | **Recomendación**: Óptimo

#### Meta Description
```
Explora toda la variedad de productos Cappy: Infladitos Queso y Mantequilla, Gorditos Queso Intenso, Tornitos Chile Toreado y más sabores. Encuentra tu favorito.
```
**Longitud**: 152 caracteres | **Recomendación**: Óptimo

#### Schema Estructurado (JSON-LD)
```json
{
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Productos Cappy",
  "description": "Catálogo completo de productos Cappy con todas las variedades de snacks extruidos de maíz",
  "url": "https://www.cappysnacks.com/es/productos/",
  "mainEntity": {
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "Product",
        "position": 1,
        "name": "Cappy Infladitos Queso y Mantequilla",
        "description": "Extruido de maíz inflado con sabor a queso y mantequilla",
        "image": "https://www.cappysnacks.com/images/cappy-infladitos-queso.jpg",
        "brand": {
          "@type": "Brand",
          "name": "Cappy"
        },
        "offers": {
          "@type": "AggregateOffer",
          "availability": "https://schema.org/InStock",
          "priceCurrency": "USD",
          "price": "0.99"
        }
      },
      {
        "@type": "Product",
        "position": 2,
        "name": "Cappy Gorditos Queso Intenso",
        "description": "Extruido de maíz crujiente con sabor a queso intenso",
        "image": "https://www.cappysnacks.com/images/cappy-gorditos-queso.jpg",
        "brand": {
          "@type": "Brand",
          "name": "Cappy"
        },
        "offers": {
          "@type": "AggregateOffer",
          "availability": "https://schema.org/InStock",
          "priceCurrency": "USD",
          "price": "1.49"
        }
      },
      {
        "@type": "Product",
        "position": 3,
        "name": "Cappy Tornitos Chile Toreado",
        "description": "Extruido de maíz en forma de tornillo con sabor a chile toreado",
        "image": "https://www.cappysnacks.com/images/cappy-tornitos-chile.jpg",
        "brand": {
          "@type": "Brand",
          "name": "Cappy"
        },
        "offers": {
          "@type": "AggregateOffer",
          "availability": "https://schema.org/InStock",
          "priceCurrency": "USD",
          "price": "1.99"
        }
      }
    ]
  }
}
```

---

### English

#### Meta Title
```
Cappy Products | Corn Snacks Infladitos, Gorditos, and Tornitos
```
**Length**: 66 characters | **Recommendation**: Optimal

#### Meta Description
```
Explore the complete range of Cappy products: Cheese and Butter Infladitos, Intense Cheese Gorditos, Chile Toreado Tornitos and more flavors. Find your favorite.
```
**Length**: 156 characters | **Recommendation**: Optimal

#### Structured Schema (JSON-LD)
```json
{
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Cappy Products",
  "description": "Complete catalog of Cappy products with all varieties of corn extruded snacks",
  "url": "https://www.cappysnacks.com/en/products/",
  "mainEntity": {
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "Product",
        "position": 1,
        "name": "Cappy Infladitos Cheese and Butter",
        "description": "Inflated corn extruded snack with cheese and butter flavor",
        "image": "https://www.cappysnacks.com/images/cappy-infladitos-queso.jpg",
        "brand": {
          "@type": "Brand",
          "name": "Cappy"
        },
        "offers": {
          "@type": "AggregateOffer",
          "availability": "https://schema.org/InStock",
          "priceCurrency": "USD",
          "price": "0.99"
        }
      },
      {
        "@type": "Product",
        "position": 2,
        "name": "Cappy Gorditos Intense Cheese",
        "description": "Crispy corn extruded snack with intense cheese flavor",
        "image": "https://www.cappysnacks.com/images/cappy-gorditos-queso.jpg",
        "brand": {
          "@type": "Brand",
          "name": "Cappy"
        },
        "offers": {
          "@type": "AggregateOffer",
          "availability": "https://schema.org/InStock",
          "priceCurrency": "USD",
          "price": "1.49"
        }
      },
      {
        "@type": "Product",
        "position": 3,
        "name": "Cappy Tornitos Chile Toreado",
        "description": "Screw-shaped corn extruded snack with chile toreado flavor",
        "image": "https://www.cappysnacks.com/images/cappy-tornitos-chile.jpg",
        "brand": {
          "@type": "Brand",
          "name": "Cappy"
        },
        "offers": {
          "@type": "AggregateOffer",
          "availability": "https://schema.org/InStock",
          "priceCurrency": "USD",
          "price": "1.99"
        }
      }
    ]
  }
}
```

---

## 3. PÁGINA DE RECETAS

### Español

#### Meta Title
```
Recetas con Cappy | Ideas Deliciosas para Tus Snacks Favoritos
```
**Longitud**: 68 caracteres | **Recomendación**: Óptimo

#### Meta Description
```
Descubre recetas creativas y deliciosas con los snacks Cappy. Desde alitas de pollo hasta postres, inspírate con nuestras mejores combinaciones culinarias.
```
**Longitud**: 143 caracteres | **Recomendación**: Óptimo

#### Schema Estructurado (JSON-LD)
```json
{
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Recetas con Cappy",
  "description": "Colección de recetas creativas utilizando productos Cappy",
  "url": "https://www.cappysnacks.com/es/recetas/",
  "mainEntity": {
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "Recipe",
        "position": 1,
        "name": "Alitas de Pollo Crispy con Cappy Ranchitas",
        "description": "Alitas de pollo empanizadas con Cappy Ranchitas para un crujiente irresistible",
        "image": "https://www.cappysnacks.com/images/recipe-alitas-pollo.jpg",
        "author": {
          "@type": "Organization",
          "name": "Cappy Snacks"
        },
        "prepTime": "PT15M",
        "cookTime": "PT25M",
        "totalTime": "PT40M",
        "recipeYield": "4 porciones",
        "recipeIngredient": [
          "1 kg de alitas de pollo",
          "2 tazas de Cappy Ranchitas molidas",
          "2 huevos",
          "Sal y pimienta al gusto"
        ],
        "recipeInstructions": [
          {
            "@type": "HowToStep",
            "text": "Preparar los ingredientes y mezclar el Cappy molido con especias"
          },
          {
            "@type": "HowToStep",
            "text": "Pasar las alitas por huevo y luego por la mezcla de Cappy"
          },
          {
            "@type": "HowToStep",
            "text": "Freír en aceite caliente hasta dorar"
          }
        ],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "ratingCount": "245"
        }
      }
    ]
  }
}
```

---

### English

#### Meta Title
```
Cappy Recipes | Delicious Ideas for Your Favorite Snacks
```
**Length**: 63 characters | **Recommendation**: Optimal

#### Meta Description
```
Discover creative and delicious recipes with Cappy snacks. From chicken wings to desserts, get inspired with our best culinary combinations.
```
**Length**: 139 characters | **Recommendation**: Optimal

#### Structured Schema (JSON-LD)
```json
{
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Cappy Recipes",
  "description": "Collection of creative recipes using Cappy products",
  "url": "https://www.cappysnacks.com/en/recipes/",
  "mainEntity": {
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "Recipe",
        "position": 1,
        "name": "Crispy Chicken Wings with Cappy Ranchitas",
        "description": "Chicken wings breaded with Cappy Ranchitas for an irresistible crunch",
        "image": "https://www.cappysnacks.com/images/recipe-alitas-pollo.jpg",
        "author": {
          "@type": "Organization",
          "name": "Cappy Snacks"
        },
        "prepTime": "PT15M",
        "cookTime": "PT25M",
        "totalTime": "PT40M",
        "recipeYield": "4 servings",
        "recipeIngredient": [
          "1 kg chicken wings",
          "2 cups ground Cappy Ranchitas",
          "2 eggs",
          "Salt and pepper to taste"
        ],
        "recipeInstructions": [
          {
            "@type": "HowToStep",
            "text": "Prepare ingredients and mix ground Cappy with spices"
          },
          {
            "@type": "HowToStep",
            "text": "Dip wings in egg and then in Cappy mixture"
          },
          {
            "@type": "HowToStep",
            "text": "Fry in hot oil until golden"
          }
        ],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "ratingCount": "245"
        }
      }
    ]
  }
}
```

---

## 4. PÁGINA DE CONTACTO

### Español

#### Meta Title
```
Contacto Cappy | Comunícate con Nosotros | Snacks Yummies
```
**Longitud**: 63 caracteres | **Recomendación**: Óptimo

#### Meta Description
```
¿Preguntas sobre Cappy? Contáctanos por teléfono, correo o formulario. Estamos disponibles de lunes a viernes para ayudarte. ¡Queremos escucharte!
```
**Longitud**: 139 caracteres | **Recomendación**: Óptimo

#### Schema Estructurado (JSON-LD)
```json
{
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Contacto Cappy",
  "description": "Página de contacto de Cappy Snacks para consultas y sugerencias",
  "url": "https://www.cappysnacks.com/es/contacto/",
  "mainEntity": {
    "@type": "Organization",
    "name": "Cappy Snacks",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "telephone": "+504-2275-3370",
      "email": "contacto@cappysnacks.com",
      "areaServed": ["HN", "GT", "SV", "CR", "NI", "DO"],
      "availableLanguage": ["es", "en"]
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Barrio Morazán, Frente a Plantas Tropicales, Bulevar Suyapa",
      "addressLocality": "Tegucigalpa",
      "addressRegion": "Francisco Morazán",
      "postalCode": "Honduras",
      "addressCountry": "HN"
    },
    "sameAs": [
      "https://www.facebook.com/SnacksYummies",
      "https://www.instagram.com/snacksyummies",
      "https://www.tiktok.com/@snacksyummies"
    ]
  }
}
```

---

### English

#### Meta Title
```
Contact Cappy | Get in Touch with Us | Yummies Snacks
```
**Length**: 60 characters | **Recommendation**: Optimal

#### Meta Description
```
Questions about Cappy? Contact us by phone, email, or form. We're available Monday to Friday to help you. We want to hear from you!
```
**Length**: 135 characters | **Recommendation**: Optimal

#### Structured Schema (JSON-LD)
```json
{
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Contact Cappy",
  "description": "Contact page for Cappy Snacks for inquiries and suggestions",
  "url": "https://www.cappysnacks.com/en/contact/",
  "mainEntity": {
    "@type": "Organization",
    "name": "Cappy Snacks",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "telephone": "+504-2275-3370",
      "email": "contact@cappysnacks.com",
      "areaServed": ["HN", "GT", "SV", "CR", "NI", "DO"],
      "availableLanguage": ["es", "en"]
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Barrio Morazán, Frente a Plantas Tropicales, Bulevar Suyapa",
      "addressLocality": "Tegucigalpa",
      "addressRegion": "Francisco Morazán",
      "postalCode": "Honduras",
      "addressCountry": "HN"
    },
    "sameAs": [
      "https://www.facebook.com/SnacksYummies",
      "https://www.instagram.com/snacksyummies",
      "https://www.tiktok.com/@snacksyummies"
    ]
  }
}
```

---

## 5. PÁGINA DE PROMOCIONES

### Español

#### Meta Title
```
Promociones Cappy | Ofertas Especiales en Snacks Extruidos
```
**Longitud**: 63 caracteres | **Recomendación**: Óptimo

#### Meta Description
```
¡Aprovecha nuestras promociones especiales en Cappy! Descuentos en 2 packs, ofertas por tiempo limitado y más. ¡No te lo pierdas!
```
**Longitud**: 128 caracteres | **Recomendación**: Óptimo

#### Schema Estructurado (JSON-LD)
```json
{
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Promociones Cappy",
  "description": "Página de promociones y ofertas especiales de Cappy Snacks",
  "url": "https://www.cappysnacks.com/es/promociones/",
  "mainEntity": {
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "Offer",
        "position": 1,
        "name": "2 Pack Cappy Infladitos",
        "description": "Promoción especial: 2 packs de Cappy Infladitos Queso y Mantequilla",
        "price": "1.49",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "validFrom": "2025-12-16",
        "validThrough": "2025-12-31",
        "url": "https://www.cappysnacks.com/es/promociones/2pack-infladitos",
        "image": "https://www.cappysnacks.com/images/promo-2pack-infladitos.jpg"
      },
      {
        "@type": "Offer",
        "position": 2,
        "name": "Descuento Taqueritos",
        "description": "Descuento especial en Taqueritos de la marca Yummies",
        "price": "0.79",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "validFrom": "2025-12-16",
        "validThrough": "2025-12-31",
        "url": "https://www.cappysnacks.com/es/promociones/descuento-taqueritos",
        "image": "https://www.cappysnacks.com/images/promo-taqueritos.jpg"
      }
    ]
  }
}
```

---

### English

#### Meta Title
```
Cappy Promotions | Special Offers on Extruded Snacks
```
**Length**: 60 characters | **Recommendation**: Optimal

#### Meta Description
```
Take advantage of our special Cappy promotions! Discounts on 2-packs, limited-time offers and more. Don't miss out!
```
**Length**: 113 characters | **Recommendation**: Optimal

#### Structured Schema (JSON-LD)
```json
{
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Cappy Promotions",
  "description": "Page of special promotions and offers from Cappy Snacks",
  "url": "https://www.cappysnacks.com/en/promotions/",
  "mainEntity": {
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "Offer",
        "position": 1,
        "name": "2 Pack Cappy Infladitos",
        "description": "Special promotion: 2 packs of Cappy Infladitos Cheese and Butter",
        "price": "1.49",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "validFrom": "2025-12-16",
        "validThrough": "2025-12-31",
        "url": "https://www.cappysnacks.com/en/promotions/2pack-infladitos",
        "image": "https://www.cappysnacks.com/images/promo-2pack-infladitos.jpg"
      },
      {
        "@type": "Offer",
        "position": 2,
        "name": "Taqueritos Discount",
        "description": "Special discount on Taqueritos from the Yummies brand",
        "price": "0.79",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "validFrom": "2025-12-16",
        "validThrough": "2025-12-31",
        "url": "https://www.cappysnacks.com/en/promotions/taqueritos-discount",
        "image": "https://www.cappysnacks.com/images/promo-taqueritos.jpg"
      }
    ]
  }
}
```

---

## RECOMENDACIONES GENERALES DE IMPLEMENTACIÓN

### Buenas Prácticas SEO

1. **Meta Titles**: Mantener entre 50-60 caracteres para visualización óptima en resultados de búsqueda
2. **Meta Descriptions**: Usar entre 150-160 caracteres para máxima visibilidad
3. **Palabras Clave**: Incluir términos relevantes como "snacks", "maíz extruido", "crujiente", "sabores"
4. **Estructura de URLs**: Usar URLs amigables con palabras clave (ej: /es/productos/, /en/recipes/)
5. **Lenguaje Hreflang**: Implementar etiquetas hreflang para indicar versiones en diferentes idiomas

### Implementación de Schemas

Los schemas JSON-LD deben colocarse dentro de la etiqueta `<head>` del documento HTML. Ejemplo:

```html
<head>
  <meta charset="UTF-8">
  <meta name="description" content="[Meta Description aquí]">
  <title>[Meta Title aquí]</title>
  
  <script type="application/ld+json">
    [Schema JSON-LD aquí]
  </script>
</head>
```

### Validación

- Utilizar Google Search Console para validar meta tags
- Usar Schema.org Validator para verificar schemas estructurados
- Realizar pruebas con herramientas como Lighthouse para SEO

---

## TABLA RESUMEN DE METADATOS

| Página | Meta Title (ES) | Meta Title (EN) | Descripción (ES) | Descripción (EN) |
|--------|-----------------|-----------------|------------------|------------------|
| Home | Cappy Snacks \| Snacks Extruidos de Maíz Crujientes \| Yummies | Cappy Snacks \| Crispy Corn Extruded Snacks \| Yummies | Descubre Cappy, los snacks extruidos de maíz con sabor intenso... | Discover Cappy, crispy corn extruded snacks with intense flavors... |
| Productos | Productos Cappy \| Snacks de Maíz Infladitos, Gorditos y Tornitos | Cappy Products \| Corn Snacks Infladitos, Gorditos, and Tornitos | Explora toda la variedad de productos Cappy... | Explore the complete range of Cappy products... |
| Recetas | Recetas con Cappy \| Ideas Deliciosas para Tus Snacks Favoritos | Cappy Recipes \| Delicious Ideas for Your Favorite Snacks | Descubre recetas creativas y deliciosas con los snacks Cappy... | Discover creative and delicious recipes with Cappy snacks... |
| Contacto | Contacto Cappy \| Comunícate con Nosotros \| Snacks Yummies | Contact Cappy \| Get in Touch with Us \| Yummies Snacks | ¿Preguntas sobre Cappy? Contáctanos por teléfono, correo o formulario... | Questions about Cappy? Contact us by phone, email, or form... |
| Promociones | Promociones Cappy \| Ofertas Especiales en Snacks Extruidos | Cappy Promotions \| Special Offers on Extruded Snacks | ¡Aprovecha nuestras promociones especiales en Cappy!... | Take advantage of our special Cappy promotions!... |

---

## NOTAS IMPORTANTES

- **Actualización Regular**: Los meta titles y descriptions deben actualizarse cuando hay cambios en productos o promociones
- **Consistencia de Marca**: Mantener la voz y tono de marca en todos los metadatos
- **Localización**: Adaptar los metadatos según el país/región de distribución
- **Mobile First**: Asegurar que los metadatos sean legibles en dispositivos móviles
- **Monitoreo**: Usar Google Analytics y Search Console para monitorear el rendimiento de los metadatos

