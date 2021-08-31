import { Input, useStyleConfig, Box } from '@chakra-ui/react'
import { ChangeEvent } from 'react'

interface CardTitularContainerProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  display: string
}

export function CardTitularContainer(props: CardTitularContainerProps) {
  const { value, onChange, placeholder, display } = props
  const cardTitular = useStyleConfig("CardTitular", { value, onChange, placeholder })

  return (
    <Box __css={cardTitular} display={display}>
      <Input 
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        variant="unstyled"
        _placeholder={{ 
          fontSize: "18px", 
          fontFamily: "Cardium A, sans-serif" 
        }}
      />
    </Box>
    )
}