console.log("Main.js loaded!");

let money = 0;
let glass = 0;
let totalGlass = 0;
let baseMultiplier = 1;
let autoClickerAmount = 0;
let x = 1;
let demand = 1.0;
let price = 1.0;
let sand = 1500;
let sandused = 10;

function onload() {}
//lbahhhh
setInterval(function () {
  if (glass > 0) {
    glass -= x;
    console.log("glass cube sold!");
    sellPeanut(x);
    document.getElementById("UnsoldGlassCubes").innerHTML =
      "Unsold Glass Cubes: " + glass;
    document.getElementById("glassAmount").innerHTML =
      "Glass Cubes: " + totalGlass;
  }
}, 1100);

function add() {
  glass++;
  totalGlass++;
  sand -= sandused;
  console.log("click");
  document.getElementById("UnsoldGlassCubes").innerHTML =
    "Unsold Glass Cubes: " + glass;
  document.getElementById("glassAmount").innerHTML =
    "Glass Cubes: " + totalGlass;
}

setInterval(function () {
  glass += autoClickerAmount * baseMultiplier;
  sand -= sandused * autoClickerAmount;
  document.getElementById("UnsoldGlassCubes").innerHTML =
    "Unsold Glass Cubes:  " + glass;
}, 1000);

function buyAutoClicker() {
  autoClickerAmount++;
  document.getElementById("UnsoldGlassCubes").innerHTML = autoClickerAmount;
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
