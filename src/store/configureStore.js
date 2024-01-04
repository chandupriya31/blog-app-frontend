import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import blogReducer from '../reducers/blogReducer'

const rootReducer = {
    blogs:blogReducer
}

export default function configureStore(){
    const store = createStore(combineReducers(rootReducer),applyMiddleware(thunk))
    return store
}