import { extendTheme } from "@chakra-ui/react";

import { CardFront } from './CardFront'
import { Container } from './Container'
import { BankLogo } from './BankLogo'
import { CardChip } from './CardChip'
import { CardBrand } from './CardBrand'
import { CardBack } from './CardBack'
import { CardTitular } from './CardTitular'

const creditCardTheme = extendTheme({
  components: {
    Container,
    CardFront,
    BankLogo,
    CardChip,
    CardBrand,
    CardBack,
    CardTitular
  },
})

export default creditCardTheme;