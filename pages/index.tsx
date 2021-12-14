import { Flex } from '@chakra-ui/react'
import type { NextPage } from 'next'
// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import AppBar from "@components/app-bar"

const Home: NextPage = () => {
  return (
    <Flex
      direction='column'
    >
      <AppBar />
    </Flex>
  )
}

export default Home
