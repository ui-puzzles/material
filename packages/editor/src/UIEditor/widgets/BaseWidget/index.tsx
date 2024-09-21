import { memo } from 'react';
import styled from 'styled-components';
import { NodeResizer } from '@xyflow/react';
// import { Handle, Position } from '@xyflow/react';

// import { useDnD } from '../../DnDContext';

import { BaseWidgetProps } from './interface';
import { WIDGET_WITH_BASE } from '../constants';
// import { PropsWithChildren } from 'react';
// import type { AvailableNodeTypes } from '../../WidgetsPanel';

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const BaseWidget: React.FC<BaseWidgetProps> = ({
  id,
  type,
  selected = false,
}) => {
  return (
    <Container>
      <NodeResizer
        color="#165dff"
        isVisible={selected}
        minWidth={100}
        minHeight={30}
      />
      {WIDGET_WITH_BASE[type] &&
        WIDGET_WITH_BASE[type]({
          id,
        })}
    </Container>
  );
};

export default memo(BaseWidget);
