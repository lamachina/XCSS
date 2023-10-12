import { Box, Image, Text, Button, VStack, Heading } from "@chakra-ui/react";

const CardXcss = ({ data }) => {
    const handleRightClick = (event) => {
        event.preventDefault();
        alert("Download the compressed image using the download button.");
    };
    const handleDownloadClick = () => {
        // Create an anchor element
        const link = document.createElement("a");
        link.href = data.imageDL; // Set the image URL as the href
        link.download = "xcss"; // Set the download filename

        // Trigger a click event on the anchor element to initiate the download
        link.click();
    };

    return (
        <Box display='flex' alignItems='center' justifyContent='center' flexDirection='column' overflow="hidden" p={4}>
            <Image maxH='550px' src={data.imageURL} alt={data.title} objectFit="cover" mb={4} onContextMenu={handleRightClick} />
            <VStack spacing={2} alignItems="start">
                <Text color='whiteAlpha.900'>Design: <strong>{data.design}</strong></Text>
                <Text color='whiteAlpha.900'>Colors:<strong> {data.colors}</strong></Text>
            </VStack>
            <Button bg='whiteAlpha.300' mt={4} colorScheme="whiteAlpha" isFullWidth onClick={handleDownloadClick}>
                Download
            </Button>
        </Box>
    );
};

export default CardXcss