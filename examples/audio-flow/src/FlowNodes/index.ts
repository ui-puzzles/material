import { type Node } from '@xyflow/react';

import { OscillatorNode } from './OscillatorNode';
import { VolumeNode } from './VolumeNode';
import { OutputNode } from './OutputNode';

export { OscillatorNode } from './OscillatorNode';
export { VolumeNode } from './VolumeNode';
export { OutputNode } from './OutputNode';

export const AVAILABLE_NODES = {
  osc: OscillatorNode,
  volume: VolumeNode,
  out: OutputNode,
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
  osc: {
    frequency: number;
    type: OscillatorType;
  };
  volume: {
    gain: number;
  };
  out: unknown;
}
