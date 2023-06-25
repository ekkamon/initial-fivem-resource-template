import { type IConfiguration } from '@/types/ConfigurationInterface';

import {
  type ReactNode,
  type FC,
  useState,
  useContext,
  createContext,
} from 'react';

import { useNuiEvent } from '@/hooks/useNuiEvent';

const ConfigurationContext = createContext({});

interface Props {
  children?: ReactNode;
}

export const ConfigurationProvider: FC<Props> = ({ children }) => {
  const [config, setConfig] = useState<IConfiguration>({});

  useNuiEvent('SYNC_CONFIGURATION', (payload: IConfiguration) =>
    setConfig(payload)
  );

  return (
    <ConfigurationContext.Provider value={{ ...config }}>
      {children}
    </ConfigurationContext.Provider>
  );
};

export const useConfiguration = () => useContext(ConfigurationContext);
