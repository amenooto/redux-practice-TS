import {combineReducers} from "redux";
import todos from './todos';
import counter from './counter';
import post from './post';

const rootReducer  = combineReducers({
    todos,
    counter,
    post
})

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;