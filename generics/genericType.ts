/**
 * Generics 
 */


//   const names : Array<string> = [];
//   names[0].split("")


//   const promise: Promise<number> = new Promise((resolve, reject) => {
//       setTimeout(() => {
//           resolve(10);

//       },2000)
//   })


//   promise.then(data => {
//       data.split('')
//   })


// function merge(objA:object, objB:object) {
//      return Object.assign(objA, objB);
// }

// const mergedObj = merge({name:'Sumit', hobbies:['kumer','choudhar']},{age:30})
// const mergedObj2 = merge({name:'Sumit'},{age:30});
// console.log(mergedObj)
// function merge<T extends object, U extends object>(objA:object, objB:object) {
//      return Object.assign(objA, objB);
// }

// const mergedObj = merge({name:'Sumit', hobbies:['kumer','choudhar']},30}) //it shows error, we should pass object
// const mergedObj2 = merge({name:'Sumit'},{age:30});
// console.log(mergedObj)

/**
 * another generic function
 */

//   interface Lengthy{
//       length:number
//   }


//   function countAndDescribe<T extends Lengthy>(element:T):[T,string]{
//       let descriptionText = 'Got no value';
//       if(element.length === 1){
//           descriptionText = 'Got 1 element';

//       } else if(element.length > 1){
//           descriptionText = 'Got' + element.length + 'elements';
//       }
//       return [element ,descriptionText]
//   }

//   console.log(countAndDescribe(['hi','sumit choudhary']))


//   /**
//    * keyOf constraint
//    */


//    function extractAndConvert<T extends object, U extends keyof T>(
//        obj:T,
//        key:U
//    ){
//        return 'Value' + obj[key];
//    }

//    extractAndConvert({name:'Sumit'},'name')

/**
 * Generic utility Types
 */