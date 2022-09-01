// INITIALIZATION
document.addEventListener("DOMContentLoaded", () => {
  storage.forEach(drawList);
});

let storage = localStorage.getItem("store") || [];

if (typeof storage === "string") {
  storage = JSON.parse(storage);
}

// CONSTANTS
const listExample = document.getElementById("list-example");
const mainSection = document.getElementsByClassName("main__section")[0];
const startIndex = 0;

// ACTIONS
// Creation of new list
function addList() {
  const listName = prompt("Put the name of your new list").trim();

  if (!listName) {
    alert("Put the correct name");
    addList();
    return;
  }

  const nextId = storage.length ? storage.at(-1).id + 1 : startIndex;
  const newList = { name: listName, id: nextId, cards: [] };
  drawList(newList);

  storage.push(newList);

  localStorage.setItem("store", JSON.stringify(storage));
}

// Add new list to body
function drawList(listItem) {
  const { name, id, cards } = listItem;
  const newList = listExample.cloneNode(true);
  newList.removeAttribute("id");
  newList.setAttribute("data-id", id);
  const nodeTitle = newList.querySelector(".main__list-name b");
  nodeTitle.innerHTML = name;

  cards.forEach((card) => drawCard(card, id, newList));

  mainSection.appendChild(newList);
}

// List removal
function removeList(e) {
  const parent = e.target.closest(".main__list");
  let { id } = parent.dataset;
  id = Number(id);
  parent.remove();
  const toDeleteIndex = storage.findIndex((elem) => elem.id === id);

  if (toDeleteIndex !== -1) {
    storage.splice(toDeleteIndex, 1);
    localStorage.setItem("store", JSON.stringify(storage));
  }
}

// FOOTER
const shareWidgies = document.querySelector(".share-widget__sub");

shareWidgies.addEventListener("click", function () {
  this.classList.toggle("flipped");
});
