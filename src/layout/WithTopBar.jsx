import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import color from '../theme/color'
import PageWrapper from './Page.layout'
import BrandLogo from '../assets/common/brand-logo.svg'

const WithTopBar = ({ pageTitle, children, backButtonController }) => (
  <PageWrapper pageTitle={pageTitle}>
    <TopBarWrapper>
      <TopBar>
        <Logo src={BrandLogo} />
        <LeaveButton onClick={backButtonController}>Quitter</LeaveButton>
      </TopBar>
    </TopBarWrapper>

    <ContentWrapper>{children}</ContentWrapper>
  </PageWrapper>
)

const TopBarWrapper = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 6.5rem;
  background: ${color.light};
  border-bottom: 1px solid #f3f5f5;
  z-index: 20;
`
const TopBar = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 3.2rem 0 2.4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Logo = styled.img``

const LeaveButton = styled.button`
  font-weight: normal;
  font-size: 1.5rem;
  line-height: 1.6rem;
  color: ${color.dark};
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`

const ContentWrapper = styled.div`
  margin-top: 6.5rem;
  min-height: calc(100vh - 9rem);
`

WithTopBar.propTypes = {
  pageTitle: PropTypes.string,
  children: PropTypes.node.isRequired,
  backButtonController: PropTypes.func.isRequired,
}

WithTopBar.defaultProps = {
  pageTitle: 'React',
}

export default WithTopBar
