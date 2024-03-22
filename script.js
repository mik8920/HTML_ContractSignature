const contractForm = document.getElementById("contractForm");
const submitFormBtn = document.querySelector(".submitFormBtn");
const lastName = document.getElementById("lname");
const firstName = document.getElementById("fname");
const signature = document.getElementById("signature-pad");
const checkbox = document.getElementById("checkbox");
const scrollBtn = document.querySelector(".scrollBtn");
const contractWindow = document.querySelector(".privateContract");
const validationMessageScroll = document.querySelector(
  ".validationMessageScroll"
);
const validationMessageSign = document.querySelector(".validationMessageSign");
const clearBtn = document.getElementById("clearBtn");
let hasRead = false;

const signaturePad = new SignaturePad(signature, {
  penColor: "rgb(0,0,0)",
});

const validateFields = (e) => {
  let isValid = true;

  if (
    checkbox.checked &&
    !signaturePad.isEmpty() &&
    firstName.value !== "" &&
    lastName.value !== "" &&
    hasRead === false
  ) {
    validationMessageScroll.style.display = "block";
    isValid = false;
  } else {
    validationMessageScroll.style.display = "none";
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

  if (signaturePad.isEmpty()) {
    validationMessageSign.style.display = "block";
    isValid = false;
  } else {
    validationMessageSign.style.display = "none";
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

scrollBtn.addEventListener("click", () => {
  contractWindow.scrollIntoView({
    behavior: "smooth",
    block: "end",
  });
});

contractWindow.addEventListener("scroll", () => {
  if (
    contractWindow.scrollTop ==
    contractWindow.scrollHeight - contractWindow.offsetHeight + 2 //scrollTop is 0 based
  ) {
    scrollBtn.style.display = "none";
    hasRead = true;
  } else {
    scrollBtn.style.display = "block";
  }
});

clearBtn.addEventListener("click", () => {
  signaturePad.clear();
});

