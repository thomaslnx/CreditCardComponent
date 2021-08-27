import { Box, Divider, useStyleConfig } from '@chakra-ui/react'

export function CardChipContainer() {
  const cardChip = useStyleConfig("CardChip")

  return (
    <Box __css={cardChip}>
      <Divider orientation="horizontal" width="50px" ml="-1px" mt="11px" />
      <Divider orientation="horizontal" width="50px" ml="-1px" mt="13px" />
      <Divider orientation="vertical" height="40px" mt="-27px" ml="13px" />
      <Divider orientation="vertical" height="40px" mt="-40px" ml="30px" />
    </Box>
  )
}