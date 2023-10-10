import { Box, Image, Text, Button, VStack, Heading } from "@chakra-ui/react";

const CardXcss = ({ data }) => {
    const handleRightClick = (event) => {
        event.preventDefault();
        alert("Download the compressed image using the download button.");
    };
    return (
        <Box display='flex' alignItems='center' justifyContent='center' flexDirection='column' overflow="hidden" p={4}>
            <Heading color='whiteAlpha.900' size="md" mb={2}>
                {data.title}
            </Heading>
            <Image maxH='550px' src={data.imageURL} alt={data.title} objectFit="cover" mb={4} onContextMenu={handleRightClick} />
            <VStack spacing={2} alignItems="start">
                <Text color='whiteAlpha.900'><strong>Design:</strong> {data.design}</Text>
                <Text color='whiteAlpha.900'><strong>Colors:</strong> {data.colors}</Text>
            </VStack>
            <Button bg='whiteAlpha.300' mt={4} colorScheme="blue" isFullWidth>
                Download
            </Button>
        </Box>
    );
};

export default CardXcss