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

  let indexOfCurrentList = storage.findIndex((item) => {
    return item.id === listId;
  });

  const cardsArray = storage[indexOfCurrentList].cards;

  const nextId = !!cardsArray.length ? cardsArray.at(-1).id + 1 : 0;
  const newCard = { name: cardName, id: nextId, text: "" };

  drawCard(newCard, listId, parent);

  storage[indexOfCurrentList].cards.push(newCard);

  localStorage.setItem("store", JSON.stringify(storage));
}

function drawCard(cardItem, listId, currentList) {
  const { name, id, text } = cardItem;
  const newCard = cardExample.cloneNode(true);
  newCard.removeAttribute("id");
  newCard.setAttribute("data-id", id);
  newCard.setAttribute("data-list-id", listId);
  const nodeTitle = newCard.querySelector(".list-card__name");
  nodeTitle.innerHTML = name;

  const nodeText = newCard.querySelector("textarea");

  nodeText.value = text;

  const addCardBtn = currentList.querySelector(".add-card");
  currentList.insertBefore(newCard, addCardBtn);
}

// Card removal
function removeCard(e) {
  const parent = e.target.closest(".list-card");
  let { id, listId } = parent.dataset;
  id = Number(id);
  listId = Number(listId);
  parent.remove();

  let indexOfCurrentList = storage.findIndex((item) => {
    return item.id === listId;
  });

  const toDeleteIndex = storage[indexOfCurrentList].cards.findIndex(
    (elem) => elem.id === id
  );

  if (toDeleteIndex !== -1) {
    storage[indexOfCurrentList].cards.splice(toDeleteIndex, 1);
    localStorage.setItem("store", JSON.stringify(storage));
  }
}

// textarea
function handleText(e) {
  const str = e.target.value;
  const parent = e.target.closest(".list-card");
  let { id, listId } = parent.dataset;
  id = Number(id);
  listId = Number(listId);

  let indexOfCurrentList = storage.findIndex((item) => {
    return item.id === listId;
  });

  const indexOfCurrentCard = storage[indexOfCurrentList].cards.findIndex(
    (elem) => elem.id === id
  );

  storage[indexOfCurrentList].cards[indexOfCurrentCard].text = str;

  localStorage.setItem("store", JSON.stringify(storage));
}
