//bind
var person = {
  firstname:'Ching',
  lastname:'Lin',
  getFullName: function(){
    var fullname = this.firstname+' '+this.lastname;
    return(fullname);
  }
}

var logName = function(){
  console.log(`logged:`+this.getFullName());
}

var logPersonName = logName.bind(person);
logPersonName();


//bind2
let greet = function(fn){
  fn();
};
let person1 = {
  name:"Jun Chiu",
  hello: function(){
    console.log(`Hi~ ${this.name}`);
  },
  sayHello: function(){
   greet(this.hello.bind(this));
  }
};
person1.sayHello();


//bind3
let greet = function(fn){
  fn();
};
let newPerson = {
  name:"Jun",
  sayHello: function(){
   greet(
     ()=>console.log(`Hello ${this.name}`)
        );
  }
};
newPerson.sayHello();
