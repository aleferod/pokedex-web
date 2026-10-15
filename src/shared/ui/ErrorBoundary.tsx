import type { ReactNode } from 'react';

/** Catches rendering errors (stub). */
export function ErrorBoundary({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
