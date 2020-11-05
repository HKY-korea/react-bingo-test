import React from 'react';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import Bingo from './components/Bingo';

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <Bingo />
    </Provider>
  );
}

export default App;
