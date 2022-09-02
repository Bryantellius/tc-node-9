import { focusableElements, currentFocus } from "./elements";
import { onKeyUp } from "./listeners";

// Auto Focus First Input
focusableElements[currentFocus].focus();

// Event Listener
window.addEventListener("keyup", onKeyUp);
