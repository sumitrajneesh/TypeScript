
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
interface Greetable {
    name:string;
    greet(phrase:string):void;
}

class Person implements Greetable {
    name:string;
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
user1.greet('HI there - I am');
console.log(user1)