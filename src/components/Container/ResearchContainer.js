import React, { useState } from 'react';
import {
    Box,
    Text,
    Input,
    Button,
    VStack,
    Flex,
} from '@chakra-ui/react';
import DisplayObject from './displayObject';

const ResearchContainer = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResult, setSearchResult] = useState(null);
    const [stepResult, setStepResult] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 4;

    const handleSearch = () => {
        // Implement your search logic here
        // Here we simulate a fetch using a placeholder URL.
        fetch(`https://ep.atomicals.xyz/proxy/blockchain.atomicals.find_containers?params=["${searchTerm}"]&pretty`)
            .then((response) => response.json())
            .then((data) => {
                const result = data.success ? data.response.result[0] : null;
                setSearchResult(result);
                setStepResult(null); // Reset step result
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    };

    const handleContinue = () => {
        if (searchResult) {
            // Fetch the step data
            fetch(`https://ep.atomicals.xyz/proxy/blockchain.atomicals.get_state?params=["${searchResult.atomical_id}"]`)
                .then((response) => response.json())
                .then((data) => {
                    const result = data.success ? data.response.result : null;
                    setStepResult(result);
                    console.log(result); // Use the updated result here
                })
                .catch((error) => {
                    console.error('Error fetching step data:', error);
                });
        }
    };


    return (
        <Box p={4} borderRadius="md" boxShadow="lg" width="90%">
            <Text fontSize="lg" fontWeight="bold">
                Research Container
            </Text>
            <VStack spacing={4} align="stretch">
                <Input
                    type="text"
                    placeholder="Enter your container name"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Button
                    colorScheme="teal"
                    onClick={handleSearch}
                >
                    Start Searching
                </Button>
                {searchResult && (
                    <Box>
                        <Text>Atomical ID: {searchResult.atomical_id}</Text>
                        <Text>Collection: {searchResult.collection}</Text>
                        <Button
                            colorScheme="teal"
                            onClick={handleContinue}
                        >
                            Continue
                        </Button>
                    </Box>
                )}

                {stepResult && (
                    <DisplayObject
                        object={stepResult.state.latest}
                        currentPage={currentPage}
                        itemsPerPage={itemsPerPage}
                        setCurrentPage={setCurrentPage}
                    />
                )}

            </VStack>
        </Box>
    );
};

export default ResearchContainer;

