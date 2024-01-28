import React from 'react';
import { Box, Image, Text, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const nftCollections = [
    {
        id: 1,
        imageUrl: 'https://example.com/collection1.jpg',
        title: 'Collection 1',
        numberOfItems: 10,
    },
    {
        id: 2,
        imageUrl: 'https://example.com/collection2.jpg',
        title: 'Collection 2',
        numberOfItems: 15,
    },
    // Add more collections as needed
];

function Explore() {
    return (
        <Box p={8}>
            <Text fontSize="2xl" fontWeight="bold" mb={4}>
                Explore NFT Collections
            </Text>
            {nftCollections.map((collection) => (
                <Link
                    as={RouterLink}
                    to={`/explore/${collection.id}`}
                    key={collection.id}
                    _hover={{ textDecoration: 'none' }}
                >
                    <Box
                        borderWidth="1px"
                        borderRadius="lg"
                        overflow="hidden"
                        p={4}
                        mb={4}
                        cursor="pointer"
                        transition="transform 0.2s"
                        _hover={{ transform: 'scale(1.05)' }}
                    >
                        <Image src={collection.imageUrl} alt={collection.title} mb={2} />
                        <Text fontSize="lg" fontWeight="semibold">
                            {collection.title}
                        </Text>
                        <Text color="gray.500">{`${collection.numberOfItems} items`}</Text>
                    </Box>
                </Link>
            ))}
        </Box>
    );
}

export default Explore;
