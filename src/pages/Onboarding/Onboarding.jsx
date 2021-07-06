import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import bgImage from '../../assets/bg.png';
import WithTopBar from '../../layout/WithTopBar';

const Onboarding = () => {
    const history = useHistory();
    const backButtonController = () => history.push('/home');

    return (
        <>
            <WithTopBar pageTitle="Onboarding" backButtonController={backButtonController}>
                <OnboardingContaianer>
                    <h1>Onboarding Page</h1>
                </OnboardingContaianer>
            </WithTopBar>
        </>
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
