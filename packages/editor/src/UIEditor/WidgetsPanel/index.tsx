import { useDnD } from '../DnDContext';
import { AVAILABLE_WIDGET_LIST } from '../widgets';
import {
  Container,
  SearchWrapper,
  WidgetsWrapper,
  WidgetItemWrapper,
  WidgetIconWrapper,
} from './styles';
import { WidgetSearch } from './WidgetSearch';

export const WidgetsPanel = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [type, setType] = useDnD();

  const onDragStart = (
    event: React.DragEvent,
    nodeType: AvailableNodeTypes,
  ) => {
    setType(nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };

  // console.log(type);

  return (
    <Container>
      <SearchWrapper>
        <WidgetSearch />
      </SearchWrapper>
      <WidgetsWrapper>
        {AVAILABLE_WIDGET_LIST.map(({ widgetType, title, icon }) => (
          <WidgetItemWrapper
            key={widgetType}
            draggable
            onDragStart={(event) => onDragStart(event, widgetType)}
          >
            <WidgetIconWrapper>{icon}</WidgetIconWrapper>
            {title}
          </WidgetItemWrapper>
        ))}
      </WidgetsWrapper>
    </Container>
  );
};

export type AvailableNodeTypes = 'input';
