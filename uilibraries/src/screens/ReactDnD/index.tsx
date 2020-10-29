import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {
  Flex,
  ThemeProvider,
  CSSReset,
  ColorModeProvider,
  Box
} from '@chakra-ui/core';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Navbar } from './components/Navbar';
import { Global } from '@emotion/core';
import ComponentContainer from './components/sidebar/ComponentContainer';
import ComponentGrid from './components/sidebar/ComponentGrid';
import ComponentProps from './components/ComponentProps';

ReactDOM.render(
  <ThemeProvider>
    <ColorModeProvider>
      <DndProvider backend={HTML5Backend}>
        <Global
          styles={() => ({
            html: { minWidth: '860px', backgroundColor: '#1a202c' }
          })}
        />
        <CSSReset />
        <Navbar />
        <Flex h="calc(100vh - 3rem)">
          <App></App>
        </Flex>
      </DndProvider>
    </ColorModeProvider>
  </ThemeProvider>,
  document.getElementById('root')
);
