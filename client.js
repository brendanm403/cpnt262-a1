"use strict";

// adds commas to the coin value displayed //
const numberFormatter = Intl.NumberFormat('en-US');
// creates player coins variable in local storage //
if (!localStorage.getItem("coins")) {
  localStorage.setItem("coins", 0);
};

// creating necessary global variables //
let coins = localStorage.getItem("coins");
let currentHighestValue = 0;


// plays a coin sound when correct item is clicked //
const clickSound = function() {
  const audio = new Audio;
  audio.src = "audio/coins.mp3";
  audio.playbackRate = 2;
  audio.play();
}

// plays an error sound when incorrect item is clicked // 
const errorSound = function() {
  const audio = new Audio;
  audio.src = "audio/error.mp3";
  audio.playbackRate = 2;
  audio.play();  
}

// function that picks a random number in the specified range //
const randomRange = function (min, max) {
  return Math.floor(Math.random() * (max - min) + min);
};

// constructor function to make currency item objects //
function Currency(commonClass, rarity, selected, source, value) {
  this.commonClass = commonClass;
  this.rarity = rarity;
  this.selected = selected;
  this.source = source;
  this.value = value;
};

// making all the objects //
const bigNugget = new Currency("currency-item", 10, false, "images/big-nugget.png", 10000);
const bigPearl = new Currency("currency-item", 9, false, "images/big-pearl.png", 8000);
const rareCandy = new Currency("currency-item", 8, false, "images/rare-candy.png", 5000);
const nugget = new Currency("currency-item", 7, false, "images/nugget.png", 2000);
const starPiece = new Currency("currency-item", 7, false, "images/star-piece.png", 2000);
const pearl = new Currency("currency-item", 6, false, "images/pearl.png", 700);
const starDust = new Currency("currency-item", 6, false, "images/star-dust.png", 700);
const moonStone = new Currency("currency-item", 5, false, "images/moon-stone.png", 400);
const sunStone = new Currency("currency-item", 5, false, "images/sun-stone.png", 400);
const dawnStone = new Currency("currency-item", 4, false, "images/dawn-stone.png", 300);

const shinyStone = new Currency("currency-item", 4, false, "images/shiny-stone.png", 300);
const duskStone = new Currency("currency-item", 4, false, "images/dusk-stone.png", 300);
const waterStone = new Currency("currency-item", 3, false, "images/water-stone.png", 200);
const leafStone = new Currency("currency-item", 3, false, "images/leaf-stone.png", 200);
const thunderStone = new Currency("currency-item", 3, false, "images/thunder-stone.png", 200);
const fireStone = new Currency("currency-item", 3, false, "images/fire-stone.png", 200);
const redShard = new Currency("currency-item", 1, false, "images/red-shard.png", 10);
const yellowShard = new Currency("currency-item", 1, false, "images/yellow-shard.png", 10);
const blueShard = new Currency("currency-item", 1, false, "images/blue-shard.png", 15);
const greenShard = new Currency("currency-item", 1, false, "images/green-shard.png", 15);

const deepSeaScale = new Currency("currency-item", 3, false, "images/deep-sea-scale.png", 250);
const dragonScale = new Currency("currency-item", 3, false, "images/dragon-scale.png", 250);
const prismScale = new Currency("currency-item", 3, false, "images/prism-scale.png", 250);
const everStone = new Currency("currency-item", 1, false, "images/everstone.png", 5);
const eviolite = new Currency("currency-item", 2, false, "images/eviolite.png", 20);
const floatStone = new Currency("currency-item", 1, false, "images/float-stone.png", 5);
const hardStone = new Currency("currency-item", 1, false, "images/hard-stone.png", 8);
const ironBall = new Currency("currency-item", 1, false, "images/iron-ball.png", 8);
const lightClay = new Currency("currency-item", 2, false, "images/light-clay.png", 20);
const ovalStone = new Currency("currency-item", 1, false, "images/oval-stone.png", 5);

// creating array of these currency objects //
const currencyArr = [bigNugget, bigPearl, nugget, starPiece, pearl, blueShard, greenShard, yellowShard, redShard, moonStone, leafStone, fireStone, thunderStone, waterStone, sunStone, rareCandy, starDust, duskStone, shinyStone, dawnStone, deepSeaScale, dragonScale, everStone, eviolite, floatStone, hardStone, ironBall, lightClay, ovalStone, prismScale];

// gets the highest value from the group of items that spawned each time, store in global variable //
const getHighestValue = function(arr) {
  let valuesArr = [];
  currentHighestValue = 0;
  arr.forEach(function(item) {
    if(item.selected === true) {
      let value = item.value;
      valuesArr.push(value);
      if (value > currentHighestValue) {
        currentHighestValue = value;
      }
    }
  });
}

// compares the value of the item thats clicked to the highest value stored in the global variable //
const compareValues = function(event) {
  let value = Number(event.target.attributes[0].value);  
  // returns the true or false that comes out of this expression, simplified it from if statement //
  return value >= currentHighestValue;
}

// randomly orders the array so items don't always appear in the order they are in when i made the array //
const shuffleArray = function(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
}

// renders the players coins on screen //
const displayCoins = function() {
  document.getElementById("player-coins").innerHTML = numberFormatter.format(coins);
}

// selects which items will appear, limits to 9. Uses objects rarity value to determine chance to stock //
const selectCurrencyItems = function(arr) {
  let total = 0;
  for (let i = 0; i <= arr.length - 1; i++) {
    if (total < 9) {
      if (arr[i].rarity === 10) {
        let randNum = Math.ceil(Math.random()*300);
        if (randNum === 1) {
          arr[i].selected = true;
          total++;
        } 
      } else if (arr[i].rarity === 9) {
        let randNum = Math.ceil(Math.random()*280);
        if (randNum <= 2) {
          arr[i].selected = true;
          total++;
        } 
      } else if (arr[i].rarity === 8) {
        let randNum = Math.ceil(Math.random()*260);
        if (randNum <= 3) {
          arr[i].selected = true;
          total++;
        } 
      } else if (arr[i].rarity === 7) {
        let randNum = Math.ceil(Math.random()*240);
        if (randNum <= 4) {
          arr[i].selected = true;
          total++;
        } 
      } else if (arr[i].rarity === 6) {
        let randNum = Math.ceil(Math.random()*220);
        if (randNum <= 5) {
          arr[i].selected = true;
          total++;
        } 
      } else if (arr[i].rarity === 5) {
        let randNum = Math.ceil(Math.random()*200);
        if (randNum <= 6) {
          arr[i].selected = true;
          total++;
        } 
      } else if (arr[i].rarity === 4) {
        let randNum = Math.ceil(Math.random()*180);
        if (randNum <= 7) {
          arr[i].selected = true;
          total++;
        } 
      } else if (arr[i].rarity === 3) {
        let randNum = Math.ceil(Math.random()*160);
        if (randNum <= 8) {
          arr[i].selected = true;
          total++;
        } 
      } else if (arr[i].rarity === 2) {
        let randNum = Math.ceil(Math.random()*140);
        if (randNum <= 10) {
          arr[i].selected = true;
          total++;
        } 
      } else if (arr[i].rarity === 1) {
        let randNum = Math.ceil(Math.random()*100);
        if (randNum <= 50) {
          arr[i].selected = true;
          total++;
        } 
      }
    }    
  }
}

// get the x y coordinates of the coins heading //
const getCoinsPosition = function() {
  let element = document.querySelector("h4");
  let xPos = element.offsetLeft;
  let yPos = element.offsetTop;
  return {x: xPos, y: yPos};
}

// displays the value with a text pop up when an item is clicked on //
const displayItemValuePopUp = function(itemValue) {
  let paragraph = document.createElement("p");
  paragraph.setAttribute("id", "pop-up-value-text");
  let text = document.createTextNode(`+${itemValue}`);
  paragraph.appendChild(text);
  paragraph.style.position = "absolute";
  paragraph.style.left = getCoinsPosition().x + 160 + "px";
  paragraph.style.top =  getCoinsPosition().y + "px";
  paragraph.style.margin = 0;
  paragraph.style.color = "green";
  paragraph.style.fontSize = "25px";
  document.body.appendChild(paragraph);
}

// removes the popup that indicates a correct or incorrect choice //
const removeItemValuePopUp = function() {
  document.getElementById("pop-up-value-text").remove();
}

// displays a red x if choice is wrong //
const displayWrongChoicePopUp = function() {
  let paragraph = document.createElement("p");
  paragraph.setAttribute("id", "pop-up-value-text")
  let text = document.createTextNode("X");
  paragraph.appendChild(text);
  paragraph.style.position = "absolute";
  paragraph.style.left = getCoinsPosition().x + 160 + "px";
  paragraph.style.top =  getCoinsPosition().y + "px";
  paragraph.style.margin = 0;
  paragraph.style.color = "red";
  paragraph.style.fontSize = "25px";
  document.body.appendChild(paragraph);  
}

// increases players coins //
const increaseCoins = function(arrItem) {
  coins =  Number(localStorage.getItem("coins"));
      coins += arrItem.value;
      localStorage.setItem("coins", coins);  
}

// creates an image element, sets attributes, renders on screen, adds event listener //
const createImg = function(arrItem) {
  let renderItem = document.createElement("img");
  renderItem.setAttribute("itemvalue", arrItem.value);
  renderItem.classList.add(arrItem.commonClass);
  renderItem.src = arrItem.source;
  document.querySelector(".currency-grid").appendChild(renderItem);
  renderItem.addEventListener("click", function(event) {
    preventClickSpam();
    if (compareValues(event) === true) {
      clickSound();
      displayItemValuePopUp(arrItem.value);
      setTimeout(removeItemValuePopUp, 700);
      increaseCoins(arrItem);
      displayCoins();
      renderItem.remove();
    } else {
      errorSound();
      displayWrongChoicePopUp();
      setTimeout(removeItemValuePopUp, 700);
    }
  });
}

// sets selected property back to false //
const resetCurrencyObject = function(arr) {
  arr.forEach(function(arrItem) {
    if (arrItem.selected === true) {
      arrItem.selected = false;
    }
  });
}

// prevents the player from spam clicking as many items as they can //
const preventClickSpam = function() {
  const preventOn = document.querySelectorAll(".currency-item");
  preventOn.forEach(function(item) {
    item.classList.add("disable-click");
  });
}

// loops through array and calls createImg to create and append images for all items where selected property true //
const createCurrencyItems = function(arr) {
  arr.forEach(function(arrItem) {
    if (arrItem.selected === true) {
      createImg(arrItem);
    } 
  }); 
}

// removes the currency item from screen if it exists //
const deleteCurrencyItem = function() {
  let itemsOnScreen = document.querySelectorAll(".currency-item");
  itemsOnScreen.forEach(function(item) {
    if (item) {
      item.remove();
    }
  })  
}

// main function to pass into setInterval to control everything //
const spawnItems = function() {
  shuffleArray(currencyArr);
  selectCurrencyItems(currencyArr);
  getHighestValue(currencyArr);
  createCurrencyItems(currencyArr);
  resetCurrencyObject(currencyArr);
  setTimeout(deleteCurrencyItem, 1500);
}

displayCoins();
setInterval(spawnItems, randomRange(4000, 7000));