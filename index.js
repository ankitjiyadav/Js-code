// const student={
//  fullName :" Rahul",
//  lastName: "yadav",
//  age: 25,
//  cgpa: 8.6,
//  ispass : true
// };
// console.log(student);
// const product ={
//     title: "Ball Pen",
//     rating : 4,
//     offer :5,
//     price: 270
// };
// console.log(product );

// const profile ={
//     username: "@Ankityadav",
//     isFollow: "false",
//     followers: 150,
//     following: 250
// };
 
// console.log(profile);


// let  a=5;
// let b=5;
// // Artimetic operators
// console.log("a=",a,"& b =",b);
// console.log("a+b=",a+b);
// console.log("a-b=",a-b);
// console.log("a*b=",a*b);
// console.log("a/b=",a/b);
// console.log("a%b=",a%b);
// console.log("a**b=",a**b);

// // unary operater

// console.log("a++=",a++);
// console.log("++a =",++a);
// console.log("a-- =",a--);
// console.log("--a =",--a);

// // condition statements 

// let age =16;
// if (age>18){
//     console.log("you can vote");
//  } 
//  else{
// console.log("you can not vote");
//  }

//  let marks = 100;
//   if(marks < 80){
//     console.log("80 is first ");
//   }
//   else{
//     console.log("60 is the fail");
//   }

// // switch statement

// const expr = 'Papayas';
// switch (expr) {
//   case 'Oranges':
//     console.log('Oranges are $0.59 a pound.');
//     break;
//   case 'Mangoes':
//   case 'Papayas':
//     console.log('Mangoes and papayas are $2.79 a pound.');
//     // Expected output: "Mangoes and papayas are $2.79 a pound."
//     break;
//   default:
//     console.log(`Sorry, we are out of ${expr}.`);
// }

// const foo = 1;
// let output = "Output: ";
// switch (foo) {
//   case 0:
//     output += "So ";
//   case 1:
//     output += "What ";
//     output += "Is ";
//   case 2:
//     output += "Your ";
//   case 3:
//     output += "Name";
//   case 4:
//     output += "?";
//     console.log(output);
//     break;
//   case 5:
//     output += "!";
//     console.log(output);
//     break;
//   default:
//     console.log("Please pick a number from 0 to 5!");
// }

// // alert 
// //alert("Hello Ankit yadav");
// // prompt 


// // let num = prompt("Enter the number:");
// // if(num %5==0){
// //     console.log(num,"num is multiple of 5");
// // }else{
// //     console.log(num,"num is multiple of 5");
// // }


// // write a code which can give grades to student according to their scores
 
// let scores =75;
// let grade;
//  if (scores >=90 && scores <=100){
//     grade ='A';
//  }else if(scores >= 70 && scores <=80){
//     grade ='B';

//  }else if( scores >= 60 && scores <=70){
//     grade ='C';
//  }else if( scores >= 40 && scores <=60){
//     grade ='D';
//  }else if( scores >= 0 && scores <=40){
//     grade ='F';
//  }
//  console.log("according to your score, you grade was :",grade);
// // loop statements 
// for (let count =1;count <= 100; count++){
//     console.log("ApnaclassMca");
// }

// // while loop statements

// let i=1;
// while(i<=10){
//     console.log("hi ankit yadav");
//     i++;
// }

// for(let i in student){
//     console.log(i,student[i]);
// }


// // string methods
// let str ="Apnaclassmca";
// let newStr = str.toUpperCase();
// console.log(str);
// console.log(newStr);

// // string methods concat  joins str2 with str1 

// // str.replace th value and str.slice  and str.charAt(1)= index value chain th code 
// let str1 = "Ankit";
// let str2 = "yadav";
// let sum = str1.concat(str2);
// console.log(sum);


// // Array 
// //1 
// let number  =[100,990,80,70,60,50];
//  console.log(number);
//  console.log(number);
//  // 2.
//  let name1 = ["Ankit","raji","rahul","shivam","aman","chaman","bhulu","ramesh"];

//  console.log(name1);
//  // array indices

// let markse = [90,80,70,60,50,];
// sum =0;
// for(let val of markse){
//     sum += val;
// }
// console.log(sum);

// // function in javascrip
// const sums = (a,b)=>{
//     console.log(a+b);  
// };


// function countVowels(str){
//      let count =0;
//      for(const char of str){
//      if(char === "a" ||
//         char === "e" ||
//         char === "i" ||
//         char === "o" ||
//         char === "u" 
//      ){
//        count ++;
//      }
//     }
//     return count;
// }
document.getElementById("updateButton").addEventListener("click", function () {
    document.getElementById("contentji").textContent = "Text has been updated!";
});

document.getElementById("updateButt").addEventListener("click", function () {
    document.getElementById("textji").textContent = "Hello Ankit Yadav ji, how are you?";
});


function validateForm() {
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            const errorMessage = document.getElementById('error-message');

            if (username === "" || password === "") {
                errorMessage.textContent = "Please fill in both fields.";
                return;
            }
            
            // Dummy validation: Correct credentials (for example purposes)
            if (username === "admin@gmail.com" && password === "12345") {
                alert("Login successful!");
                errorMessage.textContent = "";   
                // Redirect to another page or perform desired action after login
            } else {
                errorMessage.textContent = "Invalid username or password.";
            }

}


// tic tac teo

let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turno = true;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

const resetGame = () => {
    turno = true;
    enableBoxes();
    msgContainer.classList.add("hide");
    msg.innerText = ""; // Reset message text
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if (box.innerText === "") { // Check if box is empty
            if (turno) {
                box.innerText = "O";
                turno = false;
            } else {
                box.innerText = "X";
                turno = true;
            }
            box.disabled = true;
            checkwinner();
        }
    });
});

const disableBoxes = () => {
    boxes.forEach((box) => {
        box.disabled = true;
    });
};

const enableBoxes = () => {
    boxes.forEach((box) => {
        box.disabled = false;
        box.innerText = "";
    });
};

const showwinner = (winner) => {
    msg.innerText = `Congratulations! Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const checkwinner = () => {
    for (let pattern of winPatterns) {
        const [a, b, c] = pattern;
        let pos1Val = boxes[a].innerText;
        let pos2Val = boxes[b].innerText;
        let pos3Val = boxes[c].innerText;

        if (pos1Val && pos1Val === pos2Val && pos1Val === pos3Val) {
            console.log("winner", pos1Val);
            showwinner(pos1Val);
            return;
        }
    }
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);


let city = "varansi";
city = "Ghazipur";
console.log(city);       // Output: Delhi

const country = "India";
console.log(country);    // Output: India

var population =100000;

population = 50000;
console.log(population); // Output: 1000000

let value = {   // yahan "markse" sahi naam hai
    A: "10",
    B: "20",
    C: "30",
    D: "40"
};
console.log(value); // Yeh sahi tarah se output dega
