import { type Node } from '@xyflow/react';

import { BlueNode } from './BlueNode';
import { RedNode } from './RedNode';

export { RedNode } from './RedNode';

export { BlueNode } from './BlueNode';

export const AVAILABLE_NODES = {
  red: RedNode,
  blue: BlueNode,
};

export type AvailableNodeTypes = keyof typeof AVAILABLE_NODES;

// Define the base node structure
export type BaseNode = Node<Record<string, unknown>, AvailableNodeTypes>;

export type CustomNode = {
  [K in AvailableNodeTypes]: BaseNode & {
    type: K;
    data: NodeDataTypes[K];
  };
}[AvailableNodeTypes];

export interface NodeDataTypes {
  red: unknown;
  blue: unknown;
}
