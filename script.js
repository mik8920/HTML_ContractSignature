const contractForm = document.getElementById("contractForm");
const submitFormBtn = document.querySelector(".submitFormBtn");
const lastName = document.getElementById("lname");
const firstName = document.getElementById("fname");
const signature = document.getElementById("signature");
const checkbox = document.getElementById("checkbox");
const scrollBtn = document.querySelector(".scrollBtn");
const contractWindow = document.querySelector(".privateContract");
const validationMessage = document.querySelector(".validationMessage");

const validateFields = (e) => {
  let isValid = true;

  if (
    checkbox.checked &&
    signature.value !== "" &&
    firstName.value !== "" &&
    lastName.value !== "" &&
    (
      contractWindow.scrollTop <
      contractWindow.scrollHeight - contractWindow.offsetHeight + 2
    )
  ) {
    validationMessage.style.display = "block";
    isValid = false;
  } else {
    validationMessage.style.display = "none";
    isValid = true;
  }

  if (!checkbox.checked) {
    checkbox.setCustomValidity(
      "Θα πρέπει να αποδεχτείτε τους όρους του συμφωνητικού για να συνεχίσετε."
    );
    checkbox.reportValidity();
    isValid = false;
  } else {
    checkbox.setCustomValidity("");
  }

  if (signature.value === "") {
    signature.setCustomValidity("Το πεδίο είναι υποχρεωτικό");
    signature.reportValidity();
    isValid = false;
  } else {
    signature.setCustomValidity("");
  }

  if (firstName.value === "") {
    firstName.setCustomValidity("Το πεδίο είναι υποχρεωτικό");
    firstName.reportValidity();
    isValid = false;
  } else {
    firstName.setCustomValidity("");
  }

  if (lastName.value === "") {
    lastName.setCustomValidity("Το πεδίο είναι υποχρεωτικό");
    lastName.reportValidity();
    isValid = false;
  } else {
    lastName.setCustomValidity("");
  }

  if (!isValid) {
    e.preventDefault();
  }
};

submitFormBtn.addEventListener("click", validateFields);

scrollBtn.addEventListener("click", function () {
  contractWindow.scrollIntoView({
    behavior: "smooth",
    block: "end",
  });
});

contractWindow.addEventListener("scroll", function () {
  if (
    contractWindow.scrollTop ==
    contractWindow.scrollHeight - contractWindow.offsetHeight + 2 //scrollTop is 0 based
  ) {
    scrollBtn.style.display = "none";
  } else {
    scrollBtn.style.display = "block";
  }
});
