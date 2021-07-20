/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getData } from '../api/API';
import { TaskContext } from '../contextapi/TaskContext';
import Selectbox from './Selectbox';

const PhaseSelectBar = () => {
    const { phase, setRequireDBUpdate, task, setTask } = useContext(TaskContext);
    const [selectedPhase, setSelectedPhase] = useState('Choose Phase');

    const taskShouldBeUpdated = async (data) => {
        const restUrl = `task/?id=${data._id}`;
        const res = await getData(restUrl);

        if (task) {
            setTask(res);
        } else {
            toast.info('🦄 You have no more task. Please add some task');
        }
    };
    return (
        <>
            <Selectbox
                selected={selectedPhase}
                setSelected={setSelectedPhase}
                options={phase}
                setSelectedPhase={setSelectedPhase}
                dataShouldBeUpdated={taskShouldBeUpdated}
            />
            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </>
    );
};

export default PhaseSelectBar;
