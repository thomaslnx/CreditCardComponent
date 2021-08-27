import { Container, ContainerProps, useStyleConfig } from '@chakra-ui/react'

interface CardContainerProps extends ContainerProps {
  children: JSX.Element | JSX.Element[];
  size?: string;
  centerContent?: boolean;
}

export function CreditCardContainer(props: CardContainerProps) {
  const {children, ...rest} = props
  const container = useStyleConfig("Container")

  return (
    <Container __css={container} {...rest}>
      {children}
    </Container>
  )
}