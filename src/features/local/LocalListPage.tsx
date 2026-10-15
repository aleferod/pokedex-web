import { useDocumentTitle } from '@/shared/hooks/useDocumentTitle';

/** US04: the local Pokédex, a page at a time. */
export function LocalListPage() {
  useDocumentTitle('My Pokédex');
  return <h1 className="text-3xl font-bold">My Pokédex</h1>;
}
