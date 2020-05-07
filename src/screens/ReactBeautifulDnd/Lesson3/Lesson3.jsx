import React from 'react';
import { v4 as uuid } from 'uuid';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import './Lesson3.css';

function Copyable(props) {
  return (
    <Droppable droppableId={props.droppableId} isDropDisabled={true}>
      {(provided, snapshot) => (
        <ul ref={provided.innerRef} className={props.className}>
          {props.items.map((item, index) => (
            <Draggable key={item.id} draggableId={item.id} index={index}>
              {(provided, snapshot) => (
                <React.Fragment>
                  <li
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    style={provided.draggableProps.style}
                    className={snapshot.isDragging ? 'dragging' : ''}
                  >
                    {item.label}
                  </li>
                  {snapshot.isDragging && (
                    <li className="react-beatiful-dnd-copy">{item.label}</li>
                  )}
                </React.Fragment>
              )}
            </Draggable>
          ))}
          {provided.placeholder}
        </ul>
      )}
    </Droppable>
  );
}

function Shop(props) {
  return <Copyable droppableId="SHOP" className="shop" items={props.items} />;
}

function ShoppingBag(props) {
  return (
    <Droppable droppableId="BAG">
      {(provided, snapshot) => (
        <ul ref={provided.innerRef} className="shopping-bag">
          {props.items.map((item, index) => (
            <Draggable key={item.id} draggableId={item.id} index={index}>
              {(provided, snapshot) => (
                <li
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                  style={provided.draggableProps.style}
                >
                  {item.label}
                </li>
              )}
            </Draggable>
          ))}
          {provided.placeholder}
        </ul>
      )}
    </Droppable>
  );
}

const COLLECTION = [
  { id: uuid(), label: 'Apple' },
  { id: uuid(), label: 'Banana' },
  { id: uuid(), label: 'orange' }
];

const reorder = (list, startIndex, endIndex) => {
  const [removed] = list.splice(startIndex, 1);
  list.splice(endIndex, 0, removed);
  return list;
};

const copy = (source, destination, droppableSource, droppableDestination) => {
  const item = source[droppableSource.index];
  destination.splice(droppableDestination.index, 0, { ...item, id: uuid() });
  return destination;
};

export default function Lesson3() {
  const [shoppingBagItems, setShoppingBagItems] = React.useState([]);
  const onDragEnd = React.useCallback(
    result => {
      const { source, destination } = result;

      if (!destination) {
        return;
      }

      switch (source.droppableId) {
        case destination.droppableId:
          setShoppingBagItems(state =>
            reorder(state, source.index, destination.index)
          );
          break;
        case 'SHOP':
          setShoppingBagItems(state =>
            copy(COLLECTION, state, source, destination)
          );
          break;
        default:
          break;
      }
    },
    [setShoppingBagItems]
  );
  return (
    <div className="App">
      <DragDropContext onDragEnd={onDragEnd}>
        <h2>Shop</h2>
        <Shop items={COLLECTION} />
        <h2>Shopping bag</h2>
        <ShoppingBag items={shoppingBagItems} />
      </DragDropContext>
    </div>
  );
}
