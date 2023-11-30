import { Flex } from '@chakra-ui/react';
import React, { useState } from 'react';

const LayeredSVGComponent = ({ categories }) => {
    // Initialize currentLayers for each category
    const [currentLayers, setCurrentLayers] = useState(categories.map(() => 0));

    const selectLayer = (categoryIndex, layerIndex) => {
        setCurrentLayers((prevLayers) => {
            const newLayers = [...prevLayers];
            newLayers[categoryIndex] = layerIndex;
            return newLayers;
        });
    };

    return (
        <Flex gap={2}>
            {categories.map((category, categoryIndex) => (
                <Flex key={categoryIndex} display="flex" flexDirection={'row'}>
                    <select
                        value={currentLayers[categoryIndex]}
                        onChange={(e) => selectLayer(categoryIndex, parseInt(e.target.value))}
                        style={{
                            background: 'black',
                            color: 'white',
                            border: '1px solid white',
                            padding: '5px',
                            borderRadius: '5px',
                        }}
                    >
                        {category.map((_, layerIndex) => (
                            <option key={layerIndex} value={layerIndex}>
                                Layer {layerIndex}
                            </option>
                        ))}
                    </select>
                    {category.map((svg, layerIndex) => (
                        <div
                            key={layerIndex}
                            style={{
                                display: layerIndex === currentLayers[categoryIndex] ? 'block' : 'none',
                                position: 'absolute',
                                top: "calc(50% + 200px)",
                                left: "calc(50% - 200px)",
                                width: '400px',
                                height: '400px',
                            }}
                        >
                            <img src={svg} alt={`Category ${categoryIndex} - Layer ${layerIndex}`} />
                        </div>
                    ))}
                </Flex>
            ))}
        </Flex>
    );
};

export default LayeredSVGComponent;
