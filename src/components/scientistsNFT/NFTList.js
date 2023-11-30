// nftlist.jsx

import React from 'react';
import { Box, Flex, Image } from '@chakra-ui/react';

const NFTList = () => {
    const downloadJSON = async (index) => {
        const jsonFileName = `item-${index.toString().padStart(3, '0')}.json`;

        try {
            const response = await fetch(`/sc_json_items/${jsonFileName}`);
            const jsonData = await response.json();

            // Perform the logic to download the JSON file
            console.log(`Downloading JSON file: ${jsonFileName}`);
            // Simulate downloading by creating a Blob and initiating a download
            const blob = new Blob([JSON.stringify(jsonData)], { type: 'application/json' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = jsonFileName;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        } catch (error) {
            console.error('Error fetching or parsing JSON:', error);
        }
    };

    // Assuming you have 331 images starting from 000.png to 330.png
    const images = Array.from({ length: 400 }, (_, index) => `/scientists_hd/${index.toString().padStart(3, '0')}.png`);

    return (
        <Flex wrap={'wrap'} justifyContent={'center'} gap={3} pt={8} pb={8}>
            {images.map((image, index) => (
                <Box key={index} onClick={() => downloadJSON(index)}>
                    <Image src={image} alt={`Image ${index}`} boxSize="144px" objectFit="cover" cursor="pointer" />
                </Box>
            ))}
        </Flex>
    );
};

export default NFTList;
