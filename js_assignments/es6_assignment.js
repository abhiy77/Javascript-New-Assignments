
/**
 * 
 *  Q 1)  Refactor the following function into a one-liner:
 * 
    const printName = (name) => {
        return “Hi” + name;
    }
 * 
 * 
 * 
 */
console.log("------------------printName() function --------------------------");
const printName = (name) => { return "Hi " + name; }
console.log(printName("Abhishek"));

/**
 * 
 *  Q 2)Rewrite the following code using template literals:
 * 
    const printBill = (name, bill) => {
        return “Hi “ + name + “, please pay: “ + bill;
    }
 * 
 * 
 * 
 */

console.log("------------------printBill() function --------------------------");
const printBill = (name, bill) => {
    return `Hi ${name}, please pay: ${bill}`;
}
console.log(printBill("Abhishek", 200));


/**
 * 
 * Q 3)Modify the following code such that the object properties are destructured and logged.
    const person = {
        name: “Noam Chomsky”,
        age: 92
    }
           
    let name = person.name;
    let age = person.age;
    console.log(name);
    console.log(age);
 * 
 * 
 */

console.log("------------------ Object properties destructuring and logging --------------------------");

const person = {
    fullName: "Noam Chomsky",
    age: 92,
}

const {fullName,age} = person;
console.log(fullName);
console.log(age);
