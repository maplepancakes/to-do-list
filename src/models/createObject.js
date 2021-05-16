import dataStorage from "./dataStorage";
import updateObject from "./updateObject";

const createObject = (function()
{
    const createProject = function(projectName)
    {
        updateObject.addProject(projectName);
        updateObject.incrementProjectID();
    }

    const createTask = function(taskName, dueDate, priorityColour, priority)
    {
        this.taskID = dataStorage.taskID;
        this.taskName = taskName;
        this.dueDate = dueDate;
        this.priorityColour = priorityColour;
        this.priority = priority;

        updateObject.incrementTaskID();
    }

    return {createProject, createTask};
})();

export default createObject;