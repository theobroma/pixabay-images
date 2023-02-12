import { SnackbarProvider as NotiStackSnackbarProvider } from 'notistack';
import { PropsWithChildren } from 'react';

const SNACKBAR_MAX_COUNT = 5;

export const SnackBarProvider = ({ children }: PropsWithChildren) => (
  <NotiStackSnackbarProvider
    maxSnack={SNACKBAR_MAX_COUNT}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
  >
    {children}
  </NotiStackSnackbarProvider>
);

export const withSnackbar = (component: () => React.ReactNode) => () =>
  <SnackBarProvider>{component()}</SnackBarProvider>;
