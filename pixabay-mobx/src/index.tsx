import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { SnackBarProvider } from './components/SnackBar/SnackBarProvider';
import { AppContainer } from './routes/AppContainer';
import * as serviceWorker from './serviceWorker';
import { AppThemeProvider } from './themes/theme';
import './index.css';

// Open Source fonts
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const container = document.getElementById('root') as HTMLDivElement;
const root = createRoot(container);

root.render(
  <StrictMode>
    <AppThemeProvider>
      <SnackBarProvider>
        <AppContainer />
      </SnackBarProvider>
    </AppThemeProvider>
  </StrictMode>,
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
