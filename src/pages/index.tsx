import type { NextPage } from 'next'
import { Box, Text, Container, Image, useStyleConfig } from '@chakra-ui/react'


const CreditCard: NextPage = () => {
  const cardFront = useStyleConfig("CardFront")
  const bankLogo = useStyleConfig("BankImage")

  return (
    <Container size="xl" centerContent >
      <Box __css={cardFront} >
        <Box __css={bankLogo}>
          <Image src="/bankImages/nubank.svg" alt="bank-logo"/>
        </Box>      
        <Text 
          fontSize="13px"  
          color="white"
          fontWeight="bold"
          transform="rotate(270deg)"
          transformOrigin="center"
          position="relative"
          marginRight={5}
        >
          Marcos M Silva
        </Text>
      </Box>
    </Container>
  )
}

export default CreditCard
