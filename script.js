"use strict";
const userDisplay = document.querySelector(".content");
const button = document.querySelector("button");
const image = document.querySelector("img");
function fetchUser() {
  fetch("https://randomuser.me/api/")
    .then((response) => response.json())
    .then((data) => {
      displayUser(data.results[0]);
    });
}

fetch("https://randomuser.me/api/")
  .then((response) => response.json())
  .then((data) => {
    console.log(data.results[0]);
  });

function displayUser(user) {
  if (user.gender === "female") {
    document.body.style.backgroundColor = "pink";
  } else {
    document.body.style.backgroundColor = "rgba(78, 78, 247, 0.95)";
  }
  image.setAttribute("src", `${user.picture.large}`);
  userDisplay.innerHTML = `
     <p class="name">Name:${user.name.first} ${user.name.last}</p>
            <p class="email">Email: ${user.email}</p>
            <p class="phone">Phone: ${user.phone}</p>
            <p class="location">Location: ${user.location.country}</p>
            <p class="age">Age: ${user.dob.age}</p>
  `;
}

button.addEventListener("click", fetchUser);
