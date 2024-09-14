import { CSSProperties } from 'react';
import type { BackgroundProps } from '@xyflow/react';

export interface Props {
  width?: CSSProperties['width'];
  height?: CSSProperties['height'];
  showControls?: boolean;
  showMiniMap?: boolean;
  showBackground?: boolean;
  backgroundProps?: BackgroundProps;
}

export interface NodeProps {
  data: {
    label: string;
  };
}
