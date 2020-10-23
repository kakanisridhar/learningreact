import "./DragDropDemo.scss";
import React, { Component } from "react";
import initialData from "./model";
import Column from "./Column";
import { DragDropContext } from "react-beautiful-dnd";

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

export default class DragDropDemo extends Component {
  constructor(props) {
    super(props);
    this.state = initialData;
    this.onDragEnd = this.onDragEnd.bind(this);
  }

  onDragEnd(result) {
    console.log(JSON.stringify(result));
    const { destination, source, draggableId } = result;
    // dropped outside the list
    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const column = this.state.columns[source.droppableId];
    const newTaskIds = reorder(column.taskIds, source.index, destination.index);
    const newColumn = {
      ...column,
      taskIds: newTaskIds,
    };

    const newState = {
      ...this.state,
      columns: {
        ...this.state.columns,
        [newColumn.id]: newColumn,
      },
    };

    this.setState(newState);
  }

  render() {
    console.log("DnD lesson1");
    let columnsRenderer = this.state.columnOrder.map((colId) => {
      const column = this.state.columns[colId];
      const tasks = column.taskIds.map((taskId) => this.state.tasks[taskId]);
      return <Column key={colId} column={column} tasks={tasks} />;
    });

    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        {columnsRenderer}
      </DragDropContext>
    );
  }
}
