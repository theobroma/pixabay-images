import pMinDelay from 'p-min-delay';
import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { PageLoader } from '@/atoms/page-loader/page-loader';

const MIN_LAZY_DELAY = 300;

const AppLayout = lazy(() => pMinDelay(import('./AppLayout'), MIN_LAZY_DELAY));
const HomePage = lazy(() =>
  pMinDelay(import('@/pages/home/home.page'), MIN_LAZY_DELAY),
);
const SlicePage = lazy(() =>
  pMinDelay(import('@/pages/slice/slice.page'), MIN_LAZY_DELAY),
);
const RTKQPage = lazy(() =>
  pMinDelay(import('@/pages/rtkq/rtkq.page'), MIN_LAZY_DELAY),
);

export const AppContainer = () => (
  <Suspense fallback={<PageLoader />}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<HomePage />} />
          <Route path="slice" element={<SlicePage />} />
          <Route path="rtkq" element={<RTKQPage />} />
          <Route path="*" element={<div>Not Found</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Suspense>
);
