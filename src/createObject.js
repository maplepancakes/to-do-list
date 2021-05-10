const createObject = (function()
{
    const createProject = function(projectName)
    {
        this.projectName = projectName;
    }

    const createTask = function(taskName, taskDescription, dueDate, priority, notes)
    {
        this.taskName = taskName;
        this.taskDescription = taskDescription;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
    }

    return {createProject, createTask}
})();

export default createObject;