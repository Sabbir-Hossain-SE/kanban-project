import PropTypes from 'prop-types';
import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const PageWrapper = ({ pageTitle, children }) => (
    <HelmetProvider>
        {pageTitle && (
            <Helmet defer={false}>
                <title>{pageTitle}</title>
            </Helmet>
        )}

        {children}
    </HelmetProvider>
);

PageWrapper.propTypes = {
    pageTitle: PropTypes.string,
    children: PropTypes.node.isRequired,
};

PageWrapper.defaultProps = {
    pageTitle: 'React',
};

export default PageWrapper;
