import type { Session } from './types';

export const SESSION_KEY = 'pokedex.session';

/** Stub. */
export function saveSession(session: Session): void {
  void session;
}

/** Stub. */
export function loadSession(now: Date = new Date()): Session | null {
  void now;
  return null;
}

/** Stub. */
export function clearSession(): void {
  // stub
}
