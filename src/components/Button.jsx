import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import color from '../theme/color'

const Button = ({
  btnTitle,
  btnOnClick,

  AfterIcon,
  BeforeIcon,
  ...rest
}) => (
  <SquareRoundedButton onClick={btnOnClick} {...rest}>
    {BeforeIcon && <LeftIcon src={BeforeIcon} alt={btnTitle} />}
    <span>{btnTitle}</span>
    {AfterIcon && <RightIcon src={AfterIcon} alt={btnTitle} />}
  </SquareRoundedButton>
)

export default Button

const SquareRoundedButton = styled.button`
  height: 100%;
  width: 100%;
  padding: 0.5rem 0.8rem;
  cursor: pointer;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 20px;
  color: ${color.dark};
  background-color: ${color.primary};
  &:hover {
    color: 'black';
    background-color: rgba(0, 0, 0, 0.6);
  }
`

const LeftIcon = styled.img`
  padding-right: 1rem;
`

const RightIcon = styled.img`
  padding-left: 3.5rem;
`
Button.propTypes = {
  btnTitle: PropTypes.string.isRequired,
  btnOnClick: PropTypes.func,
  AfterIcon: PropTypes.string,
  BeforeIcon: PropTypes.string,
}

Button.defaultProps = {
  btnOnClick: null,
  AfterIcon: null,
  BeforeIcon: null,
}
