let pokemonArr = []; 
const numberFormatter = Intl.NumberFormat('en-US');
const extraData = new Map();
const modal1 = document.getElementById("modal1");
const modal2 = document.getElementById("modal2");
const modal3 = document.getElementById("modal3");
const modal4 = document.getElementById("modal4");
const closeModal1 = document.getElementById("close-modal");
const closeModal2 = document.getElementById("close-modal2");
const closeModal3 = document.getElementById("close-modal3");
const closeModal4 = document.getElementById("close-modal4");
closeModal1.addEventListener("click", () => {
  modal1.close();
})
closeModal2.addEventListener("click", () => {
  modal2.close();
})
closeModal3.addEventListener("click", () => {
  modal3.close();
})
closeModal4.addEventListener("click", () => {
  modal4.close();
})

const randomRange = function(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
};
TODO: // reconfigure the if statement section that checks rarity and time, can put time value required in extra data

extraData.set("bulbasaur", {multiplier: 1.8, rarity: 4, minTime: 2.9, minPrice: 13000, maxPrice: 16000, price: randomRange(13000, 16000)})
.set("ivysaur", {multiplier: 2, rarity: 3, minTime: 2.8, minPrice: 16000, maxPrice: 20000, price: randomRange(16000, 20000)})
.set("venusaur", {multiplier: 3, rarity: 1, minTime: 2.5, minPrice: 45000, maxPrice: 60000, price: randomRange(45000, 60000)})
.set("charmander", {multiplier: 1.8, rarity: 4, minTime: 2.9, minPrice: 13000, maxPrice: 16000, price: randomRange(13000, 16000)})
.set("charmeleon", {multiplier: 2, rarity: 3, minTime: 2.8, minPrice: 16000, maxPrice: 20000, price: randomRange(16000, 20000)})
.set("charizard", {multiplier: 3, rarity: 1, minTime: 2.5, minPrice: 45000, maxPrice: 60000, price: randomRange(45000, 60000)})
.set("squirtle", {multiplier: 1.8, rarity: 4, minTime: 2.9, minPrice: 13000, maxPrice: 16000, price: randomRange(13000, 16000)})
.set("wartortle", {multiplier: 2, rarity: 3, minTime: 2.8, minPrice: 16000, maxPrice: 20000, price: randomRange(16000, 20000)})
.set("blastoise", {multiplier: 3, rarity: 1, minTime: 2.5, minPrice: 45000, maxPrice: 60000, price: randomRange(45000, 60000)})
.set("caterpie", {multiplier: 0.1, rarity: 75, minTime: 12, minPrice: 2000, maxPrice: 3200, price: randomRange(2000, 3200)})
.set("metapod", {multiplier: 0.3, rarity: 40, minTime: 9, minPrice: 4000, maxPrice: 5500, price: randomRange(4000, 5500)})
.set("butterfree", {multiplier: 0.5, rarity: 30, minTime: 6, minPrice: 6000, maxPrice: 8500, price: randomRange(6000, 8500)})
.set("weedle", {multiplier: 0.1, rarity: 75, minTime: 12, minPrice: 2000, maxPrice: 3200, price: randomRange(2000, 3200)})
.set("kakuna", {multiplier: 0.3, rarity: 40, minTime: 9, minPrice: 4000, maxPrice: 5500, price: randomRange(4000, 5500)})
.set("beedrill", {multiplier: 0.5, rarity: 30, minTime: 6, minPrice: 6000, maxPrice: 8500, price: randomRange(6000, 8500)})
.set("pidgey", {multiplier: 0.1, rarity: 75, minTime: 12, minPrice: 2000, maxPrice: 3200, price: randomRange(2000, 3200)})
.set("pidgeotto", {multiplier: 0.5, rarity: 30, minTime: 6, minPrice: 5000, maxPrice: 7000, price: randomRange(5000, 7000)})
.set("pidgeot", {multiplier: 1.1, rarity: 10, minTime: 3.5, minPrice: 8000, maxPrice: 11000, price: randomRange(8000, 11000)})
.set("rattata", {multiplier: 0.1, rarity: 75, minTime: 12, minPrice: 2000, maxPrice: 3200, price: randomRange(2000, 3200)})
.set("raticate", {multiplier: 0.5, rarity: 30, minTime: 6, minPrice: 4000, maxPrice: 6500, price: randomRange(4000, 6500)})
.set("spearow", {multiplier: 0.3, rarity: 40, minTime: 9, minPrice: 3300, maxPrice: 4800, price: randomRange(3300, 4800)})
.set("fearow", {multiplier: 0.7, rarity: 20, minTime: 4, minPrice: 6800, maxPrice: 8800, price: randomRange(6800, 8800)})
.set("ekans", {multiplier: 0.3, rarity: 40, minTime: 9, minPrice: 3300, maxPrice: 4800, price: randomRange(3300, 4800)})
.set("arbok", {multiplier: 0.7, rarity: 20, minTime: 4, minPrice: 6800, maxPrice: 8800, price: randomRange(6800, 8800)})
.set("pikachu", {multiplier: 1, rarity: 15, minTime: 3.5, minPrice: 9000, maxPrice: 12500, price: randomRange(9000, 12500)})
.set("raichu", {multiplier: 1.6, rarity: 5, minTime: 3.0, minPrice: 13000, maxPrice: 15000, price: randomRange(13000, 15000)})
.set("sandshrew", {multiplier: 0.3, rarity: 40, minTime: 9, minPrice: 3400, maxPrice: 4700, price: randomRange(3400, 4700)})
.set("sandslash", {multiplier: 1.1, rarity: 10, minTime: 3.5, minPrice: 6800, maxPrice: 8800, price: randomRange(6800, 8800)})
.set("nidoran-f", {multiplier: 0.3, rarity: 35, minTime: 6, minPrice: 3000, maxPrice: 4400, price: randomRange(3000, 4400)})
.set("nidorina", {multiplier: 0.5, rarity: 25, minTime: 4, minPrice: 5000, maxPrice: 7700, price: randomRange(5000, 7700)})
.set("nidoqueen", {multiplier: 1.6, rarity: 5, minTime: 3.0, minPrice: 9500, maxPrice: 13600, price: randomRange(9500, 13000)})
.set("nidoran-m", {multiplier: 0.3, rarity: 35, minTime: 6, minPrice: 3000, maxPrice: 4400, price: randomRange(3000, 4400)})
.set("nidorino", {multiplier: 0.5, rarity: 25, minTime: 4, minPrice: 5000, maxPrice: 7700, price: randomRange(5000, 7700)})
.set("nidoking", {multiplier: 1.6, rarity: 5, minTime: 3.0, minPrice: 9500, maxPrice: 13600, price: randomRange(9500, 13600)})
.set("clefairy", {multiplier: 0.3, rarity: 35, minTime: 6, minPrice: 3000, maxPrice: 5300, price: randomRange(3000, 5300)})
.set("clefable", {multiplier: 0.5, rarity: 25, minTime: 4, minPrice: 8400, maxPrice: 11000, price: randomRange(8400, 11000)})
.set("vulpix", {multiplier: 1, rarity: 15, minTime: 3.5, minPrice: 8000, maxPrice: 11900, price: randomRange(8000, 11900)})
.set("ninetales", {multiplier: 2, rarity: 3, minTime: 2.8, minPrice: 25000, maxPrice: 28500, price: randomRange(25000, 28500)})
.set("jigglypuff", {multiplier: 0.3, rarity: 40, minTime: 9, minPrice: 3000, maxPrice: 5300, price: randomRange(3000, 5300)})
.set("wigglytuff", {multiplier: 0.5, rarity: 25, minTime: 4, minPrice: 8400, maxPrice: 11000, price: randomRange(8400, 11000)})
.set("zubat", {multiplier: 0.1, rarity: 80, minTime: 15, minPrice: 1000, maxPrice: 1600, price: randomRange(1000, 1600)})
.set("golbat", {multiplier: 0.3, rarity: 40, minTime: 9, minPrice: 5000, maxPrice: 6000, price: randomRange(5000, 6000)})
.set("oddish", {multiplier: 0.3, rarity: 40, minTime: 9, minPrice: 3800, maxPrice: 4600, price: randomRange(3800, 4600)})
.set("gloom", {multiplier: 0.5, rarity: 30, minTime: 6, minPrice: 5800, maxPrice: 7300, price: randomRange(5800, 7300)})
.set("vileplume", {multiplier: 1.6, rarity: 5, minTime: 3.0, minPrice: 9800, maxPrice: 12400, price: randomRange(9800, 12400)})
.set("paras", {multiplier: 0.5, rarity: 30, minTime: 6, minPrice: 2400, maxPrice: 3100, price: randomRange(2400, 3100)})
.set("parasect", {multiplier: 0.7, rarity: 20, minTime: 4, minPrice: 5800, maxPrice: 8000, price: randomRange(5800, 8000)})
.set("venonat", {multiplier: 0.5, rarity: 30, minTime: 6, minPrice: 2800, maxPrice: 3400, price: randomRange(2800, 3400)})
.set("venomoth", {multiplier: 0.7, rarity: 20, minTime: 4, minPrice: 7400, maxPrice: 9600, price: randomRange(7400, 9600)})
.set("diglett", {multiplier: 0.3, rarity: 40, minTime: 9, minPrice: 2800, maxPrice: 3500, price: randomRange(2800, 3500)})
.set("dugtrio", {multiplier: 0.5, rarity: 25, minTime: 4, minPrice: 7000, maxPrice: 9000, price: randomRange(7000, 9000)})
.set("meowth", {multiplier: 0.3, rarity: 40, minTime: 9, minPrice: 3800, maxPrice: 4800, price: randomRange(3800, 4800)})
.set("persian", {multiplier: 0.5, rarity: 30, minTime: 6, minPrice: 6800, maxPrice: 8500, price: randomRange(6800, 8500)})
.set("psyduck", {multiplier: 0.5, rarity: 30, minTime: 6, minPrice: 4800, maxPrice: 5700, price: randomRange(4800, 5700)})
.set("golduck", {multiplier: 1, rarity: 15, minTime: 3.5, minPrice: 7000, maxPrice: 10400, price: randomRange(7000, 10400)})
.set("mankey", {multiplier: 0.5, rarity: 30, minTime: 6, minPrice: 4000, maxPrice: 5900, price: randomRange(4000, 5900)})
.set("primeape", {multiplier: 1, rarity: 15, minTime: 3.5, minPrice: 8500, maxPrice: 12500, price: randomRange(8500, 12500)})
.set("growlithe", {multiplier: 1, rarity: 15, minTime: 3.5, minPrice: 8000, maxPrice: 11900, price: randomRange(8000, 11900)})
.set("arcanine", {multiplier: 2.5, rarity: 2, minTime: 2.7, minPrice: 30000, maxPrice: 40000, price: randomRange(30000, 40000)})
.set("poliwag", {multiplier: 0.3, rarity: 35, minTime: 6, minPrice: 3500, maxPrice: 4400, price: randomRange(3500, 4400)})
.set("poliwhirl", {multiplier: 0.5, rarity: 25, minTime: 4, minPrice: 5000, maxPrice: 6900, price: randomRange(5000, 6900)})
.set("poliwrath", {multiplier: 1.8, rarity: 4, minTime: 2.9, minPrice: 9900, maxPrice: 13300, price: randomRange(9900, 13300)})
.set("abra", {multiplier: 0.5, rarity: 30, minTime: 6, minPrice: 4800, maxPrice: 5800, price: randomRange(4800, 5800)})
.set("kadabra", {multiplier: 0.7, rarity: 20, minTime: 4, minPrice: 6000, maxPrice: 8000, price: randomRange(6000, 8000)})
.set("alakazam", {multiplier: 1.8, rarity: 4, minTime: 2.9, minPrice: 14000, maxPrice: 17700, price: randomRange(14000, 17700)})
.set("machop", {multiplier: 0.5, rarity: 30, minTime: 6, minPrice: 4000, maxPrice: 4600, price: randomRange(4000, 4600)})
.set("machoke", {multiplier: 0.7, rarity: 20, minTime: 4, minPrice: 6500, maxPrice: 9000, price: randomRange(6500, 9000)})
.set("machamp", {multiplier: 1.8, rarity: 4, minTime: 2.9, minPrice: 11800, maxPrice: 16600, price: randomRange(11800, 16600)})
.set("bellsprout", {multiplier: 0.3, rarity: 35, minTime: 6, minPrice: 2800, maxPrice: 3500, price: randomRange(2800, 3500)})
.set("weepinbell", {multiplier: 0.5, rarity: 25, minTime: 4, minPrice: 4900, maxPrice: 6000, price: randomRange(4900, 6000)})
.set("victreebel", {multiplier: 1.6, rarity: 5, minTime: 3.0, minPrice: 9400, maxPrice: 13400, price: randomRange(9400, 13400)})
.set("tentacool", {multiplier: 0.3, rarity: 35, minTime: 6, minPrice: 3300, maxPrice: 5000, price: randomRange(3300, 5000)})
.set("tentacruel", {multiplier: 1.3, rarity: 7, minTime: 3.2, minPrice: 8800, maxPrice: 12400, price: randomRange(8800, 12400)})
.set("geodude", {multiplier: 0.3, rarity: 40, minTime: 9, minPrice: 3100, maxPrice: 4100, price: randomRange(3100, 4100)})
.set("graveler", {multiplier: 0.5, rarity: 25, minTime: 4, minPrice: 5400, maxPrice: 7000, price: randomRange(5400, 7000)})
.set("golem", {multiplier: 1.4, rarity: 6, minTime: 3.1, minPrice: 8900, maxPrice: 13000, price: randomRange(8900, 13000)})
.set("ponyta", {multiplier: 1, rarity: 15, minTime: 3.5, minPrice: 7800, maxPrice: 10800, price: randomRange(7800, 10800)})
.set("rapidash", {multiplier: 1.6, rarity: 5, minTime: 3.0, minPrice: 11800, maxPrice: 14600, price: randomRange(11800, 14600)})
.set("slowpoke", {multiplier: 0.5, rarity: 30, minTime: 6, minPrice: 4800, maxPrice: 5700, price: randomRange(4800, 5700)})
.set("slowbro", {multiplier: 1.3, rarity: 8, minTime: 3.3, minPrice: 10000, maxPrice: 12900, price: randomRange(10000, 12900)})
.set("magnemite", {multiplier: 0.5, rarity: 30, minTime: 6, minPrice: 3800, maxPrice: 4300, price: randomRange(3800, 4300)})
.set("magneton", {multiplier: 1.3, rarity: 8, minTime: 3.3, minPrice: 8500, maxPrice: 10100, price: randomRange(8500, 10100)})
.set("farfetchd", {multiplier: 1, rarity: 15, minTime: 3.5, minPrice: 6800, maxPrice: 8200, price: randomRange(6800, 8200)})
.set("doduo", {multiplier: 0.3, rarity: 35, minTime: 6, minPrice: 4500, maxPrice: 5600, price: randomRange(4500, 5600)})
.set("dodrio", {multiplier: 1.1, rarity: 10, minTime: 3.5, minPrice: 8000, maxPrice: 11000, price: randomRange(9000, 11000)})
.set("seel", {multiplier: 0.5, rarity: 25, minTime: 4, minPrice: 4200, maxPrice: 6000, price: randomRange(4200, 6000)})
.set("dewgong", {multiplier: 1.3, rarity: 8, minTime: 3.3, minPrice: 8500, maxPrice: 12400, price: randomRange(8500, 12400)})
.set("grimer", {multiplier: 0.3, rarity: 35, minTime: 6, minPrice: 4000, maxPrice: 5000, price: randomRange(4000, 5000)})
.set("muk", {multiplier: 1.3, rarity: 8, minTime: 3.3, minPrice: 8800, maxPrice: 11000, price: randomRange(8800, 11000)})
.set("shellder", {multiplier: 0.5, rarity: 25, minTime: 4, minPrice: 3800, maxPrice: 5000, price: randomRange(3800, 5000)})
.set("cloyster", {multiplier: 1.1, rarity: 9, minTime: 3.3, minPrice: 9000, maxPrice: 12000, price: randomRange(9000, 12000)})
.set("gastly", {multiplier: 0.7, rarity: 20, minTime: 4, minPrice: 4700, maxPrice: 6000, price: randomRange(4700, 6000)})
.set("haunter", {multiplier: 1.1, rarity: 10, minTime: 3.5, minPrice: 8500, maxPrice: 10000, price: randomRange(8500, 10000)})
.set("gengar", {multiplier: 2.5, rarity: 2, minTime: 2.7, minPrice: 20000, maxPrice: 25000, price: randomRange(20000, 25000)})
.set("onix", {multiplier: 1.1, rarity: 10, minTime: 3.5, minPrice: 7000, maxPrice: 8000, price: randomRange(7000, 8000)})
.set("drowzee", {multiplier: 0.5, rarity: 30, minTime: 6, minPrice: 3700, maxPrice: 4300, price: randomRange(3700, 4300)})
.set("hypno", {multiplier: 1.1, rarity: 10, minTime: 3.5, minPrice: 7800, maxPrice: 9500, price: randomRange(7800, 9500)})
.set("krabby", {multiplier: 0.5, rarity: 25, minTime: 4, minPrice: 3500, maxPrice: 4000, price: randomRange(3500, 4000)})
.set("kingler", {multiplier: 1.1, rarity: 9, minTime: 3.3, minPrice: 7500, maxPrice: 9000, price: randomRange(7500, 9000)})
.set("voltorb", {multiplier: 0.7, rarity: 20, minTime: 4, minPrice: 4000, maxPrice: 4800, price: randomRange(4000, 4800)})
.set("electrode", {multiplier: 1.1, rarity: 9, minTime: 3.3, minPrice: 8000, maxPrice: 11000, price: randomRange(8000, 11000)})
.set("exeggcute", {multiplier: 1, rarity: 18, minTime: 3.5, minPrice: 5800, maxPrice: 6200, price: randomRange(5800, 6200)})
.set("exeggutor", {multiplier: 2, rarity: 3, minTime: 2.8, minPrice: 12000, maxPrice: 15400, price: randomRange(12000, 15400)})
.set("cubone", {multiplier: 0.3, rarity: 35, minTime: 6, minPrice: 3800, maxPrice: 4700, price: randomRange(3800, 4700)})
.set("marowak", {multiplier: 1.1, rarity: 9, minTime: 3.3, minPrice: 7800, maxPrice: 9700, price: randomRange(7800, 9700)})
.set("hitmonlee", {multiplier: 1.4, rarity: 6, minTime: 3.1, minPrice: 8000, maxPrice: 10300, price: randomRange(8000, 10300)})
.set("hitmonchan", {multiplier: 1.4, rarity: 6, minTime: 3.1, minPrice: 8000, maxPrice: 10300, price: randomRange(8000, 10300)})
.set("lickitung", {multiplier: 1.3, rarity: 8, minTime: 3.3, minPrice: 7000, maxPrice: 9000, price: randomRange(7000, 9000)})
.set("koffing", {multiplier: 0.5, rarity: 25, minTime: 4, minPrice: 4000, maxPrice: 5000, price: randomRange(4000, 5000)})
.set("weezing", {multiplier: 1.3, rarity: 7, minTime: 3.2, minPrice: 9000, maxPrice: 11500, price: randomRange(9000, 11500)})
.set("rhyhorn", {multiplier: 0.7, rarity: 20, minTime: 4, minPrice: 5000, maxPrice: 6000, price: randomRange(5000, 6000)})
.set("rhydon", {multiplier: 1.4, rarity: 6, minTime: 3.1, minPrice: 9800, maxPrice: 12300, price: randomRange(9800, 12300)})
.set("chansey", {multiplier: 2.5, rarity: 2, minTime: 2.7, minPrice: 20000, maxPrice: 23000, price: randomRange(20000, 23000)})
.set("tangela", {multiplier: 1.1, rarity: 9, minTime: 3.3, minPrice: 6800, maxPrice: 8600, price: randomRange(7000, 8600)})
.set("kangaskhan", {multiplier: 1.8, rarity: 4, minTime: 2.9, minPrice: 10800, maxPrice: 13600, price: randomRange(10800, 13600)})
.set("horsea", {multiplier: 1, rarity: 17, minTime: 3.5, minPrice: 4200, maxPrice: 5100, price: randomRange(4200, 5100)})
.set("seadra", {multiplier: 1.3, rarity: 8, minTime: 3.3, minPrice: 8500, maxPrice: 11600, price: randomRange(8500, 11600)})
.set("goldeen", {multiplier: 0.3, rarity: 35, minTime: 6, minPrice: 3500, maxPrice: 4100, price: randomRange(3500, 4100)})
.set("seaking", {multiplier: 1.1, rarity: 10, minTime: 3.5, minPrice: 7200, maxPrice: 8300, price: randomRange(7200, 8300)})
.set("staryu", {multiplier: 1, rarity: 15, minTime: 3.5, minPrice: 5800, maxPrice: 6100, price: randomRange(5800, 6100)})
.set("starmie", {multiplier: 2, rarity: 3, minTime: 2.8, minPrice: 10000, maxPrice: 13000, price: randomRange(10000, 13000)})
.set("mr-mime", {multiplier: 1.3, rarity: 8, minTime: 3.3, minPrice: 7500, maxPrice: 9000, price: randomRange(7500, 9000)})
.set("scyther", {multiplier: 1.6, rarity: 5, minTime: 3.0, minPrice: 10000, maxPrice: 12700, price: randomRange(10000, 12700)})
.set("jynx", {multiplier: 1.6, rarity: 5, minTime: 3.0, minPrice: 10000, maxPrice: 12700, price: randomRange(10000, 12700)})
.set("electabuzz", {multiplier: 1.6, rarity: 5, minTime: 3.0, minPrice: 10000, maxPrice: 12700, price: randomRange(10000, 12700)})
.set("magmar", {multiplier: 1.6, rarity: 5, minTime: 3.0, minPrice: 10000, maxPrice: 12700, price: randomRange(10000, 12700)})
.set("pinsir", {multiplier: 1.8, rarity: 4, minTime: 2.9, minPrice: 12000, maxPrice: 14000, price: randomRange(12000, 14000)})
.set("tauros", {multiplier: 1.8, rarity: 4, minTime: 2.9, minPrice: 12000, maxPrice: 14000, price: randomRange(12000, 14000)})
.set("magikarp", {multiplier: 0.1, rarity: 80, minTime: 15, minPrice: 1400, maxPrice: 2000, price: randomRange(1400, 2000)})
.set("gyarados", {multiplier: 2.5, rarity: 2, minTime: 2.7, minPrice: 30000, maxPrice: 36500, price: randomRange(30000, 36500)})
.set("lapras", {multiplier: 2.5, rarity: 2, minTime: 2.7, minPrice: 30000, maxPrice: 36500, price: randomRange(30000, 36500)})
.set("ditto", {multiplier: 1.1, rarity: 10, minTime: 3.5, minPrice: 5000, maxPrice: 6800, price: randomRange(5000, 6800)})
.set("eevee", {multiplier: 2, rarity: 3, minTime: 2.8, minPrice: 8500, maxPrice: 12000, price: randomRange(8500, 12000)})
.set("vaporeon", {multiplier: 3, rarity: 1, minTime: 2.5, minPrice: 45000, maxPrice: 60000, price: randomRange(45000, 60000)})
.set("jolteon", {multiplier: 3, rarity: 1, minTime: 2.5, minPrice: 45000, maxPrice: 60000, price: randomRange(45000, 60000)})
.set("flareon", {multiplier: 3, rarity: 1, minTime: 2.5, minPrice: 45000, maxPrice: 60000, price: randomRange(45000, 60000)})
.set("porygon", {multiplier: 1.3, rarity: 7, minTime: 3.2, minPrice: 7000, maxPrice: 9500, price: randomRange(7000, 9500)})
.set("omanyte", {multiplier: 1.3, rarity: 7, minTime: 3.2, minPrice: 6700, maxPrice: 10000, price: randomRange(6700, 10000)})
.set("omastar", {multiplier: 1.8, rarity: 4, minTime: 2.9, minPrice: 13800, maxPrice: 17500, price: randomRange(13800, 17500)})
.set("kabuto", {multiplier: 1.3, rarity: 7, minTime: 3.2, minPrice: 6700, maxPrice: 10000, price: randomRange(6700, 10000)})
.set("kabutops", {multiplier: 1.8, rarity: 4, minTime: 2.9, minPrice: 13800, maxPrice: 17500, price: randomRange(13800, 17500)})
.set("aerodactyl", {multiplier: 2.5, rarity: 2, minTime: 2.7, minPrice: 28800, maxPrice: 37600, price: randomRange(28800, 37600)})
.set("snorlax", {multiplier: 3, rarity: 1, minTime: 2.5, minPrice: 45000, maxPrice: 60000, price: randomRange(45000, 60000)})
.set("articuno", {multiplier: 3, rarity: 1, minTime: 2.4, minPrice: 90000, maxPrice: 125000, price: randomRange(90000, 125000)})
.set("zapdos", {multiplier: 3, rarity: 1, minTime: 2.4, minPrice: 90000, maxPrice: 125000, price: randomRange(90000, 125000)})
.set("moltres", {multiplier: 3, rarity: 1, minTime: 2.4, minPrice: 90000, maxPrice: 125000, price: randomRange(90000, 125000)})
.set("dratini", {multiplier: 1.3, rarity: 7, minTime: 3.2, minPrice: 5800, maxPrice: 8900, price: randomRange(5800, 8900)})
.set("dragonair", {multiplier: 1.6, rarity: 5, minTime: 3.0, minPrice: 9800, maxPrice: 14400, price: randomRange(9800, 14400)})
.set("dragonite", {multiplier: 3, rarity: 1, minTime: 2.5, minPrice: 45000, maxPrice: 60000, price: randomRange(45000, 60000)})
.set("mewtwo", {multiplier: 3, rarity: 1, minTime: 2.4, minPrice: 90000, maxPrice: 125000, price: randomRange(90000, 125000)})
.set("mew", {multiplier: 3, rarity: 1, minTime: 2.4, minPrice: 90000, maxPrice: 125000, price: randomRange(90000, 125000)});

const fetchPokemon = () => {
  let promises = [];
  for (let i = 1; i <= 151; i++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
      promises.push(fetch(url).then((res) => res.json()));
    }  

  Promise.all(promises).then((results) => {
     pokemonArr = results.map((data) => ({
      name: data.name,
      src: data.sprites.versions["generation-v"]["black-white"].animated.front_default,
      id: data.id,
      selected: false,
      onscreen: false
    }));
    // setInterval(mainGame, randomRange(30000, 45000));
    mainGame();
  });  
}

fetchPokemon();
  
const capitalizeName = function(obj) {
  let result = obj.name.charAt(0).toUpperCase() + obj.name.slice(1);
  return result;  
}

const displayCoins = function(coins) {
  document.getElementById("player-coins").innerHTML = numberFormatter.format(coins);
}

const suffleArray = function(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }  
}

const createGrid = function() {
  let grid = document.createElement("div");
  grid.classList.add("pokemon-grid");
  grid.id = "poke-grid";
  document.querySelector(".shop-container").appendChild(grid);
}

const createDiv = function(obj) {
  let div = document.createElement("div");
  div.className = "grid-item";
  div.id = obj.id;
  document.getElementById("poke-grid").appendChild(div);   
};

const createImg = function(obj) {
  let poke = document.createElement("img");
  poke.src = obj.src;
  poke.classList.add("grey-image");
  document.getElementById(obj.id).appendChild(poke);
}

const createNameText = function(obj) {
  let pElement = document.createElement("p");
  let pokemonName = document.createTextNode(obj.name);
  pElement.appendChild(pokemonName);
  pElement.innerHTML = capitalizeName(obj);
  document.getElementById(obj.id).appendChild(pElement);   
};

const createPriceText = function(obj) {
  let pElement = document.createElement("p");
  let formatPrice = numberFormatter.format(extraData.get(obj.name).price);
  let pokemonPrice = document.createTextNode(`$${formatPrice}`);
  pElement.classList.add("price-text");
  pElement.appendChild(pokemonPrice);  
  document.getElementById(obj.id).appendChild(pElement);
}

const resetMapData = function(obj) {
  let dataObj = extraData.get(obj.name);
  let minPriceValue = dataObj.minPrice;
  let maxPriceValue = dataObj.maxPrice;
  dataObj.price = randomRange(minPriceValue, maxPriceValue);
  extraData.set(obj.name, dataObj);
}

const createInput = function(obj) {
  let input = document.createElement("input");
  input.setAttribute("type", "text");
  input.setAttribute("pokeName", obj.name);
  let price = extraData.get(obj.name).price;
  input.setAttribute("price", price);
  input.classList.add("inputField")
  document.getElementById(obj.id).appendChild(input);
}

const createButton = function(obj) {
  let button = document.createElement("button");
  button.innerHTML = "Buy";
  button.setAttribute("pokeName", obj.name);
  button.classList.add("button-style");
  let div = document.getElementById(obj.id);
  console.log(div);
  document.getElementById(obj.id).appendChild(button);
  let startTime = timeStart();
  let minTime = extraData.get(obj.name).minTime;
  resetMapData(obj);
  button.addEventListener("click", (event) => {
    let buttonClicked = event.target.attributes[0].value;
    let inputs = document.querySelectorAll(".inputField");
    let endTime = timeEnd();
    let timeToPurchase = purchaseTime(startTime, endTime);
    inputs.forEach((input) => {
      if (buttonClicked === input.attributes[1].value) {
        let inputValue = Number(input.value);
        let price = Number(input.attributes[2].value);
        let playerCoins = Number(localStorage.getItem("coins"));
        console.log(price);
        console.log(inputValue);
        if (playerCoins < inputValue) {
          // alert("insufficient funds");
          renderModal2Content(obj, timeToPurchase, inputValue, price, playerCoins);
          modal2.showModal();
          input.value = "";
        } else if (inputValue > Math.ceil(1.5 * price)) {
          // alert("thats too much!");
          renderModal2Content(obj, timeToPurchase, inputValue, price, playerCoins);
          modal2.showModal();
          input.value = "";
        } else if (timeToPurchase > minTime) {
          div.remove();
          // alert(`Too slow! ${obj.name} is sold out!`);
          renderModalContent(obj, timeToPurchase);
          modal1.showModal(); 
        } else if (localStorage.getItem(obj.name + obj.id) && inputValue >= price) {
          updateDuplicatePurchase(playerCoins, inputValue, obj, div);
          renderModal4Content(obj, timeToPurchase, inputValue);
          modal4.showModal(); 
        } else if (inputValue === price || inputValue > price && inputValue <= Math.ceil(1.5 * price)) {
          updateChanges(playerCoins, buttonClicked, div, inputValue);
          // alert(`Congratulations! ${obj.name} has been added to your collection!`);
          renderModalContent(obj, timeToPurchase);
          modal1.showModal();
        } else if (inputValue < price && inputValue >= Math.ceil(price * 0.95)){
          let num = Math.ceil(Math.random() * 100);
          if (num <= 95) {
            if (localStorage.getItem(obj.name + obj.id)) {
              updateDuplicatePurchase(playerCoins, inputValue, obj, div);
              renderModal4Content(obj, timeToPurchase, inputValue);
              modal4.showModal();
            } else {
              updateChanges(playerCoins, buttonClicked, div, inputValue);
              // alert(`Congratulations! ${obj.name} has been added to your collection!`);
              renderModalContent(obj, timeToPurchase);
              modal1.showModal();
            }
          } else {
            // alert("offer toooooo low");
            renderModal3Content(obj, timeToPurchase);
            modal3.showModal();
            input.value = ""; 
          }
        } else if (inputValue < price && inputValue >=  Math.ceil(price * 0.90)){
          let num = Math.ceil(Math.random() * 100);
          if (num <= 90) {
            if (localStorage.getItem(obj.name + obj.id)) {
              updateDuplicatePurchase(playerCoins, inputValue, obj, div);
              renderModal4Content(obj, timeToPurchase, inputValue);
              modal4.showModal();
            } else {
              updateChanges(playerCoins, buttonClicked, div, inputValue);
              // alert(`Congratulations! ${obj.name} has been added to your collection!`);
              renderModalContent(obj, timeToPurchase);
              modal1.showModal();
            }  
          } else {
            // alert("offer toooooo low");
            renderModal3Content(obj, timeToPurchase);
            modal3.showModal();
            input.value = ""; 
          } 
        } else if (inputValue < price && inputValue >=  Math.ceil(price * 0.85)){
          let num = Math.ceil(Math.random() * 100);
          if (num <= 85) {
            if (localStorage.getItem(obj.name + obj.id)) {
              updateDuplicatePurchase(playerCoins, inputValue, obj, div);
              renderModal4Content(obj, timeToPurchase, inputValue);
              modal4.showModal();
            } else {
              updateChanges(playerCoins, buttonClicked, div, inputValue);
              // alert(`Congratulations! ${obj.name} has been added to your collection!`);
              renderModalContent(obj, timeToPurchase);
              modal1.showModal();
            }  
          } else {
            // alert("offer toooooo low");
            renderModal3Content(obj, timeToPurchase);
            modal3.showModal();
            input.value = ""; 
          }
        } else if (inputValue < price && inputValue >=  Math.ceil(price * 0.80)){
          let num = Math.ceil(Math.random() * 100);
          if (num <= 80) {
            if (localStorage.getItem(obj.name + obj.id)) {
              updateDuplicatePurchase(playerCoins, inputValue, obj, div);
              renderModal4Content(obj, timeToPurchase, inputValue);
              modal4.showModal();
            } else {
              updateChanges(playerCoins, buttonClicked, div, inputValue);
              // alert(`Congratulations! ${obj.name} has been added to your collection!`);
              renderModalContent(obj, timeToPurchase);
              modal1.showModal();
            } 
          } else {
            // alert("offer toooooo low");
            renderModal3Content(obj, timeToPurchase);
            modal3.showModal();
            input.value = ""; 
          }
        } else if (inputValue < price && inputValue >=  Math.ceil(price * 0.75)){
          let num = Math.ceil(Math.random() * 100);
          if (num <= 75) {
            if (localStorage.getItem(obj.name + obj.id)) {
              updateDuplicatePurchase(playerCoins, inputValue, obj, div);
              renderModal4Content(obj, timeToPurchase, inputValue);
              modal4.showModal();
            } else {
              updateChanges(playerCoins, buttonClicked, div, inputValue);
              // alert(`Congratulations! ${obj.name} has been added to your collection!`);
              renderModalContent(obj, timeToPurchase);
              modal1.showModal();
            }
          } else {
            // alert("offer toooooo low");
            renderModal3Content(obj, timeToPurchase);
            modal3.showModal();
            input.value = ""; 
          }
        } else if (inputValue < price) {
          // alert("offer way toooooo low");
          renderModal3Content(obj, timeToPurchase);
          modal3.showModal();
          input.value = ""; 
        }
      }
    })
  })
}

const selectPokemon = function (arr) {
  for (let i = 0; i <= 150; i++){
    let num = Math.ceil(Math.random() * 100)
    if (num <= 50) {
      arr[i].selected = true;
    }
  }
}

const displayOnScreen = function(arr) {
  let count = 0;
  suffleArray(arr);
  hideShopContent();
  createGrid();
  arr.forEach(pokemonObj => {
    if (pokemonObj.selected === true) {
      let num = Math.ceil(Math.random() * 100);
      let num2 = Math.ceil(Math.random() * 6);
      let num3 = Math.ceil(Math.random() * 5);
      let rarity = extraData.get(pokemonObj.name).rarity;
      pokemonObj.selected = false;
      if (rarity > 5 && num <= rarity && count < 8) {
        createDiv(pokemonObj);
        createImg(pokemonObj);
        createNameText(pokemonObj);
        createPriceText(pokemonObj);
        createInput(pokemonObj);
        createButton(pokemonObj);
        count++;
      } else if (rarity === 5 && num <= rarity && num2 <= 5 && count < 8) {
        createDiv(pokemonObj);
        createImg(pokemonObj);
        createNameText(pokemonObj);
        createPriceText(pokemonObj);
        createInput(pokemonObj);
        createButton(pokemonObj);
        count++;
      } else if (rarity === 4 && num <= rarity && num2 <= 4 && count < 8) {
        createDiv(pokemonObj);
        createImg(pokemonObj);
        createNameText(pokemonObj);
        createPriceText(pokemonObj);
        createInput(pokemonObj);
        createButton(pokemonObj);
        count++;
      } else if (rarity === 3 && num <= rarity && num2 <= 3 && count < 8) {
        createDiv(pokemonObj);
        createImg(pokemonObj);
        createNameText(pokemonObj);
        createPriceText(pokemonObj);
        createInput(pokemonObj);
        createButton(pokemonObj);
        count++;
      } else if (rarity === 2 && num <= rarity && num2 <= 2 && count < 8) {
        createDiv(pokemonObj);
        createImg(pokemonObj);
        createNameText(pokemonObj);
        createPriceText(pokemonObj);
        createInput(pokemonObj);
        createButton(pokemonObj);
        count++;
      } else if (rarity === 1 && num <= rarity && num3 <= 1 && count < 8) {
        createDiv(pokemonObj);
        createImg(pokemonObj);
        createNameText(pokemonObj);
        createPriceText(pokemonObj);
        createInput(pokemonObj);
        createButton(pokemonObj);
        count++;
      }
    }
  })
}

const hideShopContent = function() {
  document.getElementById("shop-content-container").classList.add("shop-content");
}

const showShopContent = function() {
  document.getElementById("shop-content-container").classList.remove("shop-content");
}

const removeGrid = function() {
  document.getElementById("poke-grid").remove();
}

const removePokemon = function() {
  let pokemonOnScreen = document.querySelectorAll(".grid-item");
  console.log(pokemonOnScreen);
  pokemonOnScreen.forEach(pokemon => {
    pokemon.remove();
  })
  removeGrid();
  showShopContent();
}

const boughtPokemon = function(str) {
  pokemonArr.forEach(pokemon => {
    if (pokemon.name === str) {
      if(!localStorage.getItem(str)) {
        localStorage.setItem(str + pokemon.id, pokemon.src);
      }
    }
  })
}

const mainGame = function() {
  let num = Math.ceil(Math.random() * 100);
  if (num <= 50) {
    selectPokemon(pokemonArr);
    displayOnScreen(pokemonArr);
    setTimeout(removePokemon, 15100);
  }
}

const timeStart = function() {
  let start = Date.now();
  return start;
}

const timeEnd = function() {
  let end = Date.now();
  return end;
}

const purchaseTime = function(start, end) {
  let timeSpent = (end-start)/1000;
  console.log(timeSpent);
  return timeSpent;
}

const updateChanges = function(coins, buttonName, divToRemove, inputVal) {
  coins = coins - inputVal;
  localStorage.setItem("coins", coins);
  displayCoins(coins);
  boughtPokemon(buttonName);
  divToRemove.remove();
}

const updateDuplicatePurchase = function(coins, inputVal, obj, divToRemove) {
  coins = coins - inputVal;
  coins = coins + (Math.ceil(inputVal * extraData.get(obj.name).multiplier));
  localStorage.setItem("coins", coins);
  displayCoins(coins);
  divToRemove.remove();
}

const renderModalContent = function(obj, userTime) {
  let minTime = extraData.get(obj.name).minTime;
  let result = document.getElementById("result");
  let resultMessage = document.getElementById("result-message");
  if (userTime <= minTime) {
    result.innerHTML = "Success";
    result.style.color = "green";
    resultMessage.innerHTML = `${capitalizeName(obj)} has been added to your collection!`;
  } 
  if (userTime > minTime){
    result.innerHTML = "Oops!";
    result.style.color = "red";
    resultMessage.innerHTML = `${capitalizeName(obj)} is sold out! You were too slow!`;
  }
  let img = document.getElementById("modal-img");
  let rarity = document.getElementById("poke-rarity");
  let time = document.getElementById("transaction-time");
  img.src = obj.src;
  rarity.innerHTML = extraData.get(obj.name).rarity;
  time.innerHTML = userTime + "s";
}

const renderModal2Content = function(obj, userTime, inputValue, price, playerCoins) {
  let result = document.getElementById("result2");
  let resultMessage = document.getElementById("result-message2");
  let img = document.getElementById("modal-img2");
  let rarity = document.getElementById("poke-rarity2");
  let time = document.getElementById("transaction-time2");
  if (playerCoins < inputValue) {
    result.innerHTML = "Insufficient Funds";
    result.style.color = "orange";
    resultMessage.innerHTML = "You don't have enough coins to offer that much!"
  } else if (inputValue > Math.ceil(1.5 * price)) {
    result.innerHTML = "Whoa! That Much?";
    result.style.color = "orange";
    resultMessage.innerHTML = "This offer is too high! Did you mean to do that?"  
  }
  img.src = obj.src;
  rarity.innerHTML = extraData.get(obj.name).rarity;
  time.innerHTML = userTime + "s";
}

const renderModal3Content = function(obj, userTime) {
  let result = document.getElementById("result3");
  let resultMessage = document.getElementById("result-message3");
  let img = document.getElementById("modal-img3");
  let rarity = document.getElementById("poke-rarity3");
  let time = document.getElementById("transaction-time3");
  result.innerHTML = "No deal!"
  result.style.color = "orange";
  resultMessage.innerHTML = "This offer is too low! Try a higher offer!";
  img.src = obj.src;
  rarity.innerHTML = extraData.get(obj.name).rarity;
  time.innerHTML = userTime + "s";
}

const renderModal4Content = function(obj, userTime, inputVal) {
  let result = document.getElementById("result4");
  let resultMessage = document.getElementById("result-message4");
  let secondMessage = document.getElementById("coin-return");
  let img = document.getElementById("modal-img4");
  let rarity = document.getElementById("poke-rarity4");
  let time = document.getElementById("transaction-time4");
  result.innerHTML = "Duplicate Purchase";
  result.style.color = "hsl(300, 100%, 45%)";
  resultMessage.innerHTML = "You already have this pokemon!";
  secondMessage.innerHTML = `You resell your duplicate for <span id="profit">${numberFormatter.format(Math.ceil(calcProfit(obj, inputVal)))}</span> coins.`;
  let profit = document.getElementById("profit");
  let multiplier = extraData.get(obj.name).multiplier;
  if (multiplier < 1) {
    profit.style.color = "red";
  } else if (multiplier === 1) {
    profit.style.color = "orange";
  } else {
    profit.style.color = "green";
  }
  img.src = obj.src;
  rarity.innerHTML = extraData.get(obj.name).rarity;
  time.innerHTML = userTime + "s";
}

const calcProfit = function (obj, inputValue) {
  let multiplier = extraData.get(obj.name).multiplier;
  let profit = inputValue * multiplier;
  return profit;
};

