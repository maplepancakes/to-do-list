if (localStorage.getItem(`taskID`) === null && localStorage.getItem(`projectID`) === null && localStorage.getItem(`projectObject`) === null)
{
    localStorage.setItem(`taskID`, `0`);
    localStorage.setItem(`projectID`, `0`);
    localStorage.setItem(`projectObject`, JSON.stringify({}));
}

const dataStorage = (function()
{
    let taskID = localStorage.getItem(`taskID`);
    let projectID = localStorage.getItem(`projectID`);
    let projectObject = JSON.parse(localStorage.getItem(`projectObject`));

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
