import type { NextPage } from 'next'
import { Box, Text, Button, Container, Img, useStyleConfig, Divider } from '@chakra-ui/react'

import { CardContainer } from '@src/components/Container'

const CreditCard: NextPage = () => {
  const cardFront = useStyleConfig("CardFront")
  const bankLogo = useStyleConfig("BankLogo")
  const chip = useStyleConfig("CardChip")
  const cardBrand = useStyleConfig("CardBrand")
  const cardBack = useStyleConfig("CardBack")

  return (
  <CardContainer size="xl" centerContent >
      <Box __css={cardFront} onMouseEnter={() => console.log('mouse sobre a div front')}>
        <Box __css={bankLogo}>
          <Img src="/bankImages/nubank.svg" alt="bank-logo"/>
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
          <Img src="bankImages/mastercard.svg" alt="card brand" />
        </Box>
      </Box>

      <Box __css={cardBack}>
        <Box>
          <Box height="50px" bgGradient="linear(to-tl, #2d2c2f, #151314, #070107 55%)" borderTopLeftRadius={10} borderTopRightRadius={10}/>
          <Text>CVV</Text>
        </Box>
      </Box>

      <Button pos="absolute" transform="translate(20vw, 48vh)">Flip the Card</Button>
    </CardContainer>

  )
}

export default CreditCard
