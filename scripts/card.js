const cardExample = document.getElementById("card-example");

function addCard(e) {
  const cardName = prompt("Put a card name");

  if (!cardName) {
    alert("Please, put a correct name");
    addCard();
    return;
  }

  const parent = e.target.closest(".main__list");
  let { id: listId } = parent.dataset;
  listId = Number(listId);

  const newCard = { name: cardName, id: 0 };
  drawCard(newCard, listId, parent);

  // storage.push(newList);

  // localStorage.setItem("store", JSON.stringify(storage));
}

function drawCard(cardItem, listId, currentList) {
  const { name, id } = cardItem;
  const newCard = cardExample.cloneNode(true);
  newCard.removeAttribute("id");
  newCard.setAttribute("data-id", id);
  newCard.setAttribute("data-list-id", listId);
  const nodeTitle = newCard.querySelector(".list-card__name");
  nodeTitle.innerHTML = name;

  const addCardBtn = currentList.querySelector(".main__list-item");
  currentList.insertBefore(newCard, addCardBtn);
}
