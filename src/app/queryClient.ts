import { QueryClient } from '@tanstack/react-query';

/** Whether a failed query is worth another attempt (stub). */
export function shouldRetry(failureCount: number, error: unknown): boolean {
  void failureCount;
  void error;
  return true;
}

export function createQueryClient(): QueryClient {
  return new QueryClient();
}
