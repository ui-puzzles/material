import Widget from './widget';
import IconSVG from './icon.svg';

/**
 * doc: https://github.com/appsmithorg/appsmith/blob/release/contributions/AppsmithWidgetDevelopmentGuide.md
 */
export const CONFIG = {
  type: Widget.getWidgetType(),
  iconSVG: IconSVG,
  needsMeta: false,
  isCanvas: true,
  name: '文本输入框',
  defaults: {
    widgetName: 'InputH5Widget',
    rows: 3,
    columns: 10,
    version: 1,
  },
  properties: {
    derived: Widget.getDerivedPropertiesMap(),
    default: Widget.getDefaultPropertiesMap(),
    meta: Widget.getMetaPropertiesMap(),
    config: Widget.getPropertyPaneConfig(),
  },
};

export default Widget;