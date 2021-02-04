function doSomething() {
  fetch(`http://www.boredapi.com/api/activity/`)
    .then((res) => res.json())
    .then((data) => {
      // console.log(data);
      document.getElementById(`activity`).innerText = data.activity;
      document.getElementById(`explore-link`).innerText = data.link;
    });
}
doSomething();

//Continuously Calling The function after 10 seconds letter:
setInterval(() => {
  doSomething();
}, 10000);
