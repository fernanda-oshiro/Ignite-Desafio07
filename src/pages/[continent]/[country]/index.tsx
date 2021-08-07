import { Box, Text } from '@chakra-ui/react'
import { GetStaticProps } from 'next'


export default function Home({country, continent}) {

  return (
    <Box>
      <Text>{continent}</Text>
      <Text>{country}</Text>
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
  const { country, continent } = params
  return {props: {country, continent}}
}