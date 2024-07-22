let res;
let result = 0;
let isEqualPressed = false;

const numberClick = clickedButtonId => {
  if (document.getElementById(clickedButtonId).textContent == '=') {
    isEqualPressed = true;
    res = eval(document.getElementById('value-id').textContent);
    result = res.toFixed(10);
    document.getElementById('value-id').textContent = result;
  } else if (document.getElementById(clickedButtonId).textContent == 'AC') {
    isEqualPressed = false;
    document.getElementById('value-id').textContent = '0';
  } else if (document.getElementById(clickedButtonId).textContent == 'Del') {
    isEqualPressed = false;
    let numberOnScreen = document.getElementById('value-id').textContent;
    numberOnScreen = numberOnScreen.slice(0, -1);
    document.getElementById('value-id').textContent = numberOnScreen;
  } else if (document.getElementById('value-id').textContent == '0')
    document.getElementById('value-id').textContent =
      document.getElementById(clickedButtonId).textContent;
  else {
    if (isEqualPressed) {
      document.getElementById('value-id').textContent = result;
      document.getElementById('value-id').textContent =
        document.getElementById('value-id').textContent +
        document.getElementById(clickedButtonId).textContent;
      isEqualPressed = false;
    } else {
      document.getElementById('value-id').textContent =
        document.getElementById('value-id').textContent +
        document.getElementById(clickedButtonId).textContent;
    }
  }
};
