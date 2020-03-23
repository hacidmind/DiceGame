// PLAYER 1
// 1 Create random number
// We are generating random nos from 1 - 6. We're rounding up using ceil
let randomNumber1 = Math.ceil(Math.random() * 6);
// console.log(randomNumber);

//2 Random Dice image from dice1.png - dice6.png
let randomDiceImage = 'dice' + randomNumber1 + '.png';


// 3 We need to get the image src. images/dice1.png - images/dice6.png
let randomImageSource = 'images/' + randomDiceImage;


// 4 The image 1
let image1 = document.querySelectorAll('img')[0];
image1.setAttribute('src', randomImageSource);

// PLAYER 2
let randomNumber2 = Math.ceil(Math.random() * 6);
    
let randomImageSource2 = 'images/dice' + randomNumber2 + '.png';

document.querySelectorAll('img')[1].setAttribute('src', randomImageSource2);



// 5 Getting the winner
if (randomNumber1 > randomNumber2) {
    document.querySelector('h1').innerHTML = ' Player 1 Wins!'
} else if (randomNumber2 > randomNumber1) {
    document.querySelector('h1').innerHTML = " Player 2 Wins!"
} else {
    document.querySelector('h1').innerHTML = "Draw"
}