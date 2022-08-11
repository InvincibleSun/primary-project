let storage = localStorage.getItem("storage") || [];

if (typeof storage === "string") {
  storage = JSON.parse(storage);
}

console.log(storage);
// show old list items

const listExample = document.getElementById("list-example");
const mainSection = document.getElementsByClassName("main__section")[0];

function addList() {
  const listName = prompt("Put the name of your new list").trim();

  if (!listName) {
    alert("Put the correct name");
    return;
  }

  const newList = listExample.cloneNode(true);
  newList.removeAttribute("id");

  const titleNode = newList.querySelector(".main__section__list__name b");
  titleNode.innerHTML = listName;

  mainSection.appendChild(newList);
  storage.push({ listName });

  localStorage.setItem("storage", JSON.stringify(storage));
}
