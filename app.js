const name_el = document.querySelector("#name");
const bill_el = document.querySelector("#bill");
const waiterNameSelect_el = document.querySelector("#waiter-name-select");
const waiterName_el = document.querySelector("#waiter-name");
const tipPercentage_el = document.querySelector("#tip-percentage");
const form_el = document.querySelector(".form");

const state = {
  name: "",
  bill: 0,
  waiterName: "",
  tipPercentage: "",
};

name_el.addEventListener("keyup", () => {
  state.name = name_el.value;
});

bill_el.addEventListener("keyup", () => {
  state.bill = +bill_el.value;
});

waiterNameSelect_el.addEventListener("change", () => {
  state.waiterName = waiterNameSelect_el.value;
});

waiterName_el.addEventListener("keyup", () => {
  state.waiterName = waiterName_el.value;
});

tipPercentage_el.addEventListener("change", () => {
  state.tipPercentage = +tipPercentage_el.value;
});

form_el.addEventListener("submit", (e) => {
  const tipAmount = (state.bill * state.tipPercentage) / 100;
  const msg = `Thank You ${state.name}, you tipped ${state.waiterName} $${tipAmount}.`;
  alert(msg);
});
