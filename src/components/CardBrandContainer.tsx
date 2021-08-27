import { Box, Img, useStyleConfig } from '@chakra-ui/react'

export function CardBrandContainer() {
  const cardBrand = useStyleConfig("CardBrand")

  return (
    <Box __css={cardBrand} >
      <Img src="bankImages/mastercard.svg" alt="card brand" />
    </Box>
  )
}