import React, { useState, useEffect } from 'react';
import { Box, Fade, Heading, Stack, Text } from '@chakra-ui/react';
import { ArrowDownIcon } from '@chakra-ui/icons';
import TypingText from '../styli/TypingText';

const Home = () => {

    return (
        <Fade in={true}>

            <Box p={6}
                width="100%"
                height="100%"
                display="flex"
                flexDir="column"
                justifyContent="center"
                alignItems="center"
                transition="opacity 0.7s"
                gap={4}
                color={'whiteAlpha.800'}
            >

                <Text id='pix' fontSize={'2xl'} fontWeight={700}>
                    REKT ATOMICALS SCIENTISTS.

                </Text>
                <Text fontSize={'md'} color={'grey'}>
                    Dangerous experiments, explosive results.
                </Text>

                <Stack minH={6}>
                    <TypingText
                        sentences={[
                            "Danger.",
                            "Safety First.",
                            "Rekt Exposure Risk.",
                            "Protective Gear Mandatory.",
                            "Keep Your Distance.",
                            "Hazardous Experiments.",
                            "Do not get rekt."
                        ]}
                        colors={[
                            'whiteAlpha.900',
                            'whiteAlpha.800',
                            'red.500',
                            'blue.500',
                            'purple.500',
                            'yellow.300',
                            'orange.300',
                        ]}
                    />
                </Stack>
                <Stack minH={6}>
                    <TypingText
                        sentences={[
                            "Get $rekt.",
                            "Rekt Exposure Risk.",
                            "Protective Gear Mandatory.",
                            "Keep Your Distance.",
                            "Hazardous Experiments.",
                            "Do not get rekt.",
                            "Safety First.",

                        ]}
                        colors={[
                            'orange.300',
                            'greenyellow',
                            'whiteAlpha.800',
                            'red.500',
                            'blue.500',
                            'purple.500',
                            'yellow.300',
                        ]}
                    />
                </Stack>
                <Stack minH={6}>
                    <TypingText
                        sentences={[
                            "Get $rekt.",
                            "Backed by sats.",
                            "When rekt?",
                            "Kek Algorithm.",
                            "Atomicas Era.",
                            "No rekt allowed.",
                            "Fuck ordinals.",
                        ]}
                        colors={[
                            'red.500',
                            'blue.500',
                            'orange.300',
                            'greenyellow',
                            'whiteAlpha.800',
                            'purple.500',
                            'yellow.300',
                        ]}
                    />
                </Stack>
                <Stack minH={6}>
                    <TypingText
                        sentences={[
                            "Get $rekt.",
                            "Protective Gear Mandatory.",
                            "Keep Your Distance.",
                            "Hazardous Experiments.",
                            "Do not get rekt.",
                            "Safety First.",
                            "Rekt Exposure Risk.",


                        ]}
                        colors={[
                            'yellow.300',
                            'orange.300',
                            'greenyellow',
                            'whiteAlpha.800',
                            'red.500',
                            'blue.500',
                            'purple.500',
                        ]}
                    />
                </Stack>
                <Stack minH={6}>
                    <TypingText
                        sentences={[
                            "Get $rekt.",
                            "Keep Your Distance.",
                            "Hazardous Experiments.",
                            "Do not get rekt.",
                            "Safety First.",
                            "Rekt Exposure Risk.",
                            "Protective Gear Mandatory.",
                        ]}
                        colors={[
                            'purple.500',
                            'yellow.300',
                            'orange.300',
                            'greenyellow',
                            'whiteAlpha.800',
                            'red.500',
                            'blue.500',
                        ]}
                    />
                </Stack>
                <Stack minH={6}>
                    <TypingText
                        sentences={[
                            "Get $rekt.",
                            "Do not get rekt.",
                            "Get $rekt.",
                        ]}
                        colors={[
                            'whiteAlpha.800',
                            'purple.500',
                            'greenyellow',

                        ]}
                    />
                </Stack>
                <Stack minH={6}>
                    <TypingText
                        sentences={[
                            "Get $rekt.",
                            "Atomicas Era.",
                            "No rekt allowed.",
                            "Fuck ordinals.",
                            "Backed by sats.",
                            "When rekt?",
                            "Kek Algorithm.",
                        ]}
                        colors={[
                            'greenyellow',
                            'orange.300',
                            'red.500',
                            'purple.500',
                            'greenyellow',
                            'whiteAlpha.800',
                            'yellow.300',
                        ]}
                    />
                </Stack>
                <Stack minH={6}>
                    <TypingText
                        sentences={[
                            "Get $rekt.",
                            "Hazardous Experiments.",
                            "Do not get rekt.",
                            "Safety First.",
                            "Rekt Exposure Risk.",
                            "Protective Gear Mandatory.",
                            "Keep Your Distance.",

                        ]}
                        colors={[
                            'blue.500',
                            'purple.500',
                            'yellow.300',
                            'orange.300',
                            'greenyellow',
                            'whiteAlpha.800',
                            'red.500',
                        ]}
                    />
                </Stack>
                <Stack minH={6}>
                    <TypingText
                        sentences={[
                            "Get $rekt.",
                            "Do not get rekt.",
                            "Safety First.",
                            "Rekt Exposure Risk.",
                            "Protective Gear Mandatory.",
                            "Keep Your Distance.",
                            "Hazardous Experiments.",
                        ]}
                        colors={[
                            'red.500',
                            'blue.500',
                            'purple.500',
                            'yellow.300',
                            'orange.300',
                            'greenyellow',
                            'whiteAlpha.800',
                        ]}
                    />
                </Stack>

                <Text maxW={'440px'} pt={8} fontSize={'sm'} color={'grey'}>
                    Getting rekt is your own choice. An experiment is not an investment, security, or commitment; it is purely for educational purposes. By engaging with the Rekt Laboratory, you acknowledge and accept these terms.
                </Text>


            </Box>
        </Fade>

    );
};

export default Home;
