import dataStorage from "./dataStorage";

const dataMethods = (function()
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

    const editTask = function(ID, projectName, editedTaskName, editedDueDate, editedPriorityColour, editedPriority)
    {
        let taskIndex = dataStorage.projectObject[`${projectName}`];
        
        taskIndex = taskIndex.findIndex(function(obj)
        {
            return obj.taskID === ID;
        });

        let taskToEdit = dataStorage.projectObject[`${projectName}`];

        taskToEdit[taskIndex].taskName = editedTaskName;
        taskToEdit[taskIndex].dueDate = editedDueDate;
        taskToEdit[taskIndex].priorityColour = editedPriorityColour;
        taskToEdit[taskIndex].priority = editedPriority;
        
        console.log(dataStorage.consoleLogStorage());
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

    const chosenPriorityColour = function(priorityInputValue) // Returns colour based on chosen priority select input (e.g. If 'High' is chosen, then retrieve red colour)
    {
        if (priorityInputValue === `High`)
        {
            return dataStorage.priorityColour[0];
        }
        else if (priorityInputValue === `Medium`)
        {
            return dataStorage.priorityColour[1];
        }
        else if (priorityInputValue === `Low`)
        {
            return dataStorage.priorityColour[2];
        }
    };

    return {
        incrementTaskID,
        incrementProjectID,
        addProject,
        deleteProject,
        addTask, 
        editTask, 
        deleteTask,
        getTaskIDFromAttribute,
        chosenPriorityColour,
    };
})();

export default dataMethods;