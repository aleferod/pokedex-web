export interface PaginationProps {
  page: number;
  totalPages: number;
  size: number;
  sizes?: readonly number[];
  onPageChange: (page: number) => void;
  onSizeChange: (size: number) => void;
}

/** Stub. */
export function Pagination(props: PaginationProps) {
  void props;
  return null;
}
