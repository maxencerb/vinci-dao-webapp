import { Container, Flex, Heading, VStack, Text } from '@chakra-ui/react'
import type { NextPage } from 'next'
import AppBar from "@components/app-bar"
import SearchAddress from '@components/search-address'
import Seo from '@components/utils/seo'

const Home: NextPage = () => {
  return (
    <Flex
      direction='column'
    >
      <Seo
        title='Vinci DAO'
        description='Vinci DAO is a DAO built by and for students of DeVinci University Campus in Paris, La Défense, France.'
      />
      <AppBar />
      <Container
        mt='10'
        maxW='xl'
      >
        <VStack
          spacing='10'
          align='center'
        >
          <Heading>Welcome to Vinci DAO</Heading>
          <SearchAddress />
        </VStack>
      </Container>
    </Flex>
  )
}

export default Home
