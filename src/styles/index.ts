import { extendTheme } from "@chakra-ui/react";

import { CardFront } from './components/CardFront'
import { Container } from './components/Container'
import { BankImage } from './components/BankImage'

const creditCardTheme = extendTheme({
  components: {
    Container,
    CardFront,
    BankImage,
  }
})

export default creditCardTheme;