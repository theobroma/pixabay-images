import { Suspense } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      retry: 1,
    },
  },
});

const Application = () => (
  <QueryClientProvider client={queryClient}>
    <ReactQueryDevtools initialIsOpen={false} />
    <Suspense fallback={<>spinner</>}>
      Application
      {/* <RouterProvider router={router} /> */}
    </Suspense>
  </QueryClientProvider>
);

export default Application;
