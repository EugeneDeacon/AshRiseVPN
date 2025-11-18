import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { init, backButton } from '@telegram-apps/sdk-react';

import './styles.css'
import App from './App.tsx'

init();

backButton.mount();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
