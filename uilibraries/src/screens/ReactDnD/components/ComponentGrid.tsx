import { Box } from '@chakra-ui/core';
import React, { ReactElement } from 'react';
import { useDrop } from 'react-dnd';
import { CompType } from '../components';
interface Props {}

const gridStyles = {
  backgroundImage:
    'linear-gradient(to right, #d9e2e9 1px, transparent 1px),linear-gradient(to bottom, #d9e2e9 1px, transparent 1px);',
  backgroundSize: '20px 20px',
  bg: '#edf2f6',
  p: 10
};

function ComponentGrid({}: Props): ReactElement {
  const [{ isOver }, drop] = useDrop({
    accept: [CompType.Component.toString(), CompType.Container.toString()],
    drop: item => {
      console.log(JSON.stringify(item));
    },
    collect: monitor => ({
      isOver: !!monitor.isOver()
    })
  });

  return (
    <Box
      p={2}
      {...gridStyles}
      height="100%"
      minWidth="10rem"
      width="100%"
      display="block"
      justifyContent="center"
      alignItems="center"
      overflow="auto"
      position="relative"
      ref={drop}
    >
      Eventually items will come here, but long way to go
    </Box>
  );
}

export default ComponentGrid;
