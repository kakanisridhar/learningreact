import React from 'react';
import { render } from 'react-dom';
import { StoreContext } from 'storeon/react';
import Notes from './Components/Notes';
import Counter from './Components/Counter';
import store from './Store';
import './index.css';

function App() {
  return (
    <>
      <StoreContext.Provider value={store}>
        <Counter />
        <hr />
        <Notes />
      </StoreContext.Provider>
    </>
  );
}

const root = document.getElementById('root');
render(<App />, root);
