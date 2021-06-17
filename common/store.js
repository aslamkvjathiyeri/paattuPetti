import { applyMiddleware, combineReducers, compose, createStore } from "redux"
// import {AsyncStorage}  from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer, persistStore, } from 'redux-persist'
import hardSet from 'redux-persist/lib/stateReconciler/hardSet'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import user from '../screens/signup/reducers'


const appReducer = combineReducers({
     user
})

const rootReducer = (state, action) => {
    if (action.type == 'USER_LOGOUT') {
        state = undefined
    }
    return appReducer(state, action)
}

const rootPersistConfig = {
    key: 'root',
    storage: AsyncStorage,
    stateReconciler: hardSet
}


const store = createStore(
    persistReducer(rootPersistConfig,rootReducer),
    compose(applyMiddleware(thunk, logger))
)

const persistor = persistStore(store)

export { store}