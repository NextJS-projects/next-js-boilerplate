import Head from 'next/head';
import PropTypes from 'prop-types';

const SiteTags = ({ title }) => (
	<Head>
		<title>{title}</title>
		<link href="/fonts.css" rel="stylesheet" />
		<link rel="icon" href="/favicon.ico" />
	</Head>
);

SiteTags.propTypes = {
	title: PropTypes.string.isRequired,
};

export default SiteTags;
