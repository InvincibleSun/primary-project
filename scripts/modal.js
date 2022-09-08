const MODAL_ACTIVE_CLASS_NAME = "modal-open";
const modalWindow = document.querySelector("#form-modal");
const form = document.querySelector(".form");

const openModalBtn = document.querySelector("#open-modal-btn");
const modalWindowContent = document.querySelector(".modal-window");
const signInBtn = document.querySelector(".button_sign-in");
const closeBtn = document.querySelector(".form__btn");

const emailInput = document.querySelector("#user-email");

let emailTimer;

openModalBtn.addEventListener("click", () => {
  openFormModal();
});

function openFormModal() {
  modalWindow.classList.add(MODAL_ACTIVE_CLASS_NAME);
}

function closeFormModal() {
  modalWindow.classList.remove(MODAL_ACTIVE_CLASS_NAME);
  clearFormFields();
}

function clearFormFields() {
  const modalFields = modalWindow.querySelectorAll("input");

  modalFields.forEach((field) => {
    field.value = "";
  });
}

closeBtn.addEventListener("click", (e) => {
  closeFormModal();
});

modalWindowContent.addEventListener("click", (e) => {
  e.stopPropagation();
});

modalWindow.addEventListener("click", (e) => {
  e.stopPropagation();
  closeFormModal();
});

document.addEventListener("keydown", function (e) {
  if (e.code === "Escape") {
    closeFormModal();
  }
});

emailInput.addEventListener("keyup", function (e) {
  clearTimeout(emailTimer);

  emailTimer = setTimeout(() => {
    console.log(e.target.value);
  }, 200);
});

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const formData = new FormData(form);

//   fetch("/", {
//     method: "POST",
//     headers: { "Content-Type": "application/x-www-form-urlencoded" },
//     body: new URLSearchParams(formData).toString(),
//   })
//     .then(() => {
//       setTimeout(() => {
//         closeFormModal();
//         clearFormFields();
//       }, 4000);
//     })
//     .catch((error) => console.log("Sending form failed"));
// });
