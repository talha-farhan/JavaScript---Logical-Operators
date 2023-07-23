//Logical AND Operator (Both conditions should be true)
let age = 20;
if(age >= 18 && age <= 21){
    console.log("Yes, you are eligible.");
}

//Logical OR Operator (Either one or both conditions should be true)
let marks = 85;
if(marks >= 70 || marks <= 80){
    console.log("You have secured B+ grade.");
}

let a = 8;
let b = 25;
if(a = 10 || b <= 20){
    console.log("Mission Successful!");
}

//Logical NOT Operator (Gives the opposite result)
let salary = 30000;
if(!(salary <= 35000)){
    console.log("Less Salary.");
}
//Using double NOT operator terminates the effect of the first NOT operator.
//null or undefined is always a false value.
