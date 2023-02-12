import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { PageLoader } from '@/shared/uikit/page-loader/page-loader';

export const withRouter = (component: () => React.ReactNode) => () =>
  (
    <BrowserRouter>
      <Suspense fallback={<PageLoader />}>{component()}</Suspense>
    </BrowserRouter>
  );
