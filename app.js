
let a, b

// Rest pattern
[a, b, ...rest] = [100, 200, 300, 400, 500]

// Array destructuring
// const people = ['John', 'Beth', 'Mike']
//
// const [person1, person2, person3] = people
//
// console.log(person2);

// Parse array returned from function
// function getPeople(){
//   return ['John', 'Beth', 'Mike']
// }
//
// let person1, person2, person3
// [person1, person2, person3] = getPeople()
// console.log(person2);

const person = {
  name: 'John Doe',
  age: 32,
  city: 'Miami',
  gender: 'Male',
  sayHello: function(){
    console.log('Hello');
  }
}

// Old ES5
const { name, age, city, sayHello } = person

sayHello();
