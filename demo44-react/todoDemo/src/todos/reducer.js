import {
    createStore,
    combineReducers
} from 'redux';

import {
    reducer as todoReducer
} from './todos';
import {
    reducer as filterReducer
} from './filter';

const reducer = combineReducers({//把多个reducer函数合成一个reducer函数。
    todos: todoReducer,
    filter: filterReducer
});

export default createStore(reducer);