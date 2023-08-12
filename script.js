// -------------- problem 1--------------
function printObjectProperties(obj){
    //check if object is empty
    if(Object.keys(obj).length === 0){
        console.log("Object is Empty.")
        return
    }
    for (let prop in obj){
        console.log(`${prop}: ${obj[prop]}`)
    }

}
const obj = {
    name: "Mobinul Islam Mahi",
    age: 19,
    city: "Cox'sBazar"
}
printObjectProperties(obj)

// -------------- problem 2--------------
function findMaxNumber(numbers1){
    if (numbers1.length === 0){
        return null
    }
    let max = numbers1[0]
    for(let i = 1; i<numbers1.length; i++){
        if (numbers1[i]>max){
            max = numbers1[i]
        }
    }
    return max
}
const numbers1 = [10, 20, 5, 30, 25];
console.log(findMaxNumber(numbers1)); 

// -------------- problem 3 --------------
function mergeArrays(arr1, arr2){
    return [...arr1, ...arr2]
}
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
console.log(mergeArrays(arr1,arr2))

// -------------- problem 4 --------------
const calculateSquare = (numbers) => {
    return Math.pow(numbers, 2)
}
console.log(calculateSquare(6))

// -------------- problem 5 --------------
function doubleNumbers(numbers){
    return numbers.map(number => number*2)
}
const numbers = [5,7,8,9,6];

console.log(doubleNumbers(numbers));

// -------------- problem 6 --------------

class MathUtility{
    
    static multiply(a, b){
        return a*b
    }
}
console.log(MathUtility.multiply(5,9))

// -------------- problem 7 --------------

class Animal{
    constructor(name, sound){
        this.name = name
        this.sound = sound
    }
    makeSound (){
        return this.sound
    }
}
class Dog extends Animal{
    fetch(){
        console.log("Fetching the ball!")
    }
}
const animal = new Animal("Lion", "Roar")
console.log(animal.makeSound()) //output Roar

const dog = new Dog("Buddy", "Woof");
console.log(dog.makeSound()) // output woof
dog.fetch()

// -------------- problem 8 --------------
class Person{
    constructor(name, age){
        this.name = name;
        this.age = age
    }
    introduce(){
        console.log(`Hello, I am ${this.name}. I am ${this.age} years old.`)
    }
}
class Student extends Person{
    constructor(name, age, major){
        super(name, age);
        this.major = major
    }
    introduce(){
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old. I am majoring in ${this.major}.`);
    }
}

const person1 = new Person("Mobinul Islam Mahi", 19)
person1.introduce()//output :"Hello, my name is Mobinul islam mahi.  I am 19 years old."

const student1 = new Student("Sadid Toha", 20, "Computer Science")
student1.introduce()// Output: "Hello, my name is Sadid Toha and I am 20 years old. I am majoring in Computer Science."



