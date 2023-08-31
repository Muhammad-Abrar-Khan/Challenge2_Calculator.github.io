let finaloutput = [];
let screen_el = document.querySelector(".output");
let updateScreen_el = document.querySelector(".equal");

let justifyContentState = 1; 

const circleBg = document.getElementById('circleBg');
const circle = document.getElementById('circle');
const body = document.querySelector('body');

updateCirclePosition();
updateTheme();

circleBg.addEventListener('click', function(event) {
  const clickPosition = event.clientX;
  const circleBgRect = circleBg.getBoundingClientRect();
  const circleCenter = circleBgRect.left + circleBgRect.width / 2;

  if (clickPosition < circleCenter) {
    justifyContentState = 1;
  } else if (clickPosition > circleCenter + circleBgRect.width / 6) {
    justifyContentState = 3;
  } else {
    justifyContentState = 2;
  }

  updateCirclePosition();
  updateTheme();
});

function updateCirclePosition() {
  switch (justifyContentState) {
    case 1:
      circleBg.style.justifyContent = 'flex-start';
      break;
    case 2:
      circleBg.style.justifyContent = 'center';
      break;
    case 3:
      circleBg.style.justifyContent = 'flex-end';
      break;
  }
}

function updateTheme() {
  body.className = ''; // Clear all classes
  switch (justifyContentState) {
    case 1:
      body.classList.add('theme1');
      break;
    case 2:
      body.classList.add('theme2');
      break;
    case 3:
      body.classList.add('theme3');
      break;
  }
}

function del() {
  if (finaloutput.length > 0) {
    finaloutput.pop();
    updateScreen();
  }
}

function updateScreen() {
  screen_el.textContent = finaloutput.join('');
  setTimeout(function() {
    screen_el.scrollLeft = screen_el.scrollWidth;
  }, 10);
}

function cancel() {
  finaloutput = [];
  screen_el.textContent = 0;
}

function addValue(value) {
  finaloutput.push(value);
  updateScreen();
}

updateScreen_el.addEventListener("click", function() {
  const expression = finaloutput.join('');
  let result;
  try {
    result = eval(expression);
    screen_el.textContent = result;
    finaloutput = [result.toString()];
  } catch (error) {
    screen_el.textContent = 'Error';
  }
});

function zero() { addValue("0"); }
function dot() { addValue("."); }
function one() { addValue("1"); }
function two() { addValue("2"); }
function three() { addValue("3"); }
function four() { addValue("4"); }
function five() { addValue("5"); }
function six() { addValue("6"); }
function seven() { addValue("7"); }
function eight() { addValue("8"); }
function nine() { addValue("9"); }
function divide() { addValue("/"); }
function multiply() { addValue("*"); }
function minus() { addValue("-"); }
function plus() { addValue("+"); }
