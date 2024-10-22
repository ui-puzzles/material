/**
 * NOTE:
 * 1. Passing a new columns array will trigger a re-render for the whole grid, avoid changing it as much as possible for optimal performance
 */
import {
  SelectColumn,
  textEditor,
  type Column,
  type ColumnGroup,
} from 'react-data-grid';
import { useEffect, useState } from 'react';

import { UILib, type Row, type UseColumnsOptions } from '../interface';
import { useRenderer } from './useRenderer';

export const useColumns = (options: UseColumnsOptions) => {
  // Initialize state with props.columns or an empty array if not provided
  const {
    columns: rawColumns,
    selecable = false,
    uiLib = UILib.arco,
  } = options;
  const { genRenderer } = useRenderer(uiLib);

  const [columns, setColumns] = useState<Array<Column<Row> | ColumnGroup<Row>>>(
    [],
  );

  const checkReRender = (renderer?: string) => {
    if (!renderer) {
      return false;
    }

    return true;
  };

  const processColumns = async (options: UseColumnsOptions) => {
    try {
      if (!Array.isArray(rawColumns) || !rawColumns.length) return;

      console.log(options);
      const processedColumns: Array<Column<Row> | ColumnGroup<Row>> =
        rawColumns.map(
          ({
            editable,
            renderer,
            renderCell,
            renderEditCell,
            renderGroupCell,
            renderHeaderCell,
            renderSummaryCell,
            ...commonDefs
          }) => {
            if (checkReRender(renderer)) {
              if (editable) {
                renderEditCell = textEditor;
              } else {
                renderCell = ({ row }) => {
                  console.log(row);
                  return genRenderer(renderer!)({
                    value: renderer === 'image' ? row.avatar : row.field,
                  });
                };
              }
            }

            return {
              renderCell,
              renderEditCell,
              renderGroupCell,
              renderHeaderCell,
              renderSummaryCell,
              ...commonDefs,
            };
          },
        );

      if (selecable) {
        processedColumns.unshift(SelectColumn);
      }

      setColumns(processedColumns);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    processColumns(options);
  }, [JSON.stringify(options)]);

  return columns;
};
