let billAmount = document.getElementById("billAmount");
let percentageTip = document.getElementById("percentageTip");
let tipAmount = document.getElementById("tipAmount");
let totalAmount = document.getElementById("totalAmount");
let errorMessage = document.getElementById("errorMessage");

function calculateTip() {
  let billAmountValue = billAmount.value;
  let percentageTipValue = percentageTip.value;

  if (billAmountValue === "") {
    errorMessage.textContent = "Please Enter a Valid Input";
  } else if (percentageTipValue === "") {
    errorMessage.textContent = "Please Enter a Valid Input";
  } else {
    errorMessage.textContent = "";
    let billAmountValue = parseInt(billAmount.value);
    let percentageTipValue = parseInt(percentageTip.value);
    let tipAmountValue = billAmountValue * (percentageTipValue / 100);
    let totalAmountValue = billAmountValue + tipAmountValue;
    tipAmount.value = tipAmountValue;
    totalAmount.value = totalAmountValue;
  }
}
