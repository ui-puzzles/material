import React from 'react';
import type {
  Column,
  RenderEditCellProps,
  RowsChangeData,
} from 'react-data-grid';

export interface IColumn<TRow = Row, TSummaryRow = unknown>
  extends Column<TRow, TSummaryRow> {
  ellipsis?: string;
  editable?: boolean;
  // renderer?: (params: unknown) => React.ReactNode;
  renderer?: string;
}

export interface UseColumnsOptions {
  columns: IColumn[];
  rowHeight?: number;
  uiLib?: UILib;
  selecable?: boolean;
}

export interface Row {
  id: number | string;
  [key: string]: unknown;
}

export const enum UILib {
  arco = 'arco',
  shadcn = 'shadcn',
}

export interface DataGridWidgetProps {
  rows: Row[];
  columns: IColumn[];
  // global configurations
  uiLib?: UILib;
  rowHeight?: number;
  headerRowHeight?: number;
  selecable?: boolean;

  // events
  onRowClick?: (row: Row) => void;
  onCellClick?: (params: unknown) => void;
  onDataChange?: (
    data: RowsChangeData<NoInfer<Row>, unknown>,
    tableData: NoInfer<Row>[],
  ) => void;
}

export type CustomEditor = <TRow, TSummaryRow>({
  row,
  column,
  onRowChange,
  onClose,
}: RenderEditCellProps<TRow, TSummaryRow>) => React.ReactNode;
