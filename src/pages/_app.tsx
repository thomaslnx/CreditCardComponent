import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { ReactElement } from 'react'

import creditCardTheme from '../styles'

function MyApp({ Component, pageProps }: AppProps): ReactElement {

  return (
   <ChakraProvider theme={creditCardTheme}>
     <Component {...pageProps} />
   </ChakraProvider>
  )
}
export default MyApp
