let values = ['😀', '😁', '😂', '🤣', '😄', '😅', '😆', '😉', '😋', '😍'];

let valueOne = document.getElementById('value-one');
let valueTwo = document.getElementById('value-two');
let valueThree = document.getElementById('value-three');

// Display 3 smileys in starting situation
document.getElementById('value-one').innerHTML = values[0];
document.getElementById('value-two').innerHTML = values[1];
document.getElementById('value-three').innerHTML = values[2];

function getRandomValue() {
  return values[Math.floor(Math.random() * 10)];
}

/*
setInterval(() => {
  valueOne.innerHTML = getRandomValue();
  valueTwo.innerHTML = getRandomValue();
  valueThree.innerHTML = getRandomValue();
}, 300);
*/
