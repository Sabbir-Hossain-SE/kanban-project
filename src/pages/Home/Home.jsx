import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import AddTaskbar from '../../components/AddTaskbar';
import TaskHandlerBoard from '../../components/TaskHandlerBoard';
import WithTopBar from '../../layout/WithTopBar';

const Home = () => {
    const history = useHistory();
    const backButtonController = () => history.push('/home');

    return (
        <>
            <WithTopBar pageTitle="Onboarding" backButtonController={backButtonController}>
                <HomeContainer>
                    <TaskManagingContainer>
                        <AddTaskbar />
                        <HorizontalGap />
                        <TaskGroupCardWrapper>
                            <TaskHandlerBoard />
                        </TaskGroupCardWrapper>
                    </TaskManagingContainer>
                </HomeContainer>
            </WithTopBar>
        </>
    );
};

export default Home;

const HomeContainer = styled.div`
    height: calc(100vh - 6.5rem);
    width: 100vw;
    padding-top: 8rem;
    background: linear-gradient(0deg, #ffffff 60%, #ffe7e7 30%);
`;
const TaskManagingContainer = styled.div`
    position: relative;
    height: 94%;
    width: 70%;
    margin: auto;
    padding: 4rem 2rem;
    background-color: #d4e0fc;
    border-radius: 12px;
`;
const TaskGroupCardWrapper = styled.div`
    widht: 100%;
    height: calc(100% - 8.8rem);
    padding: 0.5rem;
`;
const HorizontalGap = styled.div`
    width: 100%;
    height: 3.5rem;
`;
