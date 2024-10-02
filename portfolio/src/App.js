import './index.css';
import Header from './components/Header';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider>
    <Header>
    </Header>
    <Projects>
    </Projects>
    <Contact>
    </Contact>
    <Footer>
    </Footer>
    </ChakraProvider>
  )
}

export default App;
