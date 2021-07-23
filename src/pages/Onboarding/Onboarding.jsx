/* eslint-disable no-unused-vars */
import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { getData } from '../../api/API';
import bgImage from '../../assets/bg.png';
import Button from '../../components/Button';
import WithTopBar from '../../layout/WithTopBar';

const Onboarding = () => {
    const history = useHistory();
    const handdleButton = async () => {
        const userId = '60ecb724c43b43153018a012';
        const resURL = `project/?id=${userId}&status=active`;
        const project = await getData(resURL);
        console.log(project);
        if (project.length > 0) {
            history.push('./home');
        } else {
            history.push('./create-project');
        }
    };

    return (
        <WithTopBar pageTitle="Onboarding">
            <OnboardingContaianer>
                <AboutWrapper>
                    <About>
                        <Heading>What is Lorem Ipsum?</Heading>
                        <Description>
                            It is a long established fact that a reader will be distracted by the
                            readable content of a page when looking at its layout.
                        </Description>
                    </About>
                    <Button
                        btnTitle="Explore Me!"
                        x="300px"
                        fontWeight="bold"
                        bgColor="#1e6435"
                        color="White"
                        btnOnClick={handdleButton}
                    />
                </AboutWrapper>
            </OnboardingContaianer>
        </WithTopBar>
    );
};

export default Onboarding;

const OnboardingContaianer = styled.div`
    height: calc(100vh - 6.5rem);
    width: 100vw;
    background-image: url(${bgImage});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: 95% 20px;
`;
const AboutWrapper = styled.div`
    width: 40%;
    padding: 90px 0 0 120px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
`;
const About = styled.div``;
const Heading = styled.div`
    font-family: 'Varela Round', sans-serif;
    font-size: 3rem;
    font-weight: bold;
    padding-bottom: 1.5rem;
    color: #1e6435;
`;
const Description = styled.div`
    font-family: 'Varela Round', sans-serif;
    font-size: 2.2rem;
    line-height: 2.6rem;
    font-weight: bold;
    padding-bottom: 2.5rem;
`;
