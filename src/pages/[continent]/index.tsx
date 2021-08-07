import { Box, Text, Image, theme, useBreakpointValue, HStack } from '@chakra-ui/react'
import { GetStaticProps } from 'next'
import Card from '../../components/Card'



export default function Home({continent}) {

  const isWideVersion = useBreakpointValue({
    base:false,
    md: true,
  })

  const contientDict = {
    eu: 'Europa',
    na: 'Ámerica do Norte',
    sa: 'Ámerica do Sul',
    as: 'Ásia',
    af: 'África',
    oc: 'Oceania',
  }

  return (
    <Box>
      <Box position='relative'>
        <Image src='/images/eu/banner.jpg' height={['200px','300px','400px']} width='100%' objectFit='cover' />
        <Box backgroundColor='rgba(28,20,1,0.6)' width='100%' height='100%' position='absolute' top='0' bottom='0'>
          {
            isWideVersion ? 
              <Text position='absolute' bottom='10' left='20' fontSize='4xl' width='' height='' fontWeight='semibold' color={theme.colors.gray[50]}>{contientDict[continent]}</Text>
              :
              <Text position='absolute' top='0' left='0' width='100%' height='100%' display='flex' justifyContent='center' alignItems='center' fontSize='4xl' fontWeight='semibold' color={theme.colors.gray[50]}>
                {contientDict[continent]}
              </Text>
          }
        </Box>
      </Box>
      <Box display='flex' flexDirection={isWideVersion ? 'row': 'column'}>
        <Box width={isWideVersion ? '60%': '100%'} p={isWideVersion ?'20':'10'} textAlign='justify'>
          <Text fontSize={['md','lg']}>A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste</Text>
        </Box>
        <HStack spacing={10} textAlign='center' justifyContent='center' width={isWideVersion ? '35%': '100%'} p={isWideVersion ?'20':'10'}>
          <Box>
            <Text fontSize='4xl' color={theme.colors.yellow[500]}>50</Text>
            <Text fontWeight={isWideVersion ? 'bold' : 'medium'}>países</Text>
          </Box>
          <Box>
            <Text fontSize='4xl' color={theme.colors.yellow[500]}>60</Text>
            <Text fontWeight={isWideVersion ? 'bold' : 'medium'}>línguas</Text>
          </Box>
          <Box>
            <Text fontSize='4xl' color={theme.colors.yellow[500]}>27</Text>
            <Text fontWeight={isWideVersion ? 'bold' : 'medium'}>cidades +100 </Text>
          </Box>
        </HStack>
          
      </Box>
      <Box p={isWideVersion ?'20':'10'}>
        <Text pb='10' fontSize='3xl' fontWeight='medium'>Cidades +100</Text>
        <Box display='flex' flexDirection='row' flexWrap='wrap' justifyContent='center'>
          <Card src='/images/eu/Londres.png' flag='/images/eu/Londres_flag.png'>
            <Text fontWeight='semibold'>Londres</Text>
            <Text color={theme.colors.gray[300]} pt='3'>Reino Unido</Text>
          </Card>
          <Card src='/images/eu/Paris.png' flag='/images/eu/Paris_flag.png'>
            <Text fontWeight='semibold'>Paris</Text>
            <Text color={theme.colors.gray[300]} pt='3'>França</Text>
          </Card>
          <Card src='/images/eu/Roma.png' flag='/images/eu/Roma_flag.png'>
            <Text fontWeight='semibold'>Roma</Text>
            <Text color={theme.colors.gray[300]} pt='3'>Itália</Text>
          </Card>
          <Card src='/images/eu/Praga.png' flag='/images/eu/Praga_flag.png'>
            <Text fontWeight='semibold'>Praga</Text>
            <Text color={theme.colors.gray[300]} pt='3'>República Tcheca</Text>
          </Card>
          <Card src='/images/eu/Amsterda.png' flag='/images/eu/Amsterda_flag.png'>
            <Text fontWeight='semibold'>Amsterdã</Text>
            <Text color={theme.colors.gray[300]} pt='3'>Holanda</Text>
          </Card>
        </Box>
      </Box>
    </Box>
  )
}


export const getStaticPaths = () => {

  return {
    paths: [],
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { continent } = params
  const continents = ['eu', 'na', 'sa', 'af', 'as', 'oc']

  const getContinent = Array.isArray(continent) ? continent[0] : continent

  if(!continents.includes(getContinent)){
    return {redirect: {
      destination: '/',
      permanent: false
    }}
  }

  return {props: {continent}}
}