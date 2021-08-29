import { Box, Img } from '@chakra-ui/react'

export function NFCLogoContainer () {
  return  (
    <Box width="18px"height="18px" position="absolute" top="70px" left="95px">
      <Img src="/bankImages/nfc.svg" alt="nfc logo" color="#fff"></Img>
    </Box>
  )
}