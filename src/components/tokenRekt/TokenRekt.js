import React, { useEffect, useState } from 'react';
import { Box, Text, Flex, VStack, Divider, Image, List, ListItem, StackDivider, Stack } from '@chakra-ui/react';

const TokenRekt = () => {
    const [fetchedData, setFetchedData] = useState(null);

    useEffect(() => {
        fetch('https://ep.atomicals.xyz/proxy/blockchain.atomicals.get?params=[%229ba6f71c6176ef7dab6751e4b71f6e6d13694d65134935bb275d89d1f0e9fdb2i0%22]&pretty')
            .then((response) => response.json())
            .then((data) => {
                const result = data.success ? data.response.result : null;
                setFetchedData(result);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    if (!fetchedData) {
        return null; // Return null if data is not available yet
    }

    const {
        atomical_id,
        atomical_number,
        type,
        confirmed,
        mint_info,
        subtype,
        $max_supply,
        $max_mints,
        $ticker_candidates,
        $request_ticker_status,
        $request_ticker,
        $ticker,
        mint_data,
    } = fetchedData;
    return (

        <Box p={4} borderRadius="md" boxShadow="lg" width="90%">
            <Stack display='flex' flexDirection={'row'} justifyContent={'space-between'}>
                <Text id='pix' fontSize="lg" color={'greenyellow'} fontWeight="bold">
                    $REKT Information
                </Text>
                <Text id='pix' fontSize="lg">#{atomical_number}</Text>

            </Stack>

            <Divider my={2} borderColor="gray.600" />
            <Text fontSize="sm">Atomical ID: {atomical_id}</Text>
            <Text fontSize="sm">Type: {type}</Text>
            <Text fontSize="sm">Confirmed: {confirmed ? 'Yes' : 'No'}</Text>
            <Divider my={2} borderColor="gray.600" />
            <Text fontSize="lg" fontWeight="bold">
                Mint Information
            </Text>
            <Text fontSize="sm">Max Supply: {$max_supply}</Text>
            <Text fontSize="sm">Max Mints: {$max_mints}</Text>
            <Divider my={2} borderColor="gray.600" />
            <Text fontSize="lg" fontWeight="bold">
                Ticker Information
            </Text>
            <Text fontSize="sm">Request Ticker: {$request_ticker}</Text>
            <Text fontSize="sm">Ticker: {$ticker}</Text>
            <Text fontSize="sm">Subtype: {subtype}</Text>

            <Divider my={2} borderColor="gray.600" />
            <Text fontSize="lg" fontWeight="bold">
                Ticker Candidates
            </Text>
            <List spacing={2} divider={<StackDivider borderColor="gray.600" />}>
                {$ticker_candidates &&
                    $ticker_candidates.map((candidate, index) => (
                        <ListItem key={index}>
                            <Text fontSize="sm">TX ID: {candidate.txid}</Text>
                            <Text fontSize="sm">Commit Height: {candidate.commit_height}</Text>
                            <Text fontSize="sm">Reveal Location Height: {candidate.reveal_location_height}</Text>
                        </ListItem>
                    ))}
            </List>
            <Divider my={2} borderColor="gray.600" />
            <Text fontSize="lg" fontWeight="bold">
                Request Ticker Status
            </Text>
            <Text fontSize="sm">Status: {$request_ticker_status.status}</Text>
            <Text fontSize="sm">Note: {$request_ticker_status.note}</Text>
        </Box>
    );
};

export default TokenRekt;
