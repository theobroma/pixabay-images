import compose from 'compose-function';

import { withQuery } from './with-query';
import { withRouter } from './with-router';
import { withSnackbar } from './with-snackbar';
// import { withStore } from './with-store';
import { withTheme } from './with-theme';

export const withProviders = compose(
  withQuery,
  // withStore,
  withTheme,
  withSnackbar,
  withRouter,
);
