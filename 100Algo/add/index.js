const add = (p1, p2) => p1 + p2;

const addMultiple = (...param) => param.reduce((ac, el) => ac + el, 0);

console.log(add(1, 2));
console.log(add(3, 2));

console.log(addMultiple(1, 2, 3, 4, 5));
console.log(addMultiple(2, 3));