/* eslint-disable no-return-assign */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import styled from 'styled-components';
import { TaskContext } from '../contextapi/TaskContext';
import AddTaskbar from './AddTaskbar';
import TaskHandlerBoard from './TaskHandlerBoard';

const Dashboard = () => {
    const { project } = useContext(TaskContext);
    let addProject;
    const handleAddButton = () => (addProject = true);

    return (
        <>
            <AddTaskbar />
            <HorizontalGap />
            <TaskGroupCardWrapper>
                <TaskHandlerBoard />
            </TaskGroupCardWrapper>
        </>
    );
};
export default Dashboard;

const TaskGroupCardWrapper = styled.div`
    widht: 100%;
    height: calc(100% - 8.8rem);
    padding: 0.5rem;
    overflow: auto;
`;
const HorizontalGap = styled.div`
    width: 100%;
    height: 3.5rem;
`;
