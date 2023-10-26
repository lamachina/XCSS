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
                <Route path="/xcss" element={<DataFetcher />} />
                <Route path="/links" element={<LinkList />} />
                <Route path="/container" element={<ResearchContainer />} />
              </Routes>
            </Flex>

          </Box>
        </Flex>
      </Router>
    </ChakraProvider>
  );
}

export default App;
