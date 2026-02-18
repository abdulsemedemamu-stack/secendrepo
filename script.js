let bgBtn = document.getElementById("bgBtn");

bgBtn.addEventListener("click", function () {
  document.body.style.background = "lightblue";
});

let input = document.getElementById("nameInput");
let preview = document.getElementById("preview");

input.addEventListener("input", function () {
  preview.textContent = input.value;
});

let addBtn = document.getElementById("addBtn");
let itemInput = document.getElementById("itemInput");
let list = document.getElementById("list");

addBtn.addEventListener("click", function () {
  let li = document.createElement("li");
  li.textContent = itemInput.value;

  list.appendChild(li);
  itemInput.value = "";
});

list.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.remove();
  }
});
document.addEventListener("keydown", function (e) {
  if (e.key === "r") {
    document.body.style.background = "red";
    b;
  }

  if (e.key === "g") {
    document.body.style.background = "green";
  }

  if (e.key === "b") {
    document.body.style.background = "blue";
  }
});
