import React from 'react';
import { Link } from 'react-router-dom';
import {
    Drawer,
    DrawerOverlay,
    Box,
    Link as ChakraLink,
    Text,
    DrawerHeader,
    DrawerBody,
    CloseButton,
    Divider,
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import TypingText from './components/styli/TypingText';

function NavigationDrawer({ isOpen, onClose, selectedItem }) {
    const closeDrawerAndLink = () => {
        onClose(); // Close the drawer
    };

    return (
        <Drawer isOpen={isOpen} onClose={onClose} size="full">
            <DrawerOverlay>
                <Box
                    bg="black"
                    h="100%"
                    color="white"
                    id='pix'
                    overflow="auto"
                    fontSize="xl"
                    display={'flex'}
                    justifyContent={'center'}
                    flexDirection={'column'}
                    p={'1rem'}
                >

                    <DrawerHeader color={'steelblue'} fontSize={36} >Rekt Atomicals</DrawerHeader>
                    {/* 
                    <Text p={4} fontSize={'xl'}>
                        <TypingText text={"Welcome in the lab"} />

                    </Text> */}

                    <Text p={4} fontSize={'sm'}>
                        Explore our avant-garde NFT collections and join the Rekt Atomicals scientists !
                    </Text>

                    <DrawerBody
                        display={'flex'}
                        flexDirection={'column'}
                        justifyContent={'center'}
                    >
                        <ChakraLink
                            as={Link}
                            to="/"
                            color="white"
                            _hover={{ color: 'orange.300' }}
                            onClick={closeDrawerAndLink}
                        >
                            <Text>
                                <ChevronRightIcon /> Home
                            </Text>
                        </ChakraLink>
                        <ChakraLink
                            as={Link}
                            to="/token"
                            color="white"
                            _hover={{ color: 'greenyellow' }}
                            onClick={closeDrawerAndLink}
                        >
                            <Text>
                                <ChevronRightIcon /> $REKT
                            </Text>
                        </ChakraLink>
                        <ChakraLink
                            as={Link}
                            to="/xcss"
                            color="white"
                            _hover={{ color: 'blue.300' }}
                            onClick={closeDrawerAndLink}
                        >
                            <Text>
                                <ChevronRightIcon /> #XCSS
                            </Text>
                        </ChakraLink>
                        <ChakraLink
                            as={Link}
                            to="/scientists"
                            color="white"
                            _hover={{ color: 'yellow.300' }}
                            onClick={closeDrawerAndLink}
                        >
                            <Text>
                                <ChevronRightIcon /> scientists
                            </Text>
                        </ChakraLink>
                        {/*   <ChakraLink
                            as={Link}
                            to="/collec"
                            color="white"
                            _hover={{ color: 'purple.300' }}
                            onClick={closeDrawerAndLink}
                        >
                            <Text>
                                <ChevronRightIcon /> collec
                            </Text>
                        </ChakraLink> */}
                        {/* <ChakraLink
                            as={Link}
                            to="/container"
                            color="white"
                            _hover={{ color: 'yellow.300' }}
                            onClick={closeDrawerAndLink}
                        >
                            <Text>
                                <ChevronRightIcon /> container
                            </Text>
                        </ChakraLink>
                        <ChakraLink
                            as={Link}
                            to="/pill"
                            color="white"
                            _hover={{ color: 'yellow.300' }}
                            onClick={closeDrawerAndLink}
                        >
                            <Text>
                                <ChevronRightIcon /> BASED PILL
                            </Text>
                        </ChakraLink> */}

                    </DrawerBody>

                    <CloseButton
                        w="100%"
                        h={"4rem"}
                        onClick={closeDrawerAndLink}
                        color="gray.400"
                        bg={"gray.900"}
                        _hover={{ color: 'red.400' }}
                    />
                </Box>
            </DrawerOverlay>
        </Drawer>
    );
}

export default NavigationDrawer;
