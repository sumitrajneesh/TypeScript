// function add(n1:number, n2:number){
//     return n1 + n2;
// }


// const number1 = '5';
// const number2 = 2.8;
// const result = add(number1,number2) //shows error bcz of number1
// console.log(result)


// function add(n1:number, n2:number){
//     if(typeof n1 !== 'number' || typeof n2 !== 'number'){
//      throw new Error('Incorrect input');
//     }
//     return n1 + n2;
// }


// // const number1 = '5';
// const number1 = 5;
// const number2 = 2.8;
// const result = add(number1,number2) 
// console.log(result)


/**
 * Type Casing
 */

function addFinal(n1:number, n2:number, showResult:boolean, phrase: string){
    // if(typeof n1 !== 'number' || typeof n2 !== 'number'){
    //  throw new Error('Incorrect input');
    // }

    const result = n1 + n2;
    if(showResult){
        console.log(phrase + result);
    }else {

        return n1 + n2;
    }
}


// const number1 = '5';
// const number1 = 5;
let number1:number;
number1 = 5; //type assignment
const number2 = 2.8;
const printResult = true;
const resultPhrase = 'Result is :'

addFinal(number1,number2, printResult, resultPhrase);

