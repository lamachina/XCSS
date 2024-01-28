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
import HomeLab from './lab/home/HomeLab';
import Explore from './lab/home/Explore';
import DisplayImageBasedOnMerkleHash from './lab/home/DisplayImageBasedOnMerkleHash';
import Gang from './components/gangrealm/Gang';

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: '#001729',
        color: 'white',
      },
    },
  },
});




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
                {/* <Route path="/lab" element={<HomeLab />} /> */}
                {/* <Route path="/explore" element={<Explore />} />
                <Route path="/rr" element={<DisplayImageBasedOnMerkleHash />} /> */}
                {/* <Route path="/gang" element={<Gang />} /> */}
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
