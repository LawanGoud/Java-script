let userInputEl = document.getElementById("userInput");
let sendDeleteRequestBtnEl = document.getElementById("sendDeleteRequestBtn");
let loadingEl = document.getElementById("loading");
let requestStatusEl = document.getElementById("requestStatus");
let httpResponseEl = document.getElementById("httpResponse");

function sendDeleteHTTPRequest() {
  let userInputVal = userInputEl.value;
  let requestUrl = "https://gorest.co.in/public/v2/users" + userInputVal;
  let options = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization:
        "Bearer a3eb50d4564c02afdde3e7d090a9f89876ee2004887c3b8dce40977ca5c24ba4",
    },
  };
  loadingEl.classList.remove("d-none");
  requestStatusEl.classList.add("d-none");

  fetch(requestUrl, options)
    .then(function (response) {
      return response.json();
    })
    .then(function (jsonData) {
      requestStatusEl.classList.remove("d-none");
      loadingEl.classList.add("d-none");

      let requestStatus = jsonData.code;
      let httpResponse = JSON.stringify(jsonData);
      requestStatusEl.textContent = requestStatus;
      httpResponseEl.textContent = httpResponse;
    });
}
sendDeleteRequestBtnEl.addEventListener("click", sendDeleteHTTPRequest);
