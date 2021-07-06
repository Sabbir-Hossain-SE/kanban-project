import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import colors from '../theme/colors';

const Button = ({ btnTitle, btnOnClick, AfterIcon, BeforeIcon, ...rest }) => (
    <SquareRoundedButton onClick={btnOnClick} {...rest}>
        {BeforeIcon && <LeftIcon src={BeforeIcon} alt={btnTitle} />}
        <span>{btnTitle}</span>
        {AfterIcon && <RightIcon src={AfterIcon} alt={btnTitle} />}
    </SquareRoundedButton>
);

export default Button;

const GlobalStyle = styled.button`
    height: 100%;
    width: 100%;
    cursor: pointer;
    outline: none;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    border-radius: 5px;
    color: black;
    background-color: red;
    &:hover {
        color: white;
        background-color: rgba(0, 0, 0, 0.6);
    }
`;

const LeftIcon = styled.img`
    padding-right: 1rem;
`;

const RightIcon = styled.img`
    padding-left: 3.5rem;
`;

const SquareRoundedButton = styled(GlobalStyle)`
    height: ${(props) => (props.y ? props.y : '5.3rem')};
    width: ${(props) => (props.x ? props.x : '100%')};
    margin-right: ${(props) => props.mr && props.mr};
    margin-left: ${(props) => props.ml && props.ml};
    margin-top: ${(props) => props.mt && props.mt};
    margin-bottom: ${(props) => props.mb && props.mb};
    font-size: ${(props) => (props.fontSize ? props.fontSize : '16px')};
    font-weight: ${(props) => (props.fontWeight ? props.fontWeight : '500')};
    font-family: ${(props) => props.fontFamily && props.fontFamily};
    font-style: ${(props) => props.fontStyle && props.fontStyle};
    line-height: ${(props) => (props.lineHeight ? props.lineHeight : '17px')};
    padding: ${(props) => props.pdx && props.pdx} ${(props) => props.pdy && props.pdy};
    color: ${(props) => (props.color ? props.color : colors.dark)};
    background-color: ${(props) => (props.bgColor ? props.bgColor : colors.primary)};
    border: ${(props) => props.border && props.border};
    border-radius: ${(props) => (props.borderRadius ? props.borderRadius : '.5rem')};
    outline: ${(props) => props.outline && props.outline};
    &:hover {
        color: ${(props) => (props.hoverColor ? props.hoverColor : 'black')};
        background-color: ${(props) =>
            props.hoverBgColor ? props.hoverBgColor : ' rgba(0, 0, 0, 0.6);'};
        font-weight: ${(props) => props.fontWeight && props.fontWeight};
    }
`;
Button.propTypes = {
    btnTitle: PropTypes.string.isRequired,
    btnOnClick: PropTypes.func,
    AfterIcon: PropTypes.string,
    BeforeIcon: PropTypes.string,
};

Button.defaultProps = {
    btnOnClick: null,
    AfterIcon: null,
    BeforeIcon: null,
};
