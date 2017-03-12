//json
var personobj = {
  firstname:'Jun',
  fullname:"",
  age:25,
  married:false,
  hasOwnHair:null,
  children:[{
    firstname:'Ching'
  },{
    firstname:'Chiu'
  }]
};

var personjson = JSON.stringify(personobj);
console.log(personobj);
console.log(personjson);
