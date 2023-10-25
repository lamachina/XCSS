import React, { useEffect, useState } from 'react';
import { Text } from '@chakra-ui/react';

const TypingText = ({ sentences, colors }) => {
    const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState('');

    useEffect(() => {
        let currentIndex = 0;
        const sentence = sentences[currentSentenceIndex];
        const interval = setInterval(() => {
            if (currentIndex < sentence.length) {
                setDisplayedText(sentence.substring(0, currentIndex + 1));
                currentIndex++;
            } else {
                clearInterval(interval);
                setTimeout(() => {
                    // Delay before moving to the next sentence
                    setCurrentSentenceIndex((currentSentenceIndex + 1) % sentences.length);
                    setDisplayedText('');
                }, 1000); // Adjust the delay time as needed
            }
        }, 50); // You can adjust the typing speed by changing the interval time.
        return () => clearInterval(interval);
    }, [sentences, currentSentenceIndex]);

    return (
        <Text id='pix' color={colors[currentSentenceIndex]}>
            {displayedText}
        </Text>
    );
};

export default TypingText;
