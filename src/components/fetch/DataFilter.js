import { useState } from 'react';
import {
    Button,
    Divider,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerHeader,
    DrawerOverlay,
    Flex,
    Radio,
    RadioGroup,
    Stack,
    Text,
} from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';

function DataFetcher({ data }) {
    const [filteredData, setFilteredData] = useState(data);
    const [selectedItem, setSelectedItem] = useState(null);
    const [selectedBitwork, setSelectedBitwork] = useState(''); // State to store the selected bitwork value

    const openDrawer = (item) => {
        setSelectedItem(item);
    };

    const applyFilter = () => {
        const filteredItems = data.filter((item) => {
            // Check if the selectedBitwork matches the item's bitwork value.
            return item.$bitwork?.bitworkc === selectedBitwork;
        });
        setFilteredData(filteredItems);
    };

    const clearFilter = () => {
        setFilteredData(data);
        setSelectedBitwork(''); // Clear the selected bitwork value
    };

    return (
        <Flex direction="column">
            <Stack>

                <RadioGroup value={selectedBitwork} onChange={setSelectedBitwork} color={'whiteAlpha.800'}>
                    <Stack direction="row">
                        <Radio value="80">80</Radio>
                        <Radio value="808">808</Radio>
                        <Radio value="8080">8080</Radio>
                        <Radio value="80808">80808</Radio>
                    </Stack>
                </RadioGroup>
                <Button size="sm" variant="outline" colorScheme="whiteAlpha" onClick={applyFilter}>
                    Apply Filter
                </Button>
                <Button size="sm" variant="outline" colorScheme="whiteAlpha" onClick={clearFilter}>
                    Clear Filter
                </Button>
            </Stack>

            {/* Display the filtered data */}
            <Stack display={'flex'} flexDirection='row' flexWrap={'wrap'} justifyContent={'center'} gap={4}>

                {filteredData.slice(0, 83).map((item, index) => (
                    <Flex key={item.atomical_id} direction="column" color={'whiteAlpha.700'} gap={2}>
                        <Text>#{item.atomical_number}</Text>
                        {item.$bitwork.bitworkc === "808" && (
                            <Stack direction='row' alignItems='center'>
                                <StarIcon color='yellow.500' />
                                <Text color='whiteAlpha.800'>Common</Text>
                            </Stack>
                        )}
                        {item.$bitwork.bitworkc === "80" && (
                            <Stack direction='row' alignItems='center'>
                                <StarIcon color='whiteAlpha.500' />
                                <Text color='whiteAlpha.800'>Novice</Text>
                            </Stack>
                        )}
                        {item.$bitwork.bitworkc === "8080" && (
                            <Stack direction='row' alignItems='center'>
                                <StarIcon color='blue.500' />
                                <Text color='whiteAlpha.800'>Rare</Text>
                            </Stack>
                        )}
                        {item.$bitwork.bitworkc === "80808" && (
                            <Stack direction='row' alignItems='center'>
                                <StarIcon color='orange.400' />
                                <Text color='whiteAlpha.800'>Legendary</Text>
                            </Stack>
                        )}
                        {/* Add more item details here */}
                        <a onClick={() => openDrawer(item)}>
                            <img src={item.imageURL} width="144px" height="144px" />
                        </a>
                        <Divider />
                    </Flex>
                ))}
            </Stack>

            {/* Add the Drawer component and other UI elements here */}
        </Flex>
    );
}

export default DataFetcher;
