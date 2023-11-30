import React from 'react';
import { Box, Text, Button, SimpleGrid, Center, ChakraProvider } from '@chakra-ui/react';

function MintPage() {
    return (
        <ChakraProvider>
            <Box p={6}>
                <Text id="pix" fontSize="3xl" fontWeight="bold">
                    Mint Your NFTs
                </Text>
                <Text id="pix" fontSize="lg" color="gray.500" mt={2}>
                    Get started with minting your unique NFTs today!
                </Text>

                <SimpleGrid columns={1} spacing={4} mt={6}>
                    {/* Image carousel */}
                    <Center>
                        <Box id="pix" w="100%" h="300px" bg="gray.200">
                            {/* Your image carousel or banner can be placed here */}
                            {/* You can use Chakra UI's components to build a carousel */}
                        </Box>
                    </Center>
                </SimpleGrid>

                <Text id="pix" fontSize="lg" mt={6}>
                    Showcase your creations to the world.
                </Text>

                <Button id="pix" colorScheme="teal" size="lg" mt={4}>
                    Mint Now
                </Button>
            </Box>
        </ChakraProvider>
    );
}

export default MintPage;
