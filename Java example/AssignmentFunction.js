//Greeting Function 

function greeting(name)
{
    console.log(`Hello, ${name}! Welcome!`);
}

greeting("Richa");

//Even or Odd Checker

function evenOdd(num){
    if(num %2 === 0)
    {
        console.log("Even");
    }
    else{
        console.log("Odd");
    }
}

evenOdd(5);

//Square Calculator

function squr(num){
    return num*num;

}

console.log(squr(4));


//Maximum of Two Numbers

function maxOfTwo(a,b){
    return a>b ? a:b;
}

console.log(maxOfTwo(10,20));

//greeting array function

const greetingArray = name=>console.log(`hello,${name}! Welcome`);
greetingArray("Richa");

//even odd array
const evenOrOddArray = num => console.log(num % 2 === 0 ? "Even" : "Odd");
evenOrOddArray(14);

//square

const squareArray = num => num * num;
console.log(squareArray(6));

//Maximum of two

const maxOfTwoArray=(a, b) => (a > b ? a : b);
console.log(maxOfTwoArray(30, 15));