import { type ReactNode, type FC, useState, createContext } from 'react';

import { isEnvBrowser } from '@/utils/misc';
import { useNuiEvent } from '@/hooks/useNuiEvent';

const VisibilityContext = createContext({});

interface Props {
  children?: ReactNode;
}

export const VisibilityProvider: FC<Props> = ({ children }) => {
  const [visible, setVisible] = useState<boolean>(
    isEnvBrowser() ? true : false
  );

  useNuiEvent('SET_VISIBLE', ({ toggle }) => setVisible(toggle));

  if (!visible) return;

  return (
    <VisibilityContext.Provider value={{}}>
      {children}
    </VisibilityContext.Provider>
  );
};
