import {
    Text,
    VStack,
    Button,
    Box,
    HStack,
} from '@chakra-ui/react';

const DisplayObject = ({ object, currentPage, itemsPerPage, setCurrentPage, imageURL }) => {
    if (!object) {
        return null;
    }

    const getAttributeValue = (attributeName, attributeValue) => {
        // Find the attribute by name
        const attribute = object.attrs.find(attr => attr.name === attributeName);
        if (attribute) {
            // Check if attributeValue is a numeric index
            if (!isNaN(attributeValue) && attributeValue >= 0 && attributeValue < attribute.values.length) {
                return attribute.values[attributeValue];
            } else {
                // If not numeric, return the original value
                return attributeValue;
            }
        }
        // If the attribute is not found, return the original value
        return attributeValue;
    };
    /* 
        const attrsArray = object.attrs.map((attr) => (
            <div key={attr.name}>
                <Text>{attr.name}:</Text>
                <HStack spacing={1}>
                    {attr.values.map((value) => (
                        <Text key={value}>{value}</Text>
                    ))}
                </HStack>
            </div>
        )); */

    const startIdx = (currentPage - 1) * itemsPerPage;
    const endIdx = startIdx + itemsPerPage;

    const itemsArray = Object.entries(object.items)
        .slice(startIdx, endIdx)
        .map(([key, item]) => (
            <div key={key}>
                <Text>{item.n}</Text>
                <Text>{item.id.$d}:</Text>
                <HStack spacing={1}>
                    {item.a.map((attribute, index) => (
                        <Text key={index}>{getAttributeValue(object.attrs[index].name, attribute)}</Text>
                    ))}
                </HStack>
            </div>
        ));

    const totalPages = Math.ceil(Object.keys(object.items).length / itemsPerPage);

    const goToPage = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    return (
        <Box>
            <Text>Name: {object.name}</Text>
            <Text>Description: {object.desc}</Text>
            <VStack spacing={4} align="stretch">
                <Text>Attributes:</Text>
                {/* Your existing code for displaying attributes */}
                <Text>Image: {object.image}</Text>
                {object.image ? <img src={imageURL} alt="Object Image" /> : 'Image Loading...'}
                <Text>Items:</Text>
                {itemsArray}
                <Button colorScheme="teal" onClick={() => goToPage(currentPage - 1)}>Previous Page</Button>
                <Button colorScheme="teal" onClick={() => goToPage(currentPage + 1)}>Next Page</Button>
            </VStack>
        </Box>
    );
};

export default DisplayObject;