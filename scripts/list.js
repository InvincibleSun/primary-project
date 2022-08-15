// Take data from LocalStorage, if it is empty take a new empty array
let storage = localStorage.getItem("storage") || [];

if (typeof storage === "string") {
  storage = JSON.parse(storage); // string => object
}

// console.log(storage);
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

  // Copy List from example in the bottom of HTML
  const newList = listExample.cloneNode(true);
  newList.removeAttribute("id");

  // Push List Name in the List
  const nodeTitle = newList.querySelector(".main__list-name b");
  nodeTitle.innerHTML = listName;

  // Add List in the Document
  mainSection.appendChild(newList);

  // Add List Name in Local Storage
  storage.push({ listName });

  // Create storage data as a string
  localStorage.setItem("storage", JSON.stringify(storage));
}

document.addEventListener("DOMContentLoaded", pinList); // Create Event - if Reload of page => do a function

function pinList() {
  // Take every List from storage (loop) and append in document(after reload)
  storage.forEach(({ listName }) => {
    const newList = listExample.cloneNode(true);
    newList.removeAttribute("id");

    const nodeTitle = newList.querySelector(".main__list-name b");
    nodeTitle.innerHTML = listName;

    mainSection.appendChild(newList);
  });
}
