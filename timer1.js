const slicedArray = process.argv.slice(2); //cuts off the directory items at the start of the array
let lowestToHighest = slicedArray.sort((a, b) => a - b); //sorts the array from lowest to highest
for (const num of lowestToHighest) {
  const delay = Number(num) * 1000; //sets a variable equal to the conversion of the string array of numbers into an array of numbers and multiplies them by 1000 so they equal seconds
  if (isNaN(delay) || delay <= 0) {//set to less than or equal to 0 because setting a timer for 0 seconds is silly
    return;
  } else {
    setTimeout(() => {
      process.stderr.write('\x07');
    }, delay); console.log(`A timer will sound at: ${delay}ms`); //plays the timers at the correct time (I checked with my timer going at the same time) and displays when the timers will go off
  }
}
