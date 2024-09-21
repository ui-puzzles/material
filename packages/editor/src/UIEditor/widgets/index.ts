import { type Node } from '@xyflow/react';

// import { AVAILABLE_WIDGETS } from './constants';
import BaseWidget from './BaseWidget';
import type { AvailableWidgetTypes } from './constants';

export { AVAILABLE_WIDGETS, AVAILABLE_WIDGET_LIST } from './constants';

/**
 * widget's types
 */

export const WIDGET_MAP_NODES = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  input: BaseWidget,
};

// Define the base node structure
export type BaseNode = Node<Record<string, unknown>, AvailableWidgetTypes>;

export type CustomNode = {
  [K in AvailableWidgetTypes]: BaseNode & {
    type: K;
    data: NodeDataTypes[K];
  };
}[AvailableWidgetTypes];

export interface NodeDataTypes {
  input: unknown;
}
