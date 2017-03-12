//callback function
function greet(callback){
  console.log("Hi~");
  var data = {name:"jun"};
  callback(data);
}

greet(data=>{
  console.log("The callback was invked!");
  console.log(data);
}
);
