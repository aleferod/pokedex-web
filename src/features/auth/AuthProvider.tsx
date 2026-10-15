import type { ReactNode } from 'react';

import { AuthContext, type AuthContextValue } from './authContext';

const STUB: AuthContextValue = {
  session: null,
  notice: null,
  signIn: () => Promise.resolve(),
  register: () => Promise.resolve(),
  signOut: () => undefined,
};

/** Stub. */
export function AuthProvider({ children }: { children: ReactNode }) {
  return <AuthContext.Provider value={STUB}>{children}</AuthContext.Provider>;
}
