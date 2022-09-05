const MODAL_ACTIVE_CLASS_NAME = "modal-active";
const modalWindow = document.querySelector("#form-modal");
const form = document.querySelector(".form");

const openModalBtn = document.querySelector("#open-modal-btn");
const signInBtn = document.querySelector(".button_sign-in");
const closeBtn = document.querySelector(".form__btn");

openModalBtn.addEventListener("click", () => {
  modalWindow.classList.add(MODAL_ACTIVE_CLASS_NAME);
});

const closeFormModal = () => {
  modalWindow.classList.remove(MODAL_ACTIVE_CLASS_NAME);
};

closeBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  closeFormModal();
});

function clearFormFields() {
  const modalFields = modalWindow.querySelectorAll("input");

  modalFields.forEach((field) => {
    field.value = "";
  });
}
