import React, { useState } from 'react';
import { Box, Select, Image, Flex, Heading, Text } from '@chakra-ui/react';

const FilterComponent = ({ metadataList }) => {
    const [selectedAttributes, setSelectedAttributes] = useState({});

    const handleFilterChange = (traitType, value) => {
        if (value === '') {
            // If the selected value is the default option, reset the state for all traits
            setSelectedAttributes({});
        } else {
            // Otherwise, update the state for the specific trait
            setSelectedAttributes({
                ...selectedAttributes,
                [traitType]: value,
            });
        }
    };

    const getOptions = (traitType) => {
        const uniqueValues = new Set(metadataList.flatMap(item => item.attributes
            .filter(attr => attr.trait_type === traitType)
            .map(attr => attr.value)));

        return Array.from(uniqueValues);
    };

    return (
        <Box display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={'column'} >
            <Heading fontSize={'xxx-large'} id='pix' p={'2rem'}>#SCIENTISTS</Heading>
            <Box w={{ base: 'auto', md: '100%' }} display={'flex'} flexDirection={{ base: 'column', md: 'row' }} gap={'2rem'}>
                <Box mb={4} w={'13rem'}>
                    <Select
                        placeholder="Select Background"
                        onChange={(e) => handleFilterChange('Background', e.target.value)}
                        style={{ backgroundColor: 'black', color: 'grey' }} // Add your custom styles here
                    >
                        <option value="">All Backgrounds</option>
                        {getOptions('Background').map((option, index) => (
                            <option key={index} value={option}>{option}</option>
                        ))}
                    </Select>
                </Box>
                <Box mb={4} w={'13rem'}>
                    <Select
                        placeholder="Select Type"
                        onChange={(e) => handleFilterChange('Type', e.target.value)}
                        style={{ backgroundColor: 'black', color: 'grey' }} // Add your custom styles here
                    >
                        <option value="">All Types</option>
                        {getOptions('Type').map((option, index) => (
                            <option key={index} value={option}>{option}</option>
                        ))}
                    </Select>
                </Box>
                <Box mb={4} w={'13rem'}>
                    <Select
                        placeholder="Select Bonus"
                        onChange={(e) => handleFilterChange('Bonus', e.target.value)}
                        style={{ backgroundColor: 'black', color: 'grey' }} // Add your custom styles here
                    >
                        <option value="">All Bonuses</option>
                        {getOptions('Bonus').map((option, index) => (
                            <option key={index} value={option}>{option}</option>
                        ))}
                    </Select>
                </Box>
            </Box>

            <Flex flexWrap={'wrap'} gap={'1rem'} justifyContent={'center'}>


                {metadataList
                    .filter((item) => {
                        return Object.entries(selectedAttributes).every(([traitType, value]) => {
                            if (value === '') {
                                return true; // Include all items if the trait is not selected
                            }
                            return item.attributes.some((attr) => attr.trait_type === traitType && attr.value === value);
                        });
                    })
                    .map((item) => (
                        <Box boxShadow="lg" position="relative">
                            <Box>
                                <Flex
                                    direction="column"
                                    align="center"
                                    justify="center"
                                    h="100%"
                                    position="relative"
                                    _hover={{
                                        '.hd-image': { opacity: 1 }, // Show HD image on hover
                                    }}
                                >
                                    <Image
                                        className="ld-image"
                                        src={`scientists_ld/${item.name}.png`}
                                        alt={`NFT ${item.name}`}
                                    />
                                    <Image
                                        className="hd-image"
                                        src={`scientists_hd/${item.name}.png`}
                                        alt={`NFT ${item.name}`}
                                        opacity="0" // Initially hide HD image
                                        position="absolute"
                                        top="0"
                                        left="0"
                                    />

                                </Flex>
                                <Text
                                    bg="rgba(0, 0, 0, 0.6)"
                                    p="2"
                                    w="100%"
                                    textAlign="center"
                                    fontWeight="bold"
                                >
                                    {item.name}
                                </Text>
                            </Box>
                        </Box>
                    ))}


            </Flex>

        </Box>
    );
};

export default FilterComponent;
