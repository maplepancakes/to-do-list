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

    const deleteTask = function(ID, projectName)
    {
        let taskToDelete = dataStorage.projectObject[`${projectName}`];

        taskToDelete = taskToDelete.filter(function(obj)
        {
            return obj.taskID !== ID;
        });

        console.log(taskToDelete);

        dataStorage.projectObject[`${projectName}`] = taskToDelete;

        console.log(dataStorage.consoleLogStorage());
    }

    const getTaskIDFromAttribute = function(attribute, spliceIndex)
    {
        attribute = attribute.split(``);
        attribute = attribute.splice(spliceIndex);
        attribute = attribute.join(``);

        return attribute;
    }

    return {
        incrementTaskID,
        incrementProjectID,
        addProject,
        deleteProject,
        addTask, 
        editTask, 
        deleteTask,
        getTaskIDFromAttribute,
    };
})();

export default updateObject;