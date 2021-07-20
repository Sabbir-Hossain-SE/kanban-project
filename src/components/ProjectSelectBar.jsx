/* eslint-disable no-unused-expressions */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-const-assign */
/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { getData } from '../api/API';
import { TaskContext } from '../contextapi/TaskContext';
import Selectbox from './Selectbox';

const _ = require('lodash');

const ProjectSelectBar = () => {
    const { project, setRequireDBUpdate, phase, setPhase, allProjects } = useContext(TaskContext);
    const [selectedProj, setSelectedProj] = useState('Choose Project');

    const phaseShouldBeUpdated = async (data) => {
        const restUrl = `phase/?id=${data._id}`;
        const res = await getData(restUrl);
        setPhase(res);
        console.log('selected project');
        console.log(data);
        // updateData(data, 'project/inative');
    };

    return (
        <Container>
            <Selectbox
                selected={selectedProj}
                setSelected={setSelectedProj}
                options={allProjects}
                setRequireDBUpdate={setRequireDBUpdate}
                dataShouldBeUpdated={phaseShouldBeUpdated}
            />
        </Container>
    );
};

export default ProjectSelectBar;
const Container = styled.div`
    z-index: 14;
`;
