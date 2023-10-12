import { Button, Divider, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Flex, Progress, Stack, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { Buffer } from 'buffer';
import axios from 'axios';
import { StarIcon } from '@chakra-ui/icons';
import ItemDetails from './ItemDetails';

function hexToDataURL(hexString, mimeType = 'image/png') {
    const bytes = Buffer.from(hexString, 'hex');
    const base64 = bytes.toString('base64');
    if (bytes.length < 2048) {
        return '';
    }
    return `data:${mimeType};base64,${base64}`;
}

function DataFetcher() {
    const [finalData, setFinalData] = useState([]);
    const [pageNumber, setPageNumber] = useState(0);
    const [progress, setProgress] = useState(0);
    const [selectedItem, setSelectedItem] = useState(null); // To store the selected item
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    // Function to open the drawer for the selected item
    const openDrawer = (item) => {
        setSelectedItem(item);
        setIsDrawerOpen(true);
    };

    // Function to close the drawer
    const closeDrawer = () => {
        setSelectedItem(null);
        setIsDrawerOpen(false);
    };

    const fetchDataPage = async (pageNumber) => {
        try {
            const offset = pageNumber * 50;
            const response = await fetch(`https://ep.atomicals.xyz/proxy/blockchain.atomicals.list?params=[17000,-${offset},true]&pretty`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();

            const filteredData = data.response.result.filter(item => item.atomical_id.startsWith('808'));

            return filteredData;
        } catch (error) {
            console.error('Error fetching data:', error);
            return [];
        }
    };

    const transformImageUrls = (filteredData) => {
        return filteredData.map(item => {
            const filteredMintData = item.mint_data;
            const imageKey = Object.keys(filteredMintData.fields).find(key => key.endsWith('.jpg') || key.endsWith('.png'));
            const desiredData = filteredMintData.fields[imageKey]?.$b?.$d;
            const hexString = desiredData;
            const imageURL = hexString ? hexToDataURL(hexString, 'image/jpeg') : '';
            return { ...item, imageURL };
        });
    };

    const fetchMultiplePages = async () => {
        const finalDataArray = [];
        for (let page = pageNumber; page < pageNumber + 300; page++) {
            const filteredData = await fetchDataPage(page);
            finalDataArray.push(...filteredData);
            const progressValue = ((page - pageNumber + 1) / 300) * 100;
            setProgress(progressValue);
        }
        const finalDataWithImages = transformImageUrls(finalDataArray);

        const finalDataWithImagesFiltered = finalDataWithImages.filter(item => item.imageURL);

        finalDataWithImagesFiltered.sort((a, b) => a.atomical_number - b.atomical_number);
        setFinalData(finalDataWithImagesFiltered);
        console.log(finalDataWithImagesFiltered);
    };


    return (
        <Flex direction='column' gap={4} justifyContent='center' alignItems='center'>
            {finalData.length < 80 && (
                <><Button size='md' variant='outline' colorScheme='whiteAlpha' onClick={fetchMultiplePages}>Discover</Button><Progress w='100%' value={progress} max={100}></Progress></>)}
            <Flex w='100%' h='100%' flexWrap='wrap' gap={8} justifyContent='center' alignItems='center'>

                {finalData.slice(0, 81).map((item, index) => (
                    <Flex flexDirection='column' key={item.atomical_id} justifyContent='center' alignItems='center' gap={3}>
                        {item.imageURL && (
                            <>
                                {/*   <Text color='whiteAlpha.800'>
                                    Index: {index}
                                </Text>
                                <Text color='whiteAlpha.800'>
                                    {item.atomical_id}
                                </Text> */}
                                <Text color='whiteAlpha.800'>
                                    #{item.atomical_number}
                                </Text>
                                {/* <Text color='whiteAlpha.800'>
                                    {item.$bitwork.bitworkc}
                                </Text> */}
                                {/* Add conditional rendering for the icon and text */}
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
                                {/* You can add more conditions as needed */}
                                <a onClick={() => openDrawer(item)}>
                                    <img src={item.imageURL} width={"144px"} height={"144px"} />

                                </a>


                                <Divider />
                            </>
                        )}
                    </Flex>
                ))}
            </Flex>
            <Drawer isOpen={isDrawerOpen} placement="right" onClose={closeDrawer} >
                <DrawerOverlay>
                    <DrawerContent bg='whiteAlpha.900'>
                        <DrawerCloseButton />
                        <DrawerHeader color='blackAlpha.900'>About XCSS</DrawerHeader>
                        <DrawerBody color='blackAlpha.900'>
                            {selectedItem && (
                                <ItemDetails item={selectedItem} />
                            )}
                        </DrawerBody>
                    </DrawerContent>
                </DrawerOverlay>
            </Drawer>
        </Flex >
    );
}

export default DataFetcher;
