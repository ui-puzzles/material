import { CustomEdge } from './CustomEdge';

export { CustomEdge } from './CustomEdge';

export const AVAILABLE_EDGES = {
  custom: CustomEdge,
};

export type AvailableEdgeTypes = keyof typeof AVAILABLE_EDGES;
