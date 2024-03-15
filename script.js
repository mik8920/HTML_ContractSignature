const contractForm = document.getElementById("contractForm");
const submitFormBtn = document.querySelector(".submitFormBtn");

const validateFields = (e) => {
  const lastName = document.getElementById("lname");
  const firstName = document.getElementById("fname");
  const signature = document.getElementById("signature");
  const checkbox = document.getElementById("checkbox");
  let isValid = true;

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
