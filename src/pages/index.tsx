import type { NextPage } from 'next'
import { Box, Text, Container, Image, useStyleConfig, Divider } from '@chakra-ui/react'

const CreditCard: NextPage = () => {
  const cardFront = useStyleConfig("CardFront")
  const bankLogo = useStyleConfig("BankLogo")
  const chip = useStyleConfig("CardChip")
  const cardBrand = useStyleConfig("CardBrand")

  return (
    <Container size="xl" centerContent >
      <Box __css={cardFront} >
        <Box __css={bankLogo}>
          <Image src="/bankImages/nubank.svg" alt="bank-logo"/>
        </Box>      

        <Box __css={chip} >
          <Divider orientation="horizontal" width="50px" ml="-1px" mt="11px" />
          <Divider orientation="horizontal" width="50px" ml="-1px" mt="13px" />
          <Divider orientation="vertical" height="40px" mt="-27px" ml="13px" />
          <Divider orientation="vertical" height="40px" mt="-40px" ml="30px" />
        </Box>

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

        <Box __css={cardBrand}>
          <Image src="bankImages/mastercard.svg" alt="card brand" />
        </Box>
      </Box>
    </Container>
  )
}

export default CreditCard
