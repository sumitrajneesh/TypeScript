/**
 * Class and Interface and Inheritance
 * 
 */


//  class Department {
//      name:string;
//      constructor(n:string) {
//          this.name = n;
//      }
//  }

//  const accounting = new Department("Accounting");
//  console.log(accounting)
 
 /**
  * constructor functions & this keyword 
  */
 
//  class Department {
//      name:string;
//      constructor(n:string) {
//          this.name = n;
//      }
//      describe(this:Department){
//          console.log('Department : ' + this.name)
//      }
//  }

//  const accounting = new Department("Accounting");
//  console.log(accounting)


//  const accountingCopy = {name:'Sumit', describe:accounting.describe};

//  accountingCopy.describe()

/**
 * private and public access modifiers
 */

// class Department {
//     public name:string; //by default is public
//     private employees: string[] = []
//     constructor(n:string) {
//         this.name = n;
//     }
//     describe(this:Department){
//         console.log('Department : ' + this.name)
//     }
//     addEmployee(employee:string){
//         this.employees.push(employee)
//     }
//     printEmployeeInformation(){
//         console.log(this.employees.length)
//         console.log(this)
//     }
// }

// const accounting = new Department("Accounting");
// //add employee
// accounting.addEmployee('sumit');
// accounting.addEmployee("Choudhary");

// // accounting.employees[2] = 'Anish' ,because of private we can't add the new employee from outside of 
// //class function
// console.log(accounting)


class Department {
  
    // public name:string;
    // private id: string;
    //readonly is only in typescript
    private employees: string[] = []
    constructor(private readonly id:string, public name:string) {
        // this.name = n;
    }
    describe(this:Department){
        console.log(`Department ${this.id} :  + ${this.name}`)
    }
    addEmployee(employee:string){
        this.employees.push(employee)
    }
    printEmployeeInformation(){
        console.log(this.employees.length)
        console.log(this)
    }
}

const accounting = new Department('d1',"Accounting");
//add employee
accounting.addEmployee('sumit');
accounting.addEmployee("Choudhary");


// const accountingCopy = {name:'Sumit', describe:accounting.describe};

// accountingCopy.describe()
   