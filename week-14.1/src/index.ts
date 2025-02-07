"use strict";

// Declaring a variable 'a' of type number and initializing it with value 1
let a: number = 1;
console.log(a);

// Declaring an empty string variable 'firstName'
let firstName: string = "";

// Function to display a greeting message with the provided name
function display(x: string): void {
    firstName = x;
    console.log(`hello ${firstName}`);
}

// Calling display function with 'sachin' as argument
display("sachin");

// Function to calculate the sum of two numbers and return the result
function Sum(a: number, b: number): number {
    return a + b;
}

// Calling Sum function and storing result in 'ans'
let ans: number = Sum(9, 8);
console.log(ans);

// Defining a constant variable 'age' of type number
const age: number = 17;

// Function to check if a person is an adult
function Adult(): boolean {
    if (age > 18) {
        return true;
    } else {
        return false;
    }
}

// Calling Adult function and storing result in 'result'
let result: boolean = Adult();
console.log(result);

// Function that takes another function as an argument and executes it after a delay of 1 second
function delayedCall(anotherFn: () => void): void {
    setTimeout(anotherFn, 1000);
}

// Function to log a message to the console
function log(): void {
    console.log("hiiii everyone");
}

// Calling delayedCall function with log function as argument
delayedCall(log);

///////////////////////
// Function to greet a user object by printing their name
function greet(user: { name: string }): void {
    console.log(user.name);
}

// Creating a user object with name and age properties, then calling greet function
let user = {
    name: "sachin",
    age: 14
};
greet(user);

// Function to greet another user object with first and last name
function greet1(user1: { firstName: string; lastName: string; age: number }): void {
    console.log(user1.firstName);
}

// Creating another user object with first name, last name, and age, then calling greet1 function
let user1 = {
    firstName: "akash",
    lastName: "kumar",
    age: 12
};
greet1(user1);
