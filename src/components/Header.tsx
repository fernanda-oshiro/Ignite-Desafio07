import { Box, Icon, Image, Link } from '@chakra-ui/react'
import { useRouter } from 'next/dist/client/router'
import { RiArrowLeftSLine } from 'react-icons/ri'


export default function Header() {

  const router = useRouter()

  

  return (
    <Box
      display='flex'
      alignItems='center'
      m={[10, 10, 20]}
    >
      {
        router.asPath !=='/' &&
        <Link href='/'>
          <a>
            <Icon as={RiArrowLeftSLine} fontSize={['30','40']} />
          </a>
        </Link>
      }
      <Box width='100%' display='flex' justifyContent='center'  p='5'>
        <Image src='/Logo.png' />
      </Box>
    </Box>
  )
}
