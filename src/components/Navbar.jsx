import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import BrandLogo from '../assets/logo.png';
import Button from './Button';

const Navbar = ({ backButtonController }) => (
    <NavbarWrapper>
        <TopBar>
            <Logo src={BrandLogo} />
            <LoginButtonWrapper>
                <LoginButton btnTitle="Login" btnOnClick={backButtonController}>
                    Login
                </LoginButton>
            </LoginButtonWrapper>
        </TopBar>
    </NavbarWrapper>
);

export default Navbar;

const NavbarWrapper = styled.div`
    position: fixed;
    top: 0;
    width: 100%;
    height: 6.5rem;
    background: #f8bcad;
    border-bottom: 1px solid #c5b7b7;
    z-index: 5;
`;
const TopBar = styled.div`
    width: 100%;
    height: 100%;
    padding: 0 3.2rem 0 3.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const LoginButtonWrapper = styled.div``;
const LoginButton = styled(Button)`
    height: 40px;
`;

const Logo = styled.img`
    height: 45px;
`;

Navbar.propTypes = {
    backButtonController: PropTypes.func.isRequired,
};
