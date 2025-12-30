import React, { useMemo, useState } from 'react';

export default function ProductsFilterGrid({
  products = [],
  categories = {},
  currentLang = 'es',
}) {
  const [activeCategory, setActiveCategory] = useState('all');

  const normalizedProducts = useMemo(() => {
    const list = Array.isArray(products) ? products : [];
    const map = new Map();
    for (const p of list) {
      if (!p) continue;
      const key = String(p.slug || p.id || '');
      if (!key) continue;
      if (!map.has(key)) map.set(key, p);
    }
    return Array.from(map.values());
  }, [products]);

  const categoryKeys = useMemo(() => {
    const keys = Object.keys(categories || {});
    if (!keys.includes('all')) return ['all', ...keys];
    return keys;
  }, [categories]);

  const filteredProducts = useMemo(() => {
    if (activeCategory === 'all') return normalizedProducts;
    return normalizedProducts.filter((p) => p?.category === activeCategory);
  }, [normalizedProducts, activeCategory]);

  const productBasePath = currentLang === 'es' ? 'productos' : 'products';

  return (
    <div className="w-full">
      <div className="w-full overflow-x-auto pb-2">
        <div className="inline-flex gap-3 min-w-max">
          {categoryKeys.map((key) => {
            const label = categories?.[key] ?? key;
            const isActive = key === activeCategory;

            return (
              <button
                key={key}
                type="button"
                onClick={() => setActiveCategory(key)}
                className={
                  isActive
                    ? 'px-5 py-2 rounded-full bg-blue text-white font-semibold text-sm md:text-base'
                    : 'px-5 py-2 rounded-full bg-white/40 text-blue font-semibold text-sm md:text-base hover:bg-white/60'
                }
              >
                {label}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
        {filteredProducts.map((product, index) => {
          const href = `/${currentLang}/${productBasePath}/${product.id}`;
          return (
            <a
              key={`${product.slug || product.id || 'product'}-${index}`}
              href={href}
              className="group block"
            >
              <div className="w-full flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  className="w-full max-w-[320px] h-auto transition-transform duration-200 group-hover:scale-[1.02]"
                />
              </div>

              <div className="mt-4 text-blue font-title italic font-bold leading-tight text-lg sm:text-xl md:text-2xl">
                {product.name}
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}
