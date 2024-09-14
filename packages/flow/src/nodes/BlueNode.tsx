import styled from 'styled-components';
import { Handle, Position } from '@xyflow/react';

import { NodeProps } from '../interface';

const Container = styled.div`
  background: blue;
  width: 100px;
  height: 100px;
  text-align: center;
`;

export const BlueNode: React.FC<NodeProps> = ({ data }) => {
  return (
    <Container>
      <Handle type="source" position={Position.Bottom} />
      <Handle type="target" position={Position.Top} />

      <div>{data.label}</div>
    </Container>
  );
};
