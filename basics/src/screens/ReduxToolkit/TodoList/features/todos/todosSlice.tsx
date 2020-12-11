import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { TodoModel } from './todotypes';

const todosSlice = createSlice({
  name: 'todos',
  initialState: [] as TodoModel[],
  reducers: {
    addTodo: {
      reducer: (state, action: PayloadAction<TodoModel>) => {
        const { id, text } = action.payload;
        state.push({ id, text, completed: false });
      },
      prepare: (text: string) => {
        const id = nanoid();
        return { payload: { id, text } };
      }
    },
    toggleTodo(state, action) {
      const todo = state.find(todo => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    }
  }
});

export const { addTodo, toggleTodo } = todosSlice.actions;

export default todosSlice.reducer;
