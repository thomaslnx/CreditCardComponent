import { Box, Img, useStyleConfig } from '@chakra-ui/react'


export function BankLogoContainer() {
  const bankLogo = useStyleConfig("BankLogo")

  return (
    <Box __css={bankLogo}>
      <Img src="/bankImages/nubank.svg" alt="bank-logo"/>
    </Box>
  )
}