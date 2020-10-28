import { Box, DarkMode } from '@chakra-ui/core';
import React, { ReactElement } from 'react';
import { components } from '../components';
import { DragItem } from './DragItem';

interface Props {}

export default function ComponentContainer({}: Props): ReactElement {
  return (
    <DarkMode>
      <Box
        maxH="calc(100vh - 3rem)"
        overflowY="auto"
        overflowX="visible"
        shadow="xl"
        flex="0 0 14rem"
        p={5}
        m={0}
        as="menu"
        backgroundColor="#2e3748"
        width="15rem"
        color="gray.300"
      >
        {components.map((comp, i) => {
          return (
            <DragItem
              name={comp.name}
              type={comp.type}
              key={comp.name}
            ></DragItem>
          );
        })}
      </Box>
    </DarkMode>
  );
}
