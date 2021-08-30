import type { AppProps, NextWebVitalsMetric } from 'next/app'
import { ChakraProvider, CSSReset } from '@chakra-ui/react'
import { ReactElement } from 'react'
import { NextSeo } from 'next-seo'

import creditCardTheme from '../styles'

function MyApp({ Component, pageProps }: AppProps): ReactElement {

  return (
    <ChakraProvider theme={creditCardTheme}>
      <CSSReset />
      <NextSeo
        title="Animated Credit Card Component"
        description="PoC from app using NextJS and ChakraUI"
        canonical="https://creditcardcomponent.netlify.app/"
        // canonical="https://creditcardcomponent.vercel.app/"
        openGraph={{
          title: 'Animated Credit Card Component',
          description: 'PoC from app using NextJS and ChakraUI',
          type: 'website',
          locale: 'en_IE',
          url: 'https://creditcardcomponent.netlify.app/',
          site_name: 'credit card component',
          images: [{
            url: '/bankImages/nubank.svg',
            width: 79,
            height: 79,
            alt: 'nubank logo'
          }]
        }}
        twitter={{
          handle: '@thomaslnx',
          site: '@thomaslnx',
          cardType: 'sumary_large_image'
        }}
      />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export function reportWebVitals(metric: NextWebVitalsMetric) {
  console.log(metric)
}

export default MyApp
