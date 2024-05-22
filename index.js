
//used with html code to edit text
document.getElementById("myH1").textContent = 'Hello';
document.getElementById("myP").textContent = 'bruh';
//---variables
let x = 123; //variables, determined by let
let age = 25;// number
let fullName = "Bro"; //string
let isStudent = true; //boolean
//----output
console.log(x);
console.log('You are ${x}');
console.log('You are ',age,' years old');
//similar to java just add commas in between typing text.
console.log(typeof fullName);//shows what type the variable is
//---HTML integration
document.getElementById("p1").textContent = "Your name is " + fullName ;
//just use + to concat string, text content is sending a string variable
document.getElementById("p2").textContent = "Your age is ${age}";
document.getElementById("p3").textContent = "Your a student"+isStudent;
//--operators, +, -, *, /, ** (exp/to the power of), %, ++ (inc), --(dec)
let students = 30;
students = students ** 2; // =900
console.log(students);
//user input--------------------------------------------------------------
/*
let username;
document.getElementById("myButton").onclick = function(){
    //function takes user input and changes text on website to input
    username = document.getElementById("myText").value;
    console.log(username);
    document.getElementById("h1").textContent = "Hello " + username;
}
//type conversion--------------------------------------------------------
let yourAge = window.prompt("How old are you?");
yourAge = Number(yourAge);//type conversion
yourAge++;
console.log(yourAge);
//constants or const
const PI = 3.1459; //make constants capitalized
let radius;
let circumference;

radius = window.prompt("enter the radius of a circle");
radius = Number(radius);

circumference = 2 * PI * radius;
console.log(circumference);
//Math = built-in object that provides collection of properties and methods
//---------------------------------------------------------------------

Math.round
Math.floor
Math.ceil
Math.trunc
Math.pow
Math.sqrt
Math.log
*/
const min = 50;
const max = 100;
let random = Math.floor(Math.random() * (max - min)) + min;
console.log("random num")
console.log(random);

//if statements-------------------------------------------------------
if(age >= 10){
    //do this
}
else{
    //do this instead
}
//ternary operator = a shortcut to if{} and else{} statements----------------
// helps to assign a variable based on a condition
// condition ? code ifTrue : codeIfFalse;

let myAge = 1;
let message = myAge >= 18 ? "You're an adult" : "You are a minor";
console.log(message);
//switch-------------------------------------------------------------------
let day = 1;

switch(day){
    case 1:
        console.log("it is Monday");
        break;
    case 2:
        console.log("it is Tuesday");
        break;
            
    case 3:
        console.log("it is Wedendsaday");
        break;
    default:
        console.log("day");
}

//string methods---------------------------------------------------------
let userName = "BroCode";
//string.charAt(x) char at index x
//string.length how many chars string is
//string.trim() get rid of white space
//string.repeat(x) repeats the string for x amt times 
//string.startswith("x") returns boolean if string starts with char x
//string.replaceAll("x", "y") replaces chars y with x
//string.slice(start, end)

const fullname = "Broseph Code";
let firstName = fullname.slice(0, fullname.indexOf(" "));
let lastName = fullname.slice(fullname.indexOf(" ") + 1);
console.log("firstName is " + firstName);
console.log(lastName);

//Method Chaining = Calling one method after another-----------------------
//                  in one continuous line of code
//no method chaining
//let myUserName = window.prompt("enter your user name");
/*
myUserName = myUserName.trim();
let letter = myUserName.charAt(0);
letter = letter.toUpperCase();

let extraChars = myUserName.slice(1);
extraChars = extraChars.toLowerCase();
myUserName = letter + extraChars;
console.log("user name is "+ myUserName);
*/
//with method chaining
//myUserName = myUserName.trim().charAt(0).toUpperCase() + myUserName.trim().slice(1).toLowerCase();
//console.log(myUserName);

//logical operators------------------------------------------
// && AND
// || OR
// ! NOT
// = assignment operator
// == comparison operator
// === strict equality operator, checks if equal and same data type
// != ineqaulity operator
// !== strict inequality operator

if(isNaN(age)){
    //isNaNchecks if data type is number
}
const PII = 3.14;
if(PII === "3.14"){
    console.log("that is Pi");
    //this evaulates false becase string and num are diff data types
}

//while loop-----------------------------------------------------------
/*
while(this condition is true){
    execute this code
}
do{ makes it so code executes at least once
    execute this code
}while(condition is true)
*/

//for loop--------------------------------------------------
for(let i = 0; i <10; i++){
    //execute this code
    if(i == 3){
        continue;//skip this iteration
    }
    if(i == 4){
        break;//break out of loop
    }
    console.log(i);
}
//function = a section of reusable code similar to method------------------

function happyBirthday(bName, bAge){
    console.log("happy birthday to " + bName + " you are " + bAge);
}


happyBirthday("Dayon", 13);
happyBirthday("Bayon", 33);

//variable scope = where a variable is recognized------------------------
//                 and accessible(local vs global)

let variableX = 1;//global

function variScope(){
    let variableX = 2;//local
    console.log(variableX);//will print 2, takes local over global priority wise
}
//array = a variable that can hold more than 1 value---------------------

let fruits = ["apple", "grape", "banana"];
fruits.sort();
for(let fruit of fruits){
    console.log("heres a fruit: " + fruit);
}
console.log(fruits[1]);
//spread operator =  ... allows in iterable such as an array or string-----
//                  to be expaned into seperate elements
let myString = "abcdef";
let numbers = [1,2,3,4,5];
let letters = [...myString];
console.log("here are some letters: " + letters);//output "a,b,c,d,e,f"
//let maximum = Math.max()

//rest parameters = (... rest) allow a function work with a variable-----------
//                  number of arguments by bundiling them into an array

function openFridge(...foods){
    console.log(foods);
}

const food1 = "pizza"
const food2 = "hot dog"
const food3 = "hamburger"
const food4 = "shushi"

openFridge(food1, food2, food3, food4);
//output  [ "pizza", "hot dog", "hamburger", "shushi" ]

function sum(...numbers){
    let result = 0;
    for(let number of numbers){
        result = result += number;
    }
    return result;
}

const total = sum(2, 1);//total is 3
console.log("your total is " + total);

//calback = a function that is passed as an argument to another function.----
//          used for asynchrous operations, processes that take lots of time

hello(goodbye);

function hello(callback){
    console.log("hello!");
    callback();//gurantees that the goodbye function calls after hello
}

function goodbye(){
    console.log("goodbye!");
}

//forEach() = a method used to iterate over the elements of an array-------------
//              and apply a specified funciton (callback)

let theseNumbers = [1,2,3,4,5,6];

theseNumbers.forEach(double);
theseNumbers.forEach(display);

function display(element){
    console.log(element);
}
function double(element, index, array){
    array[index] = element * 2;
}

let theseFruits = ["apple", "orange", "banan", "coconut"];
fruits.forEach(display);

// .map() = accepts a callback and applies that function to---------------
//          each element of an array, then returns a new array
// map(mehtod to apply mapping to)

const someNumbers = [1, 2, 3, 5, 6];
const squares = numbers.map(squared);

console.log(squares);

function squared(element){
    return Math.pow(element, 2);
}


// .filter() = creates a new array by filtering out elements-------------------

let thoseNumbers = [1,2,3,4,5,6,7];
let evenNums = thoseNumbers.filter(isEven);
console.log(evenNums);

function isEven(element){
    return element % 2 === 0;//returns to filter if meets condition
}//so if a number in that array is even it gets returned back else 
//its filtered out

// .reduce() = reduce the elements of an array to a single value-------------

const prices = [5,30,25,10,15,20];

const myTotal = prices.reduce(calcSum);
const theMax = prices.reduce(getMax);
console.log(myTotal);
console.log(theMax);

function calcSum(accumulator, element){
    return accumulator + element;//accumulator is like temp result,
    //so it can be result += result + element
}

function getMax(accumulator, element){
    return Math.max(accumulator, element);
}

//function declarion = define a reusable block of code to perform a task----------

//function expressions = a way to define functins as values or vraibles

const variFunc = function(){
  //  console.log("Hello");
}//variFunc is the variable that holds the function to be used as a callback
// in the setTimeout func
setTimeout(variFunc, 3000);

//could also do this
setTimeout(function(){
    //console.log("Hello");
}, 3000);


//arrow functions = a concise way to write a function expressions--------------
//                  good for simple functions that you use only once
//                  (parameter) => some code
//more compact way of writing simple methods

const whatsUp = (name)=> console.log("whats up " + name);
whatsUp("dayone");


//object = a collection of related proeprties and / or methods----------------
//          can represent real world objects (people, products, places)
//          object = {key: value, function()}


const person1 = {
    firstName: "dayon",
    lastName: "shanel",
    age: 30,
    isEmployed: false,
    sayHello: function() {console.log("Like whats up danger")},
}

const person2 = {
    firstName: "george",
    lastName: "lucas",
    age: 300,
    isEmployed: true,
    sayHello: () => console.log("its like poetry it rhymes"),
}

console.log(person1.firstName);
console.log(person2.isEmployed);

person1.sayHello();
person2.sayHello();

//this = reference to the object where THIS is used------------------------
//      the object depends on the imediate context
//      person.name = this.name

const people1 = {
    name: "dayum",
    favFood: "fry cheicnen",
    sayHello: function() {console.log("my name is " + this.name)}
}//the this keyword does not work with arrow functions

people1.sayHello();

//constructor = special method for defining the properties and ------------
//              methods of objects

function Car(make, model, c, color){
    this.make = make,
    this.model = model,
    this.year = c,
    this.color = color,
    this.drive = function(){console.log("you drive the " + model)}
}

const car1 = new Car("Ford", "Mustand", 2024, "red");
const car2 = new Car("thanos", "car", 2022, "purple");
console.log(car1.color);
console.log(car2.color);
car1.drive();

//Classes = provides a more structured and cleaner way to work with objects
//----------------------------------------------------------------
class Products{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }

    displayProduct(){
        console.log("Product " + this.name);
        console.log("Price " + this.price);
    }

    calculateTotal(salesTax){
        return this.price+ (this.price * salesTax);
    }
}

const product1 = new Products("Shirt", 19.99);

product1.displayProduct();
console.log(product1.calculateTotal(0.04));

//static = keyword that defines properties or methods that belong---------
//          to a class itself rather than the objects created
//          from that class

class MathUtil{
    static PI = 3.1459;

    static getDiameter(radius){
        return 2 * this.PI * radius;
    }
}

console.log(MathUtil.PI);
console.log(MathUtil.getDiameter(10));
//anything with static means you can't access static methods or vairbales
//through the objects, only through the class itself

class User{
    static userCount = 0;
    constructor(username){
        this.username = username;
        User.userCount++;
    }
}

const user1 = new User("dayon");
const user2 = new User("dyon");

console.log(user1.username);
console.log(User.userCount);
//cant do user1.userCount

//inheritance = allows a new class to inherit properties and methods------

class Animal{
    alive = true;
    eat(){
        console.log("this " + this.name + " is eating");
    }
}

class Rabbit extends Animal{
    name = "rabbit";
    
}
class Fish extends Animal{
    name = "fish";
    swim(){
        console.log("the fish is swimming");
    }
}

const rabbit = new Rabbit();
const fish = new Fish();

rabbit.alive = false;
console.log(rabbit.alive);
rabbit.eat();


fish.eat();
fish.swim();

//super = keyowrd is used in classes to call the constructor or----------
//          access the properties and methods of a parent(superclass)
//          this = this object, super = the parent


class aAnimal{
    constructor(name, age){
        this.name = name;
        this.age = age;
        
    }
    move(speed){
        console.log("this " + this.name +" moves at speed of " + speed);
    }
}


class Dog extends aAnimal{
    constructor(name, age, swimspeed){
        super(name, age);
        this.swimspeed = swimspeed;
    }
    run(){
        console.log("moving");
        super.move(this.swimspeed);
    }
}

class Hawk extends aAnimal{
    constructor(name, age, flyspeed){
        super(name, age);
        this.flyspeed = flyspeed;
    }
}

const dogg = new Dog("doggy", 2, 3);
const hawkk = new Hawk("falco", 3, 353);

console.log(dogg.name);
dogg.run();


//getters and setters---------------------------------------------------
//      getter = special method that makes a property readable
//      setter = special method that makes a property writeable
//validates and modify a value when reading/writing a property

class Rectangle{
    constructor(width, height){
        this.width = width;
        this.height = height;

    }

    set width(newWidth){
        if(newWidth > 0){
            this._width = newWidth;
            //underscore means its a private property
        }
        else{
            console.error("witdh must be a positive number");
        }
    }
    get width(){
        return this._width.toFixed(1);
    }

    set height(newHeight){
        if(newHeight > 0){
            this._height = newHeight;
            //underscore means its a private property
        }
        else{
            console.error("height must be a positive number");
        }
    }
    
    get height(){
        return this._height.toFixed(1);
    }
}

const rectangle = new Rectangle(2343, 39876);
console.log(rectangle.height);
console.log(rectangle.width);

// destructureing = extract values from arrays and objects--------------
//                  then assign them to variables in a convenient way
//                  [] = to perform array destructing
//                  {} = to perform object destructing

//arrays
const colorss = ["red", "green", "blue", "black", "white"];

[colorss[0], colorss[4]] = [colorss[4], colorss[0]];
const[firstcolor, secondcolor, thirdcolor, ...extracolors] = colorss
console.log(firstcolor);
console.log(extracolors);


//functions
function displayPerson({firstNamez, lastNamez, age, job = "unemployed"}){
    console.log("name: " + firstNamez + " " + lastNamez);
    console.log("age " + age);
    console.log("job " + job);
}

//objects
const indvidual1 = {
    firstNamez: "dayon",
    lastNamez: "smith",
    age:20,
    job: "gay"
}

const indvidual2 = {
    firstNamez: "gayon",
    lastNamez: "smut",
    age:200
}

const {firstNamez, lastNamez, agez, job = "unemployed"} = indvidual2;
console.log(job);
console.log(firstNamez);


displayPerson(indvidual1);
displayPerson(indvidual2);

//nested objects = Objects inside of other objects---------------------
//                  allows you to represent more complex data structures

class Peeople{
    constructor(name, age, ...address){
        this.name = name;
        this.age  = age;
        this.address = new Address(...address);
    }
}

class Address{
    constructor(street, city, country){
        this.street = street;
        this.city = city;
        this.country = country;
    }
}

const peeople1 = new Peeople("obama", 23, "123 conch", "cum zone", "USA");
const peeople2 = new Peeople("levi", 21, "wall maria", "scouts", "paradis");
console.log(peeople1.address);
console.log(peeople2.address);

//objects with arrays----------------------------------------------

const fruitArrray = [{name: "apple", color: "red", calories: 93},
                    {name: "grape", color: "purple", calories: 932}
                    ];
console.log(fruitArrray[1].calories);
fruitArrray.push({name: "banans", color: "yellow", calories: 23});
//could also do pop
console.log(fruitArrray[2].calories);

fruitArrray.forEach(fruit => console.log(fruit.color));
const fruitNames = fruitArrray.map(fruit => fruit.name);
console.log(fruitNames);

//sort() = method to sort elements of an array

let shuffled = [2,5,7,4,1, 0, 4,2,22];
shuffled.sort((a,b) => a - b);
console.log(shuffled);

console.log("and we are live with tazonday");

//Date objects = objects that contain values that represent dates and
//              times

//Date(year, month, day, hour, minute, second, ms)
const date = new Date();

const coolDate = new Date(2024, 0, 1,2,3,4,5);
console.log(date);
console.log(coolDate);

const firstDate = new Date(0);
console.log(firstDate);//Wed, Dec 31, 1969

const year = date.getFullYear();
const month = date.getMonth();
const dayz = date.getDate();
const hour = date.getHours();
date.setFullYear(2032);
console.log(date);

const date1 = new Date("2023-12-31");
const date2 = new Date("2020-01-01");

if(date1 > date2){
    console.log("happy new year");
}

//closure = A function defined inside of another function,--------------
//          the inner function has access to the variables and scope
//          of the outer function, can make variables private and maintenance

function outer(){
    let message = "Hello there";

    function inner(){
        console.log(message);
    }
    inner();
}

outer();

function createCounter(){
    let count = 0;

    function increment(){
        count++;
        console.log("count increased to " + count);

    }
   
    function getCount(){
        return count;
    }
    return {increment, getCount};//return an object with its method of increment
}

const counter = createCounter();
counter.increment();
counter.increment();
counter.increment();//notice the count variable is not resetting

//cannot do
// counter.count because the variable is protected would need getter
console.log("count is " + counter.getCount());

//setTimeou() = function that allows you to schedule the execution of----- 
//              a function in milliseconds, approximation (not accurate)

function sayWhatsUp(){
    console.log("whats up danger cant sto pme down");

}

//setTimeout(sayWhatsUp, 3000);

//ES6 module = an external file that contains reusable code------------
//              that can be imported into other javascript files
//              can contain variables, classes, functions .. and more


import{PISS, getCircumference, getArea, getVolume} from "./mathUtil.js";

console.log(PISS);//like libary you use functions from a different file
console.log(getArea(4));//like using diff classes, just remeber use export

//synchrous = Executes line by line consecutively in a sequential manner
//              code that waits for an operation to complete

//asynchrounous = Allows mutiple operation to be performed concurrently without
//                  waiting, doesnt block the execution flow and allows 
//                  the program to continue used with 
//                  I/O operations, network requests, fetching data
//                  handled with: callbacks, promises, asymc await

//setTimeout(()=> console.log("task 1"), 3000);

console.log("task 2");
console.log("task 3");
console.log("task 4");

//Error = An object that is created to represent a problem that occurs
//          Occur often with user input or establishing a connection

/*
try{} encloses code that might potentially cause an error
catch{} = catch and handle any thrown errors from try{}
finally{} = (optional) always executes. used mostly for clean up
*/

try{
    console.log(unnamed);
}
catch(error){
    console.error(error);
}
finally{
    //this code also executes
    console.log("finally execute this after try block");
}
console.log("end of program");//still prints after try/catch block executes
