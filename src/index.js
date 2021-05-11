import createObject from "./models/createObject";
import updateObject from "./models/updateObject";
import validation from "./models/validation";
import page from "./views/page";

// Loads initial contents of page
page.loadInitialContents();

// Button to open form that allows for addition of projects
const openAddProjectFormButton = document.querySelector(`#new-project-button`);

openAddProjectFormButton.addEventListener(`click`, function(e)
{
    page.loadNewProjectForm();

    // Button that adds user inputted projects in the textbox
    const addProjectButton = document.querySelector(`#submit-new-project-button`);

    addProjectButton.addEventListener(`click`, function(e)
    {
        const newProjectInput = document.querySelector(`#new-project-input`);

        let isEmptyString = validation.validateIsEmptyString(newProjectInput.value);

        if (isEmptyString === true)
        {
            page.updateAttribute(`#new-project-input`, `placeholder`, `Type something here...`);
            
            return;
        }
        else if (isEmptyString === false)
        {
            createObject.createProject(newProjectInput.value);
        }
        /* 
        Requirements: -
        - textbox input must not be empty
        - if add project is clicked, form should only display once
        - once [Add Project] is clicked, it should add the project
            to storage, and also to display
        */
    });
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