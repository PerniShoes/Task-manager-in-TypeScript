"use strict";
let firstTask = { id: 0, name: "Start adding tasks!", isDone: "Not done", date: new Date() };
let taskList = [firstTask];
let methods = ["list", "add", "do", "quit"];
function ListAllTasks() {
    taskList.forEach(n => console.log(n.name, " ", n.date, " ", n.isDone));
}
let testDate = new Date();
let result = testDate.toLocaleString();
let quit = false;
console.log("Welcome to my task manager!");
console.log("Type one of the available commands  (list,add, do, quit)");
while (!quit) {
}
//# sourceMappingURL=app.js.map