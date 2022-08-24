console.log("Hello DOM");

let contentDiv = document.querySelector(".content");
let contentH2 = document.querySelector(".content > h2");
let contentP = document.querySelector(".content > p");
let buttonEle = document.createElement("button");

let clickCount = 0;

buttonEle.textContent = "Click Me!";
buttonEle.style.backgroundColor = "red";
buttonEle.style.color = "white";

// buttonEle.onclick = function (event) {
//   contentP.textContent = `You've made ${++clickCount} clicks`;
// };

function onClick(event) {
  contentP.textContent = `You've made ${++clickCount} clicks`;
}

buttonEle.addEventListener("click", onClick);

// buttonEle.removeEventListener("click", onClick);

contentDiv.appendChild(buttonEle);

// contentDiv.insertBefore(buttonEle, contentH2);

// contentDiv.removeChild(contentP);

// contentDiv.replaceChild(buttonEle, contentP);

// let timer = setInterval(move, 100);

// let boxPosition = 0;

// let box = document.querySelector("#box");

// function move() {
//   if (boxPosition >= 175) {
//     clearInterval(timer);
//   } else {
//     boxPosition++;
//     box.style.left = boxPosition + "px";
//   }
// }
