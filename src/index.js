import createObject from "./models/createObject";
import updateObject from "./models/updateObject";
import dataValidation from "./models/dataValidation";
import page from "./views/page";
import dataStorage from "./models/dataStorage";

page.loadInitialContents(); // Loads initial contents of page

const openAddProjectFormButton = document.querySelector(`#new-project-button`); // Button to open form that allows for addition of projects

openAddProjectFormButton.addEventListener(`click`, function(e)
{
    const newProjectFormContainer = document.querySelector(`#new-project-form-container`);
    
    if (!newProjectFormContainer) // If the form that allows for addition of new projects is not loaded, run code block
    {
        page.loadNewProjectForm(); // Loads form that allows for addition of new projects

        const addProjectButton = document.querySelector(`#submit-new-project-button`); // Button that adds user inputted projects in the textbox

        addProjectButton.addEventListener(`click`, function(e)
        {
            const newProjectInput = document.querySelector(`#new-project-input`);

            if (dataValidation.isEmptyString(newProjectInput.value) === false) // If textbox input in the project form is not empty, run code block
            {
                if (!dataStorage.getProjectObjectValue(newProjectInput.value)) // If textbox input does not contain an existing project name, run code block
                {
                    createObject.createProject(newProjectInput.value); // Creates new key-value pair, with key equal to value of textbox input, and the value an empty array []

                    page.updateProjectListing(newProjectInput.value); // Appends textbox input to display
                    page.updateAttribute(`#new-project-input`, `value`, ``); // Empties textbox value
                    page.updateAttribute(`#new-project-input`, `placeholder`, `e.g. Daily Tasks`); // Updates textbox placeholder to 'e.g. Daily Tasks'
                }
                else if (dataStorage.getProjectObjectValue(newProjectInput.value)) // If textbox input contains an existing project name, prevent another project with the same name from being created
                {
                    return;
                }
            }
            else if (dataValidation.isEmptyString(newProjectInput.value) === true) // If textbox input in the project form is empty, run code block
            {
                page.updateAttribute(`#new-project-input`, `placeholder`, `Type something here...`); // Updates textbox placeholder from 'e.g. Daily Tasks' to 'Type something here...'
                
                return;
            }
        });
    }
    else if (newProjectFormContainer) // If the form that allows for addition of new projects is already loaded, prevent another form from being loaded
    {
        return;
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