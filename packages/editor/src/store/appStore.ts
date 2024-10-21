import { create } from 'zustand';

// define the initial state
const initialState: AppState = {
  appId: null,
  appName: null,
};

export const useAppSlice = create<AppState & AppActions>((set, get) => ({
  ...initialState,
  setAppId: (appId: string) => set({ appId }),
  reset: () => {
    console.log(get().appId);
    set(initialState);
  },
}));

export type AppState = {
  appId: string | null;
  appName: string | null;
};

export type AppActions = {
  setAppId: (appId: string) => void;
};
