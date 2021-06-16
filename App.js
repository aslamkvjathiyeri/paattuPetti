import 'react-native-gesture-handler'
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './common/store'
import Router from './screens/router'
export { store }
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        {/* <PersistGate persistor={persistor}> */}
          <Router />
        {/* </PersistGate> */}
      </Provider>
    )
  }
}
export default App