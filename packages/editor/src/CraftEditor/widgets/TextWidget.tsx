import { useNode } from '@craftjs/core';

export const TextWidget: React.FC<TextWidgetProps> = ({ text, id }) => {
  const {
    connectors: { drag, connect },
  } = useNode<HTMLDivElement>();

  return (
    <div ref={(ref) => ref && connect(drag(ref))} id={id}>
      <h2>{text}</h2>
    </div>
  );
};

export interface TextWidgetProps {
  text: React.ReactNode;
  id: string;
}
