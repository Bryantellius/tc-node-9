import Wishlist from "./wishlist";
import DOMElements from "./dom";

console.log("Hello World");

let wishlist = new Wishlist();

// Event Listeners
DOMElements.form.addEventListener("submit", addCar);

DOMElements.removeBtn.addEventListener("click", removeCar);

// Functions

function showCarDetails(car) {
  // update car display texts
  DOMElements.makeDisplay.textContent = car.make;
  DOMElements.modelDisplay.textContent = car.model;
  DOMElements.yearDisplay.textContent = car.year;
  // enable the remove button
  DOMElements.removeBtn.disabled = false;
  // set the current car's id to the data-carId attribute of removeBtn
  DOMElements.removeBtn.setAttribute("data-carId", car.id);
}

function updateDOMList() {
  // clear the ul contents
  DOMElements.listUl.innerHTML = "";

  // iterate through the list of cars
  wishlist.list.forEach((car) => {
    // add a li to the ul for each car
    let li = document.createElement("li");
    li.textContent = car.model;
    // add a click event listener to showCarDetails per list item click
    li.addEventListener("click", () => showCarDetails(car));
    DOMElements.listUl.appendChild(li);
  });
}

function addCar(event) {
  event.preventDefault();

  let make = DOMElements.makeInput.value;
  let model = DOMElements.modelInput.value;
  let year = DOMElements.yearInput.value;

  wishlist.add(make, model, year);

  updateDOMList();

  // reset form values
  DOMElements.makeInput.value = "";
  DOMElements.modelInput.value = "";
  DOMElements.yearInput.value = "";
}

function removeCar() {
  // get the displayed car's id
  let carId = Number(DOMElements.removeBtn.getAttribute("data-carId"));

  // remove the selected car
  wishlist.remove(carId);

  // update the dom list
  updateDOMList();

  // reset display values
  DOMElements.makeDisplay.textContent = "";
  DOMElements.modelDisplay.textContent = "";
  DOMElements.yearDisplay.textContent = "";

  // disable remove button
  DOMElements.removeBtn.disabled = true;
}
