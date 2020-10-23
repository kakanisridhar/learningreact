const initialData = {
  tasks: {
    'task-1': { id: 'task-1', content: 'Develop form builder' },
    'task-2': {
      id: 'task-2',
      content: 'Write spring boot app to store model and generate jsx file'
    },
    'task-3': { id: 'task-3', content: 'Generate a bundle a test it instantly' }
  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'Column-1',
      taskIds: ['task-1', 'task-2', 'task-3']
    }
  },
  columnOrder: ['column-1']
};

export default initialData;
