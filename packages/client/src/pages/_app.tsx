import '../styles/globals.css';

import { Layout } from '@/components/templates';

import MetaMaskProvider from '../context/MetaMaskContext';

import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MetaMaskProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MetaMaskProvider>
  );
}
