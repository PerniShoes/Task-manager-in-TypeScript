"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
let firstTask = { id: 0, name: "Start adding tasks!", isDone: "Not done", date: new Date() };
let taskList = [firstTask];
let methods = ["list", "add", "complete", "quit", "cmdlist"];
function AddNewTask() {
    console.log("Adding new task");
    let newTask = { id: taskList.length, name: "Empty", isDone: "Not done", date: new Date() };
    let taskData = prompt("Task name: ");
    newTask.name = taskData;
    taskData = prompt("Task date (format: YYYY-MM-DD): ");
    let temp = new Date(taskData);
    while (true) {
        if (taskData.toLowerCase() === "leave") {
            console.log("Task adding canceled");
            return;
        }
        if (isNaN(temp.getTime())) {
            console.log("Invalid date!");
            console.log("");
            taskData = prompt("Try again (or ;leave;): ");
            temp = new Date(taskData);
        }
        else {
            break;
        }
    }
    newTask.date = new Date(taskData);
    taskList.push(newTask);
    console.log("Task added!");
}
function CompleteTask() {
    let taskToComplete = prompt("Which task? (ID): ");
    while (true) {
        if (taskToComplete.toLowerCase() === "leave") {
            console.log("Left");
            return;
        }
        for (let i = 0; i < taskList.length; ++i) {
            if (taskList[i].id === parseInt(taskToComplete)) {
                taskList[i].isDone = "Done";
                console.log("Task done!");
                return;
            }
        }
        console.log("No ID found. Typo?");
        taskToComplete = prompt("Try again (or ;leave;): ");
    }
}
function ListAllTasks() {
    taskList.forEach(n => console.log("ID: ", n.id, " ", n.name, " ", n.date.toLocaleDateString("en-GB"), " ", n.isDone));
}
function cmdList() {
    for (let i = 0; i < methods.length; ++i) {
        console.log(methods[i]);
    }
}
let quit = false;
console.log("");
console.log("");
console.log("WELCOME TO MY TASK MANAGER!");
console.log("Commands: List; Add; Complete; Quit; CmdList;");
console.log("(NOT case sensitive ;D)");
let commandCalled = prompt("Type command: ");
while (!quit) {
    commandCalled = commandCalled.toLowerCase();
    let isValidCommand = true;
    for (let i = 0; i < methods.length; ++i) {
        if (methods[i] !== commandCalled) {
            isValidCommand = false;
            continue;
        }
        else {
            isValidCommand = true;
            break;
        }
    }
    if (!isValidCommand) {
        console.log("Not a valid command (use cmdList for list of commands)");
        console.log("");
        commandCalled = prompt("Type next command:");
        continue;
    }
    switch (commandCalled) {
        case "cmdlist":
            cmdList();
            break;
        case "add":
            AddNewTask();
            break;
        case "complete":
            CompleteTask();
            break;
        case "quit":
            console.log("Bye :D!");
            quit = true;
            setTimeout(() => { }, 1000);
            break;
        case "list":
            ListAllTasks();
            break;
    }
    if (!quit) {
        console.log("");
        commandCalled = prompt("Type next command:");
    }
}
//# sourceMappingURL=app.js.map