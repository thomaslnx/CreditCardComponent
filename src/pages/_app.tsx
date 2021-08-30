import type { AppProps, NextWebVitalsMetric } from 'next/app'
import { ChakraProvider, CSSReset } from '@chakra-ui/react'
import { ReactElement } from 'react'
import { DefaultSeo } from 'next-seo'

import creditCardTheme from '../styles'

function MyApp({ Component, pageProps }: AppProps): ReactElement {

  return (
    <ChakraProvider theme={creditCardTheme}>
      <CSSReset />
      <DefaultSeo
        openGraph={{
          title: 'Animated Credit Card Component',
          description: 'PoC from app using NextJS and ChakraUI',
          type: 'website',
          locale: 'en_IE',
          url: 'https://credit-card-component.vercel.app/',
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
