import { Box, Text } from '@chakra-ui/react'
import Banner from '../components/Banner'
import ContinentSlide from '../components/ContinentSlide'
import TravelTypes from '../components/TravelTypes'


export default function Home() {


  return (
    <>
      <Banner />
      <TravelTypes />
      <Box display='flex' justifyContent='center' >
        <Box borderBottom='solid black 2px' width={['60px','90px']} />
      </Box>
      <Text justifyContent='center' textAlign='center' p={10} as='h1' fontSize={[20,25,30]}>
        Vamos nessa? <br/> Então escolha seu continente
      </Text>
      <ContinentSlide />
    </>
  )
}
