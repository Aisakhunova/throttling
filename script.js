const container = document.getElementById("cont");
const buttons = document.getElementById("buttons");
let mystatus = document.getElementById("status");
let time = document.getElementById("time");
let orderTime = document.getElementById("orderTime");
let doneTime = document.getElementById("doneTime");
let chef = document.getElementById("chef");

const meals = ["sushi", "pizza", "burger", "fries"];
const preparationTime = [2, 10, 12, 5];

function serverResponse() {
  doneTime.innerText =
    "Done at " + new Date().toLocaleString() + " Bon Apetite!";
  chef.src = "angry-chef.jpg";
}

function throttle(delayTime) {
  let lastCallTime = 0;
  return function () {
    let currentTime = new Date().getTime();
    if (currentTime - lastCallTime >= delayTime) {
      lastCallTime = currentTime;
    }
  };
}

function orderMeal(delay) {
  orderTime.innerText = "You ordered at " + new Date().toLocaleTimeString();
  setTimeout(serverResponse, delay * 1000);
}

function clearFields() {
  mystatus.innerText = "";
  time.innerText = "";
  orderTime.innerText = "";
  doneTime.innerText = "";
  chef.src = "happy-shef.jpg";
}

buttons.onclick = (e) => {
  clickedMeal = e.target.id;
  console.log(clickedMeal);
  let index = meals.indexOf(clickedMeal);
  if (meals.includes(clickedMeal)) {
    clearFields();
    console.log(meals);
    mystatus.innerText = "Good choice! You want " + clickedMeal;
    time.innerText =
      "Preparing...  It will take " + preparationTime[index] + " seconds";
    throttle(orderMeal(preparationTime[index]), 1000)();
  }
};
