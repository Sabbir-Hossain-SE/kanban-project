/* eslint-disable prefer-destructuring */
/* eslint-disable array-callback-return */
/* eslint-disable no-shadow */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
/* eslint-disable react/destructuring-assignment */
import { createContext, useEffect, useState } from 'react';
import { getData } from '../api/API';

export const TaskContext = createContext();
const TaskContextProvider = (props) => {
    const [user, setUser] = useState([]);
    const [phase, setPhase] = useState([]);
    const [group, setGroup] = useState([]);
    const [project, setProject] = useState([{}]);
    const [allProjects, setAllProjects] = useState();
    const [task, setTask] = useState([]);
    const [update, setUpdate] = useState(false);

    const [requireDBUpdate, setRequireDBUpdate] = useState();
    const addProject = false;
    let projectResponse;

    const getActiveProject = async () => {
        const userId = '60ecb724c43b43153018a012';
        const resURL = `project/?id=${userId}&status=active`;
        projectResponse = await getData(resURL);

        await setProject(projectResponse);

        await getOngoingPhaseByActiveProject(projectResponse);
    };
    let phaseResponse;
    const getOngoingPhaseByActiveProject = async (projectResponse) => {
        const resURL = `phase/?id=${projectResponse[0]._id}&status=ongoing`;
        phaseResponse = await getData(resURL);

        await setPhase(phaseResponse);

        await getTaskByActivePhase(phaseResponse);
    };

    const getTaskByActivePhase = async (phaseResponse) => {
        try {
            const resURL = `task/?id=${phaseResponse[0]._id}`;
            const taskResponse = await getData(resURL);
            await setTask(taskResponse);
        } catch (error) {
            console.log('Got data.');
        }
    };
    const getAllProjectData = async () => {
        const userId = '60ecb724c43b43153018a012';
        const resURL = `project/?id=${userId}`;
        const response = await getData(resURL);
        setAllProjects(response);
    };

    useEffect(() => {
        getActiveProject();
        getAllProjectData();
    }, []);
    return (
        <TaskContext.Provider
            value={{
                user,
                setUser,
                phase,
                setPhase,
                group,
                setGroup,
                project,
                setProject,
                task,
                setTask,
                addProject,
                update,
                setUpdate,
                requireDBUpdate,
                setRequireDBUpdate,
                allProjects,
                setAllProjects,
            }}
        >
            {props.children}
        </TaskContext.Provider>
    );
};
export default TaskContextProvider;
