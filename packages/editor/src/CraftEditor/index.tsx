import { Editor, Frame } from '@craftjs/core';

import { TextWidget, ContainerWidget } from './widgets';
// import resolver from './widgets/resolver';

export const CraftEditor = () => {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
      }}
    >
      <Editor
        resolver={{
          TextWidget,
          ContainerWidget,
        }}
      >
        <Frame>
          <TextWidget text="sdfsfdsf" id="text_2" />
          <ContainerWidget></ContainerWidget>
        </Frame>
      </Editor>
    </div>
  );
};
