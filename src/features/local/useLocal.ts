import { keepPreviousData, useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { fetchLocalPage, fetchLocalRecord, syncFirst, syncOne } from './api';
import type { LocalListParams } from './localParams';
import type { LocalPokemon } from './types';

export const localKeys = {
  lists: () => ['local', 'list'] as const,
  list: (params: LocalListParams) => ['local', 'list', params] as const,
  record: (id: string) => ['local', 'record', id] as const,
};

/** The list keeps the previous page on screen while the next one loads. */
export function useLocalPage(params: LocalListParams) {
  return useQuery({
    queryKey: localKeys.list(params),
    queryFn: ({ signal }) => fetchLocalPage(params, signal),
    placeholderData: keepPreviousData,
  });
}

export function useLocalRecord(id: string) {
  return useQuery({
    queryKey: localKeys.record(id),
    queryFn: ({ signal }) => fetchLocalRecord(id, signal),
  });
}

/** After a write: the record as the API returned it, and every list loaded again. */
export function useStoreRecord() {
  const queryClient = useQueryClient();
  return (record: LocalPokemon) => {
    queryClient.setQueryData(localKeys.record(record.id), record);
    void queryClient.invalidateQueries({ queryKey: localKeys.lists() });
  };
}

export function useSyncOne() {
  const store = useStoreRecord();
  return useMutation({
    mutationFn: syncOne,
    onSuccess: ({ record }) => {
      store(record);
    },
  });
}

export function useSyncFirst() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: syncFirst,
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: ['local'] });
    },
  });
}
