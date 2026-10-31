export const cmsConfig = {
  url: import.meta.env.PUBLIC_CMS_URL?.trim() || 'https://api-cms-yummies.onrender.com',
  token: import.meta.env.PUBLIC_CMS_TOKEN?.trim(),
  siteId: import.meta.env.PUBLIC_CMS_SITE_ID?.trim(),
  brandSlug: import.meta.env.PUBLIC_CMS_BRAND_SLUG?.trim() || 'cappy',
};

export type CmsQueryParams = Record<string, string | number | boolean | undefined>;

export function siteFilter(params: CmsQueryParams = {}): CmsQueryParams {
  return cmsConfig.siteId ? { ...params, siteId: cmsConfig.siteId } : params;
}

export function brandFilter(params: CmsQueryParams = {}): CmsQueryParams {
  return { ...params, brandSlug: cmsConfig.brandSlug };
}
