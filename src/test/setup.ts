import '@testing-library/jest-dom/vitest';
import { cleanup } from '@testing-library/react';
import { afterAll, afterEach, beforeAll, beforeEach, vi } from 'vitest';

import { server } from './server';

// Unmocked requests are failures, not silent passes.
beforeAll(() => {
  server.listen({ onUnhandledFrame: 'error' });
});
afterAll(() => {
  server.close();
});

// Zero console warnings: any console.error or console.warn (React key and act() warnings,
// failed prop types, library deprecations) fails the test that produced it.
let consoleMessages: string[] = [];
beforeEach(() => {
  consoleMessages = [];
  for (const level of ['error', 'warn'] as const) {
    vi.spyOn(console, level).mockImplementation((...args: unknown[]) => {
      consoleMessages.push(`console.${level}: ${args.map(String).join(' ')}`);
    });
  }
});
afterEach(() => {
  cleanup();
  server.resetHandlers();
  const messages = consoleMessages;
  consoleMessages = [];
  if (messages.length > 0) {
    throw new Error(`Unexpected console output:\n${messages.join('\n')}`);
  }
});
