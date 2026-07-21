// main.js

// Define Random Number Function
function randomNumber(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Define divs variable as all divs inside grid containter
let divs = document.querySelectorAll(".grid-container div");

// Define Randomized function
function randomized() {
    console.log(divs.length, "randomized!");

    // just the grid divs
    divs.forEach(function(div) {
        let scale = randomNumber(.5, 5.2);
        let translatex = randomNumber(0, 50);
        let translateY = randomNumber(0, 20);
        let rotate = randomNumber(0, 360);

        // 50% of the time...
        if (Math.random() > 0.5) {
            scale = 1; // don't affect scale
            translateX = randomNumber(0, 80);
            translateY = randomNumber(0, 80);
        }

        div.style.transform = `scale(${scale}) translate(${translateX}%, ${translateY}%) rotate(${rotate}deg)`;
    })
}

// Add event listener to call randomize function
document.addEventListener("click", randomize);