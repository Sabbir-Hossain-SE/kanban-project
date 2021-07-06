import React from 'react';
import styled from 'styled-components';
import colors from '../theme/colors';
import Button from './Button';

const AddTaskbar = () => {
    const handleAddButton = () => {
        console.log('clicked add Button');
    };
    return (
        <BarContainer>
            <InputWrapper>
                <Input
                    type="text"
                    className="add-task-bar"
                    name="addtaskbar"
                    id="addTaskBar"
                    placeholder="Witer your task name"
                />
            </InputWrapper>
            <AddButtonWrapper>
                <Button btnTitle="Add" btnOnClick={handleAddButton} bgColor="#e94c1c" />
            </AddButtonWrapper>
        </BarContainer>
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
    filter: drop-shadow(0px 5px 15px rgba(0, 0, 0, 0.03));
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
