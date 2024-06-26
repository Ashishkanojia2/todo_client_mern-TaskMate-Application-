import React from 'react';
import Main from './Main';
import store from './source/redux/Store';
import { Provider } from 'react-redux';

const App = () => {
  return <Provider store={store}>
    <Main/>
  </Provider> ;
};

export default App;
