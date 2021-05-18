const dataStorage = (function()
{
    let taskID = 0;
    let projectID = 0;
    let projectObject = {};

    const optionValue = [`High`, `Medium`, `Low`,];

    const priorityColour = [`priority-color-high`, `priority-color-medium`, `priority-color-low`,];

    const getTaskForProject = function(projectName)
    {
        return projectObject[`${projectName}`];
    }

    const consoleLogStorage = function()
    {
        console.log(projectObject);
    }

    return {
        taskID,
        projectID,
        projectObject,
        optionValue,
        priorityColour,
        getTaskForProject,
        consoleLogStorage,
    };
})();

export default dataStorage;
