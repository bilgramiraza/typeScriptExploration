const world:string = 'world';

function greetings(name:string = world):string{
  return `Hello ${name}`;
}
console.log(greetings());
console.log(greetings('Raza'));
