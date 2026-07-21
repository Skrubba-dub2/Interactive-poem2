// main.js

const textContainer = document.getElementById('orbitText');
const text = textContainer.innerText;

// Clear the original text content
textContainer.innerText = '';

// Calculate the rotation angle step for each letter
const totalChars = text.length;
const angleStep = 360 / totalChars;

// Loop through each character to construct the circle
text.split('').forEach((char, index) => {
  const span = document.createElement('span');
  span.innerText = char;
  
  // Calculate specific rotation for this character
  const currentAngle = index * angleStep;
  span.style.transform = `rotate(${currentAngle}deg)`;
  
  textContainer.appendChild(span);
});

const orbit = document.querySelector('.orbit-text');

// Add the fast-spin class when the orbit container is clicked
orbit.addEventListener('click', () => {
  orbit.classList.add('fast-spin');

  // Remove it after 2700 milliseconds (2.7 seconds)
  setTimeout(() => {
    orbit.classList.remove('fast-spin');
  }, 2700);
});

 const container = document.querySelector('.orbit-container');
  
 // Add the collapse effect when the orbit container is clicked
container.addEventListener('click', () => {
  container.classList.add('collapse');

  // Collapse the text
  container.classList.add('collapse');
  
  // Go back to normal after 2 seconds (2000 milliseconds)
  setTimeout(() => {
    container.classList.remove('collapse');
  }, 2000);
})