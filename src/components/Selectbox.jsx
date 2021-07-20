/* eslint-disable no-underscore-dangle */
/* eslint-disable no-shadow */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/no-onchange */
import { useState } from 'react';
import './sdp.css';

const Selectbox = ({ selected, setSelected, options, dataShouldBeUpdated }) => {
    const [isActive, setIsActive] = useState(false);

    return (
        <div className="dropdown">
            <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>
                {selected}
                <span className="fas fa-caret-down" />
            </div>
            {isActive && (
                <div className="dropdown-content">
                    {options.map((option, i) => (
                        <div
                            onClick={(e) => {
                                setSelected(option.name);
                                setIsActive(false);
                                dataShouldBeUpdated(option);
                            }}
                            className="dropdown-item"
                            key={i}
                        >
                            {option.name}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Selectbox;
