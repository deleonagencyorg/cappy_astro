import { cmsConfig, type CmsQueryParams } from './config';

let missingConfigReported = false;

export class CmsRequestError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'CmsRequestError';
  }
}

export const cmsClient = {
  async get<T>(endpoint: string, params: CmsQueryParams = {}): Promise<T> {
    if (!cmsConfig.url || !cmsConfig.token) {
      if (!missingConfigReported) {
        console.warn(
          '[CMS] CMS content is unavailable: configure PUBLIC_CMS_URL and PUBLIC_CMS_TOKEN. Local content will be used.'
        );
        missingConfigReported = true;
      }
      throw new CmsRequestError('CMS is not configured (PUBLIC_CMS_URL and PUBLIC_CMS_TOKEN are required).');
    }

    let baseUrl: URL;
    try {
      baseUrl = new URL(cmsConfig.url.endsWith('/') ? cmsConfig.url : `${cmsConfig.url}/`);
    } catch {
      throw new CmsRequestError('CMS is not configured: PUBLIC_CMS_URL must be an absolute URL.');
    }

    const path = endpoint.replace(/^\/+/, '');
    const url = new URL(path, baseUrl);
    for (const [key, value] of Object.entries(params)) {
      if (value !== undefined && value !== '') url.searchParams.set(key, String(value));
    }

    let response: Response;
    try {
      response = await fetch(url, {
        headers: {
          Authorization: `Bearer ${cmsConfig.token}`,
          Accept: 'application/json',
        },
      });
    } catch (error) {
      const reason = error instanceof Error ? error.message : String(error);
      throw new CmsRequestError(`CMS request failed for ${endpoint}: ${reason}`);
    }

    if (!response.ok) {
      throw new CmsRequestError(`CMS request failed for ${endpoint}: HTTP ${response.status} ${response.statusText}`);
    }

    try {
      return (await response.json()) as T;
    } catch {
      throw new CmsRequestError(`CMS returned invalid JSON for ${endpoint}.`);
    }
  },
};
