import pMinDelay from 'p-min-delay';
import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { PageLoader } from '@/atoms/page-loader/page-loader';

const MIN_LAZY_DELAY = 300;

const AppLayout = lazy(() => pMinDelay(import('./AppLayout'), MIN_LAZY_DELAY));
const MainView = lazy(() =>
  pMinDelay(import('@/views/MainView/MainView'), MIN_LAZY_DELAY),
);

export const AppContainer = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<MainView />} />
            {/* <Route path="cryptocurrencies" element={<MainView />} /> */}
            {/* <Route path="exchanges" element={<div>exchanges</div>} /> */}
            <Route path="*" element={<div>Not Found</div>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};
