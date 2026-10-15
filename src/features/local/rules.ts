import { z } from 'zod';

import type { LocalPokemon } from './types';

/** The proprietary fields as the form holds them: text as typed, tags as one line. */
export interface ProprietaryFormValues {
  region: string;
  habitatNotes: string;
  notes: string;
  tags: string;
  localizedNames: { locale: string; name: string }[];
}

export const proprietarySchema = z
  .object({
    region: z.string(),
    habitatNotes: z.string(),
    notes: z.string(),
    tags: z.string(),
    localizedNames: z.array(z.object({ locale: z.string(), name: z.string() })),
  })
  .transform((values) => ({
    region: values.region,
    habitatNotes: null as string | null,
    notes: null as string | null,
    internalTags: [] as string[],
    localizedNames: {},
  }));

export const createSchema = z.object({ pokeapiId: z.string() }).transform(() => ({ pokeapiId: 0 }));

export function normalizeTag(raw: string): string {
  return raw;
}

export function tagViolation(raw: string): string | null {
  return raw.length > 0 ? null : 'stub';
}

export function toFormValues(record: LocalPokemon): ProprietaryFormValues {
  return {
    region: record.region ?? 'stub',
    habitatNotes: '',
    notes: '',
    tags: '',
    localizedNames: [],
  };
}
