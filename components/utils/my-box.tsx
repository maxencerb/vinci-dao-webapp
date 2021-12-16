import { Box, SpaceProps, useColorModeValue } from '@chakra-ui/react'
import React from 'react'

type Props = {
    children: React.ReactNode,
    p?: SpaceProps['p'],
}

export default function MyBox({ children, p }: Props) {
    
    const bgColor = useColorModeValue('gray.200', 'gray.900')
    
    return (
        <Box borderRadius='2xl' bg={bgColor} width='100%' minH='28' p={p || '8'}>
            {children}
        </Box>
    )
}
