
/**
 * Tuple: Added by typescript:Fixed-length array
 */


const person1 :{
    name:string;
    age:number;
    hobbies:string[];
    role:[number, string]
} = {
    name:"sumit",
    age:30,
    hobbies:['sports','cooking'],
    role:[2,'auther']
}

// person.role.push('admin')
// person.role[1] = 10;
// person.role = [0,'admin', 'user']
// let favoriteActivities: string[];
favoriteActivities = ['Sports'];

console.log(person.name);

for(const hobby of person.hobbies){
    console.log(hobby.toUpperCase())
   //  console.log(hobby.map())
}