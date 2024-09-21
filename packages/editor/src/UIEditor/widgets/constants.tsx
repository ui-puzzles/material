import { values } from 'lodash-es';
import { RiInputField } from 'react-icons/ri';

import { InputWidget } from './InputWidget';

// import { InputWidget } from './InputWidget';

export type AvailableWidgetTypes = keyof typeof AVAILABLE_WIDGETS;

export const AVAILABLE_WIDGETS = {
  input: {
    // entity: InputWidget,
    icon: <RiInputField />,
    widgetType: 'input',
    title: '文本输入框',
  },
} as const;

export const WIDGET_WITH_BASE = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  input: (props: any) => <InputWidget {...props} />,
};

export const AVAILABLE_WIDGET_LIST = values(AVAILABLE_WIDGETS);
