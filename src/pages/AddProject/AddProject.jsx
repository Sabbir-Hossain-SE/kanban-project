import React from 'react';
import styled from 'styled-components';
import ProjectStatus from '../../components/ProjectStatus';
import WithTopBar from '../../layout/WithTopBar';
import Device from '../../viewporthandler/mediaQueries';

const AddProject = () => (
    <WithTopBar pageTitle="Create Project">
        <Wrapper>
            <ProjectStatus />
        </Wrapper>
    </WithTopBar>
);

export default AddProject;
const Wrapper = styled.div`
    padding-top: 100px;

    width: 100%;

    @media ${Device.desktop} {
        padding-top: 280px;
    }
`;
