import './styles/global.style.css';

import React from 'react';
import ReactDOM from 'react-dom/client';

import App from '@/components/App';

import { VisibilityProvider } from '@/contexts/Visibility';
import { ConfigurationProvider } from '@/contexts/Configuration';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ConfigurationProvider>
      <VisibilityProvider>
        <App />
      </VisibilityProvider>
    </ConfigurationProvider>
  </React.StrictMode>
);
