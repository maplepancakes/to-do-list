import dataStorage from "./dataStorage";

const updateObject = (function()
{
    const addTask = function(task, projectName)
    {
        dataStorage.projectObject[`${projectName}`].push(task);

        console.log(dataStorage.consoleLogStorage());
    };

    const editTask = function(taskID, projectName, editedName, editedDescription, editedDueDate, editedPriority, editedNotes)
    {
        
    };

    const deleteTask = function(taskID, projectName)
    {
        let taskToDelete = dataStorage.projectObject[`${projectName}`];

        taskToDelete = taskToDelete.filter(function(obj)
        {
            return obj.taskID !== taskID;
        });

        dataStorage.projectObject[`${projectName}`] = taskToDelete;

        console.log(dataStorage.consoleLogStorage());
    };

    return {addTask, editTask, deleteTask};
})();

export default updateObject;