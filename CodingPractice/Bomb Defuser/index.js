let defuser = document.getElementById("defuser");
let timer = document.getElementById("timer");

let countdown = 10;

let intervalId = setInterval(function () {
  countdown--;
  timer.textContent = countdown;
  if (countdown === 0) {
    timer.textContent = "BOOM";
    clearInterval(intervalId);
  }
}, 1000);

function onKeydown(event) {
  let bombDefuserText = defuser.value;

  if (
    event.key === "Enter" &&
    bombDefuserText === "defuse" &&
    countdown !== 0
  ) {
    timer.textContent = "You did it! You defused the bomb!";
    clearInterval(intervalId);
  }
}

defuser.addEventListener("keydown", onKeydown);
