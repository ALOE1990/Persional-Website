import { combineReducers } from 'redux';
import Projects from './reducer_projeccts';
const rootReducer = combineReducers({
    projects: Projects

});

export default rootReducer;
