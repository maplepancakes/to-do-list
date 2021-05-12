import dataStorage from "../models/dataStorage";

const page = (function()
{
    const body = document.querySelector(`body`);
    const mainContentContainer = document.createElement(`div`);

    mainContentContainer.setAttribute(`id`, `content`);

    const loadHeader = function()
    {
        const headerContainer = document.createElement(`header`);
        const header = document.createElement(`h1`);
        const newProjectbutton = document.createElement(`button`);

        header.textContent = `To Do List ✔`;

        newProjectbutton.classList.add(`button-style`);
        newProjectbutton.setAttribute(`id`, `new-project-button`);
        newProjectbutton.setAttribute(`type`, `menu`);
        newProjectbutton.textContent = `+ Add Project`;

        body.appendChild(headerContainer);
        headerContainer.appendChild(header);
        headerContainer.appendChild(newProjectbutton);
    }  

    const loadProjectContainer = function()
    {
        const projectContainer = document.createElement(`div`);
        const projectHeader = document.createElement(`h2`);
        const projectListing = document.createElement(`div`);

        projectContainer.setAttribute(`id`, `project-container`);
        
        projectHeader.classList.add(`project-contents-format`);
        projectHeader.setAttribute(`id`, `project-header`);
        projectHeader.textContent = `Projects`;

        projectListing.setAttribute(`id`, `project-listing`);

        body.appendChild(mainContentContainer);
        mainContentContainer.appendChild(projectContainer);
        projectContainer.appendChild(projectHeader);
        projectContainer.appendChild(projectListing);
    }
    
    const loadInitialContents = function()
    {
        loadHeader();
        loadProjectContainer();
    }

    const loadNewProjectForm = function()
    {
        const newProjectFormContainer = document.createElement(`div`);
        const newProjectInput = document.createElement(`input`);
        const submitNewProjectButton = document.createElement(`button`);

        newProjectFormContainer.setAttribute(`id`, `new-project-form-container`);

        newProjectInput.setAttribute(`id`, `new-project-input`);
        newProjectInput.setAttribute(`placeholder`, `e.g. Daily Tasks`);
        newProjectInput.setAttribute(`type`, `text`);

        submitNewProjectButton.classList.add(`button-style`);
        submitNewProjectButton.setAttribute(`id`, `submit-new-project-button`);
        submitNewProjectButton.textContent = `Add Project`;

        const projectListing = document.querySelector(`#project-listing`);

        projectListing.appendChild(newProjectFormContainer);
        newProjectFormContainer.appendChild(newProjectInput);
        newProjectFormContainer.appendChild(submitNewProjectButton);
    }

    const updateProjectListing = function(value)
    {
        const projectContainer = document.querySelector(`#project-container`);

        const projectContent = document.createElement(`div`);
        const projectDescription = document.createElement(`div`);
        const addTaskButton = document.createElement(`div`);

        console.log(`Updating project listing with value: ${value}`);

        projectContent.classList.add(`project-contents-format`);
        projectContent.setAttribute(`id`, `project-content-${dataStorage.getProjectID()}`);
        
        projectDescription.classList.add(`project-content`);
        projectDescription.setAttribute(`id`, `project-description-${dataStorage.getProjectID()}`);
        projectDescription.textContent = value;

        addTaskButton.classList.add(`project-content`);
        addTaskButton.setAttribute(`id`, `add-task-${dataStorage.getProjectID}`);
        addTaskButton.textContent = `+`;

        projectContainer.appendChild(projectContent);
        projectContent.appendChild(projectDescription);
        projectContent.appendChild(addTaskButton);
    }

    const updateAttribute = function(selector, attribute, value)
    {
        const element = document.querySelector(selector);

        element[`${attribute}`] = `${value}`;
    }

    const removeElementFromParent = function(parentSelector, childSelector)
    {
        const parentElement = document.querySelector(`${parentSelector}`);
        const childElement = document.querySelector(`${childSelector}`);

        parentElement.removeChild(childElement);
    }

    return {
        loadInitialContents, 
        loadNewProjectForm, 
        updateProjectListing,
        updateAttribute, 
        removeElementFromParent,
    };
})();

export default page