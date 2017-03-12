//object
var person = {
  firstname:"Ching",lastname:"Lin",greet: function(){
    console.log('Hi,${this.firstname} ${this.lastname}');
  }
};
person.greet();

console.log(person["firstname"]);

let name,phone;
let info = {
  name:name,
  phone:phone,
  printInfo: function(){
    console.log('Name:${this.name} Phone:${this.phone}');
  }
}

info.name = "Ching"
info.phone = "1234-5678";
info.printInfo();
