import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createWrapper } from 'next-redux-wrapper';
//root reducer
import rootReducer from './rootReducer';
//middle wares
import thunkMiddleware from 'redux-thunk';

const isDevelopment = process.env.NODE_ENV === 'development',
	middlewares = [];

// log redux data in development mode only
if (isDevelopment) {
	const { logger } = require('redux-logger');
	middlewares.push(logger);
}

const configureStore = () => {
	const apply = applyMiddleware(thunkMiddleware, ...middlewares);
	return createStore(
		rootReducer,
		/* preloadedState, */
		//use redux dev tool in development only
		isDevelopment ? composeWithDevTools(apply) : apply
	);
};

//used to access redux store outside of components
export const store = configureStore();

//required for setting up redux with next JS
const makeStore = () => configureStore();

export const wrapper = createWrapper(makeStore);
