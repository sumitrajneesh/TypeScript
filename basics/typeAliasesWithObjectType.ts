type User = {
    name:string;
    age:number;
}

function greet(user:User){
    console.log("hi , I am " + user.name)
}
function isOlder(user:User, checkAge:number){
    return checkAge > user.age;
}