let values = ['😀', '😁', '😂', '🤣', '😄', '😅', '😆', '😉', '😋', '😍'];

// selecting all elements
let valueOne = document.getElementById('value-one');
let valueTwo = document.getElementById('value-two');
let valueThree = document.getElementById('value-three');
let result = document.getElementById('result');
const playBtn = document.getElementById('play-btn');

// Generate a click event and assign the 'spinValues' function
playBtn.addEventListener('click', spinValues);

function spinValues() {
  // Deactivate the play button so as not to allow the user to click several times.
  playBtn.disabled = true;

  /*
   * Generate the number of random attempts by calling 'randomAttempts' function
   * Later we'll use this value to compare with 'initValue' to stop 'setInterval' method
   */
  const attempts = randomAttempts(3, values.length);

  // initial values to compare with attempts to stop 'setInterval' method
  let initValue_one = 0,
    initValue_two = 0,
    initValue_three = 0;

  /*
   * slotOne, slotTwo, slotThree
   * For each slot, using 'setInterval' method
   * Generate random emojis until the number of attempts is reached
   */
  let slotOne = setInterval(() => {
    valueOne.innerHTML = values[randomNumber(values.length)];
    initValue_one++;

    if (initValue_one == attempts) {
      clearInterval(slotOne);
      return null;
    }
  }, 100);

  let slotTwo = setInterval(() => {
    valueTwo.innerHTML = values[randomNumber(values.length)];
    initValue_two++;

    if (initValue_two == attempts) {
      clearInterval(slotTwo);
      return null;
    }
  }, 100);

  let slotThree = setInterval(() => {
    valueThree.innerHTML = values[randomNumber(values.length)];
    initValue_three++;

    if (initValue_three == attempts) {
      clearInterval(slotThree);
      victory();
      playBtn.disabled = false;
      return null;
    }
  }, 100);

  function victory() {
    slotOne = valueOne.innerHTML;
    slotTwo = valueTwo.innerHTML;
    slotThree = valueThree.innerHTML;

    if (slotOne == slotTwo && slotTwo == slotThree) {
      result.innerHTML = 'Victory 🏆';
    } else {
      result.innerHTML = 'Try again!';
    }
  }
}

function randomNumber(length) {
  return Math.floor(Math.random() * length);
}

function randomAttempts(min, max) {
  return Math.floor(Math.random() * max + min);
}
