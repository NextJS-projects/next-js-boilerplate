import React from 'react';
//styles
import styles from '../styles/pages/Home.module.scss';
//containers
import PageWrapper from '../components/shared/pageWrapper/PageWrapper';
//components
import TestComponent from '../components/testComponent/TestComponent';

const Home = () => (
	<PageWrapper title="Home">
		<div>Home page</div>
		<TestComponent />
	</PageWrapper>
);

export default Home;
