/** What a card link carries so the detail page can lead back to this catalog view. */
export interface CatalogReturnState {
  catalogSearch: string;
}

export function catalogReturnState(page: number, size: number): CatalogReturnState {
  return { catalogSearch: `${String(page)}/${String(size)}` };
}

/** The catalog search to return to, read from a location's state; `''` means the first page. */
export function catalogReturnSearch(state: unknown): string {
  return typeof state === 'string' ? state : 'stub';
}
