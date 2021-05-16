const dataStorage = (function()
{
    let taskID = 0;
    let projectID = 0;
    let projectObject = {};

    const priorityColour =
    [   
        `priority-color-high`,
        `priority-color-medium`,
        `priority-color-low`,
    ];

    const consoleLogStorage = function()
    {
        console.log(projectObject);
    }

    return {
        taskID,
        projectID,
        projectObject,
        priorityColour,
        consoleLogStorage,
    };
})();

export default dataStorage;
