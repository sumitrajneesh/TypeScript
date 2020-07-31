// function Logger(constructor:Function){
//     console.log('Logging....');
//     console.log(constructor)
// }


// @Logger
// class Person{
//     name = 'sumit';
//     constructor(){
//         console.log('Creating person object...');
//     }
// }



// const pers  = new Person();
// console.log(pers)


/**
 * 
 * working with decorator factories
 */
// function Logger(logString:string){
//    return function(constructor:Function) {
//    console.log('Logging....');
//     console.log(constructor)}
// }


// @Logger('Logging  -person')
// class Person{
//     name = 'sumit';
//     constructor(){
//         console.log('Creating person object...');
//     }
// }



// const pers  = new Person();
// console.log(pers)

/**
 * Building More Useful Decorators
 */

function Logger(logString:string){
   return function(constructor:Function) {
   console.log('Logging....');
    console.log(constructor)}
}

function WithTemplate(template:string, hookId:string){
    return function(constructor:any){
        console.log('Renerintemplate');
        const hookEL = document.getElementById(hookId);
        const p = new constructor();

        if(hookEL){
            hookEL.innerHTML = template;
            hookEL.querySelector('h1')!.textContent = p.name
        }
    }
}

@WithTemplate('<h1>My Person Object</h1>','app')
@Logger('Logging  -person')
class Person{
    name = 'sumit';
    constructor(){
        console.log('Creating person object...');
    }
}



const pers  = new Person();
console.log(pers)
