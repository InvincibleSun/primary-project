const modalWindows = document.querySelectorAll(".modal"); //+

const form = document.querySelector(".form");

const modalWindowContent = document.querySelector(".modal-window");
const signInBtn = document.querySelector(".button_sign-in");
const closeBtns = document.querySelectorAll(".form__btn"); //+

const changeTheListModal = document.getElementById("change-the-list");

const emailInput = document.querySelector("#user-email");

let emailTimer;

if (modalWindows.length > 0) {
  modalWindows.forEach((item) => {
    return item.addEventListener("click", function (e) {
      const modalName = item.getAttribute("href").replace("#", "");
      const currentModal = document.getElementById(modalName);
      openFormModal(currentModal);
      e.preventDefault;
    });
  });
}

if (closeBtns.length > 0) {
  closeBtns.forEach((item) => {
    return item.addEventListener("click", function (e) {
      closeFormModal(item.closest(".modal-bgd"));
      e.preventDefault();
    });
  });
}

function openFormModal(currentModal) {
  currentModal.classList.add("modal-open");
  currentModal.addEventListener("click", function (e) {
    if (!e.target.closest(".modal-window")) {
      closeFormModal(e.target.closest(".modal-bgd"));
    }
  });
}

function closeFormModal(currentModal) {
  currentModal.classList.remove("modal-open");
  clearFormFields(currentModal);
}

function clearFormFields(currentModal) {
  const modalFields = currentModal.querySelectorAll("input");

  modalFields.forEach((field) => {
    field.value = "";
  });
}

// modalWindowContent.addEventListener("click", (e) => {
//   e.stopPropagation();
// });

// modalWindows.addEventListener("click", (e) => {
//   e.stopPropagation();
//   closeFormModal();
// });

document.addEventListener("keydown", function (e) {
  if (e.code === "Escape") {
    const popupActive = document.querySelector(".modal-bgd.modal-open");
    closeFormModal(popupActive);
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
