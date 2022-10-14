"use strict";
/*
For further developent, the custom input box and the rounding of values would be worked on.
*/
const bill = document.querySelector(".bill-input");

const calcTips = document.querySelectorAll(".tips-btn");

const tips_amount = document.querySelector(".tip-amount");

const total_amount = document.querySelector(".total-amount");

const reset = document.querySelector(".reset");

const numOfPeople = document.querySelector("#num");

const displayCalc = function (bill, percent) {
  tips_amount.textContent = `$${bill * percent}`;
  total_amount.textContent = `$${bill * percent + bill}`;

  reset.classList.add("resetDOM");
};

reset.addEventListener("click", function () {
  reset.classList.remove("resetDOM");
  bill.value = 0;
  tips_amount.textContent = `$0.00`;
  total_amount.textContent = `$0.00`;
  numOfPeople.textContent = Number(numOfPeople.textContent) + 1;
});

for (let i = 0; i < calcTips.length; i++) {
  calcTips[i].addEventListener("click", function () {
    if (calcTips[i].textContent === "5%") {
      displayCalc(Number(bill.value), 0.05);
    } else if (calcTips[i].textContent === "10%") {
      displayCalc(Number(bill.value), 0.1);
    } else if (calcTips[i].textContent === "15%") {
      displayCalc(Number(bill.value), 0.15);
    } else if (calcTips[i].textContent === "25%") {
      displayCalc(Number(bill.value), 0.25);
    } else if (calcTips[i].textContent === "50%") {
      displayCalc(Number(bill.value), 0.5);
    }
    // else if (calcTips[5]){
    //   console.log(bill.value * (calcTips[i].value)/ 100);
    // }
  });
}
