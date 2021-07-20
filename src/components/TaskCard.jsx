import React from 'react';
import styled from 'styled-components';

const TaskCard = ({ grp, grpI, handletDragStart, handleDragEnter, getStyles, dragging }) => (
    <div>
        {grp.items.map((item, itemI) => (
            <Task
                draggable
                key={itemI}
                onDragStart={(e) => handletDragStart(e, { grpI, itemI })}
                onDragEnter={
                    dragging
                        ? (e) => {
                              handleDragEnter(e, { grpI, itemI });
                          }
                        : null
                }
                className={dragging ? getStyles({ grpI, itemI }) : 'task'}
            >
                {item.description}
            </Task>
        ))}
    </div>
);

export default TaskCard;
const Task = styled.div`
    :not(:last-of-type) {
        margin-bottom: 0.5rem;
    }
    * {
        margin: 0;
        font-size: 1.2rem;
    }
`;
