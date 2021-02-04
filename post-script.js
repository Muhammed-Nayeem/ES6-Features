const submitButton = document.getElementById(`submit`);
submitButton.addEventListener(`click`, function () {
  const title = document.getElementById(`title`).value;
  const bodyContent = document.getElementById(`bodyContent`).value;
  const postInformation = {
    title: title,
    body: bodyContent,
  };
  nowPostToServer(postInformation);
});

function nowPostToServer(postDetails) {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(postDetails),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((data) => console.log(data));
}

/*
function displayUsers(users) {
  const usernames = users.map((user) => user.username);
  const ul = document.getElementById(`user-container`);
  console.log(users);

  for (let i = 0; i < usernames.length; i++) {
    const username = usernames[i];
    const li = document.createElement(`li`);
    li.innerText = username;
    ul.appendChild(li);
  }
}
*/
