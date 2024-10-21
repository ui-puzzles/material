import { create } from 'zustand';

const initialState: WidgetState = {
  selectedWidgetId: null,
  selectedWidgetName: null,
};

export const useWidgetSlice = create<WidgetState & WidgetActions>((set) => ({
  ...initialState,
  setSelectedWidgetId: (wid: string) => set({ selectedWidgetId: wid }),
  reset: () => {
    set(initialState);
  },
}));

export type WidgetState = {
  selectedWidgetId: string | null;
  selectedWidgetName: string | null;
};

export type WidgetActions = {
  setSelectedWidgetId: (wid: string) => void;
};
