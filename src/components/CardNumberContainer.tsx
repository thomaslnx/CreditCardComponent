import { HStack, Input } from '@chakra-ui/react'

interface CardNumberContainerProps {
  display: string
}

export function CardNumberContainer(props: CardNumberContainerProps) {
  const { display } = props

  return (
    <>
      <HStack 
        spacing="20px"
        position="absolute"
        top="calc(50% + 150px)"
        display={display}
        fontFamily="Cardium A, sans-serif"
      >
        <Input textAlign="center"
          border="1px solid #ccc"
          borderRadius="4px"
          padding="0"
          margin="0"
          w="50px"
          placeholder="6759"
          maxLength={4}
          variant="unstyled"
          _placeholder={{
            fontWeight: "bold",
            textAlign: "center"
          }}
        />
        <Input textAlign="center"
          border="1px solid #ccc"
          borderRadius="4px"
          padding="0"
          margin="0"
          w="50px"
          placeholder="6759"
          maxLength={4}
          variant="unstyled"
          _placeholder={{
            fontWeight: "bold",
            textAlign: "center"
          }}
        />
        <Input textAlign="center"
          border="1px solid #ccc"
          borderRadius="4px"
          padding="0"
          margin="0"
          w="50px"
          placeholder="6759"
          maxLength={4}
          variant="unstyled"
          _placeholder={{
            fontWeight: "bold",
            textAlign: "center"
          }}
        />
        <Input 
          textAlign="center"
          border="1px solid #ccc"
          borderRadius="4px"
          padding="0"
          margin="0"
          w="50px"
          placeholder="6759"
          maxLength={4}
          variant="unstyled"
          _placeholder={{
            fontWeight: "bold",
            textAlign: "center"
          }}
        />
      </HStack>
      <HStack 
        spacing="10px"
        position="absolute"
        top="calc(50% + 190px)"
        left="calc(50% - 130px)"
        display={display}
      >
        <Input 
          placeholder="00"
          maxLength={2}
          textAlign="center"
          w="30px"
          padding="0"
          variant="unstyled"
          border="1px solid #ccc"
          borderRadius="4px"
        />
        <Input 
          placeholder="00"
          maxLength={2}
          textAlign="center"
          w="30px"
          padding="0"
          variant="unstyled"
          border="1px solid #ccc"
          borderRadius="4px"
        />
      </HStack>
      <HStack 
        spacing="10px"
        position="absolute"
        top="calc(50% + 190px)"
        display={display}
      >
        <Input 
          placeholder="00"
          maxLength={2}
          textAlign="center"
          w="30px"
          padding="0"
          variant="unstyled"
          border="1px solid #ccc"
          borderRadius="4px"
        />
        <Input 
          placeholder="00"
          maxLength={2}
          textAlign="center"
          w="30px"
          padding="0"
          variant="unstyled"
          border="1px solid #ccc"
          borderRadius="4px"
        />
      </HStack>
      <HStack
        position="absolute"
        top="calc(50% + 190px)"
        left="calc(50% + 80px)"
        display={display}
      >
        <Input 
          placeholder="000"
          maxLength={3}
          w="35px"
          textAlign="center"
          variant="unstyled"
          border="1px solid #ccc"
          borderRadius="4px"
        />
      </HStack>
    </>
  )
}