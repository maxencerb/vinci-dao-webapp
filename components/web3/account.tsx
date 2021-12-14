import React from 'react'
import { useEthers, useEtherBalance } from "@usedapp/core";
import { Box, Button, Popover, PopoverArrow, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger, Portal, Text } from '@chakra-ui/react';
import { formatEther } from "@ethersproject/units";

export default function Account() {

    const { activateBrowserWallet, account } = useEthers();
    const etherBalance = useEtherBalance(account);

    const handleConnect = () => {
        activateBrowserWallet();
    }

    return account ? (
        <Popover>
            <PopoverTrigger>
                <Button ml="3">{etherBalance && parseFloat(formatEther(etherBalance))} ETH 
                    <Box as="span" ml="1" fontSize="sm">
                        <Text as="span" fontSize="xs"> {account &&
                        `${account.slice(0, 6)}...${account.slice(
                        account.length - 4,
                        account.length
                        )}`}</Text>
                    </Box>
                </Button>
            </PopoverTrigger>
            <Portal>
                <PopoverContent>
                    <PopoverArrow />
                    <PopoverHeader>My Account</PopoverHeader>
                    <PopoverCloseButton />
                </PopoverContent>
            </Portal>
        </Popover>
    ) : (
        <Button onClick={handleConnect}>
            <Text>Connect</Text>
        </Button>
    )
}
