/* eslint-disable array-callback-return */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-const-assign */
/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { getData, updateData } from '../api/API';
import { TaskContext } from '../contextapi/TaskContext';
import Selectbox from './Selectbox';

const _ = require('lodash');

const ProjectSelectBar = ({ setisProjectSelected }) => {
    const { project, setRequireDBUpdate, phase, setPhase, allProjects, getAllProjectData } =
        useContext(TaskContext);
    const [selectedProj, setSelectedProj] = useState();

    const phaseShouldBeUpdated = async (data) => {
        setisProjectSelected(true);
        const restUrl = `phase/?id=${data._id}`;
        const res = await getData(restUrl);
        setPhase(res);
        if (data.status === 'inactive') {
            await allProjects.map((val) => {
                if (val.status === 'active') {
                    updateData({ status: 'active' }, `project/${val._id}`);
                }
            });
            await updateData({ status: 'inactive' }, `project/${data._id}`);
        }
    };

    return (
        <Container>
            <Selectbox
                selected={selectedProj || project[0].name}
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
