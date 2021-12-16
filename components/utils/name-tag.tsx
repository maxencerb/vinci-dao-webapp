import { Button, Heading, HStack, Tooltip } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { BsClipboard } from 'react-icons/bs'
import { MdOutlineVerified, MdVerified } from 'react-icons/md'

type NameTagProps = {
    address: string,
    hasGraduated: boolean,
    verified: boolean,
}

export default function NameTag({ address, hasGraduated, verified }: NameTagProps) {
    
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        if (copied) {
            setTimeout(() => {
                setCopied(false);
            }, 3000);
        }
    }, [copied])
    
    return (
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
                    <Heading overflowWrap='anywhere' fontSize='xl' mr='2'>{address.slice(0, 15)}...</Heading>
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
    )
}
