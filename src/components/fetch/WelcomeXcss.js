import React, { useState, useEffect } from 'react';
import { Box, Fade, Heading, Stack, Text } from '@chakra-ui/react';
import { ArrowDownIcon } from '@chakra-ui/icons';

const WelcomeSection = () => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <Fade in={true}>

            <Box p={6}
                visibility={isVisible ? 'visible' : 'hidden'} // Add class names for styling
                position="fixed"
                top="0"
                left="0"
                width="100%"
                height="100%"
                display="flex"
                flexDir="column"
                justifyContent="center"
                alignItems="start"
                backgroundColor="rgba(255, 255, 255, 0.9)"
                transition="opacity 0.7s"
                gap={4}
            >

                <Text fontSize={'2xl'} fontWeight={700}>
                    Rarity ranking system rooted in mining difficulty.

                </Text>
                <Text fontSize={'md'} color={'grey'}>
                    Mint opened at block 811811. Minted closed at block 811822.
                </Text>
                <Text fontSize={'xl'} py={6}>

                    Paying homage to the Atomicals Protocols launch at block 808080.
                </Text>
                <Text fontSize={'xl'} color={'grey'} >
                    Discover the XCSS collection.
                </Text>
                <Stack display={'flex'} flexDirection='column' alignItems={'center'} w={'100%'}>

                    <ArrowDownIcon color={'blackAlpha.200'} fontSize={'4xl'}></ArrowDownIcon>
                    <ArrowDownIcon color={'blackAlpha.400'} fontSize={'4xl'}></ArrowDownIcon>
                    <ArrowDownIcon color={'blackAlpha.600'} fontSize={'4xl'}></ArrowDownIcon>
                </Stack>


            </Box>
        </Fade>

    );
};

export default WelcomeSection;
