/* eslint-disable no-dupe-keys */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-param-reassign */
/* eslint-disable one-var */
/* eslint-disable prefer-const */
/* eslint-disable no-shadow */
/* eslint-disable array-callback-return */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { addData, deleteData, getData } from '../api/API';
import { TaskContext } from '../contextapi/TaskContext';
import TaskGroupCard from './TaskGroupCard';

const _ = require('lodash');

const defaultData = [
    { groupTitle: 'To Do', groupNumber: 1, phaseId: '', items: [] },
    { groupTitle: 'In Progress', groupNumber: 2, phaseId: '', items: [] },
    { groupTitle: 'Done', groupNumber: 3, phaseId: '', items: [] },
];

let prevTask;

const TaskHandlerBoard = () => {
    const { phase, task, project, update, setUpdate } = useContext(TaskContext);
    const [taskDatalist, setTaskDatalist] = useState();
    const [haveProject, sethHaveProject] = useState(false);
    const [data, setData] = useState(defaultData);
    // localStorage.clear('List');
    let firstTime = true;
    useEffect(async () => {
        const processedData = await formatData(task);
        console.log('got the point');
        await console.log(project);
        if (firstTime) {
            setData(processedData);
            firstTime = false;
            console.log('local sotrage status');
        } else {
            setData(JSON.parse(localStorage.getItem('List')));
        }
        console.log();

        // if (localStorage.getItem('List')) {
        //     setData(JSON.parse(localStorage.getItem('List')));
        //     prevTask = task;
        // } else {
        //     setData(processedData);
        // }
    }, [task, setData]);

    // Data List Processing
    const dbData = [{}];
    const phaseIdArray = [];
    const task1 = [];
    const task2 = [];
    const task3 = [];
    let dbDataList;

    const formatData = (taskResponse) => {
        let i = 0;
        let j = 0;
        let k = 0;
        // Deep copy
        const data = _.cloneDeep(taskResponse);

        data.map((val) => {
            if (val.groupNumber === 1 && val.taskItem) {
                task1.push(val.taskItem);
                if (i === 0) {
                    i += 1;
                    phaseIdArray.push(val.phaseId);
                }
            }
            if (val.groupNumber === 2 && val.taskItem) {
                task2.push(val.taskItem);
                if (j === 0) {
                    j += 1;
                    phaseIdArray.push(val.phaseId);
                }
            }
            if (val.groupNumber === 3 && val.taskItem) {
                task3.push(val.taskItem);
                if (k === 0) {
                    k += 1;
                    phaseIdArray.push(val.phaseId);
                }
            }
        });
        return setDtataForRendering();
    };
    const setDtataForRendering = async () => {
        defaultData[0].phaseId = phaseIdArray[0];
        defaultData[1].phaseId = phaseIdArray[1];
        defaultData[2].phaseId = phaseIdArray[2];
        defaultData[0].items = task1;
        defaultData[1].items = task2;
        defaultData[2].items = task3;

        dbDataList = _.cloneDeep(defaultData);

        return dbDataList;
    };

    const [list, setList] = useState(data);
    const [dragging, setDragging] = useState(false);

    useEffect(async () => {
        setList(data);
    }, [setList, data]);

    const dragItem = useRef();
    const dragItemNode = useRef();

    const handletDragStart = (e, item) => {
        dragItemNode.current = e.target;
        dragItemNode.current.addEventListener('dragend', handleDragEnd);
        dragItem.current = item;

        setTimeout(() => {
            setDragging(true);
        }, 0);
    };
    const handleDragEnter = (e, targetItem) => {
        // console.log('Entering a drag target', targetItem);
        if (dragItemNode.current !== e.target) {
            // console.log('Target is NOT the same as dragged item');
            setList((oldList) => {
                const newList = JSON.parse(JSON.stringify(oldList));

                newList[targetItem.grpI].items.splice(
                    targetItem.itemI,
                    0,
                    newList[dragItem.current.grpI].items.splice(dragItem.current.itemI, 1)[0]
                );
                dragItem.current = targetItem;
                localStorage.setItem('List', JSON.stringify(newList));

                console.log('newList');
                console.log(newList);
                return newList;
            });
        }
    };
    const handleDragEnd = async (e) => {
        setDragging(false);
        dragItem.current = null;
        dragItemNode.current.removeEventListener('dragend', handleDragEnd);
        dragItemNode.current = null;

        let currentPhase;

        const UData = {
            taskItem: {},
            groupTitle: '',
            groupNumber: '',
            phaseId: '',
            taskItem: { description: '', comment: '' },
        };

        try {
            const userId = '60e8da2f3a9a713b78d15bda';
            const resURL = `project/?id=${userId}&status=active`;
            const currentProject = await getData(resURL);

            const resURL1 = `phase/?id=${currentProject[0]._id}&status=ongoing`;
            currentPhase = await getData(resURL1);
        } catch (error) {
            console.log('Somethis happened when try to retrive data.');
        }
        if (currentPhase) {
            // Delete Task database
            await deleteData(`task/${currentPhase[0]._id}`);

            // Updata Task DataBase by Local Storage
            const newData = JSON.parse(localStorage.getItem('List'));

            await newData.map(async (data, i) => {
                UData.groupNumber = data.groupNumber;
                UData.groupTitle = data.groupTitle;
                UData.phaseId = currentPhase[0]._id;
                data.items.map(async (val) => {
                    UData.taskItem = val;
                    const updateDtata = _.cloneDeep(UData);
                    addData(UData, 'task');
                    console.log('got the data');
                    console.log(updateDtata);
                });
            });
        }
    };

    const getStyles = (item) => {
        if (dragItem.current.grpI === item.grpI && dragItem.current.itemI === item.itemI) {
            return 'task current';
        }
        return 'task';
    };
    const Group = () => (
        <Wrapper>
            {task &&
                list.map((grp, grpI) => (
                    <TaskGroupCard
                        key={grp.groupTitle}
                        list={list}
                        dragging={dragging}
                        handleDragEnter={handleDragEnter}
                        handletDragStart={handletDragStart}
                        getStyles={getStyles}
                        grp={grp}
                        grpI={grpI}
                    />
                ))}
        </Wrapper>
    );

    return (
        <Container>
            <Group />
        </Container>
    );
};

export default TaskHandlerBoard;

const Container = styled.div`
    width: 100%;
    height: 100%;
`;

const Wrapper = styled.div`
    padding: 1rem;
    display: grid;
    gap: 0.5rem;
    width: 100%;
    height: 100%;
    grid-template-columns: repeat(auto-fill, 24%);
    align-items: start;
    justify-content: center;
    row-gap: 1rem;
    column-gap: 2%;
    overflow: auto;
`;
