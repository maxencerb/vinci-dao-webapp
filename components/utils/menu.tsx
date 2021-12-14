import React from 'react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    IconButton
  } from '@chakra-ui/react'

import { BsThreeDots, BsXLg, BsGithub } from 'react-icons/bs'

export default function MyMenu() {
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
                <MenuItem icon={<BsGithub />} command='⌘G' as='a' href='https://github.com/maxencerb/VinciDAO' target='_blank'>
                    View Docs
                </MenuItem>
                <MenuItem icon={<BsXLg />} command='⌘T' color='red.400'>
                    Disconnect
                </MenuItem>
            </MenuList>
        </Menu>
    )
}

MyMenu.onKeyPress = (e: KeyboardEvent) => {
    alert(e.key)
}