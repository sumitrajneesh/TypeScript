/**
 * number : All numbers,so differentiation between integers of floats
 * string: all text values
 * boolean: just these two no , "truthy" or "falsy" values
 * object : any javascript object , more specific types (type of object) are possible
 */

 const person = {
     name:"sumit",
     age:30,
     hobbies:['sports','cooking']
 }

 let favoriteActivities: string[];
 favoriteActivities = ['Sports'];

 console.log(person.name);

 for(const hobby of person.hobbies){
     console.log(hobby.toUpperCase())
    //  console.log(hobby.map())
 }