import objectStorage from "./objectStorage";

const updateObject = (function()
{
    const appendTaskToProject = function(task, projectName)
    {
        objectStorage.projectObject[`${projectName}`].push(task);

        console.log(objectStorage.consoleLogStorage());
    };

    return {appendTaskToProject};
})();

export default updateObject;