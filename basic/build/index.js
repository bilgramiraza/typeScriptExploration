"use strict";
var world = 'world';
function greetings(name) {
    if (name === void 0) { name = world; }
    return "Hello ".concat(name);
}
console.log(greetings());
console.log(greetings('Raza'));
