let subscribeFormEl = document.getElementById("subscribeForm");

let nameEl = document.getElementById("name");
let nameErrMsgEl = document.getElementById("nameErrMsg");

let emailEl = document.getElementById("email");
let emailErrMsgEl = document.getElementById("emailErrMsg");

let errorMsg = "Required";

nameEl.addEventListener("blur", function (event) {
  if (event.target.value === "") {
    nameErrMsgEl.textContent = errorMsg;
  } else {
    nameErrMsgEl.textContent = "";
  }
});

emailEl.addEventListener("blur", function (event) {
  if (event.target.value === "") {
    emailErrMsgEl.textContent = errorMsg;
  } else {
    emailErrMsgEl.textContent = "";
  }
});
