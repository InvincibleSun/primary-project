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

  let indexOfCurrentList = storage.findIndex((item) => {
    return item.id === listId;
  });

  storage[indexOfCurrentList].cards.push(newCard);

  localStorage.setItem("store", JSON.stringify(storage));
}

function drawCard(cardItem, listId, currentList) {
  const { name, id } = cardItem;
  const newCard = cardExample.cloneNode(true);
  newCard.removeAttribute("id");
  newCard.setAttribute("data-id", id);
  newCard.setAttribute("data-list-id", listId);
  const nodeTitle = newCard.querySelector(".list-card__name");
  nodeTitle.innerHTML = name;

  const addCardBtn = currentList.querySelector(".add-card");
  currentList.insertBefore(newCard, addCardBtn);
}

// Card removal
function removeCard(e) {
  const parent = e.target.closest(".list-card");
  let { id } = parent.dataset;
  id = Number(id);
  parent.remove();
//   const toDeleteIndex = storage.findIndex((elem) => elem.id === id);

//   if (toDeleteIndex !== -1) {
//     storage.cards.splice(toDeleteIndex, 1);
//     localStorage.setItem("store", JSON.stringify(storage));
//   }
/}
