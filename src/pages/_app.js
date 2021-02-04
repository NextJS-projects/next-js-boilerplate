import React from 'react';
//styles
import '../styles/globals.scss';
//store
import { wrapper } from '../store/configureStore';

const MyApp = ({ Component, pageProps }) => <Component {...pageProps} />;

export default wrapper.withRedux(MyApp);
