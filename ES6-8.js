function print() {
  console.log(4444);
}
console.log(2222);
console.log(3333);
setTimeout(print, 5000);
setTimeout(() => {
  console.log(`Hello!`);
}, 6000);
console.log(5555);
setInterval(() => {
  console.log(`Doing it`);
}, 3000);
console.log(6666);
