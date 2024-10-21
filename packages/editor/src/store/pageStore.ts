import { create } from 'zustand';
import { isPlainObject } from 'lodash-es';

const initialState: PageState = {
  activePageId: null,
  activePageName: null,
  widgeList: [],
  pageControllers: [],
};

export const usePageSlice = (initProps?: Partial<PageProps>) => {
  return create<PageState & PageActions>((set) => ({
    ...initialState,
    ...(isPlainObject(initProps) ? initProps : {}),
    setActivePageId: (pageId: string) => set({ activePageId: pageId }),
    reset: () => {
      set(initialState);
    },
  }));
};

export interface PageState {
  activePageId: string | null;
  activePageName: string | null;
  widgeList: WidgtListItem[];
  pageControllers: pageController[];
}

export type PageActions = {
  setActivePageId: (appId: string) => void;
};

export type WidgtListItem = {
  id: string;
  name: string;
  type: string;
  controllers: WidgetController[];
};

export type WidgetController = {
  id: string;
  type: string;
  value: string;
};

export type pageController = {
  id: string;
  type: string;
  value: string;
};

export type PageProps = PageState;
