import { Handle, Position } from '@xyflow/react';
import { NodeProps } from '../../interface';
import { Container } from '../../styles';

export const ResponseNode: React.FC<NodeProps> = ({ data }) => {
  return (
    <Container>
      <Handle type="source" position={Position.Right} />
      <Handle type="target" position={Position.Bottom} />

      <div>{data.label}</div>
    </Container>
  );
};
