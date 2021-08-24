import { extendTheme } from "@chakra-ui/react";

import { CardFront } from './components/CardFront'
import { Container } from './components/Container'
import { BankLogo } from './components/BankLogo'
import { CardChip as Box} from './components/CardChip'

const creditCardTheme = extendTheme({
  components: {
    Container,
    CardFront,
    BankLogo,
    Box
  }
})

export default creditCardTheme;