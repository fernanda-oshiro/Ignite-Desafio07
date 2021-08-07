import { Box, Image, Text, theme, useBreakpointValue } from '@chakra-ui/react'


export default function Banner() {

  const isWideVersion = useBreakpointValue({
    base:false,
    lg: true,
  })

  
  return (
    
    <Box 
      width='100%'
      position= 'relative'
    >
      <Image
        src='/images/Background.png'
        width='100vw' 
        position='relative'
        top={0}
        left={0}
        minHeight='250'
      />

      <Box
        width={isWideVersion ? '50vw' : '100vw'}
        position='absolute'
        top={0}
        left={0}
        height='100%'
        display='flex'
        flexDir='column'
        justifyContent='center'
        pr={!isWideVersion && [3, 10]}
        pl={[5, 10]}
      >
        
        <Text
          as='h1'
          color={theme.colors.gray[50]}
          fontSize={['2xl','3xl','3xl','3xl','5xl']}
          fontWeight={isWideVersion && 'bold'}
        >
          5 Continentes, <br/> infinitas possibilidades.
        </Text>
        <Text
          pt={5}
          as='h2'
          color={theme.colors.gray[200]}
          fontSize={['md','lg','2xl','2xl','3xl']}
        >
          Chegou a hora de tirar do papel a viagem que você sempre sonhou. 
        </Text>
      </Box>
      {
        isWideVersion &&
        <Image
          src='/images/Airplane.png'
          width='30vw' 
          position='absolute'
          bottom={-5}
          right={30}
        />
      }
    </Box>
  )
}
