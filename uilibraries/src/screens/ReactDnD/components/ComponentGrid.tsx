import { Box } from '@chakra-ui/core';
import React, { ReactElement } from 'react';

interface Props {}

const gridStyles = {
  backgroundImage:
    'linear-gradient(to right, #d9e2e9 1px, transparent 1px),linear-gradient(to bottom, #d9e2e9 1px, transparent 1px);',
  backgroundSize: '20px 20px',
  bg: '#edf2f6',
  p: 10
};

function ComponentGrid({}: Props): ReactElement {
  return (
    <Box
      p={2}
      {...gridStyles}
      height="100%"
      minWidth="10rem"
      width="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
      overflow="auto"
      position="relative"
      flexDirection="column"
    >
      Drop container components here Those containers should accept non
      container components
    </Box>
  );
}

export default ComponentGrid;
