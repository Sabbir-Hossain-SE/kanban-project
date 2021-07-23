/* eslint-disable no-unused-expressions */
/* eslint-disable no-plusplus */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
/* eslint-disable consistent-return */
// eslint-disable-next-line import/prefer-default-export
const url = 'http://localhost:8800/api/';

export const getData = async (resURL) => {
    let groupData;

    try {
        const response = await fetch(`${url}${resURL}`);

        if (response.status !== 200) {
            throw new Error('Something is worng!');
        }
        groupData = await response.json();
    } catch (error) {
        console.log(error.message);
    }

    return groupData;
};

export const addData = async (data, resURL) => {
    let content;
    try {
        const response = await fetch(`${url}${resURL}`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json' },
        });
        if (response.status !== 200) {
            throw new Error('Something is worng!');
        }
        content = await response.json();
        if (content !== null) {
            console.log(content);
        }
    } catch (err) {
        console.log(err.message);
    }
    return content;
};

export const deleteData = async (resURL) => {
    let response;
    try {
        response = await fetch(`${url}${resURL}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.status !== 200) {
            throw new Error('Something is worng!');
        }
    } catch (err) {
        console.log(err.message);
    }

    const data = await response.json();
};

export const creatProject = async (projName, phaseNum) => {
    const userId = '60e8da2f3a9a713b78d15bda';
    const userRestURL = 'project';
    const projData = {
        name: projName,
        description: 'my project description',
        userId,
    };

    const projectData = await addData(projData, userRestURL);

    const projectId = await projectData._id;
    const pahseRest = 'phase';

    const arr = Array(phaseNum).fill(phaseNum);

    await arr.map(async (data, i) => {
        const phaseData = {
            name: `Phase${2}`,
            projectId,
        };
        await addData(phaseData, pahseRest);
    });
};

export const updateData = async (data, resURL) => {
    console.log(`hit on update${resURL}`);
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ data }),
    };
    fetch(`${url}${resURL}`, requestOptions)
        .then(async (response) => {
            const res = await response.json();

            // check for error response
            if (!response.ok) {
                // get error message from body or default to response status
                const error = (res && res.message) || response.status;
                return Promise.reject(error);
            }
        })
        .catch((error) => {
            console.error('There was an error!', error);
        });
};
