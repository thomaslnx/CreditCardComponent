import { Box, useStyleConfig, Text } from '@chakra-ui/react'

interface CardBackContainerProps {
  // children: JSX.Element | JSX.Element[];
  variant: string;
}

export function CardBackContainer(props: CardBackContainerProps) {
  const { variant } = props
  const cardBack = useStyleConfig("CardBack", { variant })

  return (
    <Box __css={cardBack} variant={variant}>
      <Box>
        <Box height="50px" bgGradient="linear(to-tl, #2d2c2f, #151314, #070107 55%)" borderTopLeftRadius={10} borderTopRightRadius={10}/>
        <Text>CVV</Text>
      </Box>
    </Box>
  )
}