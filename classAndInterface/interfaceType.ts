
// interface Person{
//     name:string;
//     age:number;
//     greet(phrase:string): void;
// }


// let user1:Person;
// user1  = {
//     name:'Sumit',
//     age:30,
//     greet(phrase:string){
//         console.log(phrase + ' ' + this.name )
//     }
// }

/***
 * Using interface with class
 */
// interface Greetable {
//     name:string;
//     greet(phrase:string):void;
// }

// class Person implements Greetable {
//     name:string;
//     age:30;
//     constructor(n:string){
//         this.name = n;
            
//     }
//     greet(phrase:string){
//         console.log(phrase + ' ' + this.name)
//     }

// }

// let user1:Greetable;
// user1 = new Person('Sumit');
// user1.greet('HI there - I am');
// console.log(user1);

/**
 * why interface: share method with another class, useful by using interface
 
 /**
  * Readonly interface Properties 
  */
            //  interface Greetable {
            //      readonly name:string;
            //      greet(phrase:string):void;
            //  }
             
            //  class Person implements Greetable {
            //      name:string;
            //      age:30;
            //      constructor(n:string){
            //          this.name = n;
                         
            //      }
            //      greet(phrase:string){
            //          console.log(phrase + ' ' + this.name)
            //      }
             
            //  }
             
            //  let user1:Greetable;
            //  user1 = new Person('Sumit');
            //  // user1.name="Anjali" ////we can't update we can read only
            //  user1.greet('HI there - I am');
            //  console.log(user1);

            /**
             * extending interface
             */
             
            //  interface Named {
            //      readonly name:string;
            //  }
            //  interface Greetable extends Named{
                
            //      greet(phrase:string):void;
            //  }
             
            //  class Person implements Greetable {
            //      name:string;
            //     //  name:string; if you remove you will get error
            //      age:30;
            //      constructor(n:string){
            //          this.name = n;
                         
            //      }
            //      greet(phrase:string){
            //          console.log(phrase + ' ' + this.name)
            //      }
             
            //  }
             
            //  let user1:Greetable;
            //  user1 = new Person('Sumit');
            //  // user1.name="Anjali" ////we can't update we can read only
            //  user1.greet('HI there - I am');
            //  console.log(user1);



             /**
              * interfaces as Function Types
              */

            //    type AddFn = (a:number, b:number) => number;
               interface AddFn{
                 (a:number,b:number): number;
               }

               let add:AddFn;
               add = (n1:number, n2:number) => {
                   return n1 + n2;
               }


               interface Named {
                readonly name:string;
            }
            interface Greetable extends Named{
               
                greet(phrase:string):void;
            }
            
            class Person implements Greetable {
                name:string;
               //  name:string; if you remove you will get error
                age:30;
                constructor(n:string){
                    this.name = n;
                        
                }
                greet(phrase:string){
                    console.log(phrase + ' ' + this.name)
                }
            
            }
            
            let user1:Greetable;
            user1 = new Person('Sumit');
            // user1.name="Anjali" ////we can't update we can read only
            user1.greet('HI there - I am');
            console.log(user1);


            /**
             * Optional parameters & properties
             */

             