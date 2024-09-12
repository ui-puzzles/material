import { ReactFlow } from '@xyflow/react';
import '@xyflow/react/dist/style.css';

import { Container } from './styles';
import type { Props } from './interface';

const initialNodes = [
  { id: '1', position: { x: 0, y: 0 }, data: { label: '1' } },
  { id: '2', position: { x: 0, y: 100 }, data: { label: '2' } },
];
const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];

export const FlowMaker: React.FC<Props> = (props) => {
  const { width = '100%', height = '100%' } = props;
  return (
    <Container
      style={{
        width,
        height,
      }}
    >
      <ReactFlow nodes={initialNodes} edges={initialEdges} />
    </Container>
  );
};
