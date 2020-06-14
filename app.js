
// async function myFunc(){
//
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('Hello'), 1000)
//   });
//
//   const error = false;
//
//   if(!error){
//     const res = await promise; // wait until promise is resolved, 1 second
//     return res;
//   } else {
//     await Promise.reject(new Error('Something went wrong...'))
//   }
//
// }
//
// myFunc().then(x => console.log(x)).catch(beezlebub => console.log(beezlebub))

async function getUsers(){

  // await response of fetch call
  const response = await fetch('https://jsonplaceholder.typicode.com/users');

  // only proceed once it's resolved
  const data = await response.json();

  // only proceed once second promise is resolved
  return data;
}

getUsers().then(x => console.log(x))
