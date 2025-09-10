
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

let methods: string[] = ["list","add","do","quit","cmdList"];

//function AddNewTask(newTask: Task): string
//{


//    return "Failed to add task, check input";

//    return "Task added!";
//}

//function CompleteTask(taskId: number): string
//{

//    return "Failed to complete task, check input";

//    return "Task done!";
//}

function ListAllTasks(): void
{

    taskList.forEach(n => console.log(n.name," ", n.date.toLocaleString()," ", n.isDone));
    
}

function cmdList():void {

    for (let i = 0; i < methods.length; ++i) {
        console.log(methods[i]);
    }
}

let quit = false;
console.log("Welcome to my task manager!");
let commandCalled = prompt("Type one of the available commands (list,add, do, quit, cmdList): ");

while (!quit) {

    let isValidCommand = false;
    for (let i = 0; i < methods.length; ++i) {



    }
    if (!isValidCommand) {
        console.log("Not a valid command (use cmdList for list of commands");
    }

    commandCalled = prompt("Type next command:");
}