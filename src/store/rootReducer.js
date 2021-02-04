import { combineReducers } from 'redux';
//reducers
import app from './app/reducers/AppReducer';

const rootReducer = combineReducers({
	app,
});

export default rootReducer;
