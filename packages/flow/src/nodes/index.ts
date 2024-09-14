import { BlueNode } from './BlueNode';
import { RedNode } from './RedNode';

export { RedNode } from './RedNode';

export { BlueNode } from './BlueNode';

export const AVAILABLE_NODES = {
  red: RedNode,
  blue: BlueNode,
};

export type AvailableNodeTypes = keyof typeof AVAILABLE_NODES;
