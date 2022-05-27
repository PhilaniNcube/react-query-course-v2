import '../styles/globals.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Fragment } from 'react';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </Fragment>
  );
}

export default MyApp;
