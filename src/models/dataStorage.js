const dataStorage = (function()
{
    let taskID = 0;
    let projectID = 0;
    let projectObject = {};

    const consoleLogStorage = function()
    {
        console.log(projectObject);
    }

    const incrementTaskID = function()
    {
        taskID++;
        console.log(`Increased taskID to: ${taskID}`);
    }

    const incrementProjectID = function()
    {
        projectID++;
        console.log(`Increased projectID to: ${projectID}`);
    }

    const storeProject = function(value)
    {
        projectObject[`${value}`] = [];
    }

    const getTaskID = function()
    {
        return taskID;
    }

    const getProjectID = function()
    {
        return projectID;
    }

    const getProjectObjectValue = function(key)
    {
        return projectObject[`${key}`];
    }

    return {
        consoleLogStorage,
        incrementTaskID, 
        incrementProjectID, 
        storeProject,
        getTaskID,
        getProjectID,
        getProjectObjectValue,
    };
})();

export default dataStorage;
