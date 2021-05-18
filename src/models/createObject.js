import dataStorage from "./dataStorage";
import dataMethods from "./dataMethods";

const createObject = (function()
{
    const createProject = function(projectName)
    {
        dataMethods.addProject(projectName);
        dataMethods.incrementProjectID();
    }

    const createTask = function(taskName, dueDate, priorityColour, priority)
    {
        this.taskID = dataStorage.taskID;
        this.taskName = taskName;
        this.dueDate = dueDate;
        this.priorityColour = priorityColour;
        this.priority = priority;

        dataMethods.incrementTaskID();
    }

    return {createProject, createTask};
})();

export default createObject;