import { Box } from '@chakra-ui/core';
import React, { ReactElement } from 'react';

interface Props {}

export default function ComponentProps({}: Props): ReactElement {
  return (
    <Box>This should contain accordion with props for selected component</Box>
  );
}
