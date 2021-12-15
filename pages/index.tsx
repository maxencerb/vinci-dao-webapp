import { Container, Flex, Heading, VStack, Text } from '@chakra-ui/react'
import type { NextPage } from 'next'
// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import AppBar from "@components/app-bar"
import MyBox from '@components/utils/my-box'
import SearchAddress from '@components/search-address'

const Home: NextPage = () => {
  return (
    <Flex
      direction='column'
    >
      <AppBar />
      <Container
        mt='4'
        maxW='xl'
      >
        <VStack
          spacing='4'
          align='center'
        >
          <Heading>Welcome to Vinci DAO</Heading>
          <Text>
            This is a simple example of a next.js application using Chakra UI.
          </Text>
          <SearchAddress />
        </VStack>
      </Container>
    </Flex>
  )
}

export default Home
