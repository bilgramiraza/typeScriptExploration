"use strict";
const world = 'world';
function greetings(name = world) {
    return `Hello ${name}`;
}
console.log(greetings());
console.log(greetings('Raza'));
