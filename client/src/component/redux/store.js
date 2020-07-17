import { createStore } from 'redux';
// If you make more reducers look at todoList root reducer
import locationReducer from './reducers';

const store = createStore(locationReducer);


export default store;