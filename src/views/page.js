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

        console.log(`Loading page header...`);

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

        console.log(`Loading project container...`);

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

    const loadTaskContainer = function()
    {
        const taskContainer = document.createElement(`div`);
        const taskHeaderContainer = document.createElement(`div`);
        const taskHeader = document.createElement(`h1`);
        const deleteProjectButton = document.createElement(`button`);
        const taskListing = document.createElement(`div`);

        console.log(`Loading task container...`);

        taskContainer.setAttribute(`id`, `task-container`);

        taskHeaderContainer.setAttribute(`id`, `task-header-container`);

        taskHeader.setAttribute(`id`, `task-header`);
        taskHeader.textContent = ``;

        deleteProjectButton.classList.add(`button-style`);
        deleteProjectButton.setAttribute(`id`, `delete-project-button-hidden`);

        taskListing.setAttribute(`id`, `task-listing`);

        mainContentContainer.appendChild(taskContainer);
        taskContainer.appendChild(taskHeaderContainer);
        taskHeaderContainer.appendChild(taskHeader);
        taskHeaderContainer.appendChild(deleteProjectButton);
        taskContainer.appendChild(taskListing);
    }
    
    const loadInitialContents = function()
    {
        loadHeader();
        loadProjectContainer();
        loadTaskContainer();
    }

    const loadNewProjectForm = function()
    {
        const projectContainer = document.querySelector(`#project-container`);

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

        projectContainer.appendChild(newProjectFormContainer);
        newProjectFormContainer.appendChild(newProjectInput);
        newProjectFormContainer.appendChild(submitNewProjectButton);
    }

    const updateProjectListing = function(value)
    {
        const projectListing = document.querySelector(`#project-listing`);

        const projectContent = document.createElement(`div`);
        const projectDescription = document.createElement(`div`);
        const addTaskButton = document.createElement(`div`);

        console.log(`Updating project listing with value: ${value}`);

        projectContent.classList.add(`project-contents-format`);
        projectContent.classList.add(`project-contents`);
        projectContent.setAttribute(`id`, `project-content-${dataStorage.projectID}`);
        
        projectDescription.classList.add(`project-content`);
        projectDescription.classList.add(`project-description`);
        projectDescription.setAttribute(`id`, `project-description-${dataStorage.projectID}`);
        projectDescription.textContent = value;

        addTaskButton.classList.add(`project-content`);
        addTaskButton.classList.add(`project-add-task-icon`);
        addTaskButton.setAttribute(`id`, `add-task-${dataStorage.projectID}`);
        addTaskButton.textContent = `+`;

        projectListing.appendChild(projectContent);
        projectContent.appendChild(projectDescription);
        projectContent.appendChild(addTaskButton);
    }

    const loadNewTaskForm = function(projectContentID)
    {
        let optionArray = [];
        let optionValue = [`High`, `Medium`, `Low`];

        const newTaskInput = document.createElement(`div`);
        const taskNameLabel = document.createElement(`label`);
        const taskNameInput = document.createElement(`input`);
        const dueDateLabel = document.createElement(`label`);
        const dueDateInput = document.createElement(`input`);
        const selectPriorityLabel = document.createElement(`label`);
        const selectPriority = document.createElement(`select`);
        const newTaskButton = document.createElement(`button`);

        for (let i = 0; i < 3; i++)
        {
            optionArray[i] = document.createElement(`option`);
        }

        console.log(`Loading new task form...`);

        newTaskInput.setAttribute(`id`, `new-task-input`);

        taskNameLabel.setAttribute(`for`, `task-name`);
        taskNameLabel.textContent = `Task Name:`;

        taskNameInput.setAttribute(`name`, `task-name`);
        taskNameInput.setAttribute(`placeholder`, `e.g. Feed dog`)
        taskNameInput.setAttribute(`type`, `test`);

        dueDateLabel.setAttribute(`for`, `due-date`);
        dueDateLabel.textContent = `Due Date:`;

        dueDateInput.setAttribute(`name`, `due-date`);
        dueDateInput.setAttribute(`type`, `date`);

        selectPriorityLabel.setAttribute(`for`, `priority`);
        selectPriorityLabel.textContent = `Priority`;

        selectPriority.setAttribute(`name`, `priority`);

        for (let i = 0; i < 3; i++)
        {
            optionArray[i].setAttribute(`value`, `${optionValue[i]}`);
            optionArray[i].textContent = `${optionValue[i]}`;
        }

        newTaskButton.classList.add(`button-style`);
        newTaskButton.setAttribute(`id`, `new-task-button`);
        newTaskButton.setAttribute(`type`, `submit`);
        newTaskButton.textContent = `Add Task`;

        const projectContent = document.querySelector(`${projectContentID}`);

        projectContent.appendChild(newTaskInput);
        newTaskInput.appendChild(taskNameLabel);
        newTaskInput.appendChild(taskNameInput);
        newTaskInput.appendChild(dueDateLabel);
        newTaskInput.appendChild(dueDateInput);
        newTaskInput.appendChild(selectPriorityLabel);
        newTaskInput.appendChild(selectPriority);
        
        for (let i = 0; i < 3; i++)
        {
            selectPriority.appendChild(optionArray[i]);
        }

        newTaskInput.appendChild(newTaskButton);
    }

    const updateTaskListing = function(taskNameTextContent, dueDateTextContent, priorityColour, priorityTextContent)
    {
        const taskListing = document.querySelector(`#task-listing`);

        const taskContent = document.createElement(`div`);
        const deleteIcon = document.createElement(`label`);
        const taskName = document.createElement(`label`);
        const dueDate = document.createElement(`label`);
        const priority = document.createElement(`label`);
        const editButton = document.createElement(`button`);
        
        taskContent.classList.add(`task-contents-format`);
        taskContent.setAttribute(`id`, `task-content-${dataStorage.taskID}`);

        deleteIcon.classList.add(`icon`);
        deleteIcon.setAttribute(`id`, `delete-icon-${dataStorage.taskID}`);
        deleteIcon.textContent = `X`;

        taskName.setAttribute(`id`, `task-name-${dataStorage.taskID}`);
        taskName.textContent = `${taskNameTextContent}`;

        dueDate.setAttribute(`id`, `due-date-${dataStorage.taskID}`);
        dueDate.textContent = `${dueDateTextContent}`;

        priority.classList.add(`${priorityColour}`);
        priority.setAttribute(`id`, `priority-${dataStorage.taskID}`);
        priority.textContent = `${priorityTextContent}`;

        editButton.classList.add(`button-style`);
        editButton.classList.add(`task-container-buttons`);
        editButton.setAttribute(`id`, `edit-button-${dataStorage.taskID}`);
        editButton.setAttribute(`type`, `menu`);
        editButton.textContent = `✏️ Edit`;

        taskListing.appendChild(taskContent);
        taskContent.appendChild(deleteIcon);
        taskContent.appendChild(taskName);
        taskContent.appendChild(dueDate);
        taskContent.appendChild(priority);
        taskContent.appendChild(editButton);
    }

    const appendSeparator = function()
    {
        const taskListing = document.querySelector(`#task-listing`);

        const separator = document.createElement(`div`);

        separator.classList.add(`separator`);
        separator.setAttribute(`id`, `separator-${dataStorage.taskID}`);

        taskListing.appendChild(separator);
    }

    const updateAttribute = function(selector, attribute, value)
    {
        const element = document.querySelector(`${selector}`);

        console.log(`Updating ${attribute} of ${element} to ${value}`);

        element[`${attribute}`] = `${value}`;
    }

    const removeElementFromParent = function(parentSelector, childSelector)
    {
        const parentElement = document.querySelector(`${parentSelector}`);
        const childElement = document.querySelector(`${childSelector}`);

        console.log(`Removing ${childElement.id} from ${parentElement.id}`);

        parentElement.removeChild(childElement);
    }

    return {
        loadInitialContents, 
        loadNewProjectForm, 
        updateProjectListing,
        loadNewTaskForm,
        updateTaskListing,
        appendSeparator,
        updateAttribute, 
        removeElementFromParent,
    };
})();

export default page