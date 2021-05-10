import dataStorage from "./dataStorage";

const createObject = (function()
{
    const createProject = function(projectName)
    {
        dataStorage.projectObject[`${projectName}`] = [];

        dataStorage.consoleLogStorage();
    };

    const createTask = function(taskName, taskDescription, dueDate, priority, notes)
    {
        this.taskID = dataStorage.taskID;
        this.taskName = taskName;
        this.taskDescription = taskDescription;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;

        dataStorage.taskID++;
    };

    return {createProject, createTask};
})();

export default createObject;