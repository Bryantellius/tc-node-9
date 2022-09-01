import { focusableElements, currentFocus } from "./elements";

export function onKeyUp(event) {
  if (event.ctrlKey && event.shiftKey) {
    switch (event.key) {
      case "!":
        currentFocus = 0;
        focusableElements[0].focus();
        break;
      case "@":
        currentFocus = 1;
        focusableElements[1].focus();
        break;
      case "#":
        currentFocus = 2;
        focusableElements[2].focus();
        break;
      case "$":
        currentFocus = 3;
        focusableElements[3].focus();
        break;
      case "%":
        currentFocus = 4;
        focusableElements[4].focus();
        break;
    }
  } else if (event.key == "ArrowLeft" || event.key == "ArrowRight") {
    if (event.key == "ArrowLeft") {
      currentFocus--;

      if (currentFocus < 0) {
        currentFocus = focusableElements.length - 1;
      }
    } else {
      currentFocus++;

      if (currentFocus >= focusableElements.length) {
        currentFocus = 0;
      }
    }

    focusableElements[currentFocus].focus();
  }
}
