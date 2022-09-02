let content = "";

let editor = document.querySelector("textarea");
let output = document.querySelector(".output");

editor.addEventListener("keyup", (event) => {
  output.innerHTML = event.target.value;
});
