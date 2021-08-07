
import React from "react";
import { Box, Image, Link } from "@chakra-ui/react";

export default function ContinentSwiper({link, src, children}) {
  
  return (
    <Link href={link}>
      <a>
        <Image
          objectFit='cover'
          width='100%'
          height='500px'
          src={src}
          position='relative'
          top={0}
          left={0}
        />
        <Box
          position='absolute'
          top={0}
          left={0}
          width='100%'
          height='100%'
          display='flex'
          flexDir='column'
          alignItems='center'
          justifyContent='center'
          backgroundColor='rgba(28,20,1,0.5)'
        >
          {children}
        </Box>
      </a>
    </Link>
  )
}