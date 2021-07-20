/* eslint-disable no-return-assign */
/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
import React, { useState } from 'react';
import styled from 'styled-components';
import colors from '../theme/colors';
import Button from './Button';
import ProjectCreatingModal from './ProjectCreatingModal';

const ProjectStatus = ({ handleAddButton }) => {
    const [addProject, setAddProject] = useState(true);
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal((prev) => !prev);
    };
    return (
        <>
            <Status>
                There is no project available which you can manage now! <br />
                First of all you have to a project.
            </Status>
            <AddButtonWrapper>
                <Button
                    btnTitle="Add a new project"
                    btnOnClick={openModal}
                    x="50%"
                    bgColor="#f36947"
                    fontWeight="bold"
                />
            </AddButtonWrapper>
            <ModalContainer>
                <ProjectCreatingModal showModal={showModal} setShowModal={setShowModal} />
            </ModalContainer>
        </>
    );
};
export default ProjectStatus;

const Status = styled.div`
    text-align: center;
    margin-top: 11rem;
    color: ${colors.dark};
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 3rem;
`;
const AddButtonWrapper = styled.div`
    height: 53px;
    width: 100%;
    display: flex;
    justify-content: center;
`;
const ModalContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    align-items: center;
`;
