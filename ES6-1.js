//Using let,const:
//i) let example:
let patientName = `Taaflu Khan`;
// console.log(patientName);
patientName = `Aljira Anjhum`;
console.log(patientName);

let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum += i;
}
console.log(sum);

//ii) const example:
const quote = `Man is mortal`;
console.log(quote);

const arr = [1, 3, 4, 6];
console.log(arr);
arr[1] = 10;
arr.push(20);
console.log(arr);