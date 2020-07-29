type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;
/**
 * 
 * function overloading
 */
function add(a:number, b:number):number;
function add(a:string, b:string):string;
function add(a:string, b:number):string;
function add(a:number, b:string):string;
function add(a:Combinable , b:Combinable){
    if(typeof a === 'string' || typeof b === 'string'){
        return a.toString() + b.toString();
    }
    return a + b;
}

// const result = add('sumit', "choudhary") as string;
const result = add('sumit', "choudhary") 
 
result.split('')

/**
 * optional chaning
 */

 const fetchUserData = {
     id:'u1',
     name:'sumit',
     job:{title:'CEO', description: 'My own company'}
 }



 console.log(fetchUserData?.job?.title)

 /**
  * nullish coalescing ??
  */

  const userInput = null;
  const storeData = userInput ?? 'DEFAULT';
  console.log(storeData)