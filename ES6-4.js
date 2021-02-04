//Arrow Function:
let doMath = (x, y) => {
  const sum = x + y;
  const dif = x - y;
  const result = sum * dif;
  return result;
}
const finalResult = doMath(4, 2);
console.log(finalResult);