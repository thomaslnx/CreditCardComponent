import React, { ChangeEvent, useState } from 'react'
import type { NextPage } from 'next'
import { Text, Button } from '@chakra-ui/react'

import { CreditCardContainer } from '@src/components/CreditCardContainer'
import { CardFrontContainer } from '@src/components/CardFrontContainer'
import { BankLogoContainer } from '@src/components/BankLogoContainer'
import { CardChipContainer } from '@src/components/CardChipContainer'
import { CardBrandContainer } from '@src/components/CardBrandContainer'
import { CardBackContainer } from '@src/components/CardBackContainer'
import { NFCLogoContainer } from '@src/components/NFCLogoContainer'
import { CardTitularContainer } from '@src/components/CardTitularContainer'
import { CardNumberContainer } from '@src/components/CardNumberContainer'

const CreditCard: NextPage = () => {
  const [isFrontFlipped, setIsFrontFlipped] = useState('notFlipped')
  const [isBackFlipped, setIsBackFlipped] = useState('notFlipped')
  const [titular, setTitular] = useState('');
  const [titularInputDisplay, setTitularInputDisplay] = useState('inline')
  const [cardBackVisibility, setCardBackVisibility] = useState<'none' | 'inline'>('none')

  function handleFlip() {
    if (isFrontFlipped === 'notFlipped') {
      setIsFrontFlipped('flipped')
      setIsBackFlipped('flipped')
      setTitularInputDisplay('none')
      setCardBackVisibility('inline')
    } else {
      setIsFrontFlipped('notFlipped')
      setIsBackFlipped('notFlipped')
      setTitularInputDisplay('inline')
      setCardBackVisibility('none')
    }
  }

  const handleTitular = (event: ChangeEvent<HTMLInputElement>) => setTitular(event.target.value)

  return (
    <CreditCardContainer size="xl" centerContent >
      <CardFrontContainer variant={isFrontFlipped}>
        <BankLogoContainer />
        <CardChipContainer />
        <NFCLogoContainer />
        <Text
          fontFamily="Cardium A"
          fontSize="11px"  
          color="white"
          fontWeight="bold"
          // transform="rotate(270deg)"
          transformOrigin="center"
          position="absolute"
          top="170px"
          left="100px"
        >
          {titular === '' ? 'Marcos M Silva' : titular}
        </Text>
        <CardBrandContainer />
      </CardFrontContainer>

      <CardBackContainer variant={isBackFlipped}/>
      <Button 
        pos="absolute"
        onClick={handleFlip}
        transform="translate(20vw, 48vh)"
        variant="outline"
      >
        Flip the Card
      </Button>
      <CardTitularContainer 
        display={titularInputDisplay}
        onChange={handleTitular}
        value={titular}
        placeholder="Titular"
      />

      <CardNumberContainer display={cardBackVisibility}/>
     
    </CreditCardContainer>
  )
}

export default CreditCard
