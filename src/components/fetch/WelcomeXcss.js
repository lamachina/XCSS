import React, { useState, useEffect } from 'react';
import { Box, Button, Fade, Flex, Heading, Image, Slide, SlideFade, Stack, Text } from '@chakra-ui/react';
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
        <Fade in={true} transition={{ enter: { duration: 5 } }}>

            <Box p={6}
                width="100%"
                height="100%"
                display="flex"
                flexDir="column"
                justifyContent="center"
                alignItems="start"
                transition="opacity 0.7s"
                gap={2}
                color={'whiteAlpha.800'}
            >

                <Text fontSize={'2xl'} fontWeight={700}>
                    Rarity ranking system rooted in mining difficulty.

                </Text>
                <Text fontSize={'md'} color={'grey'}>
                    Mint opened at block 811811. Mint closed at block 811822.
                </Text>

                <Flex w={'100%'} justifyContent={'center'}>
                    <a target='_blank' href='https://ep.atomicals.xyz/proxy/blockchain.atomicals.get_state?params=[%22eb3227db522eb4852da9005d2e61ca323d06de568b07c1ffa80c382a8d86082ai0%22]&pretty'>
                        <Image border={"2px solid #adff2f"} maxH={'288px'} m={6} src='/xcss_hd/xcsspp.png' />
                    </a>
                </Flex>


            </Box>
        </Fade>

    );
};

export default WelcomeSection;
