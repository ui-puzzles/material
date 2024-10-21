import React, { useRef, useCallback, useState, useEffect } from 'react';
import {
  ReactFlow,
  // addEdge,
  useNodesState,
  // useEdgesState,
  Controls,
  useReactFlow,
  Background,
  BackgroundVariant,
  PanOnScrollMode,
  applyNodeChanges,
  // Connection,
  type NodeChange,
  OnNodesChange,
  ProOptions,
  ReactFlowInstance,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { debounce, isArray } from 'lodash-es';

import { WidgetsPanel } from '../WidgetsPanel';
import { useDnD } from '../DnDContext';
import HelperLines from './HelperLines';
import { getHelperLines } from '../../utils';
import { ControllersPanel } from '../ControllersPanel';
import { Container, EditorContainer } from '../styles';
import { CustomNode, WIDGET_MAP_NODES } from '../widgets';
import { addWidgetViaWidgetType } from './addWidget';
import { usePageSlice } from '@/store';
import { db } from '@/StorageEngine/Dexie/db';
import { useLiveQuery } from 'dexie-react-hooks';
import type { FlowEditorProps } from '../interface';

// const initialNodes = [
//   {
//     id: '1',
//     type: 'input',
//     data: { label: 'input node' },
//     position: { x: 250, y: 5 },
//   },
// ];

const proOptions: ProOptions = { account: 'paid-pro', hideAttribution: true };

export const FlowEditor: React.FC<FlowEditorProps> = ({ pageId }) => {
  const { activePageId } = usePageSlice({
    activePageId: pageId,
  })();
  console.log(activePageId);
  const reactFlowWrapper = useRef(null);
  const [nodes, setNodes] = useNodesState<CustomNode>([]);
  // const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const { screenToFlowPosition } = useReactFlow();
  const [type] = useDnD();
  const [helperLineHorizontal, setHelperLineHorizontal] = useState<
    number | undefined
  >(undefined);
  const [helperLineVertical, setHelperLineVertical] = useState<
    number | undefined
  >(undefined);
  const [rfInstance, setRfInstance] =
    useState<ReactFlowInstance<CustomNode> | null>(null);
  const pages = useLiveQuery(() => db.pages.toArray(), [pageId]);

  // const onConnect = useCallback(
  //   (params: Connection) => setEdges((eds) => addEdge(params, eds)),
  //   [],
  // );

  const syncStatus = useCallback(async () => {
    if (rfInstance) {
      const flow = rfInstance.toObject();
      const { nodes } = flow;

      await db.pages.where('pageId').equals(pageId).modify({
        content: {
          nodes,
        },
      });
      // localStorage.setItem(flowKey, JSON.stringify(flow));
    }
  }, [rfInstance]);

  const debounceSyncChanges = debounce((changes: NodeChange[]) => {
    console.log(changes);

    syncStatus();
  }, 1000);

  const onDragOver = useCallback((event: React.DragEvent) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onRestore = useCallback(() => {
    const restoreFlow = async () => {
      // const flow = JSON.parse(localStorage.getItem(flowKey));
      // if (flow) {
      // const { x = 0, y = 0, zoom = 1 } = flow.viewport;
      // setNodes(flow.nodes || []);
      // setViewport({ x, y, zoom });
      // }
    };

    restoreFlow();
  }, [setNodes]);

  const onDrop = useCallback(
    (event: React.DragEvent) => {
      event.preventDefault();

      // check if the dropped element is valid
      if (!type) {
        return;
      }

      // project was renamed to screenToFlowPosition
      // and you don't need to subtract the reactFlowBounds.left/top anymore
      // details: https://reactflow.dev/whats-new/2023-11-10
      const position = screenToFlowPosition({
        x: event.clientX,
        y: event.clientY,
      });
      const newNode = addWidgetViaWidgetType({
        type,
        position,
        data: { label: `${type} node` },
      });

      setNodes((nds) => nds.concat(newNode));
    },
    [screenToFlowPosition, type],
  );

  const customApplyNodeChanges = useCallback(
    (changes: NodeChange[], nodes: CustomNode[]): CustomNode[] => {
      // reset the helper lines (clear existing lines, if any)
      setHelperLineHorizontal(undefined);
      setHelperLineVertical(undefined);

      // this will be true if it's a single node being dragged
      // inside we calculate the helper lines and snap position for the position where the node is being moved to
      if (
        changes.length === 1 &&
        changes[0].type === 'position' &&
        changes[0].dragging &&
        changes[0].position
      ) {
        const helperLines = getHelperLines(changes[0], nodes);

        // if we have a helper line, we snap the node to the helper line position
        // this is being done by manipulating the node position inside the change object
        changes[0].position.x =
          helperLines.snapPosition.x ?? changes[0].position.x;
        changes[0].position.y =
          helperLines.snapPosition.y ?? changes[0].position.y;

        // if helper lines are returned, we set them so that they can be displayed
        setHelperLineHorizontal(helperLines.horizontal);
        setHelperLineVertical(helperLines.vertical);
      }

      return applyNodeChanges(changes, nodes) as CustomNode[];
    },
    [],
  );

  const onNodesChange: OnNodesChange = useCallback(
    (changes) => {
      setNodes((nodes) => customApplyNodeChanges(changes, nodes));

      debounceSyncChanges(changes);
    },
    [setNodes, customApplyNodeChanges],
  );

  const initApp = async () => {
    try {
      if (!isArray(pages)) return;
      const isExistedPage = pages.some((page) => page.pageId === pageId);
      if (!isExistedPage) {
        const id = await db.pages.add({
          pageId,
          name: 'Page 1',
          content: {},
        });

        console.log(id);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    initApp();
  }, [pages]);

  return (
    <Container>
      <WidgetsPanel />
      <EditorContainer ref={reactFlowWrapper}>
        <ReactFlow
          style={{
            maxWidth: 1280,
            margin: '0 auto',
            border: '1px solid #eee',
            borderRadius: 4,
          }}
          nodes={nodes}
          // edges={edges}
          onNodesChange={onNodesChange}
          // onEdgesChange={onEdgesChange}
          // onConnect={onConnect}
          onInit={setRfInstance}
          onDrop={onDrop}
          onDragOver={onDragOver}
          // fitView
          minZoom={1}
          maxZoom={1}
          // preventScrolling
          // width={750}
          panOnScrollMode={PanOnScrollMode.Vertical}
          // autoPanOnNodeDrag={false}
          nodesConnectable={false}
          // viewport={{
          //   x: 0,
          //   y: 0,
          //   zoom: 1,
          // }}
          translateExtent={[
            [0, 0],
            [1280, 60000],
          ]}
          nodeExtent={[
            [0, 0],
            [1280, 60000],
          ]}
          panOnScroll={true}
          preventScrolling={false}
          proOptions={proOptions}
          elevateNodesOnSelect
          onPaneScroll={() => {
            // This prevents the default scrolling behavior
            // if (event) {
            //   event.preventDefault();
            // }
          }}
          nodeTypes={WIDGET_MAP_NODES}
        >
          <Controls
            showZoom={false}
            showFitView={false}
            style={{
              bottom: 24,
            }}
          />
          <Background variant={BackgroundVariant.Dots} gap={10} />
          <HelperLines
            horizontal={helperLineHorizontal}
            vertical={helperLineVertical}
          />
        </ReactFlow>
      </EditorContainer>
      <ControllersPanel />
    </Container>
  );
};
