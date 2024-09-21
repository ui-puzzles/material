import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 255px;
  height: 100%;
  overflow: hidden;
  border-right: 1px solid #eee;
`;

export const SearchWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 64px;
`;

export const WidgetsWrapper = styled.div`
  flex: 1;
  padding: 0.75rem;
`;

export const WidgetItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 74px;
  height: 70px;
  font-size: 12px;
  border: 1px solid #eee;
  border-radius: 6px;
  transition: border-color color 0.3s;
  user-select: none;
  color: #333;
  cursor: pointer;

  &:hover {
    border-color: #165dff;
    color: #165dff;
  }
`;

export const WidgetIconWrapper = styled.div`
  font-size: 24px;
`;
