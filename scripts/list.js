// Take data from LocalStorage, if it is empty take a new empty array
let storage = localStorage.getItem("storage") || [];
const startIndex = 0;

if (typeof storage === "string") {
  storage = JSON.parse(storage); // string => object
}

// show old list items

const listExample = document.getElementById("list-example");
const mainSection = document.getElementsByClassName("main__section")[0];

function addList() {
  const listName = prompt("Put the name of your new list").trim();

  // Check correct form of List Name
  if (!listName) {
    alert("Put the correct name");
    addList();
    return;
  }

  // define new id
  const id = storage.length ? storage[storage.length - 1].id + 1 : startIndex;

  const newList = { listName, id };
  // Copy List from example in the bottom of HTML
  drawList(newList);

  // Add List Name in Local Storage
  storage.push(newList);

  // Create storage data as a string
  localStorage.setItem("storage", JSON.stringify(storage));
}

document.addEventListener("DOMContentLoaded", pinList); // Create Event - if Reload of page => do a function

function pinList() {
  // Take every List from storage (loop) and append in document(after reload)
  storage.forEach(drawList);
}

function drawList(listItem) {
  const { listName, id } = listItem;
  const newList = listExample.cloneNode(true);
  newList.removeAttribute("id");
  newList.setAttribute("data-id", id);
  newList.querySelector(".main__list-btn").setAttribute("data-id", id);

  const nodeTitle = newList.querySelector(".main__list-name b");
  nodeTitle.innerHTML = listName;

  mainSection.appendChild(newList);
}

// REMOVE LIST
function removeList(e) {
  let { id } = e.currentTarget.dataset;
  id = Number(id);
  console.log(id);

  // delete from UI
  // delete from store

  // delete from local store
  localStorage.setItem("storage", JSON.stringify(storage));
}
