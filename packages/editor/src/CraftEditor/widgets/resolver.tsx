import { TextWidget, type TextWidgetProps } from './TextWidget';
import { ContainerWidget } from './ContainerWidget';

const resolver = {
  TextWidget: (props: TextWidgetProps) => <TextWidget {...props} />,
  ContainerWidget: () => <ContainerWidget />,
};

export default resolver;
