import { ReactNode } from 'react'
import { Box, Image } from '@chakra-ui/react'

interface CardProps {
  src: string;
  flag: string;
  children: ReactNode
}

export default function Card({src, flag, children}: CardProps) {

  return (
    <Box p='5'>
      <Image src={src} />
      <Box  border={`rgba(255, 186, 8, .5) solid 2px`} borderTop='none' borderBottomRadius={10} display='flex' justifyContent='space-between' alignItems='center' p='5'>
        <Box>
          {children}
        </Box>
        <Box>
          <Image src={flag} />
        </Box>
      </Box>
    </Box>
  )
}
