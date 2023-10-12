import React from 'react';
import { Box, Text, Container, Flex, Heading, useBreakpointValue } from '@chakra-ui/react';
import { Fade } from '@chakra-ui/transition';
import CardSlider from './components/Cards/CardSlider';
import data from './data/data';
import DataFetcher from './components/fetch/DataFetcher';

const App = () => {
  const fontSize = useBreakpointValue({ base: "12px", md: "16px", lg: "24px" });

  return (
    <Flex direction="column" alignItems="center" justifyContent="center" minH="100vh" bg="black">
      <Container maxW="container.xl" p={4}>
        <Fade in={true}>
          <Box borderRadius="md" fontSize={fontSize} w="full" boxShadow="lg" p={5} bg="black" >
            <Heading color='whiteAlpha.900' py={'4rem'}>XCSS</Heading>

            <DataFetcher />

            {/*  <Text color='whiteAlpha.800'>
              All we had to draw from. <br></br>
              Ode to the tangible moments of reality.<br></br>
              The raw taste for danger.<br></br>
              Pitiful reward.<br></br>
              Indulge in the euphoria of a win suggesting that perhaps, in our relentless pursuit of excess, we might just be bound by some universal moral law. <br></br>
              <br></br>
              Or maybe, it's all just pretentious drivel.
            </Text>

            <Text textAlign='end' py={16} color='whiteAlpha.500' >MINTED OUT</Text> */}

            {/* <CardSlider dataSet={data} /> */}
          </Box>
        </Fade>
      </Container>
    </Flex>
  );
};

export default App;
