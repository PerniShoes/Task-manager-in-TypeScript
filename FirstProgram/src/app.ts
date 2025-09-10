// TO DO LIST quick task to test knowledge

import promptSync from "prompt-sync";
const prompt = promptSync();

type Task = {

    id: number,
    name: string,
    isDone: "Done" | "Not done",
    date: Date

}

let firstTask: Task = { id: 0, name: "Start adding tasks!", isDone: "Not done", date: new Date() };
let taskList: Task[] = [firstTask];

let methods: string[] = ["list", "add","complete","quit","cmdlist"];

function AddNewTask(): void {
    console.log("Adding new task");
    let newTask: Task = { id: taskList.length, name: "Empty", isDone: "Not done", date: new Date() };

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
        } else {
            break;
        } 
    }
    newTask.date = new Date(taskData);
    taskList.push(newTask);
    console.log("Task added!");
}

function CompleteTask(): void
{
    let taskToComplete = prompt("Which task? (ID): ");
    while (true) {

        if (taskToComplete.toLowerCase() === "leave") {
            console.log("Left");
            return;
        }
        for (let i = 0; i < taskList.length; ++i)
        {
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

function ListAllTasks(): void
{
    taskList.forEach(n => console.log("ID: ", n.id, " ", n.name, " ", n.date.toLocaleDateString("en-GB")," ", n.isDone));
}

function cmdList():void {

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

    // Command checking
    commandCalled = commandCalled.toLowerCase();
    let isValidCommand = true;
    for (let i = 0; i < methods.length; ++i) {

        if (methods[i] !== commandCalled) {
            isValidCommand = false;
            continue;
        } else {
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

    // Valid command used
    switch (commandCalled)
    {
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
            console.log("Bye :D!")
            quit = true;
            // To make the console stay open
            setTimeout(() => {}, 1000);
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