'use client';
import { AuthProvider, MiscProvider, ToastProvider } from '../hooks';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

type ContextWrapperI = {
  children: React.ReactNode;
};

// Create a client
const queryClient = new QueryClient();

export function ContextWrapper({ children }: ContextWrapperI) {
  return (
    <QueryClientProvider client={queryClient}>
      <ToastProvider>
        <AuthProvider>
          <MiscProvider>{children}</MiscProvider>
        </AuthProvider>
      </ToastProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
