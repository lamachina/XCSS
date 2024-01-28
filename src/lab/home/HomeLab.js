import React from 'react';
import { Box, Heading, Text, Button, Flex, Link as ChakraLink } from '@chakra-ui/react';
import { ExternalLinkIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';

function HomeLab() {
    const closeDrawerAndLink = () => {
        // Add any logic here to close the drawer if needed
    };

    return (
        <Box p={8}>
            <Heading as="h1" size="xl" id="pix">
                HomeLab
            </Heading>
            <Text mt={4} id="pix">
                Welcome to the Laboratory (Rekt Launchpad for artists). Explore and create amazing art!
            </Text>
            <Flex mt={6} direction="column" alignItems="start">
                <ChakraLink
                    as={Link}
                    to="/explore"
                    colorScheme="teal"
                    _hover={{ color: 'blue.300' }}
                    onClick={closeDrawerAndLink}
                >
                    <Button colorScheme="teal" size="md" mt={2}>
                        Explore
                    </Button>
                </ChakraLink>
                <ChakraLink
                    as={Link}
                    to="/explore/page2"
                    colorScheme="blue"
                    _hover={{ color: 'blue.300' }}
                    onClick={closeDrawerAndLink}
                >
                    <Button colorScheme="blue" size="md" mt={2}>
                        Explore Page 2
                    </Button>
                </ChakraLink>
                <ChakraLink
                    as={Link}
                    to="/explore/page3"
                    colorScheme="green"
                    _hover={{ color: 'blue.300' }}
                    onClick={closeDrawerAndLink}
                >
                    <Button colorScheme="green" size="md" mt={2}>
                        Explore Page 3
                    </Button>
                </ChakraLink>
            </Flex>
            <Flex mt={6} direction="column" alignItems="start">
                <ChakraLink
                    href="https://external-link-1.com"
                    isExternal
                    color="white"
                    _hover={{ color: 'blue.300' }}
                    onClick={closeDrawerAndLink}
                >
                    <Flex alignItems="center">
                        <ExternalLinkIcon mr={2} />
                        <Text>Visit External Link 1</Text>
                    </Flex>
                </ChakraLink>
                <ChakraLink
                    href="https://external-link-2.com"
                    isExternal
                    color="white"
                    _hover={{ color: 'blue.300' }}
                    onClick={closeDrawerAndLink}
                >
                    <Flex alignItems="center">
                        <ExternalLinkIcon mr={2} />
                        <Text>Visit External Link 2</Text>
                    </Flex>
                </ChakraLink>
            </Flex>

        </Box>
    );
}

export default HomeLab;
