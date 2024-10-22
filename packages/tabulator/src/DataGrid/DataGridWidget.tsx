import { useCallback, useState } from 'react';
import DataGrid from 'react-data-grid';
import type {
  CellClickArgs,
  CellMouseEvent,
  CopyEvent,
  FillEvent,
  PasteEvent,
  RowsChangeData,
} from 'react-data-grid';
import 'react-data-grid/lib/styles.css';

import type { Row, DataGridWidgetProps } from './interface';
import { useColumns } from './hooks/useColumns';
import { HEADER_ROW_HEIGHT, ROW_HEIGHT } from './constants';

export const DataGridWidget: React.FC<DataGridWidgetProps> = (props) => {
  const {
    rows,
    columns,
    rowHeight = ROW_HEIGHT,
    headerRowHeight = HEADER_ROW_HEIGHT,
    selecable,
    onDataChange,
  } = props;
  const [selectedRows, setSelectedRows] = useState<Set<string | number>>(
    new Set(),
  );
  const [lazyRows, setLazyRows] = useState(rows);
  const lazyColumns = useColumns({
    columns,
    selecable,
  });

  const rowKeyGetter = (row: Row) => {
    return row.id;
  };

  function handleFill({
    columnKey,
    sourceRow,
    targetRow,
  }: FillEvent<Row>): Row {
    return { ...targetRow, [columnKey]: sourceRow[columnKey as keyof Row] };
  }

  function handlePaste({
    sourceColumnKey,
    sourceRow,
    targetColumnKey,
    targetRow,
  }: PasteEvent<Row>): Row {
    const incompatibleColumns = ['email', 'zipCode', 'date'];
    if (
      sourceColumnKey === 'avatar' ||
      ['id', 'avatar'].includes(targetColumnKey) ||
      ((incompatibleColumns.includes(targetColumnKey) ||
        incompatibleColumns.includes(sourceColumnKey)) &&
        sourceColumnKey !== targetColumnKey)
    ) {
      return targetRow;
    }

    return {
      ...targetRow,
      [targetColumnKey]: sourceRow[sourceColumnKey as keyof Row],
    };
  }

  function handleCopy({ sourceRow, sourceColumnKey }: CopyEvent<Row>): void {
    if (window.isSecureContext && sourceRow[sourceColumnKey as keyof Row]) {
      navigator.clipboard.writeText(
        sourceRow[sourceColumnKey as keyof Row] as string,
      );
    }
  }

  const checkRowSelectionDisabled = useCallback((row: Row): boolean => {
    if (row.id === 5) {
      return true;
    }
    return false;
  }, []);

  const genRowClassName = useCallback((row: Row, index: number) => {
    if (row.id === 10) {
      return 'highlight';
    }
    console.log(index);
    return undefined;
  }, []);

  const handleCellClick = useCallback(
    (
      args: CellClickArgs<NoInfer<Row>, unknown>,
      event: CellMouseEvent,
    ): void => {
      if (args.column.key === 'title') {
        event.preventGridDefault();
        args.selectCell(true);
      }
    },
    [],
  );

  const handleSelectedRowsChange = useCallback(
    (selectedRows: Set<string | number>): void => {
      setSelectedRows(selectedRows);
    },
    [],
  );

  const handleRowsChange = useCallback(
    (
      rows: NoInfer<Row>[],
      data: RowsChangeData<NoInfer<Row>, unknown>,
    ): void => {
      setLazyRows(rows);
      onDataChange?.(data, rows);
    },
    [onDataChange],
  );

  return (
    <div
      style={{
        height: '100%',
      }}
    >
      <DataGrid
        columns={lazyColumns}
        rows={lazyRows}
        rowKeyGetter={rowKeyGetter}
        rowHeight={rowHeight}
        headerRowHeight={headerRowHeight}
        onRowsChange={handleRowsChange}
        onFill={handleFill}
        onCopy={handleCopy}
        onPaste={handlePaste}
        selectedRows={selectedRows}
        isRowSelectionDisabled={checkRowSelectionDisabled}
        onSelectedRowsChange={handleSelectedRowsChange}
        className="fill-grid"
        rowClass={genRowClassName}
        direction="ltr"
        onCellClick={handleCellClick}
      />
    </div>
  );
};
