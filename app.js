
const users = ['Nathan', 'John', 'William'];

// const nameLengths = users.map(function(u){
//   return u.length;
// })

// Shorter
// const nameLengths = users.map((u) => {
//   return u.length;
// })

const nameLengths = users.map(name => name.length);

console.log(nameLengths);
