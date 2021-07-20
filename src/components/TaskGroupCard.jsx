/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';
import TaskCard from './TaskCard';

function TaskGroupCard({
    list,
    dragging,
    handleDragEnter,
    handlCetDragStart,
    getStyles,
    grp,
    grpI,
    handletDragStart,
}) {
    if (list) {
        return (
            <Wrapper
                key={grp.groupTitle}
                onDragEnter={
                    dragging && !grp.items.length
                        ? (e) => handleDragEnter(e, { grpI, itemI: 0 })
                        : null
                }
            >
                <Title>{grp.groupTitle}</Title>
                <TaskCard
                    grp={grp}
                    grpI={grpI}
                    handletDragStart={handletDragStart}
                    handleDragEnter={handleDragEnter}
                    getStyles={getStyles}
                    dragging={dragging}
                />
            </Wrapper>
        );
    }
    return null;
}
export default TaskGroupCard;

const Wrapper = styled.div`
    background-color: #49505e;
    border-radius: 5px;
    padding: 0.5rem;
`;

const Title = styled.div`
    text-align: left;
    margin-bottom: 0.5rem;
    font-size: 1.5rem;
    font-weight: bold;
    color: white;
`;
