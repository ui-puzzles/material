import { ReactFlowProvider } from '@xyflow/react';
import '@xyflow/react/dist/style.css';

import { DnDProvider } from './DnDContext';
import { FlowEditor } from './FlowEditor/index';

export const UIEditor = () => (
  <ReactFlowProvider>
    <DnDProvider>
      <FlowEditor />
    </DnDProvider>
  </ReactFlowProvider>
);
