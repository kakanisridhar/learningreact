import { Box } from '@chakra-ui/core';
import React from 'react';
import ComponentContainer from './components/ComponentContainer';
import ComponentGrid from './components/ComponentGrid';
import ComponentProps from './components/ComponentProps';

function App() {
  return (
    <>
      <ComponentContainer></ComponentContainer>
      <Box bg="white" flex={1} zIndex={10} position="relative">
        <ComponentGrid></ComponentGrid>
      </Box>
      <Box
        maxH="calc(100vh - 3rem)"
        flex="0 0 15rem"
        bg="#f7fafc"
        overflowY="auto"
        overflowX="visible"
        borderLeft="1px solid #cad5de"
      >
        <ComponentProps></ComponentProps>
      </Box>
    </>
  );
}

export default App;
