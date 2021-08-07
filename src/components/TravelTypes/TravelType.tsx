import { Box, Icon, Image, Text, theme, useBreakpointValue, VStack } from '@chakra-ui/react'
import { useRouter } from 'next/dist/client/router'
import { RiCheckboxBlankCircleFill } from 'react-icons/ri'


interface TravelTypeProps {
  img: string;
  children: string;
}

export default function TravelType({img, children}: TravelTypeProps) {

  const isWideVersion = useBreakpointValue({
    base:false,
    lg: true,
  })

  if(isWideVersion){
    return (
      <VStack
        spacing={5}
        m={10}
      >
        <Image src={img} />
        <Text as='h3' fontWeight='bold'>{children}</Text>
      </VStack>
    )
  }
  return (
      <Text minInlineSize='fit-content' m={5} justifySelf='center'>
        <Icon
          as={RiCheckboxBlankCircleFill}
          fontSize='10'
          color={theme.colors.yellow[500]} 
          mr={3}
        />
        {children}
      </Text>
  )
}
