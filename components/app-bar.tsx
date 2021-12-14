import { Flex, Heading, IconButton, Spacer, useColorModeValue, useColorMode, Button, Divider } from '@chakra-ui/react'
import { BsFillSunFill, BsFillMoonFill} from 'react-icons/bs'
import React from 'react'
import Account from '@components/web3/account'
import MyMenu from './utils/menu'

export default function AppBar() {

    const ToggleColorModeIcon = useColorModeValue(BsFillSunFill, BsFillMoonFill)
    const { colorMode, toggleColorMode } = useColorMode()

    return (<>
        <Flex
            p="4"
            align="center"
        >
            <Heading>Vinci DAO</Heading>
            <Spacer />
            <IconButton
                aria-label="Toggle color mode"
                icon={<ToggleColorModeIcon/>}
                onClick={toggleColorMode}
                display={['none', 'inherit']}
                mr='3'
            />
            <Account/>
            <MyMenu />
        </Flex>
        <Divider />
    </>
    )
}
