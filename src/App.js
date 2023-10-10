import React from 'react';
import { Box, Container, Flex, useBreakpointValue } from '@chakra-ui/react';
import { Fade } from '@chakra-ui/transition';
import CardSlider from './components/Cards/CardSlider';
import data from './data/data';

const App = () => {
  const fontSize = useBreakpointValue({ base: "12px", md: "16px", lg: "24px" });

  return (
    <Flex direction="column" alignItems="center" justifyContent="center" minH="100vh" bg="black">
      <Container maxW="container.xl" p={4}>
        <Fade in={true}>
          <Box borderRadius="md" fontSize={fontSize} w="full" boxShadow="lg" p={5} bg="black" >
            <CardSlider dataSet={data} />
          </Box>
        </Fade>
      </Container>
    </Flex>
  );
};

export default App;
