import { brandFilter, cmsConfig, siteFilter, type CmsQueryParams } from './config';
import { cmsClient } from './client';

export interface CmsList<T> {
  data?: T[];
  pagination?: { page?: number; pageSize?: number; total?: number };
}

export interface CmsMedia {
  id?: string;
  originalUrl?: string;
  optimizedUrl?: string;
  thumbnailUrl?: string;
  seoUrl?: string;
  externalUrl?: string;
  provider?: string;
  videoId?: string;
  embedCode?: string;
  mimeType?: string;
  fileType?: string;
  altText?: string;
}

export interface CmsBanner {
  id?: string;
  type?: string;
  desktop?: CmsMedia | null;
  mobile?: CmsMedia | null;
  alt?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  link?: string;
  order?: number;
  html?: {
    backgroundImage?: CmsMedia | null;
    backgroundImageMobile?: CmsMedia | null;
    image?: CmsMedia | null;
    imageMobile?: CmsMedia | null;
    title?: string;
    subtitle?: string;
    description?: string;
    buttonText?: string;
    buttonUrl?: string;
  } | null;
}

export interface CmsPage {
  id: string;
  siteId?: string;
  languageCode?: string;
  title: string;
  slug: string;
  content?: string;
  excerpt?: string;
  featuredImage?: CmsMedia | null;
  status?: string;
  publishedAt?: string;
  metaTitle?: string;
  metaDescription?: string;
  metaKeywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: CmsMedia | null;
  canonicalUrl?: string;
  isHomepage?: boolean;
  showInMenu?: boolean;
  banners?: CmsBanner[];
}

export interface CmsProduct {
  id: string;
  name: string;
  slug?: string;
  image?: string;
  imageMobile?: string;
  backgroundColor?: string;
  category?: string;
  headerTextColor?: string;
  colorButton?: string;
  textColor?: string;
  description?: string;
  available?: string;
  backgroundImage?: string;
  isNew?: boolean;
  nameDescription?: string;
  secondColorButton?: string;
  borderColor?: string;
  sortOrder?: number;
  languageCode?: string;
  sizes?: Array<{ value?: string; image?: string }>;
  weight?: string[];
  nutrition?: {
    title?: string;
    serving?: string;
    rows?: Array<{ label: string; value: string }>;
    disclaimer?: string;
  };
  brandId?: string;
}

export interface CmsProductCategory {
  id: string;
  key: string;
  label: string;
  slug?: string;
  backgroundColor?: string;
  order?: number;
}

export interface CmsRecipe {
  id: string;
  title: string;
  slug?: string;
  date?: string;
  people?: string | number;
  difficulty?: string;
  image?: string;
  gallery?: string[];
  type?: string;
  preparationTime?: number;
  preparation_time?: number;
  video?: string;
  ingredients?: string[];
  category?: string;
  instructions?: string[];
  languageCode?: string;
  brands?: Array<{ id?: string; name?: string; slug?: string }>;
  products?: Array<{ id?: string; name?: string; slug?: string }>;
}

export interface CmsNews {
  id: string;
  title: string;
  slug: string;
  subtitle?: string;
  image?: string;
  imageMobile?: string;
  gallery?: string[];
  content?: string;
  excerpt?: string;
  category?: string;
  tags?: string[];
  author?: string;
  publishedAt?: string | null;
  isPublished?: boolean;
  isFeatured?: boolean;
  languageCode?: string;
  brands?: Array<{ id?: string; name?: string; slug?: string }>;
  createdAt?: string;
}

export interface CmsBrand {
  id: string;
  name: string;
  slug: string;
  logoUrl?: string;
  background?: string;
  brandLanguages?: Array<{
    name?: string;
    link?: string;
    logoUrl?: string;
    caption?: string;
    code?: string;
  }>;
}

export interface CmsNavigationItem {
  id: string;
  label: string;
  href: string;
  order: number;
  parentId?: string | null;
  isExternal?: boolean;
  action?: string;
}

export interface CmsNavigation {
  id: string;
  languageCode?: string;
  openMenuLabel?: string;
  closeMenuLabel?: string;
  items?: CmsNavigationItem[];
}

export interface CmsSocialLink {
  id: string;
  platform: string;
  name?: string;
  url?: string;
  alt?: string;
  icon?: CmsMedia | null;
  order?: number;
}

export interface CmsGalleryImage {
  id: string;
  image?: CmsMedia | null;
  alt?: string;
  caption?: string;
  order?: number;
}

export interface CmsContact {
  id: string;
  title?: string;
  subtitle?: string;
  description?: string;
  email?: string;
  phone?: string;
  form?: {
    title?: string;
    contactReason?: { label?: string; placeholder?: string; required?: boolean; options?: string[] };
    fullName?: { label?: string; placeholder?: string; required?: boolean };
    email?: { label?: string; placeholder?: string; required?: boolean };
    phone?: { label?: string; placeholder?: string; required?: boolean };
    message?: { label?: string; placeholder?: string; required?: boolean };
    submit?: string;
  };
  offices?: {
    title?: string;
    locations?: Array<{
      id?: string;
      countryCode?: string;
      tab?: string;
      name?: string;
      address?: string;
      phones?: string[];
      fax?: string;
      email?: string;
      mapEmbed?: string;
      order?: number;
    }>;
  };
  map?: { title?: string; description?: string };
}

export interface CmsFooter {
  id: string;
  [key: string]: string | undefined;
}

export interface CmsSiteText {
  id: string;
  key: string;
  value: string;
}

export interface CmsTopMessage {
  id: string;
  title?: string;
  text?: string;
  link?: string;
  order?: number;
  isActive?: boolean;
  is_active?: boolean;
}

export interface CmsAboutTimelineItem {
  id: string;
  year: string;
  title?: string;
  text: string;
  imageUrl?: string;
  mobileImageUrl?: string;
  image?: CmsMedia | null;
  mobileImage?: CmsMedia | null;
  order?: number;
}

export interface CmsHomeVideo {
  id: string;
  title?: string;
  description?: string;
  video?: CmsMedia | null;
  image?: CmsMedia | null;
  imageUrl?: string;
  order?: number;
}

const reportedFailures = new Set<string>();
const collectionCache = new Map<string, { request: Promise<unknown[] | null>; expiresAt: number }>();

function reportFailure(surface: string, error: unknown): void {
  if (reportedFailures.has(surface)) return;
  reportedFailures.add(surface);
  const reason = error instanceof Error ? error.message : String(error);
  console.error(`[CMS] Unable to load ${surface}: ${reason}`);
}

function getCollection<T>(
  endpoint: string,
  params: CmsQueryParams,
  surface: string,
  maxPages = 25,
  cacheTtlMs = Number.POSITIVE_INFINITY
): Promise<T[] | null> {
  const cacheKey = `${endpoint}:${JSON.stringify(params)}:${maxPages}`;
  const cached = collectionCache.get(cacheKey);
  if (cached && cached.expiresAt > Date.now()) return cached.request as Promise<T[] | null>;
  const request = loadCollection<T>(endpoint, params, surface, maxPages);
  collectionCache.set(cacheKey, {
    request: request as Promise<unknown[] | null>,
    expiresAt: Date.now() + cacheTtlMs,
  });
  return request;
}

async function loadCollection<T>(
  endpoint: string,
  params: CmsQueryParams,
  surface: string,
  maxPages: number
): Promise<T[] | null> {
  try {
    const items: T[] = [];
    for (let page = 1; page <= maxPages; page += 1) {
      const response = await cmsClient.get<CmsList<T>>(endpoint, { ...params, page, pageSize: 100 });
      const batch = Array.isArray(response?.data) ? response.data : [];
      items.push(...batch);
      const total = response?.pagination?.total;
      if (batch.length === 0 || (typeof total === 'number' && items.length >= total) || batch.length < 100) break;
    }
    return items;
  } catch (error) {
    reportFailure(surface, error);
    return null;
  }
}

function siteParams(locale: string, extra: CmsQueryParams = {}): CmsQueryParams {
  if (!cmsConfig.siteId) {
    throw new Error('PUBLIC_CMS_SITE_ID is required for site-scoped CMS content.');
  }
  return siteFilter({ languageCode: locale, ...extra });
}

export function mediaUrl(value?: string | CmsMedia | null): string {
  if (!value) return '';
  if (typeof value === 'string') return value;
  return value.optimizedUrl || value.originalUrl || value.seoUrl || value.thumbnailUrl || value.externalUrl || '';
}

function brandScoped(locale: string, extra: CmsQueryParams = {}): CmsQueryParams {
  return brandFilter({ languageCode: locale, ...siteFilter(extra) });
}

export function getCmsProducts(locale = 'es'): Promise<CmsProduct[] | null> {
  return getCollection<CmsProduct>('v1/products', brandScoped(locale), 'products');
}

export async function getCmsProductCategories(locale = 'es'): Promise<Record<string, string> | null> {
  let params: CmsQueryParams;
  try {
    params = siteParams(locale);
  } catch (error) {
    reportFailure('product categories', error);
    return null;
  }
  const items = await getCollection<CmsProductCategory>('v1/product-categories', params, 'product categories');
  if (!items?.length) return null;
  return Object.fromEntries(sortCmsOrder(items).map((item) => [item.key || item.slug || item.id, item.label]));
}

export function getCmsRecipes(locale = 'es'): Promise<CmsRecipe[] | null> {
  return getCollection<CmsRecipe>('v1/recipes', brandScoped(locale), 'recipes');
}

export function getCmsNews(locale = 'es'): Promise<CmsNews[] | null> {
  return getCollection<CmsNews>(
    'v1/news',
    siteFilter({ languageCode: locale, isPublished: true }),
    'news'
  ).then((items) => items?.filter((item) => item.isPublished !== false) ?? items);
}

export function getCmsPages(locale = 'es'): Promise<CmsPage[] | null> {
  let params: CmsQueryParams;
  try {
    params = siteParams(locale, { status: 'published' });
  } catch (error) {
    reportFailure('pages', error);
    return Promise.resolve(null);
  }
  return getCollection<CmsPage>('v1/pages', params, 'pages');
}

export async function getCmsPageBySlug(slug: string, locale = 'es'): Promise<CmsPage | null> {
  const pages = await getCmsPages(locale);
  return pages?.find((page) => page.slug === slug) ?? null;
}

export async function getCmsHomePage(locale = 'es'): Promise<CmsPage | null> {
  const pages = await getCmsPages(locale);
  return pages?.find((page) => page.isHomepage || ['home', 'inicio', 'index'].includes(page.slug.toLowerCase())) ?? null;
}

export async function getCmsSiteTexts(locale = 'es'): Promise<Record<string, string> | null> {
  let params: CmsQueryParams;
  try {
    params = siteParams(locale);
  } catch (error) {
    reportFailure('site texts', error);
    return null;
  }
  const items = await getCollection<CmsSiteText>('v1/site-texts', params, 'site texts', 25, 60_000);
  if (!items) throw new Error(`CMS site texts could not be loaded for locale '${locale}'`);
  return Object.fromEntries(items.filter((item) => item.key).map((item) => [item.key, item.value ?? '']));
}

export function getCmsBrands(): Promise<CmsBrand[] | null> {
  return getCollection<CmsBrand>('v1/brands', {}, 'brands');
}

export async function getCmsNavigation(locale = 'es'): Promise<CmsNavigation | null> {
  let params: CmsQueryParams;
  try {
    params = siteParams(locale);
  } catch (error) {
    reportFailure('navigation', error);
    return null;
  }
  const items = await getCollection<CmsNavigation>('v1/navigation', params, 'navigation', 1);
  return items?.[0] ?? null;
}

export async function getCmsFooter(locale = 'es'): Promise<CmsFooter | null> {
  let params: CmsQueryParams;
  try {
    params = siteParams(locale);
  } catch (error) {
    reportFailure('footer', error);
    return null;
  }
  const items = await getCollection<CmsFooter>('v1/footer', params, 'footer', 1);
  return items?.[0] ?? null;
}

export async function getCmsSocialLinks(locale = 'es'): Promise<CmsSocialLink[] | null> {
  let params: CmsQueryParams;
  try {
    params = siteParams(locale);
  } catch (error) {
    reportFailure('social links', error);
    return null;
  }
  return getCollection<CmsSocialLink>('v1/social-media', params, 'social links');
}

export async function getCmsGallery(locale = 'es'): Promise<CmsGalleryImage[] | null> {
  let params: CmsQueryParams;
  try {
    params = siteParams(locale);
  } catch (error) {
    reportFailure('gallery', error);
    return null;
  }
  return getCollection<CmsGalleryImage>('v1/gallery', params, 'gallery');
}

export async function getCmsContact(locale = 'es'): Promise<CmsContact | null> {
  let params: CmsQueryParams;
  try {
    params = siteParams(locale);
  } catch (error) {
    reportFailure('contact', error);
    return null;
  }
  const items = await getCollection<CmsContact>('v1/contact', params, 'contact', 1);
  return items?.[0] ?? null;
}

export async function getCmsTopMessages(locale = 'es'): Promise<Array<{ title: string; link?: string }> | null> {
  const brands = await getCmsBrands();
  const brand = brands?.find((item) => item.slug.toLowerCase() === cmsConfig.brandSlug.toLowerCase());
  if (!brand) {
    if (brands) reportFailure('top messages', new Error(`CMS brand "${cmsConfig.brandSlug}" was not found.`));
    return null;
  }
  const items = await getCollection<CmsTopMessage>(
    'v1/top-messages',
    { brandId: brand.id, languageCode: locale },
    'top messages',
    1
  );
  if (!items?.length) return null;
  return sortCmsOrder(items)
    .filter((item) => item.isActive !== false && item.is_active !== false)
    .map((item) => ({ title: item.title || item.text || '', link: item.link }))
    .filter((item) => item.title);
}

async function getCmsSectionList<T>(endpoint: string, locale: string, surface: string): Promise<T[] | null> {
  let params: CmsQueryParams;
  try {
    params = siteParams(locale);
  } catch (error) {
    reportFailure(surface, error);
    return null;
  }
  try {
    const response = await cmsClient.get<{ data?: T[] }>(`v1/${endpoint}`, params);
    return Array.isArray(response?.data) ? response.data : [];
  } catch (error) {
    reportFailure(surface, error);
    return null;
  }
}

export async function getCmsAboutTimeline(locale = 'es'): Promise<CmsAboutTimelineItem[] | null> {
  const items = await getCmsSectionList<CmsAboutTimelineItem>('about-timeline', locale, 'about timeline');
  return items ? sortCmsOrder(items) : null;
}

export async function getCmsHomeVideos(locale = 'es'): Promise<CmsHomeVideo[] | null> {
  const items = await getCmsSectionList<CmsHomeVideo>('home-videos', locale, 'home videos');
  return items ? sortCmsOrder(items) : null;
}

export function getCmsFooterLinks(locale = 'es'): Promise<Array<{ label: string; href: string }> | null> {
  return getCmsSectionList<{ id: string; label: string; url: string; order?: number }>(
    'footer-links',
    locale,
    'footer links'
  ).then((items) =>
    items
      ? sortCmsOrder(items).map((item) => ({ label: item.label, href: item.url }))
      : null
  );
}

export function sortCmsOrder<T extends { order?: number }>(items: T[]): T[] {
  return [...items].sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
}

export function cmsBannerSlides(page: CmsPage | null): Array<Record<string, any>> {
  const slides: Array<Record<string, any>> = [];
  for (const banner of sortCmsOrder(page?.banners ?? [])) {
    const html = banner.html;
    if (html && (mediaUrl(html.image) || mediaUrl(html.backgroundImage))) {
      slides.push({
        type: 'html',
        html: {
          backgroundImage: mediaUrl(html.backgroundImage),
          backgroundImageMobile: mediaUrl(html.backgroundImageMobile) || mediaUrl(html.backgroundImage),
          image: mediaUrl(html.image),
          imageMobile: mediaUrl(html.imageMobile) || mediaUrl(html.image),
          title: html.title || banner.title || '',
          subtitle: html.subtitle || banner.subtitle || '',
          description: html.description || banner.description || '',
          buttonText: html.buttonText || '',
          buttonUrl: html.buttonUrl || banner.link || '',
        },
      });
      continue;
    }
    const desktop = mediaUrl(banner.desktop);
    const mobile = mediaUrl(banner.mobile) || desktop;
    if (!desktop && !mobile) continue;
    const isPlayableVideo =
      banner.type === 'video' && /\.(mp4|webm|ogg)(?:$|[?#])/i.test(desktop || mobile);
    slides.push({
      type: isPlayableVideo ? 'video' : 'image',
      desktop: desktop || mobile,
      mobile,
      alt: banner.alt || banner.title || '',
      title: banner.title || '',
      subtitle: banner.subtitle || banner.description || '',
      link: banner.link || '',
    });
  }
  return slides;
}

export function cmsText(
  map: Record<string, string> | null | undefined,
  keys: string[],
  fallback = ''
): string {
  if (!map) return fallback;
  const normalize = (value: string) => value.toLowerCase().replace(/[^a-z0-9]/g, '');
  const entries = new Map(Object.entries(map).map(([key, value]) => [normalize(key), value]));
  for (const key of keys) {
    const value = entries.get(normalize(key));
    if (value?.trim()) return value;
  }
  return fallback;
}

export interface CappyMenuItem {
  id: string;
  text: string;
  href: string;
  submenu?: CappyMenuItem[];
}

export async function getCmsMenuItems(locale = 'es'): Promise<CappyMenuItem[] | null> {
  const navigation = await getCmsNavigation(locale);
  if (!navigation?.items?.length) return null;
  const ordered = sortCmsOrder(navigation.items);
  const buildTree = (parentId: string | null, ancestors: Set<string>): CappyMenuItem[] =>
    ordered
      .filter((item) => (item.parentId || null) === parentId && !ancestors.has(item.id))
      .map((item) => {
        const nestedAncestors = new Set(ancestors);
        nestedAncestors.add(item.id);
        const children = buildTree(item.id, nestedAncestors);
        const result: CappyMenuItem = { id: item.id, text: item.label, href: item.href || '#' };
        if (children.length) result.submenu = children;
        return result;
      });
  return buildTree(null, new Set());
}

export async function getCmsSocialForUi(locale = 'es'): Promise<Array<{ name: string; url: string; alt: string; iconUrl: string }> | null> {
  const items = await getCmsSocialLinks(locale);
  if (!items?.length) return null;
  return sortCmsOrder(items).map((item) => {
    const platform = item.platform || item.name || '';
    const normalizedPlatform = platform.toLowerCase().replace(/[^a-z]/g, '');
    const platformNames: Record<string, string> = {
      facebook: 'Facebook',
      instagram: 'Instagram',
      tiktok: 'TikTok',
      youtube: 'YouTube',
      x: 'X',
    };
    const name = platformNames[normalizedPlatform] || item.name || platform.replace(/[-_]/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase());
    return {
      name,
      url: item.url || '',
      alt: item.alt || name,
      iconUrl: mediaUrl(item.icon),
    };
  });
}

interface CmsModal {
  id: string;
  slug?: string;
  triggerLabel?: string;
  closeLabel?: string;
  image?: CmsMedia | string | null;
  imageAlt?: string;
  title?: string;
  paragraphs?: string[];
}

export interface CappyModalContent {
  openLabel: string;
  closeLabel: string;
  image: string;
  imageAlt: string;
  title: string;
  paragraphs: string[];
}

export async function getCmsModal(slug: string, locale = 'es'): Promise<CappyModalContent | null> {
  let params: CmsQueryParams;
  try {
    params = siteParams(locale);
  } catch (error) {
    reportFailure('modals', error);
    return null;
  }
  const items = await getCollection<CmsModal>('v1/modals', params, 'modals');
  const modal = items?.find((item) => item.slug === slug);
  if (!modal) return null;
  return {
    openLabel: modal.triggerLabel || '',
    closeLabel: modal.closeLabel || '',
    image: mediaUrl(modal.image),
    imageAlt: modal.imageAlt || '',
    title: modal.title || '',
    paragraphs: Array.isArray(modal.paragraphs) ? modal.paragraphs : [],
  };
}
