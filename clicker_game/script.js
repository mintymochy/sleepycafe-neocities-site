console.log("Main.js loaded!");
let perSecond = 0;
let money = 1000;
let glass = 0;
let totalGlass = 0;
let baseMultiplier = 1;
let autoClickerAmount = 0;
let autoClickerPrice = 10;
let x = 1;
let demand = 1.0;
let price = 1.0;
let sand = 1500;
const sandused = 5;
let time = 1000;
let sellTime = 2000;
let sandPrice = [20, 17, 15, 12, 11, 18, 19];
let sandprice = 20;
let boughtSand = 1500;
const sandPriceTimer = 10000;
let cubesize = 1;

//onload/update screen function
function updateScreen() {
  document.getElementById("sandPrice").innerHTML = "Cost: $" + sandprice;
  document.getElementById("money").innerHTML = "Money: $" + money.toFixed(2);
  document.getElementById("UnsoldGlassCubes").innerHTML =
    "Unsold Glass Cubes: " + glass.toFixed(0);
  document.getElementById("glassAmount").innerHTML =
    "Glass Cubes: " + totalGlass;
  document.getElementById("sandAmount").innerHTML = sand + " lbs";
  document.getElementById("pricePerCube").innerHTML =
    "Price Per Glass Cube: $" + price.toFixed(2);
  document.getElementById("demand").innerHTML =
    "Public Demand: " + (demand * 100).toFixed(0) + "%";
  document.getElementById("size").innerHTML =
    "Cube Size: " + (cubesize * 100).toFixed(0) + "%";
}

//changing the sand price every 10? seconds
setInterval(function () {
  sandprice = sandPrice[Math.floor(Math.random() * 7)];
  updateScreen();
  console.log("sold cube");
}, sandPriceTimer);

//selling glass cubes
setInterval(function () {
  if (glass > 0) {
    console.log("glass cube sold!");
    glass -= (x * demand).toFixed(3);
    money += price;
    updateScreen();
  }
}, sellTime);

function add() {
  glass++;
  totalGlass++;
  sand -= sandused;
  updateScreen();
  console.log("glass cube made!");
}

//autoclickers
setInterval(function () {
  glass += autoClickerAmount * baseMultiplier;
  sand -= sandused * autoClickerAmount;
  totalGlass += autoClickerAmount * baseMultiplier;
  updateScreen();
  console.log("autoclicker clicked");
}, time);

function buyAutoClicker() {
  if (money >= autoClickerPrice) {
    autoClickerAmount++;
    money -= autoClickerPrice;
  }
  updateScreen();
  console.log("Autoclicker Bought!");
}
function changePrice(x) {
  if (x) {
    price += 0.01;
  } else {
    price -= 0.01;
  }
  updateScreen();
}

//change the size of the cubes
function changeCubeSize(x) {
  if (x) {
    demand += 0.05;
    cubesize += 0.1;
    console.log("size up");
  } else {
    demand -= 0.05;
    cubesize -= 0.1;
    console.log("size down");
  }
  updateScreen();
}

function buySand() {
  if (money >= sandprice) {
    sand += boughtSand;
    money -= sandprice;
  }
  updateScreen();
  console.log("Sand Bought!");
}

function upgrade() {
  baseMultiplier += 0.1;
}

//lightmode
function lightmode() {
  getComputedStyle(document.documentElement).getPropertyValue(
    "--background-color"
  );
  document.documentElement.style.setProperty("--background-color", "#fff");
  getComputedStyle(document.documentElement).getPropertyValue("--text-color");
  document.documentElement.style.setProperty("--text-color", "#000");
  getComputedStyle(document.documentElement).getPropertyValue(
    "--button-background-color"
  );
  document.documentElement.style.setProperty(
    "--button-background-color",
    "#d0d0d0"
  );
  getComputedStyle(document.documentElement).getPropertyValue(
    "--button-text-color"
  );
  document.documentElement.style.setProperty("--button-text-color", "#000");
  getComputedStyle(document.documentElement).getPropertyValue(
    "--button-border-color"
  );
  document.documentElement.style.setProperty("--button-border-color", "#000");
}

// darkmode
function darkmode() {
  getComputedStyle(document.documentElement).getPropertyValue(
    "--background-color"
  );
  document.documentElement.style.setProperty("--background-color", "#000");
  getComputedStyle(document.documentElement).getPropertyValue("--text-color");
  document.documentElement.style.setProperty("--text-color", "#fff");
  getComputedStyle(document.documentElement).getPropertyValue(
    "--button-background-color"
  );
  document.documentElement.style.setProperty(
    "--button-background-color",
    "#424242"
  );
  getComputedStyle(document.documentElement).getPropertyValue(
    "--button-text-color"
  );
  document.documentElement.style.setProperty("--button-text-color", "#fff");
  getComputedStyle(document.documentElement).getPropertyValue(
    "--button-border-color"
  );
  document.documentElement.style.setProperty("--button-border-color", "#fff");
}
