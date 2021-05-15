const dataStorage = (function()
{
    let taskID = 0;
    let projectID = 0;
    let projectObject = {};

    const consoleLogStorage = function()
    {
        console.log(projectObject);
    }

    return {
        taskID,
        projectID,
        projectObject,
        consoleLogStorage,
    };
})();

export default dataStorage;
