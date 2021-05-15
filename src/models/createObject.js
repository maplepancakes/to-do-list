import dataStorage from "./dataStorage";
import updateObject from "./updateObject";

const createObject = (function()
{
    const createProject = function(projectName)
    {
        updateObject.addProject(projectName);
        updateObject.incrementProjectID();
    }

    const createTask = function(taskName, taskDescription, dueDate, priority, notes)
    {
        this.taskID = dataStorage.taskID;
        this.taskName = taskName;
        this.taskDescription = taskDescription;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;

        updateObject.incrementTaskID();
    }

    return {createProject, createTask};
})();

export default createObject;