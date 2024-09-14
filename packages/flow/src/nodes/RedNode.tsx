import styled from 'styled-components';
import { Handle, Position } from '@xyflow/react';

import { NodeProps } from '../interface';

const Container = styled.div`
  background: red;
  width: 100px;
  height: 100px;
  text-align: center;
`;

export const RedNode: React.FC<NodeProps> = ({ data }) => {
  return (
    <Container>
      <Handle type="source" position={Position.Right} />
      <Handle type="target" position={Position.Bottom} />

      <div>{data.label}</div>
    </Container>
  );
};
