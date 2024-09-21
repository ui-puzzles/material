import { Canvas, useNode } from '@craftjs/core';

export const ContainerWidget = () => {
  const {
    connectors: { drag, connect },
  } = useNode<HTMLDivElement>();

  return (
    <div ref={(ref) => ref && connect(drag(ref))}>
      <Canvas id="drop_section"></Canvas>
    </div>
  );
};
