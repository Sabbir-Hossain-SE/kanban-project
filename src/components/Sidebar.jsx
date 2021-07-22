/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';
import styled from 'styled-components';
import PhaseSelectBar from './PhaseSelectbar';
import ProjectSelectBar from './ProjectSelectBar';

const Container = styled.div`
    z-index: 10;
    background: linear-gradient(0deg, #ffffff 60%, #ffe7e7 30%);
    position: fixed;
    .active {
        border-right: 4px solid white;
        img {
            filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg) brightness(103%)
                contrast(103%);
        }
    }
`;

const Button = styled.button`
    background-color: #4c4c6d;
    border: none;
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 50%;
    margin: 0.5rem 0 0 0.5rem;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    color: #4c4c6d;
    &::before,
    &::after {
        content: '';
        background-color: #ffffff;
        height: 2px;
        width: 1rem;
        position: absolute;
        transition: all 0.3s ease;
    }
    &::before {
        top: ${(props) => (props.clicked ? '1.5' : '2rem')};
        transform: ${(props) => (props.clicked ? 'rotate(135deg)' : 'rotate(0)')};
    }
    &::after {
        top: ${(props) => (props.clicked ? '1.2' : '1.5rem')};
        transform: ${(props) => (props.clicked ? 'rotate(-135deg)' : 'rotate(0)')};
    }
`;

const SidebarContainer = styled.div`
    background-color: #4c4c6d;
    width: 5rem;
    height: 80vh;
    margin-top: 1rem;
    border-radius: 0 30px 30px 0;
    padding: 1rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
`;

const SlickBar = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    background-color: #4c4c6d;
    padding: 2rem 2rem;
    position: absolute;
    height: 75%;
    left: 0;
    width: ${(props) => (props.clicked ? '19rem' : '3.5rem')};
    transition: all 0.6s ease;
    border-radius: 0 25px 25px 0;
`;
const Item = styled.div`
    width: 100%;
    padding: 1rem 0;
    cursor: pointer;
    display: flex;
    flex-direction: column;

    visibility: ${(props) => (props.clicked ? 'visible' : 'hidden')};
`;
const Sidebar = () => {
    const [click, setClick] = useState(true);
    const handleClick = () => setClick(!click);
    const [selected, setSelected] = useState('Choose One');
    const [isProjectSelected, setisProjectSelected] = useState(false);

    return (
        <Container selected={selected} setSelected={setSelected}>
            <Button clicked={click} onClick={() => handleClick()}>
                Click
            </Button>
            <SidebarContainer>
                <SlickBar clicked={click}>
                    <Item clicked={click}>
                        <ProjectSelectBar setisProjectSelected={setisProjectSelected} />
                    </Item>
                    <Item clicked={click}>
                        <PhaseSelectBar isProjectSelected={isProjectSelected} />
                    </Item>
                </SlickBar>
            </SidebarContainer>
        </Container>
    );
};

export default Sidebar;
