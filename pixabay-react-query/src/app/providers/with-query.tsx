import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export const withQuery = (component: () => React.ReactNode) => () =>
  <QueryClientProvider client={queryClient}>{component()}</QueryClientProvider>;
