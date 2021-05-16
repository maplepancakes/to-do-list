import createObject from "./models/createObject";
import updateObject from "./models/updateObject";
import page from "./views/page";
import dataStorage from "./models/dataStorage";

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

const openAddProjectFormButton = document.querySelector(`#new-project-button`); // Button to open form that allows for addition of projects

openAddProjectFormButton.addEventListener(`click`, function(e)
{
    /*
    SUMMARIZED EXPLANATION OF CODE BLOCK: -
    - If `+ Add Project` button is clicked: -
        a. Form that allows for addition of new projects is appended to display
        b. `+ Add Project` button becomes `- Add Project` button
    - Upon clicking of `-Add Project` button: -
        a. Form that allows for addition of new projects is removed from display
        b. `- Add Project` button becomes `+ Add Project` button
    - Upon clicking the `Add Project` button in the form input: -
        a. The input will be appended in the `Projects` display
        b. The input will be stored in the object in dataStorage.projectObject
    - The appended inputs (or project names) in the `Projects` display are clickable. Upon clicking them: -
        a. The project name is appended onto the task screen as a header
        b. A `Delete Project` button is appended to display
    - Upon clicking the `Delete Project` button: -
        a. The project name header is removed from the task screen
        b. The project is removed from dataStorage.projectObject
        c. The `Delete Project` button is removed from display
    - In the 'Projects' section, if the '+' icon next to the project name is clicked: -
        a. Form that allows for addition of new tasks in relation to the project name is appended to display
        b. `+` icon becomes `-` icon
    - Upon clicking the `-` icon: -
        a. Form that allows for addition of new tasks in relation to the project name is removed from display
        b. `-` icon becomes `+` icon
    */
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

                    projectDescription = document.querySelectorAll(`.project-description`); // Checks to see if there are any projects appended to display in the `Projects` section
                    
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

                            const deleteProjectButton = document.querySelector(`#delete-project-button`); // `Delete Project` button

                            deleteProjectButton.onclick = function(e)
                            {
                                updateObject.deleteProject(projectDescription[i].textContent); // Removes project from dataStorage.projectObject

                                // Variable for identifying ID of existing projects in the 'Projects' section
                                let projectContentID = projectDescription[i].id;
                                
                                projectContentID = projectContentID.split(``);
                                projectContentID = projectContentID.splice(20);
                                projectContentID = projectContentID.join(``);   

                                page.removeElementFromParent(`#project-listing`, `#project-content-${projectContentID}`); // Removes project from display
                                page.updateAttribute(`#delete-project-button`, `id`, `delete-project-button-hidden`); // Re-hides the 'Delete Project' button
                                page.updateAttribute(`#task-header`, `textContent`, ``); // Empties the project name header from the task screen
                            };
                        };
                    }

                    projectAddTaskIcon = document.querySelectorAll(`.project-add-task-icon`);

                    for (let i = 0; i < projectAddTaskIcon.length; i++)
                    {
                        projectAddTaskIcon[i].onclick = function(e)
                        {
                            let projectContentID = projectAddTaskIcon[i].id;
                                
                            projectContentID = projectContentID.split(``);
                            projectContentID = projectContentID.splice(9);
                            projectContentID = projectContentID.join(``);

                            if (projectAddTaskIcon[i].textContent === `-`)
                            {
                                page.removeElementFromParent(`#project-content-${projectContentID}`, `#new-task-input`);
                                page.updateAttribute(`#add-task-${projectContentID}`, `textContent`, `+`);
                            }
                            else if (projectAddTaskIcon[i].textContent === `+`)
                            { 
                                page.loadNewTaskForm(`#project-content-${projectContentID}`);
                                page.updateAttribute(`#add-task-${projectContentID}`, `textContent`, `-`);

                                const taskNameInput = document.querySelector("input[name='task-name']");
                                const dueDateInput = document.querySelector("input[name='due-date']");
                                const priorityInput = document.querySelector("select[name='priority']");

                                const newTaskButton = document.querySelectorAll(`#new-task-button`);

                                newTaskButton.addEventListener(`click`, function(e)
                                {
                                    let chosenPriorityColour = function()
                                    {
                                        if (priorityInput.value === `High`)
                                        {
                                            return dataStorage.priorityColour[0];
                                        }
                                        else if (priorityInput.value === `Medium`)
                                        {
                                            return dataStorage.priorityColour[1];
                                        }
                                        else if (priorityInput.value === `Low`)
                                        {
                                            return dataStorage.priorityColour[2];
                                        }
                                    };

                                    page.updateTaskListing(taskNameInput.value, dueDateInput.value, chosenPriorityColour(), priorityInput.value);
                                    page.appendSeparator();

                                    const projectName = document.querySelector(`#project-description-${projectContentID}`);
                                    console.log(projectName);

                                    const newTask = new createObject.createTask(taskNameInput.value, dueDateInput.value, chosenPriorityColour(), priorityInput.value);
                                    connsole.log(newTask);
                                    //updateObject.addTask(newTask, )

                                    /*
                                    REQUIREMENTS: -
                                    - task listing must be updated for chosen project only (both display and storage)
                                    - input for all fields cannot be blank
                                    - task listing will only be displayed if the project name is clicked
                                    */

                                    /*
                                    To fix: -
                                    - newTaskButton variable is not selecting all the task buttons
                                    */
                                });
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

/*createObject.createProject(`Miscellaneous Tasks`);
createObject.createProject(`Main Tasks`);

let task1 = new createObject.createTask(`a`, `b`, `c`, `d`, `e`);
let task2 = new createObject.createTask(`gay`, ``,``,``,``);
let task3 = new createObject.createTask(`gay`, ``,``,``,``);
let task4 = new createObject.createTask(`gay`, ``,``,``,``);

updateObject.addTask(task1, `Miscellaneous Tasks`);
updateObject.addTask(task2, `Miscellaneous Tasks`);
updateObject.addTask(task3, `Miscellaneous Tasks`);
updateObject.addTask(task4, `Miscellaneous Tasks`);*/