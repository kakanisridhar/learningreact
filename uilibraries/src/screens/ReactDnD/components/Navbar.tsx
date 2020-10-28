import { Box, DarkMode, Flex } from '@chakra-ui/core';
import React from 'react';

interface Props {}

export const Navbar = (props: Props) => {
  return (
    <DarkMode>
      <Flex
        justifyContent="space-between"
        bg="#457b9d"
        as="header"
        height="3rem"
        px="1rem"
        color="gray.300"
      >
        <Flex
          width="14rem"
          height="100%"
          as="a"
          fontSize="xl"
          flexDirection="row"
          alignItems="center"
          aria-label="Mridasoft, Back to homepage"
        >
          <Box fontWeight="bold">Mrida</Box>Soft
        </Flex>
      </Flex>
    </DarkMode>
  );
};
