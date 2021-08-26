import { extendTheme } from "@chakra-ui/react";

import { CardFront } from './components/CardFront'
import { Container } from './components/Container'
import { BankLogo } from './components/BankLogo'
import { CardChip } from './components/CardChip'
import { CardBrand } from './components/CardBrand'
import { CardBack } from './components/CardBack'

const creditCardTheme = extendTheme({
  components: {
    Container,
    CardFront,
    BankLogo,
    CardChip,
    CardBrand,
    CardBack
  }
})

export default creditCardTheme;