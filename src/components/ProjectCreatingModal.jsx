/* eslint-disable no-unused-vars */
import React, { useCallback, useEffect, useRef } from 'react';
import { MdClose } from 'react-icons/md';
import { useHistory } from 'react-router-dom';
import { animated, useSpring } from 'react-spring';
import styled from 'styled-components';
import { creatProject } from '../api/API';
import colors from '../theme/colors';
import Button from './Button';

const ProjectCreatingModal = ({ showModal, setShowModal }) => {
    let projName;
    let phaseNum;
    const history = useHistory();

    const modalRef = useRef();

    const animation = useSpring({
        config: {
            duration: 250,
        },
        opacity: showModal ? 1 : 0,
        transform: showModal ? `translateY(0%)` : `translateY(-100%)`,
    });

    const closeModal = (e) => {
        if (modalRef.current === e.target) {
            setShowModal(false);
        }
    };

    const keyPress = useCallback(
        (e) => {
            if (e.key === 'Escape' && showModal) {
                setShowModal(false);
                console.log('I pressed');
            }
        },
        [setShowModal, showModal]
    );

    useEffect(() => {
        document.addEventListener('keydown', keyPress);
        return () => document.removeEventListener('keydown', keyPress);
    }, [keyPress]);

    const handleAddButton = () => {
        if (projName) {
            Number(phaseNum);
            creatProject(projName, Number(phaseNum));
        }
        projName = '';
        phaseNum = 0;
        setShowModal((prev) => !prev);
        history.push('/home');
    };

    return (
        <>
            {showModal ? (
                <MdBackground>
                    <animated.div style={animation}>
                        <MdWrapper showModal={showModal}>
                            <MdInfo>
                                <ListWrapper>
                                    <UL>
                                        <LI>
                                            After creating the project you are not eligible for any
                                            modification.
                                        </LI>
                                        <LI>
                                            You can delete the project with the whole information.
                                        </LI>
                                        <LI>
                                            Remind that you can not get back the project after
                                            deleting it once
                                        </LI>
                                    </UL>
                                </ListWrapper>
                            </MdInfo>
                            <MdContent>
                                <Logo />
                                <Heading>Aar you Ready! </Heading>
                                <HorizontalGap />
                                <InputWrapper>
                                    <NameInput
                                        type="text"
                                        className="project-name"
                                        name="projectName"
                                        id="projectName"
                                        placeholder="Enter the project name"
                                        onChange={(e) => {
                                            projName = e.target.value;
                                        }}
                                    />
                                </InputWrapper>
                                <HorizontalGap />
                                <InputWrapper>
                                    <PhaseInputNumber
                                        type="number"
                                        className="phase-input-number"
                                        name="phaseInputNumber"
                                        id="phaseInputNumber"
                                        placeholder="Enter phase number"
                                        onChange={(e) => {
                                            phaseNum = e.target.value;
                                        }}
                                    />
                                </InputWrapper>
                                <HorizontalGap />
                                <Button
                                    btnTitle="Submit Project"
                                    btnOnClick={handleAddButton}
                                    bgColor="#f7b3a2"
                                    x="50%"
                                />
                            </MdContent>
                            <MdCloseButton
                                aria-label="Close modal"
                                onClick={() => setShowModal((prev) => !prev)}
                            />
                        </MdWrapper>
                    </animated.div>
                </MdBackground>
            ) : null}
        </>
    );
};

export default ProjectCreatingModal;

const MdBackground = styled.div`
    width: 100%;
    height: 112%;
    background-color: rgba(0, 0, 0, 0.8);
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: flex-start;
`;
const MdWrapper = styled.div`
    margin-top: 5rem;
    width: 800px;
    height: 500px;
    background-color: #fff;
    box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
    color: #000;
    display: grid;
    grid-template-columns: 1fr 2fr;
    position: relative;
    z-index: 12;
    border-radius: 10px;
`;
const MdInfo = styled.div`
    width: 100%;
    height: 100%;
    background-color: #f8bcad;
    border-radius: 10px 0 0 10px;
`;
const MdContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    line-height: 1.8;
    color: #141414;
`;

const MdCloseButton = styled(MdClose)`
    cursor: pointer;
    position: absolute;
    top: 20px;
    right: 20px;
    height: 32px;
    width: 32px;
    padding: 0;
    z-index: 12;
`;
const Heading = styled.h1`
    font-family: 'Varela Round', sans-serif;
`;
const Input = styled.input`
    position: relative;
    width: 100%;
    height: 5.3rem;
    background: white;
    filter: drop-shadow(0 0 5px rgba(248, 188, 173, 0.99));
    font-weight: normal;
    font-size: 16px;
    letter-spacing: 0.03em;
    line-height: 24px;
    text-align: left;
    color: #000000;
    border: none;
    border-radius: 1rem;
    outline: none;
    padding-left: 1rem;
    &::placeholder {
        color: #9f9f9f;
    }
    &:hover {
        border: 1px solid ${colors.Primary};
    }
    &:focus {
        border: 1px solid ${colors.Primary};
    }
    &::click {
        border: 1px solid ${colors.primary};
    }
`;
const InputWrapper = styled.div`
    position: relative;
    width: 75%;
`;
const Logo = styled.img``;
const NameInput = styled(Input)``;
const PhaseInputNumber = styled(Input)``;
const HorizontalGap = styled.div`
    width: 100%;
    height: 2.5rem;
`;

const UL = styled.ul`
    list-style-type: square;
`;
const LI = styled.li`
    font-family: 'Varela Round', sans-serif;
    font-size: 1.4rem;
    font-weight: bold;
    color: rgba(0, 0, 0, 0.7);
    margin-bottom: 1rem;
`;
const ListWrapper = styled.div`
    width: 100%;
    padding: 3rem;
    margin-top: 40px;
`;
