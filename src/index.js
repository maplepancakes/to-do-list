/*
1. WHEN GOING INTO THE SITE, A USER HAS TO ADD A NEW PROJECT.

The user has to key in a value into the textbox which specifies the name of the project.

When the user clicks on the 'Add' button: -
- A new key, with its value taken from the user's textbox input is created in the 'Projects' object.
    (e.g. User keys in 'Miscellaneous Tasks' and clicks on the 'Add' button, a new key 'Miscellaneous Tasks' is created with another object '{}' property: -

    ProjectObject = 
    {
        "Miscellaneous Tasks": {},
    }
    )

====================================================================
2. In the new project, the user can add as many to do lists as he/she desires.

The following inputs that a user can set in his/her to-do-list: -
- Task Name (string format)
- Task Description (string format)
- Due Date (format of DD/MM/YYYY)
- Priority (dropdown selection)
- Notes (string format)

When the user clicks on the 'Add' button: -
- A new object will be constructed with the following properties: -
toDoTask (taskName, taskDescription, dueDate, priority, notes)
{
    taskName: taskName,
    taskDescription: taskDescription,
    dueDate: dueDate,
    priority: priority,
    notes: notes,
}

Using the created project "Miscellaneous Tasks" example, the created object will be stored in the property of the "Miscellaneous Tasks" key.
    (e.g. ProjectObject["Miscellaneous Tasks"].push(new toDoTask (`Clean dog cage`, ``, `31/05/2021`, `low`, ``))
    
    projectObject = 
    {
        "Miscellaneous Tasks": 
        {
            taskName: `Clean dog cage`,
            taskDescription: ``,
            dueDate = `31/05/2021`,
            priority = `low`,
            notes = ``,
        }
    })
*/

import createObject from "./models/createObject";
import updateObject from "./models/updateObject";

createObject.createProject(`Miscellaneous Tasks`);
createObject.createProject(`Main Tasks`);

let task1 = new createObject.createTask(`a`, `b`, `c`, `d`, `e`);
let task2 = new createObject.createTask(`gay`, ``,``,``,``);
let task3 = new createObject.createTask(`gay`, ``,``,``,``);
let task4 = new createObject.createTask(`gay`, ``,``,``,``);

updateObject.addTask(task1, `Miscellaneous Tasks`);
updateObject.addTask(task2, `Miscellaneous Tasks`);
updateObject.addTask(task3, `Miscellaneous Tasks`);
updateObject.addTask(task4, `Miscellaneous Tasks`);
