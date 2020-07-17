import { createStore } from 'redux';
// If you make more reducers look at todoList root reducer
import locationReducer from './reducers';

const store = createStore(locationReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


export default store;