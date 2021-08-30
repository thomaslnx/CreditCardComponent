import { Box, useStyleConfig, Text, Img, HStack } from '@chakra-ui/react'

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
        <Box display="flex" justifyContent="space-between" padding="5px 10px 0">
          <Text fontSize="6px" color="#ffffff" letterSpacing="-0.75px">Issud by Nubank under license by Mastercard International</Text>
          <Text fontSize="6px" color="#ffffff" letterSpacing="-0.75px">GEMALTO CWB00000000000000000</Text>
        </Box>
        <Box 
          height="50px" 
          bg="#dddddd"
          marginTop="5px"
        />
        <Box 
          width="70px" 
          fontSize="12px" 
          color="#ffffff" 
          marginTop="10px"
          marginLeft="10px"
        >
          <Text 
            fontFamily="Cardium A, sans-serif" 
            letterSpacing="-0.30px" 
            marginLeft="5px"
            fontSize="14px"
            fontWeight="700"
          >platinum</Text>
          <Img src="/bankImages/holograma2.png"/>
        </Box>
        <Box 
          display="flex"
          justifyContent="space-between"
          fontSize="14px" 
          color="#ffffff"
          width="200px"
          marginLeft="15px"
          marginTop="10px"
          fontWeight="bold"
        >
          <Text>6759</Text>
          <Text>6759</Text>
          <Text>6759</Text>
          <Text>6759</Text>
        </Box>
        <HStack marginTop="10px" marginLeft="15px">
        <Box 
          color="#ffffff"
          fontFamily="Cardium A, sans-serif"
          display="flex"
          width="62px"
        >
          <Text fontSize="4px" letterSpacing="-0.1px" width="30px">
            MEMBER
            SINCE
          </Text>
          <Text fontSize="11px" fontWeight="bold">00/00</Text>
        </Box>
        <Box 
          color="#ffffff"
          fontFamily="Cardium A, sans-serif"
          display="flex"
          width="60px"
        >
          <Text fontSize="4px" letterSpacing="-0.1px" width="30px">
            VALID
            THRU
          </Text>
          <Text fontSize="11px" fontWeight="bold">00/00</Text>
        </Box>
        <Box 
          color="#ffffff"
          fontFamily="Cardium A, sans-serif"
          display="flex"
          width="50px"
        >
          <Text fontSize="4px" letterSpacing="-0.1px" width="30px">
            SECURITY
            CODE
          </Text>
          <Text fontSize="11px" fontWeight="bold">000</Text>
        </Box>
        </HStack>
        
        <Box 
          width="50px"
          position="absolute"
          left="280px"
          top="160px"
          display="flex"
          flexDir="column"
          alignItems="center"
        >
          <Img src="bankImages/cirrus.png"/>
          <Text color="#ffffff" fontSize="10px" fontFamily="Cardium A, sans-serif" letterSpacing="-0.01px">
            cirrus
          </Text>
        </Box>
      </Box>
    </Box>
  )
}