import { useEffect, useState } from 'react';
import { Box, Text, Center, Spinner, VStack, Flex } from '@chakra-ui/react';

const Gang = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://ep.atomicals.xyz/proxy/blockchain.atomicals.get_realm_info?params=["gang"]&pretty');
                const result = await response.json();
                setData(result.response.result);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    return (
        <Center>
            {loading ? (
                <Spinner size="xl" />
            ) : (
                <VStack align="center" spacing={4}>

                    <Text color={'blue.300'} id='pix' fontSize={'5xl'}>
                        +{data.found_full_realm_name}
                    </Text>
                    <Text >
                        Atomical ID:
                    </Text>
                    <Text id='pix' fontWeight="bold">
                        Atomical ID: {data.atomical_id}
                    </Text>
                    <Text>
                        Nearest Parent Realm Subrealm Mint Rules:
                    </Text>
                    <Flex wrap={'wrap'} justifyContent={'center'}>
                        {data.nearest_parent_realm_subrealm_mint_rules.current_height_rules.map((rule, index) => (
                            <Box key={index} borderWidth="1px" borderRadius="lg" p={4} m={2} >
                                <Text fontWeight="bold">{rule.p}</Text>
                                {rule.bitworkc &&
                                    <Text>Bitworkc: {rule.bitworkc}</Text>
                                }

                                {/* Ajoutez d'autres champs que vous souhaitez afficher pour chaque règle */}
                            </Box>
                        ))}
                    </Flex>
                </VStack>
            )}
        </Center>
    );
};

export default Gang;
