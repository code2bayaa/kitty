import { View, Text } from 'react-native'
import React from 'react'



//state exchange between screens
import { Provider } from 'react-redux';
//expo

//native ::

import store from './constants/redux/store';

import Main from './screens'

const App = () => {
  return (
    <Provider store={store}>
      <Main />  
    </Provider>
  )
}


export default App