console.log("Main.js loaded!");

let money = 0;
let glass = 0;
let totalGlass = 0;
let baseMultiplier = 1;
let autoClickerAmount = 0;
let x = 1;
let demand = 1;
let price = 1.0;
let sand = 1500;
const sandused = 10;
let time = 100;
let sellTime = 800;

function onload() {}

setInterval(function () {
  if (glass > 0) {
    console.log("glass cube sold!");
    sellPeanut(x);
    document.getElementById("UnsoldGlassCubes").innerHTML =
      "Unsold Glass Cubes: " + glass;
    document.getElementById("glassAmount").innerHTML =
      "Glass Cubes: " + totalGlass;
  }
}, sellTime);

function add() {
  glass++;
  totalGlass++;
  sand -= sandused;
  console.log("click");
  document.getElementById("UnsoldGlassCubes").innerHTML =
    "Unsold Glass Cubes: " + glass;
  document.getElementById("glassAmount").innerHTML =
    "Glass Cubes: " + totalGlass;
  document.getElementById("sandAmount").innerHTML = sand + " lbs";
}

setInterval(function () {
  glass += autoClickerAmount * baseMultiplier;
  sand -= sandused * autoClickerAmount;
  document.getElementById("UnsoldGlassCubes").innerHTML =
    "Unsold Glass Cubes:  " + glass;
  document.getElementById("sandAmount").innerHTML = sand + " lbs";
}, time);

function buyAutoClicker() {
  autoClickerAmount++;
  document.getElementById("autoClickers").innerHTML = autoClickerAmount;
}
function buySand() {}

function sellPeanut(soldGlassCubes) {
  glass -= demand;
  money += demand * price;
  document.getElementById("money").innerHTML = "Money: $" + money;
}

function buySomething(cash) {
  money -= cash;
}

function upgrade() {
  baseMultiplier += 0.1;
}
