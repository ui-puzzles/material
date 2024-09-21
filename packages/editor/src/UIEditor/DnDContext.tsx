import { createContext, useContext, useState } from 'react';
import type { AvailableWidgetTypes } from './widgets/constants';

export const DnDContext = createContext<
  [
    AvailableWidgetTypes | null,
    React.Dispatch<React.SetStateAction<AvailableWidgetTypes | null>>,
  ]
>([null, () => {}]);

export const DnDProvider = ({ children }: { children: React.ReactNode }) => {
  const [type, setType] = useState<AvailableWidgetTypes | null>(null);

  return (
    <DnDContext.Provider value={[type, setType]}>
      {children}
    </DnDContext.Provider>
  );
};

export const useDnD = () => {
  return useContext(DnDContext);
};
