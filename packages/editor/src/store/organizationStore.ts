import { create } from 'zustand';

const initialState: OrganizationState = {
  orgId: null,
  orgName: null,
};

export const useOrgSlice = create<OrganizationState & OrganizationActions>(
  (set) => ({
    ...initialState,
    setAppId: (orgId: string) => set({ orgId }),
    reset: () => {
      set(initialState);
    },
  }),
);

export type OrganizationState = {
  orgId: string | null;
  orgName: string | null;
};

export type OrganizationActions = {
  setAppId: (orgId: string) => void;
};
