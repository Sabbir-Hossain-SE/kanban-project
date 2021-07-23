import React from 'react';
import styled from 'styled-components';
import Dashboard from '../../components/Dashboard';
import Sidebar from '../../components/Sidebar';
import TaskContextProvider from '../../contextapi/TaskContext';
import WithTopBar from '../../layout/WithTopBar';

const Home = () => (
    <>
        <WithTopBar pageTitle="Home">
            <Wrapper>
                <TaskContextProvider>
                    <Sidebar />
                    <HomeContainer>
                        <TaskManagingContainer>
                            <Dashboard />
                        </TaskManagingContainer>
                    </HomeContainer>
                </TaskContextProvider>
            </Wrapper>
        </WithTopBar>
    </>
);

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
    width: 65%;
    margin: auto;
    padding: 4rem 2rem;
    background-color: #d4e0fc;
    border-radius: 12px;
`;
const Wrapper = styled.div`
    display: flex;
`;
