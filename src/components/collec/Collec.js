// NFTForm.js
import React, { useState } from 'react';
import {
    ChakraProvider,
    Container,
    VStack,
    Input,
    Textarea,
    Button,
    Select,
    FormControl,
    FormLabel,
    Box,
    CloseButton,
} from '@chakra-ui/react';

const NFTForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        desc: '',
        image: 'atom:btc:id:',
        legal: {
            terms: '',
            license: 'CC',
        },
        links: {
            x: '',
            website: '',
        },
        attrs: [
            {
                name: '',
                type: 'number',
                values: ['', '', ''],
            },
            {
                name: '',
                type: 'string',
                values: ['', '', '', ''],
            },
        ],
        items: {
            0: {
                id: '',
                n: '',
                a: [0, 0],
            },
            1: {
                id: '',
                n: '',
                a: [1, 0],
            },
        },
    });

    const handleInputChange = (field, value) => {
        setFormData({
            ...formData,
            [field]: value,
        });
    };

    const handleAttrInputChange = (index, field, value) => {
        const newAttrs = [...formData.attrs];
        newAttrs[index][field] = value;

        setFormData({
            ...formData,
            attrs: newAttrs,
        });
    };

    const handleItemInputChange = (itemIndex, field, value) => {
        setFormData({
            ...formData,
            items: {
                ...formData.items,
                [itemIndex]: {
                    ...formData.items[itemIndex],
                    [field]: value,
                },
            },
        });
    };

    const handleAddAttr = () => {
        setFormData({
            ...formData,
            attrs: [...formData.attrs, { name: '', type: 'number', values: ['', '', ''] }],
        });
    };

    const handleAddItem = () => {
        const newIndex = Object.keys(formData.items).length;
        setFormData({
            ...formData,
            items: {
                ...formData.items,
                [newIndex]: { id: '', n: '', a: [0, 0] },
            },
        });
    };

    const handleRemoveAttr = (index) => {
        const newAttrs = [...formData.attrs];
        newAttrs.splice(index, 1);

        setFormData({
            ...formData,
            attrs: newAttrs,
        });
    };

    const handleRemoveItem = (itemIndex) => {
        const newItems = { ...formData.items };
        delete newItems[itemIndex];

        setFormData({
            ...formData,
            items: newItems,
        });
    };

    const handleSubmit = () => {
        // Handle form submission logic here
        console.log(formData);
    };

    return (
        <Container p={4} centerContent>
            <VStack spacing={4} align="stretch">
                <Input placeholder="Name" value={formData.name} onChange={(e) => handleInputChange('name', e.target.value)} />
                <Textarea placeholder="Description" value={formData.desc} onChange={(e) => handleInputChange('desc', e.target.value)} />

                <FormControl>
                    <FormLabel>Image</FormLabel>
                    <Input
                        placeholder="atom:btc:id:"
                        value={formData.image}
                        onChange={(e) => handleInputChange('image', e.target.value)}
                    />
                </FormControl>

                {/* Add more input fields for legal, links, etc. as needed */}

                {/* Attributes */}
                {formData.attrs.map((attr, index) => (
                    <Box key={index}>
                        <Input
                            placeholder="Attribute Name"
                            value={attr.name}
                            onChange={(e) => handleAttrInputChange(index, 'name', e.target.value)}
                        />
                        <Select value={attr.type} onChange={(e) => handleAttrInputChange(index, 'type', e.target.value)}>
                            <option value="number">Number</option>
                            <option value="string">String</option>
                            {/* Add more types as needed */}
                        </Select>
                        {attr.type === 'number' ? (
                            <VStack spacing={2}>
                                {attr.values.map((value, valueIndex) => (
                                    <Input
                                        key={valueIndex}
                                        placeholder={`Value ${valueIndex + 1}`}
                                        value={value}
                                        onChange={(e) => handleAttrInputChange(index, 'values', e.target.value)}
                                    />
                                ))}
                            </VStack>
                        ) : (
                            <VStack spacing={2}>
                                {attr.values.map((value, valueIndex) => (
                                    <Input
                                        key={valueIndex}
                                        placeholder={`Value ${valueIndex + 1}`}
                                        value={value}
                                        onChange={(e) => handleAttrInputChange(index, 'values', e.target.value)}
                                    />
                                ))}
                            </VStack>
                        )}
                        <CloseButton onClick={() => handleRemoveAttr(index)} />
                    </Box>
                ))}
                <Button onClick={handleAddAttr}>Add Attribute</Button>

                {/* Items */}
                {Object.keys(formData.items).map((itemIndex) => (
                    <Box key={itemIndex}>
                        <Input
                            placeholder={`Item ${itemIndex + 1} ID`}
                            value={formData.items[itemIndex].id}
                            onChange={(e) => handleItemInputChange(itemIndex, 'id', e.target.value)}
                        />
                        <Input
                            placeholder={`Item ${itemIndex + 1} Name`}
                            value={formData.items[itemIndex].n}
                            onChange={(e) => handleItemInputChange(itemIndex, 'n', e.target.value)}
                        />
                        <VStack spacing={2}>
                            {formData.items[itemIndex].a.map((value, valueIndex) => (
                                <Input
                                    key={valueIndex}
                                    placeholder={`Attribute ${valueIndex + 1}`}
                                    value={value}
                                    onChange={(e) => handleItemInputChange(itemIndex, 'a', e.target.value)}
                                />
                            ))}
                        </VStack>
                        <CloseButton onClick={() => handleRemoveItem(itemIndex)} />
                    </Box>
                ))}
                <Button onClick={handleAddItem}>Add Item</Button>

                <Button colorScheme="teal" onClick={handleSubmit}>
                    Create NFT Collection
                </Button>
            </VStack>
        </Container>
    );
};

export default NFTForm;
