import { Box, ContainerProps, useStyleConfig } from '@chakra-ui/react'

interface CardFrontProps extends ContainerProps {
  children: JSX.Element | JSX.Element[];
}

export function CardFrontContainer(props: CardFrontProps) {
  const { children } = props
  const cardFront = useStyleConfig("CardFront")

  return (
    <Box __css={cardFront} >
      {children}
    </Box>
  )
}