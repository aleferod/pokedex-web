/** Options of one API call. */
export interface ApiRequestOptions {
  method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
  body?: unknown;
  headers?: Record<string, string>;
  signal?: AbortSignal;
}

/** Hooks the auth feature plugs in (stub). */
export interface ApiClientConfig {
  getToken?: () => string | null;
  onUnauthorized?: () => void;
}

export function configureApiClient(config: ApiClientConfig): void {
  void config;
}

/** Calls pokedex-api (stub). */
export async function apiRequest<T>(path: string, options: ApiRequestOptions = {}): Promise<T> {
  void path;
  void options;
  return Promise.resolve(undefined as T);
}
