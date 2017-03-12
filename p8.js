//promise
let promise = new Promise((resolve,reject)=>{
  resolve();
});

promise.then(()=>{
  console.log('Work is finished!!!');
});

promise.catch(()=>{
  console.log('Oh Ya!');
});


let peomise = new Promise((resolve,reject)=>{
  resolve();
});
promise
  .then(()=>console.log('Work is finished!!!'))
  .then(()=>console.log('God job!'));




let peomise = new Promise((resolve,reject)=>{
  reject();
});
promise
  .then(()=>console.log('Work is finished!!!'))
  .then(()=>console.log('God job!'));
  .catch(()=>console.log('Oh ya~'));
