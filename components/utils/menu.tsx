import React, { useEffect } from 'react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    IconButton,
    useColorMode,
    useColorModeValue
  } from '@chakra-ui/react'

import { BsThreeDots, BsXLg, BsGithub, BsFillArrowRightCircleFill, BsFillSunFill, BsFillMoonFill } from 'react-icons/bs'
import { useEthers } from '@usedapp/core';

export default function MyMenu() {

    const { activateBrowserWallet, deactivate, account } = useEthers();

    const ToggleColorModeIcon = useColorModeValue(BsFillSunFill, BsFillMoonFill)
    const { colorMode, toggleColorMode } = useColorMode()

    const handleKeyDown = (e: KeyboardEvent) => {
        // If Ctrl+G is pressed, open github in new tab
        if (e.ctrlKey && e.key === 'g') {
            window.open('https://github.com/maxencerb/VinciDAO', '_blank')
        }
        // if Ctrl+M is pressed, disconnect
        if (e.ctrlKey && e.key === 'm') {
            toggleAccountState()
        }
        // If Alt+C is pressed, toggle color mode
        if (e.altKey && e.key === 'c') {
            toggleColorMode()
        }
    }

    const toggleAccountState = () => {
        if (account) {
            deactivate()
        } else {
            activateBrowserWallet()
        }
    }


    useEffect(() => {
        document.removeEventListener('keydown', handleKeyDown, true)
        document.addEventListener('keydown', handleKeyDown)
        return () => {
            document.removeEventListener('keydown', handleKeyDown, true)
        }
    }, []) 

    return (
        <Menu>
            <MenuButton
                as={IconButton}
                aria-label='Options'
                icon={<BsThreeDots />}
                variant='outline'
                ml='3'
            />
            <MenuList>
                <MenuItem icon={<ToggleColorModeIcon />} onClick={toggleColorMode} command='Alt+C'>
                    {colorMode === 'light' ? 'Dark Mode' : 'Light Mode'}
                </MenuItem>
                <MenuItem icon={<BsGithub />} command='⌘G' as='a' href='https://github.com/maxencerb/VinciDAO' target='_blank'>
                    View Docs
                </MenuItem>
                <MenuItem icon={account ? <BsXLg /> : <BsFillArrowRightCircleFill />} command='⌘M' color={account ? 'red.400' : 'green.400'} onClick={toggleAccountState}>
                    {account ? 'Disconnect' : 'Connect'}
                </MenuItem>
            </MenuList>
        </Menu>
    )
}