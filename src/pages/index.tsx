import { useState } from 'react'
import type { NextPage } from 'next'
import { Text, Button, Img, Box } from '@chakra-ui/react'

import { CreditCardContainer } from '@src/components/CreditCardContainer'
import { CardFrontContainer } from '@src/components/CardFrontContainer'
import { BankLogoContainer } from '@src/components/BankLogoContainer'
import { CardChipContainer } from '@src/components/CardChipContainer'
import { CardBrandContainer } from '@src/components/CardBrandContainer'
import { CardBackContainer } from '@src/components/CardBackContainer'
import { NFCLogoContainer } from '@src/components/NFCLogoContainer'

const CreditCard: NextPage = () => {
  const [isFrontFlipped, setIsFrontFlipped] = useState('notFlipped')
  const [isBackFlipped, setIsBackFlipped] = useState('notFlipped')

  function handleFlip() {
    if (isFrontFlipped === 'notFlipped') {
      setIsFrontFlipped('flipped')
      setIsBackFlipped('flipped')
    } else {
      setIsFrontFlipped('notFlipped')
      setIsBackFlipped('notFlipped')
    }
  }

  return (
    <CreditCardContainer size="xl" centerContent >
      <CardFrontContainer variant={isFrontFlipped}>
        <BankLogoContainer />
        <CardChipContainer />
        <NFCLogoContainer />
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

      <CardBackContainer variant={isBackFlipped}/>
      <Button 
        pos="absolute"
        onClick={handleFlip}
        transform="translate(20vw, 48vh)"
      >
        Flip the Card
      </Button>
    </CreditCardContainer>

  )
}

export default CreditCard
