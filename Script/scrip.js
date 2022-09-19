// console.log("hello World");
// console.log("Hi");
// console.log("Hello my name is mouse");

// let carcolor1 = "red";
// let carcolor2 = "blue";
// let carcolor3 = "yellow";
// let number1 = 5;
// let number2 = 7;
// let bol = false;

// let carcolor1 = "blueredyelloygreen";
// let try1 = carcolor1.length

// console.log(try1);

// let str2 = "I really like pizza, its amaizing";

// let try2 = str2.indexOf("pizza");

// console.log(try2); 

// let str3 = "bus, car, plane, boat";
// let try3 = str3.slice(0,3);
// console.log(try3);

// let str4 = "please come to my place";
// let try4 = str4.replace("place","home");
// console.log(str4);
// console.log(try4);

// let a = 20;
// let b = 4;
// let c = 12;
// let f = 4+a;

// let d = a+b-c;
// console.log(d);

// let e = a+b/c;
// console.log(e);

// let g = a+f/c+34*7;
// console.log(g);

// let h = a+f/c+34*7-(a*f*c);
// console.log(h);

// let x = 7.82345639481;
// let y = x.toPrecision();
// let z = x.toPrecision(8);

// console.log(y);
// console.log(z);

// let a = 123;
// let b = a.toString();
// console.log(b);

// let quest1 = prompt("Whats your age?");
// let quest2 = prompt("Whats your favorite color?");

// console.log("you are"+" "+quest1+" years old");
// console.log("your favorite color ir "+quest2);

// console.log("hello, welcome to our store");
// console.log("We offer coffe por 2$ each and cookies for 1$ each");

// let q1 = prompt("How many coofee cups would you like?");
// let q2 = prompt("How many cookies would you like?");
// let q3 = prompt("How much would you like to leave as a tip?");

// // console.log(q1+" "+q2+" "+q3);

// q1 = parseInt(q1);
// q2 = parseInt(q2);
// q3 = parseInt(q3);

// c1 = q1*2;
// c2 = q2*1;

// let taxes = (q1+q2)*0.19;

// let total = c1+c2+q3+taxes;

// console.log("you have orderes:"+q1+" coffe for a total of "+c1+"$");
// console.log("you have also ordered"+q2+" cookies for a total of "+c2+"$");
// console.log("you have lefted "+q3+"$ as a tip. The total of your bill is "+total+"$ with taxes");


//let ques1 = ["yellow", "pink", "red", "blue", "purple"];

//Aqui selecionamos un elementeo del del array ques1
// let c1 = ques1[1];
// console.log(c1);

//cambiar un elemento dentro del array ques1
// ques1[1]="black";
// console.log("this color is "+c1);

//Saber el lengh del array
// let c2 = ques1.length;
// console.log("this array contains "+c2+" eelements");

// let ques2 = ["number", 3, 6, true, "string"];

// let c1 = ques2[2]+ques2[1];
// console.log("this value is "+c1);

// let c2 = ques2[2]-ques2[1];
// console.log("this value is "+c2);

// let c3 = ques2[5];
// console.log("this value is "+c3);

//functions
// function food (food) {
//     // let food = "pizza";
//     console.log("I love to eat "+food);
// }

// food("burguer");

//operations

// function food (food) {
//     console.log("I love to eat "+food);
// }

// function order(quantity, price) {
//     console.log("I have ordered "+quantity+" slices");
//     console.log("Each slice cost "+price+" $");
//     console.log("The total of my bill was "+quantity*price+" $");

// }

// food("pizza");
// order(3,2);

//proyect to practice what we saw up until now

// console.log("Let's create a sentence");

// let q1 = prompt("Please, write down your name");
// let q2 = prompt("Write down a color");

// function sentence (name, color) {
//     console.log("Hello, my name is "+name+" and I love "+color+" color");

    
// };

// sentence(q1,q2);



// console.log("lets make an operation");

// let q3 = prompt("Write a number");
// let q4 = prompt("write donw another number");


// function operation (num1, num2) {
//     console.log("Multiplication of numbers "+num1*num2);
//     console.log("Divition of numbers "+num1/num2);
//     console.log("Addition of numbers "+num1+num2);
//     console.log("Substraction of numbers "+num1-num2);
// };

// operation(q3,q4);


// console.log("Let's create a sentence");

// let q1 = prompt("Please, write down your name");
// let q2 = prompt("Write down a color");
// let q3 = prompt("Write a number");
// let q4 = prompt("write donw another number");


// function both (name, color, num1, num2) {
//     console.log("teh slected name is "+name);
//     console.log("teh slected color is "+color);
//     console.log("teh slected number 1 is "+num1);
//     console.log("teh slected numer 2 is "+num2);
// };

// both(q1, q2, q3, q4);


//if, else and else if statement

// console.log("Hello, welcome to the coffeshop");

// let q1 = prompt("What you like a coffee or a tea?")

// if (q1 == "coffee") {
//     let q2 = prompt("would you like cookies with your coffee?");
//     if (q2 == "yes") {
//         console.log("you have ordered coffee and cookies");
//     } else if (q2!= "yes") {
//         console.log("you have only ordered coffee");
//     }
// }else if (q1 == "tea"){
//     let q3 = prompt("would you like cookies with your tea?");
//     if (q3 == "yes") {
//         console.log("you have ordered tea and cookies");
//     }else if (q3 != "yes"){
//         console.log("you have only ordered tea");
//     }
// }else{
//     console.log("ok, have a nice day");
// };

//For loops

// let x = 8;
// for (i = 0; i < x; i++) {
//     console.log("the number "+i+" is still smaller than "+x);
    
// }

// for (i = 0; i < x; i+=2) {
//     console.log("the number "+i+" is still smaller than "+x);
    
// }

// for (i = 1; i < x; i+=2) {
//     console.log("the number "+i+" is still smaller than "+x);
    
// }

//while loop
//create a password and type it until is correct

// console.log("hello, welcome to the app");

// let pass = prompt("Please create a password");

// console.log("Your password have been created. Thank you");

// let passtry = prompt("please enter your passrword");

// while (passtry != pass) {
//     passtry = prompt("error, try again");
// }

// console.log("you are in");



// final project - food app

console.log("hello, welcome to the food app");
console.log("lets create an account");

let username = prompt("Create an username:");
let password = prompt("Create a password:");
console.log("thank you, your account have been created");

console.log("please enter your log in information");

let tryuser = prompt("username: ");
let trypass = prompt("password:");

while (username!=tryuser && password!=trypass) {
    console.log("Wrong password or username. Try again");
    let tryuser = prompt("enter your username");
    let trypass = prompt("enter your password");
};

console.log("you are connected");

let balance = 10;
console.log("your balance is "+balance+" $");

let q1 = prompt("would you like to add money to your account?");

if (q1 == "yes") {
    let q2 = parseInt(prompt("how much would you like to add?"));
    let balance2 = balance + q2;
    console.log("your new balance is "+balance2+" $");
} else {
    console.log("Great");
};


let q4 = prompt("would you like a burguer");

if (q4 == "yes") {
    console.log("please choose the burguer you want");
    let burguerTypes = ["cheeseburguer", "fishburguer", "all dress burguer"];
    let prices = [2,3,5];
    console.log("choice 1: "+burguerTypes[0]+" "+prices[0]+" $");
    console.log("choice 2: "+burguerTypes[1]+" "+prices[1]+" $");
    console.log("choice 3: "+burguerTypes[2]+" "+prices[2]+" $");
    
    let q5 = prompt("What is your choice?");

    if (q5 == "choice 1") {
        console.log("you have ordered a "+burguerTypes[0]);
        console.log("the total of the order ir "+prices[0]+" $");
        let total1 = balance2 - prices[0];
        console.log("you have "+total1+" $ left on your balance");
    }else if (q5=="choice 2") {
        console.log("you have ordered a "+burguerTypes[1]);
        console.log("the total of the order ir "+prices[1]+" $");
        let total1 = balance2 - prices[1];
        console.log("you have "+total1+" $ left on your balance");
    }else if (q5=="choice 3") {
        console.log("you have ordered a "+burguerTypes[2]);
        console.log("the total of the order ir "+prices[2]+" $");
        let total1 = balance2 - prices[2];
        console.log("you have "+total1+" $ left on your balance");
    }
    else{
        console.log("Have a good day");
    };


};













































