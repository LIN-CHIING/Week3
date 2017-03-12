//push
let a=["J","u"]
console.log(a);

a.push("n");
console.log(a);

//slice
let a=["C","h","i","u"];
let sliced = a.slice(0,3);
console.log(a);
console.log(sliced);

//forEach
var pages = ["jun","chiu","illustration"];
pages.forEach(
(page)=>console.log(page)
);

//map_1
var numbers = [1,7,3];
var doublenumbers;

doublenumbers = [];
doublenumbers = numbers.map(
(number)=>number*2
);
console.log(doublenumbers);

//map_2
var cars=[
  {model:"Jun",price:"expensive"},{model:"BMW",price:"cheap"}
];
var prices=cars.map((car)=>car.price);
console.log(prices);

//spread operator
function adder(base, ...numbers){
  numbers.forEach(function(number){
    console.log(base+number);
  });
}
adder(1,3,0,7);
