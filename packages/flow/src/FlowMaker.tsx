import {
  ReactFlow,
  addEdge,
  Connection,
  useEdgesState,
  useNodesState,
  Controls,
  MiniMap,
  Background,
  type NodeProps,
  Node,
  Edge,
  Panel,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

import { Container } from './styles';
import type { Props } from './interface';
import { AVAILABLE_NODES, type AvailableNodeTypes } from './nodes';
import { AVAILABLE_EDGES, type AvailableEdgeTypes } from './edges';
import { genUUID } from './utils';

type CustomNode = Node<Record<string, unknown>, AvailableNodeTypes>;
type CustomEdge = Edge<Record<string, unknown>, AvailableEdgeTypes>;

const initialNodes: CustomNode[] = [
  { id: '1', position: { x: 0, y: 0 }, type: 'red', data: { label: '1' } },
  { id: '2', position: { x: 0, y: 100 }, type: 'blue', data: { label: '2' } },
];
const initialEdges: CustomEdge[] = [
  { id: 'e1-2', source: '1', target: '2', type: 'custom' },
];

export const FlowMaker: React.FC<Props> = (props) => {
  const {
    width = '100%',
    height = '100%',
    showControls = true,
    showMiniMap = true,
    showBackground = true,
    backgroundProps = {},
  } = props;

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = (params: Connection) => {
    setEdges((eds) => addEdge(params, eds));
  };

  const handlePanelAddNode = () => {
    setNodes([
      ...nodes,
      {
        id: genUUID(),
        type: 'red',
        position: {
          x: 0,
          y: 0,
        },
        data: {
          label: 'quick add node',
        },
      },
    ]);
  };

  return (
    <Container
      style={{
        width,
        height,
      }}
    >
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={AVAILABLE_NODES}
        edgeTypes={AVAILABLE_EDGES}
      >
        {showControls && <Controls />}
        {showMiniMap && <MiniMap />}
        {showBackground && <Background {...backgroundProps} />}
        <Panel position="top-right">
          <button onClick={handlePanelAddNode}>Add Node</button>
        </Panel>
      </ReactFlow>
    </Container>
  );
};
