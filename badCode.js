/* This is BAD CODE. Why am I leaving this here? To remind myself that this didn't work.

What is the result of this code? What is its behavior?
This was meant to show a countdown to the user. It so happens that the code would initiate immediately, despite never initializing it manually. I'm not sure if
its because I wrapped all the JS in a window.onload = function(){}, but the result was:
1. Unwanted intialization of the timer (started earlier that I wanted)
2. It continued to run past 0..


function countDown(){
count=count-1;
  if (count >=0){
    console.log(count)
    document.getElementById('email-thankyou__countdown').innerHTML= `This window will close in ${count} seconds</span>`;
  } else {
    clearInterval(countDown);
    console.log('Counter done!');
    return;
  }
  
}
counter = setInterval(countDown, 1000);


The correct, working code is in the finished modal.

Below is code that actually worked as well, which was a base for the finished result:

let timeLeft = 4;
let downloadTimer = setInterval(function(){
  console.log(timeLeft)
  timeLeft = timeLeft - 1
  if (timeLeft <=0){
    console.log('Done!')
    clearInterval(downloadTimer);
  }
}, 1000)

original code solutions taken from here:
https://stackoverflow.com/questions/31106189/create-a-simple-10-second-countdown


