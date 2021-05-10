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
