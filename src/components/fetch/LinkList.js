import React from 'react';
import { Box, Text, UnorderedList, ListItem, Link, Flex } from '@chakra-ui/react';

const LinkList = () => {
    const links = [
        { text: 'X', url: 'https://twitter.com/AtomicalsRekt', explanation: 'Follow us @AtomicalsRekt' },
        /*  { text: 'Discord', url: 'https://discord.com', explanation: 'Join our Discord Community' }, */
        { text: 'Atomicals Protocol', url: 'https://atomicals.xyz', explanation: 'Learn about Atomicals Protocol' },
        /*  { text: 'Github', url: 'https://github.com', explanation: 'Explore our GitHub Repository' }, */
    ];

    return (
        <Flex direction={'column'} gap={4} w={'90%'} p={2} h={'300px'}>
            <Text color={'purple.300'} id="pix" fontSize="2xl" fontWeight="bold">
                Links:
            </Text>
            <UnorderedList listStyleType="none">
                {links.map((link, index) => (
                    <ListItem key={index} fontSize="lg" py={2}>
                        <Link color={'greenyellow'} id="pix" href={link.url} target="_blank" rel="noopener noreferrer">
                            {link.text}
                        </Link>
                        <Text as="span" ml={2}>
                            - {link.explanation}
                        </Text>
                    </ListItem>
                ))}
            </UnorderedList>
        </Flex>
    );
};

export default LinkList;
