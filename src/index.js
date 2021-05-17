import createObject from "./models/createObject";
import updateObject from "./models/updateObject";
import page from "./views/page";
import dataStorage from "./models/dataStorage";

/*
-- FOR TESTING PURPOSES --
createObject.createProject(`Miscellaneous Tasks`);
let task1 = new createObject.createTask(`b`, `c`, `d`, `e`);
updateObject.addTask(task1, `Miscellaneous Tasks`);
updateObject.deleteTask(0, `Miscellaneous Tasks`);
*/

page.loadInitialContents(); // Loads initial contents of page

let projectDescription = document.querySelectorAll(`.project-description`);

/*for (let i = 0; i < projectDescription.length; i++)
{
    projectDescription[i].addEventListener(`click`, function(e)
    {
        console.log(`project-description-${i}`);
    });
}*/

let projectAddTaskIcon = document.querySelectorAll(`.project-add-task-icon`);

/*for (let i = 0; i < projectAddTaskIcon.length; i++)
{
    projectAddTaskIcon[i].addEventListener(`click`, function(e)
    {
        console.log(`project-add-task-icon-${i}`);
    });
}*/

let taskDeleteIcon = document.querySelectorAll(`.icon`);

let taskEditButton = document.querySelectorAll(`.task-container-buttons`);

const openAddProjectFormButton = document.querySelector(`#new-project-button`); // Button to open form that allows for addition of projects

openAddProjectFormButton.addEventListener(`click`, function(e)
{
    if (openAddProjectFormButton.textContent === `- Add Project`) // Checks to see if `+ Add Project` button has been changed to `- Add Project`. If so, run code block
    {
        page.updateAttribute(`#new-project-button`, `textContent`, `+ Add Project`); // Updates text content of `- Add Project` button back to `+ Add Project`
        page.removeElementFromParent(`#project-container`, `#new-project-form-container`); // Removes form that allows for addition of new projects
    }
    else if (openAddProjectFormButton.textContent === `+ Add Project`) // If the form that allows for addition of new projects is not loaded, run code block
    {
        page.updateAttribute(`#new-project-button`, `textContent`, `- Add Project`);
        page.loadNewProjectForm(); // Loads form that allows for addition of new projects

        const addProjectButton = document.querySelector(`#submit-new-project-button`); // Button that adds user inputted projects in the textbox

        addProjectButton.addEventListener(`click`, function(e)
        {
            const newProjectInput = document.querySelector(`#new-project-input`);

            if (newProjectInput.value !== ``) // If textbox input in the project form is not empty, run code block
            {
                if (!dataStorage.projectObject[`${newProjectInput.value}`]) // If textbox input does not contain an existing project name, run code block
                {
                    page.updateProjectListing(newProjectInput.value); // Appends textbox input to display

                    createObject.createProject(newProjectInput.value); // Creates new key-value pair, with key equal to value of textbox input, and the value an empty array []

                    page.updateAttribute(`#new-project-input`, `value`, ``); // Empties textbox value
                    page.updateAttribute(`#new-project-input`, `placeholder`, `e.g. Daily Tasks`); // Updates textbox placeholder to 'e.g. Daily Tasks'

                    projectDescription = document.querySelectorAll(`.project-description`); // Retrieves all project names in the 'Projects' section
                    
                    for (let i = 0; i < projectDescription.length; i++)
                    {
                        projectDescription[i].onclick = function(e)
                        {
                            page.updateAttribute(`#task-header`, `textContent`, `${projectDescription[i].textContent}`); // Appends project form input as a header in the task screen

                            const hiddenDeleteProjectButton = document.querySelector(`#delete-project-button-hidden`); // Selects `Delete Project` button which is hidden

                            if (hiddenDeleteProjectButton)
                            {
                                page.updateAttribute(`#delete-project-button-hidden`, `id`, `delete-project-button`); // Makes `Delete Project` button visible
                                page.updateAttribute(`#delete-project-button`, `textContent`, `Delete Project`);
                            }

                            const taskContent = document.querySelectorAll(`.task-contents-format`); 

                            const deleteProjectButton = document.querySelector(`#delete-project-button`); // `Delete Project` button

                            deleteProjectButton.onclick = function(e)
                            {
                                updateObject.deleteProject(projectDescription[i].textContent); // Removes project from dataStorage.projectObject

                                let projectContentID = projectDescription[i].id; // Variable for identifying ID of existing projects in the 'Projects' section
                                
                                projectContentID = updateObject.getTaskIDFromAttribute(projectContentID, 20);

                                if (taskContent) // Checks if there are any tasks on display, if yes, run code block
                                {
                                    // Removes all tasks from display
                                    page.removeAllElementsFromParent(`#task-listing`, `.task-contents-format`); 
                                    page.removeAllElementsFromParent(`#task-listing`, `.separator`);
                                }

                                page.removeElementFromParent(`#project-listing`, `#project-content-${projectContentID}`); // Removes project from display
                                page.updateAttribute(`#delete-project-button`, `id`, `delete-project-button-hidden`); // Re-hides the 'Delete Project' button
                                page.updateAttribute(`#task-header`, `textContent`, ``); // Empties the project name header from the task screen
                            };

                            if (taskContent) // Checks if there are any tasks on display, if yes, run code block
                            {
                                // Removes all tasks from display
                                page.removeAllElementsFromParent(`#task-listing`, `.task-contents-format`);
                                page.removeAllElementsFromParent(`#task-listing`, `.separator`);
                            }

                            const taskListing = dataStorage.getTaskForProject(projectDescription[i].textContent); // Retrieves all stored tasks for selected project name

                            for (let i = 0; i < taskListing.length; i++)
                            {
                                // Updates display with tasks
                                page.updateTaskListing(taskListing[i].taskID, taskListing[i].taskName, taskListing[i].dueDate, taskListing[i].priorityColour, taskListing[i].priority);
                                page.appendSeparator(taskListing[i].taskID);
                            }

                            const taskHeader = document.querySelector(`#task-header`); // Retrieves header of the task section

                            taskDeleteIcon = document.querySelectorAll(`.icon`); // Retrieves 'X' icon of tasks

                            for (let i = 0; i < taskDeleteIcon.length; i++)
                            {
                                taskDeleteIcon[i].onclick = function(e)
                                {
                                    let taskID = taskDeleteIcon[i].id;

                                    taskID = updateObject.getTaskIDFromAttribute(taskID, 12);
                                    taskID = parseInt(taskID);
                                    
                                    updateObject.deleteTask(taskID, taskHeader.textContent);
                                    
                                    page.removeElementFromParent(`#task-listing`, `#task-content-${taskID}`);
                                    page.removeElementFromParent(`#task-listing`, `#separator-${taskID}`);
                                };
                            }

                            taskEditButton = document.querySelectorAll(`.task-container-buttons`);

                            for (let i = 0; i < taskEditButton.length; i++)
                            {
                                taskEditButton[i].onclick = function(e)
                                {
                                    console.log(taskEditButton[i].id);
                                }
                            }
                        };
                    }

                    projectAddTaskIcon = document.querySelectorAll(`.project-add-task-icon`); // Retrieves all existing '+' icons in the 'Projects' section

                    for (let i = 0; i < projectAddTaskIcon.length; i++)
                    {
                        projectAddTaskIcon[i].onclick = function(e)
                        {
                            let projectContentID = projectAddTaskIcon[i].id; // Variable for identifying ID of existing projects in the 'Projects' section
                                
                            projectContentID = updateObject.getTaskIDFromAttribute(projectContentID, 9);

                            if (projectAddTaskIcon[i].textContent === `-`) // If '+' icon changes to '-' icon, run code block
                            {
                                page.removeElementFromParent(`#project-content-${projectContentID}`, `#new-task-input`); // Removes form that allows for input of new tasks from display
                                page.updateAttribute(`#add-task-${projectContentID}`, `textContent`, `+`); // Changes '-' icon to '+'
                            }
                            else if (projectAddTaskIcon[i].textContent === `+`) // If '-' icon changes to '+' icon, run code block
                            { 
                                page.loadNewTaskForm(`#project-content-${projectContentID}`); // Appends form that allows for input of new tasks to display
                                page.updateAttribute(`#add-task-${projectContentID}`, `textContent`, `-`); // Changes '+' icon to '-'

                                const taskNameInput = document.querySelectorAll("input[name='task-name']");
                                const dueDateInput = document.querySelectorAll("input[name='due-date']");
                                const priorityInput = document.querySelectorAll("select[name='priority']");

                                const newTaskButton = document.querySelectorAll(`#new-task-button`); // 'Add Task' button

                                for (let i = 0; i < newTaskButton.length; i++)
                                {
                                    newTaskButton[i].addEventListener(`click`, function(e)
                                    {
                                        const chosenPriorityColour = function() // Returns colour based on chosen priority select input (e.g. If 'High' is chosen, then retrieve red colour)
                                        {
                                            if (priorityInput[i].value === `High`)
                                            {
                                                return dataStorage.priorityColour[0];
                                            }
                                            else if (priorityInput[i].value === `Medium`)
                                            {
                                                return dataStorage.priorityColour[1];
                                            }
                                            else if (priorityInput[i].value === `Low`)
                                            {
                                                return dataStorage.priorityColour[2];
                                            }
                                        };

                                        if (taskNameInput[i].value === ``)
                                        {
                                            taskNameInput[i].setAttribute(`placeholder`, `Type something here...`); // If 'Task Name' textbox input is blank, set placeholder
                                        }

                                        if (dueDateInput[i].value === ``)
                                        {
                                            dueDateInput[i].setAttribute(`placeholder`, `Input date here...`); // If 'Due Date' date input is blank, set placeholder
                                        }

                                        const projectDescription = document.querySelector(`#project-description-${projectContentID}`); // Retrieves text content of selected project name in the 'Projects' section
                                        const taskHeader = document.querySelector(`#task-header`); // Retrieves header of the task section
                                        
                                        if ((projectDescription.textContent === taskHeader.textContent) && (taskNameInput[i].value !== `` && dueDateInput[i].value !== ``)) // If text content of selected project name in the 'Projects' section matches the text content of the task header in the task section, run code block
                                        {
                                            page.updateTaskListing(dataStorage.taskID, taskNameInput[i].value, dueDateInput[i].value, chosenPriorityColour(), priorityInput[i].value); // Updates task to display for the selected project name
                                            page.appendSeparator(dataStorage.taskID); 
                                        }

                                        if (taskNameInput[i].value !== `` && dueDateInput[i].value !== ``) // If 'Task Name' and 'Due Date' inputs are not blank, run code block
                                        {
                                            const newTask = new createObject.createTask(taskNameInput[i].value, dueDateInput[i].value, chosenPriorityColour(), priorityInput[i].value); // Creates new task based on form input
                                            updateObject.addTask(newTask, projectDescription.textContent); // Stores task into selected project name

                                            page.updateAttribute("input[name='task-name']", `value`, ``);
                                            page.updateAttribute("input[name='task-name']", `placeholder`, `e.g. Feed dog`);
                                            page.updateAttribute("input[name='due-date']", `value`, ``);
                                            page.updateAttribute("input[name='due-date']", `placeholder`, `YYYY/MM/DD`);
                                        }

                                        taskDeleteIcon = document.querySelectorAll(`.icon`); // Retrieves 'X' icon of tasks

                                        for (let i = 0; i < taskDeleteIcon.length; i++)
                                        {
                                            taskDeleteIcon[i].onclick = function(e)
                                            {
                                                let taskID = taskDeleteIcon[i].id;

                                                taskID = updateObject.getTaskIDFromAttribute(taskID, 12);
                                                taskID = parseInt(taskID);
                                                
                                                updateObject.deleteTask(taskID, taskHeader.textContent);
                                                
                                                page.removeElementFromParent(`#task-listing`, `#task-content-${taskID}`);
                                                page.removeElementFromParent(`#task-listing`, `#separator-${taskID}`);
                                            };
                                        }
                                    });
                                }
                            }
                        };
                    }
                }
            }
            else if (newProjectInput.value === ``) // If textbox input in the project form is empty, run code block
            {
                page.updateAttribute(`#new-project-input`, `placeholder`, `Type something here...`); // Updates textbox placeholder from 'e.g. Daily Tasks' to 'Type something here...'
            }
        });
    }
});