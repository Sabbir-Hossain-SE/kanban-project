/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
/* eslint-disable no-const-assign */
/* eslint-disable no-return-assign */
import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { addData, getData } from '../api/API';
import { TaskContext } from '../contextapi/TaskContext';
import colors from '../theme/colors';
import Button from './Button';

const AddTaskbar = () => {
    const history = useHistory();
    const { phase, project, setUpdate } = useContext(TaskContext);
    useEffect(() => {
        console.log('render');
        setUpdate(true);
    }, [setUpdate]);
    let taskDescription;

    const handleAddButton = async () => {
        console.log('add task');
        let currentPhase;

        try {
            const userId = '60e8da2f3a9a713b78d15bda';
            const resURL = `project/?id=${userId}&status=active`;
            const currentProject = await getData(resURL);
            console.log(currentProject);

            const resURL1 = `phase/?id=${currentProject[0]._id}&status=ongoing`;
            currentPhase = await getData(resURL1);
            console.log(currentPhase);
        } catch (error) {
            console.log('Somethis happened when try to retrive data.');
        }

        if (taskDescription) {
            console.log('got it');
            const data = await {
                groupTitle: 'To Do',
                groupNumber: 1,
                phaseId: currentPhase[0]._id,
                taskItem: {
                    description: taskDescription,
                    comment: 'comment',
                },
            };

            await addData(data, 'task');
            history.go('/home');
        }
    };
    return (
        <div>
            {project.length > 0 ? (
                <BarContainer>
                    <InputWrapper>
                        <Input
                            type="text"
                            className="add-task-bar"
                            name="addtaskbar"
                            id="addTaskBar"
                            placeholder="Witer your task name"
                            onChange={(e) => (taskDescription = e.target.value)}
                        />
                    </InputWrapper>
                    <AddButtonWrapper>
                        <Button btnTitle="Add" btnOnClick={handleAddButton} bgColor="#e94c1c" />
                    </AddButtonWrapper>
                </BarContainer>
            ) : null}
        </div>
    );
};

export default AddTaskbar;

const BarContainer = styled.div`
    width: 60%;
    height: 5.3rem;
    margin: auto;

    display: flex;
    justify-content: space-between;
`;
const InputWrapper = styled.div`
    position: relative;
    width: 75%;
`;
const Input = styled.input`
    position: relative;
    width: 100%;
    height: 5.3rem;
    background: #fff;
    filter: drop-shadow(0px 5px 14px rgba(0, 0, 0, 0.03));
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

const AddButtonWrapper = styled.div`
    width: 20%;
    height: 53px;
    width: 20%;
`;
