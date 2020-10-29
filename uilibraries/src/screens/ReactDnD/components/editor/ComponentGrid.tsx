import { Box } from '@chakra-ui/core';
import React, { ReactElement, useState } from 'react';
import { useDrop } from 'react-dnd';
import { Comp, CompType, IWidget } from '../../components';
import { nanoid } from 'nanoid';
import PreviewComponent from './PreviewComponent';

interface Props {}

const gridStyles = {
  backgroundImage:
    'linear-gradient(to right, #d9e2e9 1px, transparent 1px),linear-gradient(to bottom, #d9e2e9 1px, transparent 1px);',
  backgroundSize: '20px 20px',
  bg: '#edf2f6',
  p: 10
};

function ComponentGrid({}: Props): ReactElement {
  const [widgets, setWidgets] = useState([] as IWidget[]);

  const [{ isOver }, drop] = useDrop({
    accept: [CompType.Component.toString(), CompType.Container.toString()],
    drop: item => {
      addComponent(item);
    },
    collect: monitor => ({
      isOver: !!monitor.isOver()
    })
  });

  const addComponent = comp => {
    console.log('adding component ' + JSON.stringify(comp));
    setWidgets(prevItems => [
      ...prevItems,
      {
        id: nanoid(),
        type: comp.type,
        isRoot: false,
        name: comp.name,
        props: {}
      }
    ]);
  };

  return (
    <Box
      p={2}
      {...gridStyles}
      height="100%"
      minWidth="10rem"
      width="100%"
      display={widgets.length == 0 ? 'flex' : 'block'}
      justifyContent="center"
      alignItems="center"
      overflow="auto"
      position="relative"
      flexDir="column"
      ref={drop}
    >
      {widgets.length == 0 ? (
        <div>Drag componenets here</div>
      ) : (
        widgets.map((w: IWidget) => (
          <PreviewComponent key={w.id} name={w.name} />
        ))
      )}{' '}
    </Box>
  );
}

export default ComponentGrid;
