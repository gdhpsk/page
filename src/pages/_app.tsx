import '@/styles/globals.css'
import '@radix-ui/themes/styles.css';
import type { AppProps } from 'next/app'
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <Head>
        <title>Hpsk&apos;s website</title>
    </Head>
    <Component {...pageProps} />
  </>
}
