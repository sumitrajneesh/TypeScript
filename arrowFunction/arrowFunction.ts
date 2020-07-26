// const add = (a:number, b:number) => a + b;
/**
 * 
 * Default parameter
 */

//  const add = (a:number, b:number = 1) => a + b;
// //  const add = (a:number = 1, b:number ) => a + b;
// //  console.log(add(5) ) //shows error, don't put first default params

// const printOutput: (a:number | string) => void = output => console.log(output)

// const button = document.querySelector('button');
// if(button){
//     button.addEventListener('click', event => console.log(event))
// }
// console.log(add(2,5));
  
/**
 * Spread Operator{......}
 */

 const hobbies = ['Sports', 'Cooking'];
 const activeHobbies = ['Hikking'];

 activeHobbies.push(...hobbies);

 const person ={
     firstName:'Max',
     age:30
 };

 const copiedPerson = {...person}

 /**
  * Rest parameters
  */

  const add = (...numbers: number[]) => {
      return numbers.reduce((curResult,curValue) =>{
          return curResult + curValue
      },0)
  }

  const addedNumbers = add(5,10, 2,3.7);
  console.log(addedNumbers)


  /**
   * destructuring
   */

   const [hobby1, hobby2, ...remainingHobbies] = hobbies;
   //descturction is not change real array

//    const {firstName , age} = person; //object destructing 
   const {firstName:userName , age} = person; //object destructing 
