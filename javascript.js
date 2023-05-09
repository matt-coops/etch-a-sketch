"use strict";

const container = document.querySelector(".container");
const button = document.querySelector(".btn");

const createSquares = function (side = 16) {
  for (let i = 0; i < side * side; i++) {
    const div = document.createElement("div");
    div.classList.add("square");
    div.style.cssText = `border: 1px solid black; height:${
      960 / side
    }px; width:${960 / side}px `;
    container.appendChild(div);
  }

  const squares = document.querySelectorAll(".square");
  for (const s of squares) {
    s.addEventListener("mouseenter", function () {
      s.style.backgroundColor = "green";
    });
    s.addEventListener("mouseleave", function () {
      s.style.backgroundColor = "lightgreen";
    });
  }
};

button.addEventListener("click", function () {
  let userSQ = prompt("How many? (max 100)");
  if (userSQ > 100) userSQ = 100;
  if (userSQ < 1) userSQ = 1;
  container.innerHTML = "";
  createSquares(userSQ);
});

createSquares();
