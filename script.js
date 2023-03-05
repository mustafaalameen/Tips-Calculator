"use strict";
/*
For further developent, the custom input box and the rounding of values would be worked on.
*/
const bill = document.querySelector(".bill-input");

const calcTipsBtns = document.querySelectorAll(".tips-btn");

const tips_amount = document.querySelector(".tip-amount");

const total_amount = document.querySelector(".total-amount");

const btnReset = document.querySelector(".reset");

const numOfPeople = document.querySelector(".num");

const numZeroDisplay = document.querySelector(".num-display");
console.log(numZeroDisplay);
const tipsInput = document.querySelector(".tips-input");

const valInputEl = document.querySelector("#input-box");

// billDisplay.classList.remove("bill-zero");

// bill.classList.remove("bill-zero");
// numOfPeople.classList.add("num-zero");

// function that calculate tips per person
const calculateTip = function (tipsPercent) {
  const tipsAmount = tipsPercent * Number(bill.value);
  const tipsPerPerson = tipsAmount / Number(numOfPeople.value);

  return tipsPerPerson;
};

//function to calculate the bill value
const calculateBill = function (tipPerPerson) {
  const totalPerPerson = Number(bill.value) / Number(numOfPeople.value);
  return totalPerPerson + tipPerPerson;
};

// a function is needed
const activateIfNumIsNotZero = function () {
  numOfPeople.classList.remove("num-zero");
  numZeroDisplay.classList.add("num-display");
};

activateIfNumIsNotZero();

calcTipsBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    const btnVal = btn.textContent;
    const btnNumVal = Number(btnVal.slice(0, btnVal.indexOf("%"))) / 100;
    const tipAmount = calculateTip(btnNumVal);
    const totalBill = calculateBill(tipAmount);
    if (Number(numOfPeople.value)) {
      tips_amount.innerHTML = tipAmount
        ? `$${tipAmount.toFixed(2)}`
        : ` $${0.0}`;
      total_amount.innerHTML = totalBill
        ? `$${totalBill.toFixed(2)}`
        : ` $${0.0}`;
      activateIfNumIsNotZero();
    } else {
      numOfPeople.classList.toggle("num-zero");
      numZeroDisplay.classList.toggle("num-display");
    }
  });
});

valInputEl.addEventListener("change", function () {
  const btnNumVal = Number(valInputEl.value) / 100;
  const tipAmount = calculateTip(btnNumVal);
  const totalBill = calculateBill(tipAmount);
  if (Number(numOfPeople.value)) {
    tips_amount.innerHTML = tipAmount ? `$${tipAmount.toFixed(2)}` : ` $${0.0}`;
    total_amount.innerHTML = totalBill
      ? `$${totalBill.toFixed(2)}`
      : ` $${0.0}`;
    activateIfNumIsNotZero();
  } else {
    numOfPeople.classList.toggle("num-zero");
    numZeroDisplay.classList.toggle("num-display");
  }
});
console.log(btnReset);
btnReset.addEventListener("click", function () {
  valInputEl.value = "";
  tips_amount.innerHTML = `$0.00`;
  total_amount.innerHTML = `$0.00`;
  numOfPeople.value = "";
  bill.value = "";
});
