/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import TaskGroupCard from './TaskGroupCard';

const defaultData = [
    { title: 'To Do', items: ['1', '2', '3'] },
    { title: 'In Progress', items: ['4', '5'] },
    { title: 'Done', items: ['6', '7', '9'] },
];

const TaskHandlerBoard = () => {
    const [data, setData] = useState(defaultData);
    useEffect(() => {
        if (localStorage.getItem('List')) {
            console.log(localStorage.getItem('List'));
            setData(JSON.parse(localStorage.getItem('List')));
        } else {
            setData(defaultData);
        }
    }, [setData]);
    const [list, setList] = useState(data);
    const [dragging, setDragging] = useState(false);

    useEffect(() => {
        setList(data);
    }, [setList, data]);

    const dragItem = useRef();
    const dragItemNode = useRef();

    const handletDragStart = (e, item) => {
        console.log('Starting to drag', item);

        dragItemNode.current = e.target;
        dragItemNode.current.addEventListener('dragend', handleDragEnd);
        dragItem.current = item;

        setTimeout(() => {
            setDragging(true);
        }, 0);
    };
    const handleDragEnter = (e, targetItem) => {
        console.log('Entering a drag target', targetItem);
        if (dragItemNode.current !== e.target) {
            console.log('Target is NOT the same as dragged item');
            setList((oldList) => {
                const newList = JSON.parse(JSON.stringify(oldList));
                newList[targetItem.grpI].items.splice(
                    targetItem.itemI,
                    0,
                    newList[dragItem.current.grpI].items.splice(dragItem.current.itemI, 1)[0]
                );
                dragItem.current = targetItem;
                localStorage.setItem('List', JSON.stringify(newList));
                return newList;
            });
        }
    };
    const handleDragEnd = (e) => {
        setDragging(false);
        dragItem.current = null;
        dragItemNode.current.removeEventListener('dragend', handleDragEnd);
        dragItemNode.current = null;
    };
    const getStyles = (item) => {
        if (dragItem.current.grpI === item.grpI && dragItem.current.itemI === item.itemI) {
            return 'task current';
        }
        return 'task';
    };
    return (
        <Container className="App">
            <Wrapper>
                {list.map((grp, grpI) => (
                    <TaskGroupCard
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
