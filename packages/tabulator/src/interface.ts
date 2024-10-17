import type {
  ColumnDef,
  // ColumnFiltersState,
  // SortingState,
  // VisibilityState,
} from '@tanstack/react-table';

export interface TabulatorProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}
