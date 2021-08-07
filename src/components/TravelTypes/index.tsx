import { Box, useBreakpointValue, HStack } from '@chakra-ui/react'
import TravelType from './TravelType'


export default function TravelTypes() {

  const isWideVersion = useBreakpointValue({
    base:false,
    lg: true,
  })

  if(isWideVersion){
    return (
      <HStack
        spacing={20}
        justifyContent='center'
        m={20}
      >
        <TravelType img='/images/cocktail.png'>
          vida noturna
        </TravelType>
        <TravelType img='/images/beach.png'>
          praia
        </TravelType>
        <TravelType img='/images/building.png'>
          moderno
        </TravelType>
        <TravelType img='/images/museum.png'>
          clássico
        </TravelType>
        <TravelType img='/images/earth.png'>
          e mais...
        </TravelType>
      </HStack>
    )
  }

  return(
    <Box
      display='flex'
      flexWrap='wrap'
      flexDir='row'
      justifyContent='space-around'
      m={[25,10]}
      as='ul'
    >
      <TravelType img='/images/cocktail.png'>
        vida noturna
      </TravelType>
      <TravelType img='/images/beach.png'>
        praia
      </TravelType>
      <TravelType img='/images/building.png'>
        moderno
      </TravelType>
      <TravelType img='/images/museum.png'>
        clássico
      </TravelType>
      <TravelType img='/images/earth.png'>
        e mais...
      </TravelType>
    </Box>
  )
}
