import React from 'react';
import { useDrag } from 'react-dnd';
import { Text, PseudoBox, Icon, Box } from '@chakra-ui/core';
import { Comp } from '../../components';

export const DragItem: React.FC<Comp> = ({ name, type }: Comp) => {
  const [{ isDragging }, drag] = useDrag({
    item: { type: type.toString(), name },
    collect: monitor => ({
      isDragging: !!monitor.isDragging()
    })
  });

  let boxProps: any = {
    color: 'whiteAlpha.600',
    cursor: 'move',
    ref: drag,
    _hover: {
      ml: -1,
      mr: 1,
      bg: 'teal.100',
      shadow: 'sm',
      color: 'teal.800'
    }
  };

  if (isDragging) {
    boxProps = { ...boxProps, opacity: isDragging ? 0.5 : 1 };
  }

  return (
    <PseudoBox
      boxSizing="border-box"
      transition="margin 200ms"
      my={1}
      rounded="md"
      p={1}
      display="flex"
      alignItems="center"
      {...boxProps}
    >
      <Text letterSpacing="wide" fontSize="sm" textTransform="capitalize">
        {name}
      </Text>
    </PseudoBox>
  );
};

export default DragItem;
