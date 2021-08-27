import type { NextPage } from 'next'
import { Text, Button } from '@chakra-ui/react'

import { CreditCardContainer } from '@src/components/CreditCardContainer'
import { CardFrontContainer } from '@src/components/CardFrontContainer'
import { BankLogoContainer } from '@src/components/BankLogoContainer'
import { CardChipContainer } from '@src/components/CardChipContainer'
import { CardBrandContainer } from '@src/components/CardBrandContainer'
import { CardBackContainer } from '@src/components/CardBackContainer'

const CreditCard: NextPage = () => {
  return (
    <CreditCardContainer size="xl" centerContent >
      <CardFrontContainer>
        <BankLogoContainer />
        <CardChipContainer />
        <Text
          fontSize="11px"  
          color="white"
          fontWeight="bold"
          transform="rotate(270deg)"
          transformOrigin="center"
          position="absolute"
          top="130px"
          left="170px"
        >
          Marcos M Silva
        </Text>
        <CardBrandContainer />
      </CardFrontContainer>

      <CardBackContainer />

      <Button pos="absolute" transform="translate(20vw, 48vh)">Flip the Card</Button>
    </CreditCardContainer>

  )
}

export default CreditCard
