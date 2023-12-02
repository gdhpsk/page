import { Theme } from '@radix-ui/themes'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="og:title" content="Hpsk's website"/>
        <meta name="og:description" content="My very own personalized website, very cool ikr"/>
      </Head>
        <body>
          <Theme appearance='dark' radius="full" accentColor='cyan'>
            <Main />
            <NextScript />
          </Theme>
        </body>
    </Html>
  )
}
