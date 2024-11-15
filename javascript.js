let markse = {
    A: "10",
    B: "20",
    C: "30",
    D: "40"
};
markse = 20;

//alert("Script is running!"); // Agar yeh alert aata hai, to code sahi run ho raha hai
console.log(markse);

 let address={
    city:  "Delhi",
   country:  "India", 
   population:  20000000
}

console.log(address);

for (let i=0;i<5;i++){
    console.log("Interation",i);
}

let name =" Yadav";
if(true){
    let namev = "Ankit yadav";
    console.log(namev);
}
console.log(name);

let emptyvalue = null;
console.log(emptyvalue);

const person ={
    name: "Ankit yadav",
    age: 25,
    city: "varansi"
}

console.log(person);
console.log(person.name);

let user = {
    name: "John",        // String
    age: 30,             // Number
    isStudent: false,    // Boolean
    hobbies: ["reading", "gaming"], // Array
    address: null,       // Null
    greet: function() {  // Function as an Object property
        return "Hello, " + this.name;
    }
};

console.log(user); // Output: Hello, John



let age = 25;
if (age <= 18){
    console.log("you are eligible to vote.");

}else {
    console.log("You are not eligible to vote.");
}


let marks = 75;
if(marks >= 90){
console.log("Grade A");
}else if (marks >=80){
    console.log("Graid B");

}else if (marks >=70){
    console.log("Graid C");
    
}else{
    console.log("Graid D");
    
}
// function declaration
function greet(name){
    return "Hello," + name +"!";
}
console.log(greet("Ankit"));

// function declations

function addition(num1,num2){
    return  num1+num2;
}
console.log(addition(10,20));
// expression function
let sum =function (a,b){
    return a+b;
}
console.log(sum(1,20));


// arrow function in js

const multiply =(a,b)=>{
    return a*b;
}
console.log(multiply(5,5));

const addd = (name) => {
    return name ;
};

console.log(addd("Bob")); // Output: Hello, Bob!


// object in javascript 

let person1={
    name: "Ankit",
    age: 25,
    city: "ghazipur"
};
person1.country ="varansi";
person1.age = 36;

delete person1.city;

console.log(person1);


// aray in javascript

let colors = ["red","green","black","white","yellow"];

colors.push("yellow");
colors.unshift("purple");
colors[3]="orange";
colors.pop();
colors.shift();
console.log("colors name=",colors);

// to do list 
function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskList = document.getElementById("taskList");
    let taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    let listItem = document.createElement("li");
    listItem.innerHTML = `
        ${taskText} 
        <button onclick="markComplete(this)">Complete</button> 
        <button onclick="removeTask(this)">Remove</button>
    `;

    taskList.appendChild(listItem);
    taskInput.value = "";
}

function markComplete(button) {
    let listItem = button.parentNode;
    listItem.classList.toggle("completed");
}

function removeTask(button) {
    let listItem = button.parentNode;
    listItem.remove();
}


let value ={
    A: 90,
    B: 80,
    C:70,
    D:60
}
value.A=100;
value.C =40;

console.log (value);


function myFunction(){
    console.log('I was clicked the code ...');
}

function mouseOver(){
    console.log("mouse houre is the box");
}

function show(){
    var x = document.getElementById('task');
    x.style.display='block';
}

const button = document.getElementById("myButton");
const Output = document.getElementById("output");

button.addEventListener('click',()=>{
Output.textContent="button was clicked";
});

// passing data to event handlers
const button1 = document.getElementById('myButton');

button.addEventListener('click', (event) => {
    console.log("Event Type:", event.type); // "click"
    console.log("Target:", event.target); // The clicked element
});


// Traditional function
function OM(a, b) {
    return a + b;
}
console.log(OM(5,3));
// Arrow function
const arrow = (a, b) => a + b;

console.log(arrow(2, 3));  // Output: 5


const namev ="ankit yadav";
 const ages = 26;
 // Traditional string concatenation
console.log("Hello,my name is " +namev+ " and i am ", +ages+ " years old.");
// Templete literal 
console.log(`Hello, mu name is ${namev} and i am ${ages} years old.`);
