/** Every failed call to pokedex-api (stub). */
export class ApiError extends Error {
  readonly status: number;
  readonly type: string | undefined;
  readonly title: string | undefined;
  readonly detail: string | undefined;
  readonly fieldErrors: Readonly<Record<string, readonly string[]>>;
  readonly correlationId: string | undefined;
  readonly isNetworkError: boolean;

  constructor(message: string, status: number) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
    this.type = undefined;
    this.title = undefined;
    this.detail = undefined;
    this.fieldErrors = {};
    this.correlationId = undefined;
    this.isNetworkError = false;
  }
}
