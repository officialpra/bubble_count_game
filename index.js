let block = document.getElementsByClassName("in");
// console.log(block);
chnagedata();

function chnagedata() {
  for (let i = 0; i < 80; i++) {
    let ans = changenum();
    block[i].innerHTML = ans;

    console.log(block[i]);
  }
}
//  console.log(block[8]);
function changenum() {
  // Generate a random number between 1 and 5
  const randomNumber = Math.floor(Math.random() * 15) + 1;

  console.log(randomNumber);
  //   p.innerHTML=randomNumber;

  return randomNumber;
}


const divElements = document.querySelectorAll(".in"); // Replace 'your-class-name' with your actual class name

// Add click event listener to each div element
divElements.forEach((div) => {
  div.addEventListener("click", onClickFunction);
  // let vp=div.innerHTML;
  console.log(div);
});
let num = document.getElementById("num");
num.innerHTML = changenum();
let cp = num.innerHTML;
let countEle = document.getElementById("count");
let count = countEle.innerHTML;

function onClickFunction(even) {
  // Fetch the inner HTML of the clicked ul element
  const innerHTML = even.target.innerHTML;

  // Display or use the inner HTML as needed

  console.log("Clicked element innerHTML:", innerHTML);
  if (innerHTML === cp) {
    console.log("equal hai");
    count++;
    countEle.innerHTML = count;
    chnagedata();
    num.innerHTML = changenum();

    cp = num.innerHTML;
  }

  // Add your additional logic here
}

// Get the current timestamp in milliseconds
const currentTimestamp = Date.now();

console.log("Current Timestamp:", currentTimestamp);
// alert(currentTimestamp);
const currentTimestampInSeconds = Math.floor(Date.now() / 1000);

console.log("Current Timestamp in Seconds:", currentTimestampInSeconds);
function startReverseStopwatch() {
  let secondsRemaining = 30;

  // Display the initial time
  updateDisplay(secondsRemaining);

  // Update the display every second
  const intervalId = setInterval(function () {
    secondsRemaining--;

    // Check if the countdown has reached 0
    if (secondsRemaining <= 0) {
      clearInterval(intervalId);
      document.getElementById("countdown").innerHTML = `'Time's up!'`;
      divElements.forEach((div) => {
        div.removeEventListener("click", onClickFunction);
        // let vp=div.innerHTML;
        console.log(div);
      });


    } else {
      updateDisplay(secondsRemaining);
    }
  }, 1000);
}

// Function to update the display with the remaining time
function updateDisplay(secondsRemaining) {
  document.getElementById(
    "countdown"
  ).innerHTML = `Time Remaining: ${secondsRemaining} seconds`;
}

// Call the function to start the reverse stopwatch

startReverseStopwatch();

