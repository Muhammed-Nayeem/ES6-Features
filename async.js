//Async Await Function:
// async function sayHello(Name) {
//   return `Hello ${Name}`
// }
// const greet = sayHello(`Nayeem`);
// console.log(greet);
// greet.then(res => console.log(res));

//Data Loading by Async Await way:
async function loadData() {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const data = await response.json();
  // displayData(data);
  return data;
}
loadData().then((data) => displayData(data));

//Data Loading Fetch API Function:
// function loadData() {
//   fetch(`https://jsonplaceholder.typicode.com/users`)
//   .then(res => res.json())
//   .then(data => {
//     displayData(data);
//   })
// }
// loadData();

//Show Data in Display Function:
function displayData(data) {
  const dataList = document.getElementById(`user-list`);
  for (let i = 0; i < data.length; i++) {
    const userName = data[i];
    const listItem = document.createElement(`li`);
    listItem.innerText = userName.name;
    dataList.appendChild(listItem);
  }
}
