import { Box, useStyleConfig, Text } from '@chakra-ui/react'

// interface CardBackContainerProps {
//   children: JSX.Element | JSX.Element[];
// }

export function CardBackContainer() {
  const cardBack = useStyleConfig("CardBack")

  return (
    <Box __css={cardBack}>
      <Box>
        <Box height="50px" bgGradient="linear(to-tl, #2d2c2f, #151314, #070107 55%)" borderTopLeftRadius={10} borderTopRightRadius={10}/>
        <Text>CVV</Text>
      </Box>
    </Box>
  )
}