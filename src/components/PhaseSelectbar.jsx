/* eslint-disable no-unused-expressions */
/* eslint-disable array-callback-return */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { getData, updateData } from '../api/API';
import { TaskContext } from '../contextapi/TaskContext';
import Selectbox from './Selectbox';

let isFirstSelected = true;
const PhaseSelectBar = ({ isProjectSelected }) => {
    const { phase, setRequireDBUpdate, task, setTask, project, setPhase } = useContext(TaskContext);
    const [selectedPhase, setSelectedPhase] = useState();
    let initialPhase;
    const taskShouldBeUpdated = async (data) => {
        isFirstSelected = false;
        const restUrl = `task/?id=${data._id}`;
        const res = await getData(restUrl);

        setTask(res);

        if (data.status === 'queued') {
            await phase.map((val) => {
                if (val.status === 'ongoing') {
                    updateData({ status: 'ongoing' }, `phase/${val._id}`);
                }
            });
            await updateData({ status: 'queued' }, `phase/${data._id}`);
        }
    };

    useEffect(async () => {
        const resURL = `phase/?id=${project[0]._id}`;
        const res = await getData(resURL);
        try {
            res.map((val) => {
                if (val.status === 'ongoing') {
                    isFirstSelected && setSelectedPhase(val.name);
                    isFirstSelected && setPhase(res);
                }
            });
        } catch (error) {
            console.log('First Attemped Miss');
        }
    }, [project]);
    return (
        <>
            <Selectbox
                selected={selectedPhase}
                setSelected={setSelectedPhase}
                options={phase}
                setSelectedPhase={setSelectedPhase}
                dataShouldBeUpdated={taskShouldBeUpdated}
            />
        </>
    );
};

export default PhaseSelectBar;
