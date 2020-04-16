/*
Nimi: Satu Husso
*/

function window_calculation() {
  let window_height = Number(document.getElementById("window_height").value);
  let window_width = Number(document.getElementById("window_width").value);
  let window_amount = Number(document.getElementById("window_amount").value);

  const ERROR_MAX = "Maximum height and width of window is 200cm.";
  const ERROR_MIN = "Minimum height and width of window is 50cm.";
  const ERROR_AMOUNT = "No more than 10 equal size windows";
  const ERROR_ZERO = "No amount. 1 assumed";

  if (window_amount === 0) {
    document.getElementById("error").innerHTML = ERROR_ZERO;
    return;
  }
  if (window_amount > 10) {
    document.getElementById("error").innerHTML = ERROR_AMOUNT;
    return;
  }
  if (window_height > 200) {
    document.getElementById("error").innerHTML = ERROR_MAX;
    return;
  } else if (window_width < 50) {
    document.getElementById("error").innerHTML = ERROR_MIN;
    return;
  }

  /* wood for one window*/
  let frame_front = 2 * (window_width - 12) + 2 * window_height;
  let frame_rear = 2 * (window_height - 12) + 2 * window_width;
  let wood = (frame_front + frame_rear) / 100;

  /* glass for one window*/
  let glass = ((window_height - 10) * (window_width - 10)) / 10000;

  /* material for many windows*/
  let woods = window_amount * wood;
  let glasses = window_amount * glass;
  document.getElementById("wood").innerHTML = wood;
  document.getElementById("glass").innerHTML = glass;

  if (window_amount > 1) {
    document.getElementById("woods").innerHTML = woods.toFixed(2);
    document.getElementById("glasses").innerHTML = glasses.toFixed(2);
  }
}
