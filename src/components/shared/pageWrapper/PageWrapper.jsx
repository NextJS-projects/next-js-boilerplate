import React from 'react';
import PropTypes from 'prop-types';
//styles
import styles from './PageWrapper.module.scss';
//containers
import AppHeader from '../../../containers/navigation/AppHeader';
//components
import SiteTags from '../SiteTags';
import AppFooter from '../../footer/AppFooter';

const PageWrapper = ({ children, title }) => {
	return (
		<div className={styles.pageWrapper}>
			<SiteTags title={title} />
			<AppHeader />
			<main className={styles.main}>{children}</main>
			<AppFooter />
		</div>
	);
};

PageWrapper.propTypes = {
	title: PropTypes.string.isRequired,
};

export default PageWrapper;
