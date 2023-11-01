# CSS Toggles
- client.js line 284, preventClickSpam function. Adds class to disable pointer events. This function is called on line 257 in the click handler.
- client.js line 15, gridSlide function. Shows and hides the item reference on the right half of the screen. This function is called on line 321.

## Bugs
- Player was able to click multiple items per cycle, fixed with css class toggle.
- [disable pointer](https://css-tricks.com/almanac/properties/p/pointer-events/)
- Array would always be in same order resulting in limited variance of where items would appear on the grid, fixed with an array shuffle function.
- [shuffle array](https://dev.to/codebubb/how-to-shuffle-an-array-in-javascript-2ikj)
- audio files would not play on github pages. Found new files (mp3 instead of ogg) to fix.
- Current unfixed bug: if the game is not played on a screen large enough to display the items on the left and the item reference on the right (the reference has wrapped underneath) then the pop ups will display in the wrong spot instead of next to the coins.

## Attributions 
- [poke ball](https://bulbapedia.bulbagarden.net/wiki/File:Dream_Pok%C3%A9_Ball_Sprite.png)
- [rare candy](https://bulbapedia.bulbagarden.net/wiki/File:Dream_Rare_Candy_Sprite.png)
- [sun stone](https://bulbapedia.bulbagarden.net/wiki/File:Dream_Sun_Stone_Sprite.png)
- [moon stone](https://bulbapedia.bulbagarden.net/wiki/File:Dream_Moon_Stone_Sprite.png)
- [fire stone](https://bulbapedia.bulbagarden.net/wiki/File:Dream_Fire_Stone_Sprite.png)
- [thunder stone](https://bulbapedia.bulbagarden.net/wiki/File:Dream_Thunder_Stone_Sprite.png)
- [water stone](https://bulbapedia.bulbagarden.net/wiki/File:Dream_Water_Stone_Sprite.png)
- [leaf stone](https://bulbapedia.bulbagarden.net/wiki/File:Dream_Leaf_Stone_Sprite.png)
- [pearl](https://bulbapedia.bulbagarden.net/wiki/File:Dream_Pearl_Sprite.png)
- [big pearl](https://bulbapedia.bulbagarden.net/wiki/File:Dream_Big_Pearl_Sprite.png)
- [star dust](https://bulbapedia.bulbagarden.net/wiki/File:Dream_Stardust_Sprite.png)
- [star piece](https://bulbapedia.bulbagarden.net/wiki/File:Dream_Star_Piece_Sprite.png)
- [shiny stone](https://bulbapedia.bulbagarden.net/wiki/File:Dream_Shiny_Stone_Sprite.png)
- [dusk stone](https://bulbapedia.bulbagarden.net/wiki/File:Dream_Dusk_Stone_Sprite.png)
- [dawn stone](https://bulbapedia.bulbagarden.net/wiki/File:Dream_Dawn_Stone_Sprite.png)
- [oval stone](https://bulbapedia.bulbagarden.net/wiki/File:Dream_Oval_Stone_Sprite.png)
- [everstone](https://bulbapedia.bulbagarden.net/wiki/File:Dream_Everstone_Sprite.png)
- [dragon scale](https://bulbapedia.bulbagarden.net/wiki/File:Dream_Dragon_Scale_Sprite.png)
- [light clay](https://bulbapedia.bulbagarden.net/wiki/File:Dream_Light_Clay_Sprite.png)
- [iron ball](https://bulbapedia.bulbagarden.net/wiki/File:Dream_Iron_Ball_Sprite.png)
- [nugget](https://bulbapedia.bulbagarden.net/wiki/File:Dream_Nugget_Sprite.png)
- [big nugget](https://bulbapedia.bulbagarden.net/wiki/File:Dream_Big_Nugget_Sprite.png)
- [float stone](https://bulbapedia.bulbagarden.net/wiki/File:Dream_Float_Stone_Sprite.png)
- [eviolite](https://bulbapedia.bulbagarden.net/wiki/File:Dream_Eviolite_Sprite.png)
- [prism scale](https://bulbapedia.bulbagarden.net/wiki/File:Dream_Prism_Scale_Sprite.png)
- [deep sea scale](https://bulbapedia.bulbagarden.net/wiki/File:Dream_Deep_Sea_Scale_Sprite.png)
- [hard stone](https://bulbapedia.bulbagarden.net/wiki/File:Dream_Hard_Stone_Sprite.png)
- [red shard](https://bulbapedia.bulbagarden.net/wiki/File:Mine_Red_Shard_BDSP.png)
- [yellow shard](https://bulbapedia.bulbagarden.net/wiki/File:Mine_Yellow_Shard_BDSP.png)
- [blue shard](https://bulbapedia.bulbagarden.net/wiki/File:Mine_Blue_Shard_BDSP.png)
- [green shard](https://bulbapedia.bulbagarden.net/wiki/File:Mine_Green_Shard_BDSP.png)