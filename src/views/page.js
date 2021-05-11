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

    const updateAttribute = function(selector, attribute, value)
    {
        const element = document.querySelector(selector);

        element.setAttribute(attribute, value);
    }

    return {loadInitialContents, loadNewProjectForm, updateAttribute};
})();

export default page