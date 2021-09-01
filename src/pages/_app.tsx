import type { AppProps, NextWebVitalsMetric } from 'next/app'
import { ChakraProvider, CSSReset } from '@chakra-ui/react'
import { ReactElement } from 'react'

import creditCardTheme from '../styles'

function MyApp({ Component, pageProps }: AppProps): ReactElement {

  return (
    <ChakraProvider theme={creditCardTheme}>
      <CSSReset />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export function reportWebVitals(metric: NextWebVitalsMetric) {
  // console.log(metric)
}

export default MyApp
