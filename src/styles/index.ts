import { extendTheme } from "@chakra-ui/react";

import { CardFront } from './CardFront'
import { Container } from './Container'
import { BankLogo } from './BankLogo'
import { CardChip } from './CardChip'
import { CardBrand } from './CardBrand'
import { CardBack } from './CardBack'

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