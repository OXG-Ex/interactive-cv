import React from 'react'
import { TranslationProvider } from 'i18nano';
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { theme } from './shared/theme.ts'

const translations = {
  'en': () => import('./assets/translations/profile.ru.json'),
  'ru': () => import('./assets/translations/profile.ru.json'),
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TranslationProvider translations={translations} language="en">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </TranslationProvider>
  </React.StrictMode>,
)
