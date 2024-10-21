import { ReactFlowProvider } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import React from 'react';

import { DnDProvider } from './DnDContext';
import { FlowEditor } from './FlowEditor/index';
import '../StorageEngine/Dexie/db';
import type { UIEditorProps } from './interface';

export const UIEditor: React.FC<UIEditorProps> = (props) => (
  <ReactFlowProvider>
    <DnDProvider>
      <FlowEditor {...props} />
    </DnDProvider>
  </ReactFlowProvider>
);
