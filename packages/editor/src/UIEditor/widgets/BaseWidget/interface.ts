import type { AvailableNodeTypes } from '../../WidgetsPanel';

export interface BaseWidgetProps {
  id: string;
  type: AvailableNodeTypes;
  selected?: boolean;
}
