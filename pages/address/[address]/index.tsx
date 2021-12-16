import { Button, Container, Flex, Heading, HStack, IconButton, Tooltip, useToast, VStack } from '@chakra-ui/react'
import AppBar from '@components/app-bar'
import { isValidAddress } from '@services/address'
import { GetServerSideProps, NextPage } from 'next'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { BsClipboard } from 'react-icons/bs'
import { MdVerified, MdOutlineVerified } from 'react-icons/md'

type Props = {
    address: string
}

const Address = ({address}: Props) => {

    // const router = useRouter()

    const verified = true // TODO: verify if address is a student of DeVinci
    const hasGraduated = true // TODO: verify if address has graduated

    const [copied, setCopied] = useState(false);

    useEffect(() => {
        if (copied) {
            setTimeout(() => {
                setCopied(false);
            }, 3000);
        }
    }, [copied])

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
                    spacing='10'
                >
                    <HStack>
                        <Tooltip
                            label={copied ? 'Copied!' : 'Copy address'}
                            aria-label={copied ? 'Copied!' : 'Copy address'}
                            hasArrow
                        >
                            <Button
                                onClick={() => {
                                    if (copied) return
                                    setCopied(true)
                                    navigator.clipboard.writeText(address)
                                }}
                                rightIcon={<BsClipboard />}
                                variant='ghost'
                                p='4'
                            >
                                <Heading overflowWrap='anywhere' fontSize='2xl' mr='2'>{address.slice(0, 15)}...</Heading>
                            </Button>
                        </Tooltip>
                        {hasGraduated ? (
                            <Tooltip
                                label='Graduated'
                                hasArrow
                            >
                                <span>
                                    <MdVerified size='1.5em' />
                                </span>
                            </Tooltip>
                        ) : (
                            verified && <Tooltip
                                label='Student'
                                hasArrow
                            >
                                <span>
                                    <MdOutlineVerified size='1.5em' />
                                </span>
                            </Tooltip>
                        )}
                    </HStack>
                </VStack>
            </Container>
        </Flex>
    )
}

export const getServerSideProps: GetServerSideProps<Props> = async ({ query }) => {
    
    const address = query.address

    if (address || typeof address !== 'string' || !isValidAddress(address)) {
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