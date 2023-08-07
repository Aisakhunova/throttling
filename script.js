const container = document.getElementById("cont");
const buttons = document.getElementById("buttons");
let mystatus = document.getElementById("status");
let time = document.getElementById("time");
let orderTime = document.getElementById("orderTime");
let doneTime = document.getElementById("doneTime");
let chef = document.getElementById("chef");
let orderStatus = false;

const meals = ["sushi", "pizza", "burger", "fries"];
const preparationTime = [2, 10, 12, 5];

const preparedText = () => {
  doneTime.innerText =
    "Done at " + new Date().toLocaleString() + " Bon Apetite!";
  chef.src = "angry-chef.jpg";
  console.log("Done");
};
const serverResponse = () => {
  console.log("preparing...");
  if (orderStatus) {
    orderStatus = true;
    clearInterval(serverRequset);
    preparedText();
  }
};
const throttle = (delaytime) => {
  setTimeout(() => {
    orderStatus = true;
  }, delaytime * 1000);

  serverRequset = setInterval(serverResponse, 1000);
};

function clearFields() {
  mystatus.innerText = "";
  time.innerText = "";
  orderTime.innerText = "";
  doneTime.innerText = "";
  chef.src = "happy-shef.jpg";
  orderStatus = false;
}

buttons.onclick = (e) => {
  clickedMeal = e.target.id;
  console.log(clickedMeal);
  let index = meals.indexOf(clickedMeal);
  if (meals.includes(clickedMeal)) {
    clearFields();
    mystatus.innerText = "Good choice! You want " + clickedMeal;
    time.innerText =
      "Preparing...  It will take " + preparationTime[index] + " seconds";
    orderTime.innerText = "You ordered at " + new Date().toLocaleTimeString();
    throttle(preparationTime[index]);
  }
};
