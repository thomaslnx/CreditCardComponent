import { Box, ContainerProps, useStyleConfig } from '@chakra-ui/react'

interface CardFrontProps extends ContainerProps {
  children: JSX.Element | JSX.Element[];
  variant: string;
}

export function CardFrontContainer(props: CardFrontProps) {
  const {variant, children, ...rest } = props
  const cardFront = useStyleConfig("CardFront", { variant })

  return (
    <Box __css={cardFront} {...rest} >
      {children}
    </Box>
  )
}