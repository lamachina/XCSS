import React, { useEffect, useState } from 'react';
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Box, Text } from '@chakra-ui/react';

function TokenList() {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [totalSupply, setTotalSupply] = useState('');
    const [locationCounts, setLocationCounts] = useState('');

    useEffect(() => {
        fetch('https://ep.atomicals.xyz/proxy/blockchain.atomicals.find_tickers')
            .then((response) => response.json())
            .then((data) => {
                const result = data.success ? data.response.result : [];
                setItems(result);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
    }, []);

    const handleItemClick = (atomicalId) => {
        fetch(`https://ep.atomicals.xyz/proxy/blockchain.atomicals.get_location?params=["${atomicalId}"]&pretty`)
            .then((response) => response.json())
            .then((data) => {
                console.log('Fetched data for Atomical ID:', atomicalId, data);
                setTotalSupply(data.response.result.$max_mints)
                setLocationCounts(data.response.result.location_counts)
                // Handle the fetched data as needed
            })
            .catch((error) => {
                console.error('Error fetching data for Atomical ID:', atomicalId, error);
            });
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (


        <Accordion w={'90%'} defaultIndex={[]} allowToggle>
            {items.map((item, index) => (
                <AccordionItem key={index}>
                    <h2>
                        <AccordionButton onClick={() => handleItemClick(item.atomical_id)}>
                            <Box flex="1" textAlign="left">
                                {item.ticker}
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel>
                        <Text>Total Supply: {totalSupply}</Text>
                        <Text>Current Location Counts: {locationCounts}</Text>
                    </AccordionPanel>
                </AccordionItem>
            ))}
        </Accordion>
    );
}

export default TokenList;
