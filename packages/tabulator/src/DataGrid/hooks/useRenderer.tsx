import '@arco-design/web-react/dist/css/arco.css';
import { UILib } from '../interface';
import { RendererMapUILib } from '../constants';

export const useRenderer = (uiLib: UILib) => {
  const availableRenderer = RendererMapUILib[uiLib];
  const genRenderer = (renderer: string) => {
    return availableRenderer?.[renderer] || null;
  };
  return {
    genRenderer,
  };
};
