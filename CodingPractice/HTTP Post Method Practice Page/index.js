let requestBodyEl = document.getElementById("requestBody");
let sendPostRequestBtnEl = document.getElementById("sendPostRequestBtn");
let loadingEl = document.getElementById("loading");
let requestStatusEl = document.getElementById("requestStatus");
let httpResponseEl = document.getElementById("httpResponse");

function sendPostHTTPRequest() {
  let requestUrl = "https://gorest.co.in/public-api/users";
  let requestBody = requestBodyEl.value;
  let options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization:
        "Bearer a3eb50d4564c02afdde3e7d090a9f89876ee2004887c3b8dce40977ca5c24ba4",
    },
    body: JSON.stringify(requestBody),
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
sendPostRequestBtnEl.addEventListener("click", sendPostHTTPRequest);
