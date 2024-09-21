import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  height: 100%;
`;

export const EditorContainer = styled.div`
  flex: 1;
  flex-grow: 1;
  height: 100%;
  margin: 12px;
  border-radius: 4px;

  .react-flow__node-input.selectable.selected {
    box-shadow: none;
  }

  .react-flow__node-input {
    display: inline-block;
    border: none;
    background-color: transparent;
    font-size: inherit;
    padding: 0;
  }

  .react-flow__handle {
    display: none;
  }
`;
