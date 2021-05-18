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
        dueDateInput.setAttribute(`type`, `text`);
        dueDateInput.setAttribute(`onblur`, "this.type='text'");
        dueDateInput.setAttribute(`placeholder`, `YYYY/MM/DD`);
        dueDateInput.setAttribute(`onfocus`, "this.type='date'");

        selectPriorityLabel.setAttribute(`for`, `priority`);
        selectPriorityLabel.textContent = `Priority`;

        selectPriority.setAttribute(`name`, `priority`);

        for (let i = 0; i < dataStorage.optionValue.length; i++)
        {
            optionArray[i].setAttribute(`value`, `${dataStorage.optionValue[i]}`);
            optionArray[i].textContent = `${dataStorage.optionValue[i]}`;
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

    const updateTaskListing = function(taskID, taskNameTextContent = ``, dueDateTextContent = ``, priorityColour = ``, priorityTextContent = ``, taskNameElement = `label`, dueDateElement = `label`, priorityElement = `label`)
    {
        const taskListing = document.querySelector(`#task-listing`);

        const taskContent = document.createElement(`div`);
        const deleteIcon = document.createElement(`label`);
        const taskName = document.createElement(`${taskNameElement}`);
        const dueDate = document.createElement(`${dueDateElement}`);
        const priority = document.createElement(`${priorityElement}`);
        const editButton = document.createElement(`button`);
        
        if (taskNameElement === `label` && dueDateElement === `label` && priorityElement === `label`)
        {
            taskContent.classList.add(`task-contents-format`);
        }
        else if (taskNameElement === `input` && dueDateElement === `input` && priorityElement === `select`)
        {
            taskContent.classList.add(`task-contents-format-edit`);
        }

        taskContent.setAttribute(`id`, `task-content-${taskID}`);

        if (taskNameElement === `label` && dueDateElement === `label` && priorityElement === `label`)
        {
            deleteIcon.classList.add(`icon`);
            deleteIcon.setAttribute(`id`, `delete-icon-${taskID}`);
            deleteIcon.textContent = `X`;
        }

        taskName.classList.add(`task-name-label`);
        taskName.setAttribute(`id`, `task-name-${taskID}`);

        if (taskNameElement === `label`)
        {
            taskName.textContent = `${taskNameTextContent}`;
        }
        else if (taskNameElement === `input`)
        {
            taskName.setAttribute(`type`, `text`);
            taskName.setAttribute(`placeholder`, `Task Name`);
        }

        dueDate.classList.add(`due-date-label`);
        dueDate.setAttribute(`id`, `due-date-${taskID}`);

        if (dueDateElement === `label`) 
        {
            dueDate.textContent = `${dueDateTextContent}`;
        }
        else if (dueDateElement === `input`)
        {
            dueDate.setAttribute(`type`, `text`);
            dueDate.setAttribute(`onblur`, "this.type='text'");
            dueDate.setAttribute(`placeholder`, `YYYY/MM/DD`);
            dueDate.setAttribute(`onfocus`, "this.type='date'");
        }

        priority.classList.add(`priority-label`);
        priority.classList.add(`${priorityColour}`);
        priority.setAttribute(`id`, `priority-${taskID}`);

        if (priorityElement === `label`)
        {
            priority.textContent = `${priorityTextContent}`;
        }
        else if (priorityElement === `select`)
        {
            const optionArray = [];

            for (let i = 0; i < dataStorage.optionValue.length; i++)
            {
                optionArray[i] = document.createElement(`option`);

                optionArray[i].setAttribute(`value`, `${dataStorage.optionValue[i]}`);
                optionArray[i].textContent = `${dataStorage.optionValue[i]}`;

                priority.appendChild(optionArray[i]);
            }
        }

        if (taskNameElement === `label` && dueDateElement === `label` && priorityElement === `label`)
        {
            editButton.classList.add(`task-container-buttons`);
        }
        else if (taskNameElement === `input` && dueDateElement === `input` && priorityElement === `select`)
        {
            editButton.classList.add(`task-container-buttons-edit`);
        }
        
        editButton.classList.add(`button-style`);
        editButton.setAttribute(`id`, `edit-button-${taskID}`);
        editButton.setAttribute(`type`, `menu`);
        editButton.textContent = `✏️ Edit`;

        const separator = document.querySelector(`#separator-${taskID}`);

        taskListing.insertBefore(taskContent, separator);
        
        if (taskNameElement === `label` && dueDateElement === `label` && priorityElement === `label`)
        {
            taskContent.appendChild(deleteIcon);
        }

        taskContent.appendChild(taskName);
        taskContent.appendChild(dueDate);
        taskContent.appendChild(priority);
        taskContent.appendChild(editButton);
    }

    const appendSeparator = function(taskID)
    {
        const taskListing = document.querySelector(`#task-listing`);

        const separator = document.createElement(`div`);

        separator.classList.add(`separator`);
        separator.setAttribute(`id`, `separator-${taskID}`);

        taskListing.appendChild(separator);
    }

    const updateAttribute = function(selector, attribute, value)
    {
        const element = document.querySelector(`${selector}`);

        console.log(`Updating ${attribute} of ${element} to ${value}`);

        element[`${attribute}`] = `${value}`;
    }

    const updateAllAttributes = function(selector, attribute, value)
    {
        const nodeList = document.querySelectorAll(`${selector}`);

        for (let i = 0; i < nodeList.length; i++)
        {
            nodeList[i][`${attribute}`] = `${value}`;
        }
    }

    const removeElementFromParent = function(parentSelector, childSelector)
    {
        const parentElement = document.querySelector(`${parentSelector}`);
        const childElement = document.querySelector(`${childSelector}`);

        console.log(`Removing ${childElement.id} from ${parentElement.id}`);

        parentElement.removeChild(childElement);
    }

    const removeAllElementsFromParent = function(parentSelector, childSelector)
    {
        const parentElement = document.querySelector(`${parentSelector}`);
        const childNodeList = document.querySelectorAll(`${childSelector}`);

        console.log(`Removing all ${childNodeList} from ${parentElement.id}`);

        for (let i = 0; i < childNodeList.length; i++)
        {
            parentElement.removeChild(childNodeList[i]);
        }
    }

    return {
        loadInitialContents, 
        loadNewProjectForm, 
        updateProjectListing,
        loadNewTaskForm,
        updateTaskListing,
        appendSeparator,
        updateAttribute, 
        updateAllAttributes,
        removeElementFromParent,
        removeAllElementsFromParent,
    };
})();

export default page