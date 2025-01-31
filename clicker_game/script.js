console.log("Main.js loaded!");

let money = 1000;
let glass = 0;
let totalGlass = 0;
let baseMultiplier = 1;
let autoClickerAmount = 0;
let x = 1;
let demand = 1;
let price = 1.0;
let sand = 1500;
const sandused = 5;
let time = 1000;
let sellTime = 2000;
let sandPrice = [20, 17, 15, 12, 11, 18, 19];
let sandprice = 20;
let boughtSand = 1500;
const sandPriceTimer = 10000;

function onload() {
  document.getElementById("sandPrice").innerHTML = "Cost: $" + sandprice;
  document.getElementById("money").innerHTML = "Money: $" + money;
  document.getElementById("UnsoldGlassCubes").innerHTML =
    "Unsold Glass Cubes: " + glass;
  document.getElementById("glassAmount").innerHTML =
    "Glass Cubes: " + totalGlass;
}

setInterval(function () {
  sandprice = sandPrice[Math.floor(Math.random() * 7)];
  document.getElementById("sandPrice").innerHTML = "Cost: $" + sandprice;
}, sandPriceTimer);

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
function buySand() {
  if (money >= sandprice) {
    sand += boughtSand;
    money -= sandPrice;
  }
}

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
