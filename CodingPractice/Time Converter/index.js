let hoursInput = document.getElementById("hoursInput");
let minutesInput = document.getElementById("minutesInput");
let convertBtn = document.getElementById("convertBtn");
let timeInSeconds = document.getElementById("timeInSeconds");
let errorMsg = document.getElementById("errorMsg");

function onClickEvent() {
  let hours = hoursInput.value;
  let minutes = minutesInput.value;

  if (hours === "" || minutes === "") {
    errorMsg.textContent = "Please enter time in hours and minutes";
    errorMsg.style.color = "#f7faf5";
  } else {
    let hours = parseInt(hoursInput.value);
    let minutes = parseInt(minutesInput.value);
    let seconds = hours * 60 + minutes;
    let result = seconds * 60;
    timeInSeconds.innerText = result + "s";
    timeInSeconds.classList.add("time-in-seconds");
    errorMsg.textContent = "";
  }
}

convertBtn.addEventListener("click", onClickEvent);
