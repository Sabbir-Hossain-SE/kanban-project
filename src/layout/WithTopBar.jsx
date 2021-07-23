import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import PageWrapper from './Page.layout';

const WithTopBar = ({ pageTitle, children }) => (
    <PageWrapper pageTitle={pageTitle}>
        <Navbar />
        <ContentWrapper>{children}</ContentWrapper>
    </PageWrapper>
);

const ContentWrapper = styled.div`
    margin-top: 6.5rem;
    min-height: calc(100vh - 6.5rem);
`;

WithTopBar.propTypes = {
    pageTitle: PropTypes.string,
    children: PropTypes.node.isRequired,
};

WithTopBar.defaultProps = {
    pageTitle: 'React',
};

export default WithTopBar;
