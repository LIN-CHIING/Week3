//Function Constructor
"use strict"
class Person{
  constructor(name){
    this.name = name;
  }
  printGreeting(){
    console.log(`Hi, I am ${this.name}!`)
  }
}

var person1 = new Person('Jun');
person1.printGreeting();

var person2 = new Person("Ching");
person2.printGreeting();


//extends
class Employee extends Person{
  constructor(name,job){
    super(name);
    this.job = job
  }
  printGreeting(){
    super.printGreeting();
    console.log(`Hi,I am ${this.name} and I am an ${this.job}!`);
  }
}
var person1 = new Employee('Jun Chiu','illustrator');
person1.printGreeting();

var person2 = new Person('Ching');
person2.printGreeting();


//Prototype
Person.prototype.printGreeting = function(){
  console.log(`Hello, I am ${this.name}, and I have been changed!`);
}
person1.printGreeting();
person2.printGreeting();
