import dataStorage from "./dataStorage";

const updateObject = (function()
{
    const incrementTaskID = function()
    {
        dataStorage.taskID++;
        console.log(`Increased taskID to: ${dataStorage.taskID}`);
    }

    const incrementProjectID = function()
    {
        dataStorage.projectID++;
        console.log(`Increased projectID to: ${dataStorage.projectID}`);
    }

    const addProject = function(value)
    {
        dataStorage.projectObject[`${value}`] = [];
        console.log(`Added ${value} to projectObject`);

        dataStorage.consoleLogStorage();
    }

    const deleteProject = function(value)
    {
       delete dataStorage.projectObject[`${value}`];
       console.log(`Deleted ${value} from projectObject`);

       dataStorage.consoleLogStorage();
    }

    const addTask = function(task, projectName)
    {
        dataStorage.projectObject[`${projectName}`].push(task);

        console.log(dataStorage.consoleLogStorage());
    }

    const editTask = function(taskID, projectName, editedName, editedDescription, editedDueDate, editedPriority, editedNotes)
    {
        let taskToEdit = dataStorage.projectObject[`${projectName}`];

        taskToEdit[taskID].taskName = editedName;
        taskToEdit[taskID].taskDescription = editedDescription;
        taskToEdit[taskID].dueDate = editedDueDate;
        taskToEdit[taskID].priority = editedPriority;
        taskToEdit[taskID].notes = editedNotes;
    }

    const deleteTask = function(taskID, projectName)
    {
        let taskToDelete = dataStorage.projectObject[`${projectName}`];

        taskToDelete = taskToDelete.filter(function(obj)
        {
            return obj.taskID !== taskID;
        });

        dataStorage.projectObject[`${projectName}`] = taskToDelete;

        console.log(dataStorage.consoleLogStorage());
    }

    return {
        incrementTaskID,
        incrementProjectID,
        addProject,
        deleteProject,
        addTask, 
        editTask, 
        deleteTask,
    };
})();

export default updateObject;