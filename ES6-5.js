//Rest Operator and Spread Operator:
//i) when we used ...as function parameter than it is Rest Operator otherwise it is Spread Operator:
//Ex: ...Rest Operator:
const addAll = (...rest) => {
  return rest.reduce((a, b) => a + b);
}
console.log(addAll(1, 2, 3, 4, 5));

//Ex: ...Spread Operator:
const arr = [1, 2, 3, 4];
console.log(...arr);

const obj = {
  x: 10,
  y: 20,
  z: 30,
};
console.log(obj);

const obj2 = {
  ...obj,
};
console.log(obj2);

let shochib = 300;
let minister = 500;
let businessMan = 650;
const maximum = Math.max(shochib, minister, businessMan);
console.log(maximum);

const takaPoisa = [350, 850, 550];
const max = Math.max(...takaPoisa);
console.log(max);