import type { NextPage } from 'next'
import { Box, Container, useStyleConfig } from '@chakra-ui/react'

const CreditCard: NextPage = () => {
  const boxStyles = useStyleConfig("Box")

  return (
    <Container size="xl" centerContent >
      <Box __css={boxStyles} >
        Container for credit card
      </Box>
    </Container>
  )
}

export default CreditCard
