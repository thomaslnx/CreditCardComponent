import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from '@chakra-ui/theme-tools'

import { CardFront } from './CardFront'
import { Container } from './Container'
import { BankLogo } from './BankLogo'
import { CardChip } from './CardChip'
import { CardBrand } from './CardBrand'
import { CardBack } from './CardBack'
import { CardTitular } from './CardTitular'
import { CardNumber } from './CardNumber'

const breakpoints = createBreakpoints({
  sm: "375px",
  md: "768px",
  lg: "1080px",
  xl: "null"
})

const creditCardTheme = extendTheme({
  components: {
    Container,
    CardFront,
    BankLogo,
    CardChip,
    CardBrand,
    CardBack,
    CardTitular,
    CardNumber
  },
  breakpoints
})

export default creditCardTheme;