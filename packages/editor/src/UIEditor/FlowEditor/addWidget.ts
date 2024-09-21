import { genUUID } from '../../utils';
import { type CustomNode } from '../widgets';
import { type AvailableNodeTypes } from '../WidgetsPanel';

export const addWidgetViaWidgetType = (options: AddWidgetOptions) => {
  const { type, position, data } = options;

  const widgetId = genUUID();
  const newWidget: CustomNode = {
    id: widgetId,
    type,
    position,
    data,
  };

  return newWidget;
};

export interface AddWidgetOptions {
  type: AvailableNodeTypes;
  position: {
    x: number;
    y: number;
  };
  data: Record<string, unknown>;
}
