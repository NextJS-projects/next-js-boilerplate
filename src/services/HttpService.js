import axios from 'axios';
//redux store
import { store } from '../store/configureStore';
//managers
import CookiesManager from '../managers/CookiesManager';
//end points
import { BASE_URL } from './EndPoints';

const apiService = axios.create({
	baseURL: BASE_URL,
});

const requestInterceptor = (config) => {
	//config.headers['Authorization'] = `Bearer ${CookiesManager.getCookie('ACCESS_TOKEN')}`;
	return config;
};

const requestInterceptorError = (error) => {
	console.log('there is a request error', error);
	return Promise.reject(error);
};

const responseInterceptor = (response) => {
	console.log('response interceptor:', response);
	return response;
};

const responseInterceptorError = (error) => {
	const errorResponse = error.response;
	console.log('response interceptor error:', errorResponse);
	if (errorResponse.status === 401) {
		// Login error code, reject the promise.
		// store.dispatch(setIsLoggedInFalse());
	}
	return Promise.reject(error);
};

apiService.interceptors.request.use(requestInterceptor, requestInterceptorError);
apiService.interceptors.response.use(responseInterceptor, responseInterceptorError);

export { apiService };
