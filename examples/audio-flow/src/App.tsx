import {
  addEdge,
  Background,
  BackgroundVariant,
  Connection,
  Controls,
  Edge,
  MiniMap,
  Panel,
  ReactFlow,
  useEdgesState,
  useNodesState,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

import { AVAILABLE_NODES, type CustomNode } from './FlowNodes';
import { connect, createAudioNode, disconnect, removeAudioNode } from './Audio';

// export type CustomNode = Node<Record<string, unknown>, AvailableNodeTypes>;

const initialNodes: CustomNode[] = [
  {
    id: 'a',
    position: { x: 200, y: 0 },
    data: {
      frequency: 220,
      type: 'square',
    },
    type: 'osc',
  },
  {
    id: 'b',
    position: { x: 150, y: 250 },
    data: {
      gain: 0.5,
    },
    type: 'volume',
  },
  {
    id: 'c',
    position: {
      x: 350,
      y: 400,
    },
    data: {},
    type: 'out',
  },
];
const initialEdges: Edge[] = [];

export default function App() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = (params: Connection) => {
    connect(params.source, params.target);
    setEdges((eds) => addEdge(params, eds));
  };

  function addOscNode() {
    const id = Math.random().toString().slice(2, 8);
    const position = { x: 0, y: 0 };
    const type = 'osc';
    const data = { frequency: 400, type: 'sine' } as const;

    setNodes([...nodes, { id, type, data, position }]);
    createAudioNode(id, type, data);
  }

  function addVolumeNode() {
    const id = Math.random().toString().slice(2, 8);
    const data = { gain: 0.5 };
    const position = { x: 0, y: 0 };
    const type = 'volume';

    setNodes([...nodes, { id, type, data, position }]);
    createAudioNode(id, type, data);
  }

  const handleNodesDelete = (nodes: CustomNode[]) => {
    for (const { id } of nodes) {
      removeAudioNode(id);
    }
  };

  const handleEdgesDelete = (edges: Edge[]) => {
    for (const item of edges) {
      const { source, target } = item;

      disconnect(source, target);
    }
  };

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
        nodeTypes={AVAILABLE_NODES}
        onNodesDelete={handleNodesDelete}
        onEdgesDelete={handleEdgesDelete}
      >
        <Controls />
        <MiniMap />
        <Background variant={BackgroundVariant.Lines} />
        <Panel className="space-x-4" position="top-right">
          <button
            className={'p-[4px] rounded bg-white shadow'}
            onClick={addOscNode}
          >
            Add Oscillator Node
          </button>
          <button
            className={'p-[4px] rounded bg-white shadow'}
            onClick={addVolumeNode}
          >
            Add Volume Node
          </button>
        </Panel>
      </ReactFlow>
    </div>
  );
}
