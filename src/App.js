import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import {
  Box,
  Avatar,
  IconButton,
  Flex,
  ChakraProvider,
  extendTheme,
  CSSReset,
  Center,
  Text,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import './App.css';
import DataFetcher from './components/fetch/DataFetcher';
import NavigationDrawer from './NavigationDrawer';
import TokenList from './components/fetch/TokenList';
import Home from './components/Home/Home';
import TokenRekt from './components/tokenRekt/TokenRekt';
import LinkList from './components/fetch/LinkList';
import ResearchContainer from './components/Container/ResearchContainer';
import LayeredSVGComponent from './components/fetch/LayeredSVGComponent';
import MintPage from './components/Scientists/MintPage';
import Collec from './components/collec/Collec';
import NFTForm from './components/collec/Collec';
import NFTList from './components/scientistsNFT/NFTList';

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: 'black',
        color: 'white',
      },
    },
  },
});


const categories = [
  [
    '/pills/IMG_0059.svg',
    '/pills/IMG_0060.svg',
    '/pills/IMG_0061.svg',
    '/pills/IMG_0062.svg',
    '/pills/IMG_0063.svg',
    '/pills/IMG_0064.svg',
    '/pills/IMG_0065.svg',
    '/pills/IMG_0066.svg',
    '/pills/IMG_0067.svg',
    // Add all background SVGs here
  ],
  [
    '/pills/IMG_0068.svg',
    '/pills/IMG_0069.svg',
    '/pills/IMG_0070.svg',
    '/pills/IMG_0071.svg',
    '/pills/IMG_0072.svg',
    '/pills/IMG_0073.svg',
    '/pills/IMG_0074.svg',
    '/pills/IMG_0075.svg',
    // Add all blur SVGs here
  ],
  [
    '/pills/IMG_0076.svg',
    '/pills/IMG_0077.svg',
    '/pills/IMG_0078.svg',
    '/pills/IMG_0079.svg',
    '/pills/IMG_0080.svg',
  ],
  [
    '/pills/IMG_0080.svg',
    '/pills/IMG_0081.svg',
    '/pills/IMG_0082.svg',
    '/pills/IMG_0083.svg',
    '/pills/IMG_0084.svg',
    '/pills/IMG_0085.svg',
    '/pills/IMG_0086.svg',
    '/pills/IMG_0087.svg',
    '/pills/IMG_0088.svg',
    // Add all coin SVGs here
  ],
  [
    '/pills/IMG_0080.svg',
    '/pills/IMG_0081.svg',
    '/pills/IMG_0082.svg',
    '/pills/IMG_0083.svg',
    '/pills/IMG_0084.svg',
    '/pills/IMG_0085.svg',
    '/pills/IMG_0086.svg',
    '/pills/IMG_0087.svg',
    '/pills/IMG_0088.svg',
    // Add all coin SVGs here
  ],
];


function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Flex direction="column">
          <Flex bg="black" p={4} alignItems="center">
            <Link to="/">
              <Avatar src="/xcss_hd/image.png" alt="Logo" mr={2} />
            </Link>

            <Box flex={1} />

            <IconButton
              edge="end"
              colorScheme="whiteAlpha"
              aria-label="menu"
              onClick={() => setIsDrawerOpen(!isDrawerOpen)}
              icon={<HamburgerIcon />}
            />
          </Flex>

          <Box> {/* Assuming AppBar height is 64px */}
            <Center>
              <NavigationDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
            </Center>
            <Flex justifyContent={'center'} >

              <Routes>
                {/*   <Route path="/token" element={<Token />} />
              <Route path="/nft" element={<Nft />} />
              <Route path="/arc" element={<Home />} /> */}
                {/*  <Route path="/terminal" element={<TokenList />} /> */}

                <Route path="/" element={<Home />} />
                <Route path="/token" element={<TokenRekt />} />
                <Route path="/scientists" element={<NFTList />} />
                <Route path="/xcss" element={<DataFetcher />} />
                {/*  <Route path="/links" element={<LinkList />} />
                <Route path="/container" element={<ResearchContainer />} />
                <Route path="/scientists" element={<MintPage />} />
                <Route path="/pill" element={<LayeredSVGComponent categories={categories} />} />
                <Route path="/collec" element={<NFTForm />} /> */}
              </Routes>
            </Flex>

          </Box>
        </Flex>
      </Router>
    </ChakraProvider>
  );
}

export default App;
