import { Button, Container, Flex, VStack } from '@chakra-ui/react'
import AppBar from '@components/app-bar'
import NameTag from '@components/utils/name-tag'
import Identicon from '@components/web3/ident-icon'
import { isValidAddress } from '@services/address'
import { GetServerSideProps } from 'next'
import React from 'react'

type Props = {
    address: string
}

const Address = ({address}: Props) => {

    // const router = useRouter()

    const verified = true // TODO: verify if address is a student of DeVinci
    const hasGraduated = true // TODO: verify if address has graduated

    return (
        <Flex
            direction='column'
        >
            <AppBar/>
            <Container
                maxW='xl'
                mt='10'
            >
                <VStack
                    spacing='8'
                >
                    <Identicon
                        address={address}
                        diameter={100}
                    />
                    <NameTag
                        address={address}
                        hasGraduated={hasGraduated}
                        verified={verified}
                    />
                </VStack>
            </Container>
        </Flex>
    )
}

export const getServerSideProps: GetServerSideProps<Props> = async ({ query }) => {
    
    const address = query.address

    if (!address || typeof address !== 'string' || !isValidAddress(address)) {
        return {
            notFound: true
        }
    }
    
    return {
        props: {
            address: address
        }
    }
}

export default Address