// Select my theme select
let themeSelect = document.querySelector("#theme");

// Select my layout div
let layoutDiv = document.querySelector(".layout");

// Keep up with the theme
let currentTheme = "lightMode";

// Add my change event listener
themeSelect.addEventListener("change", (event) => {
  let newTheme = `${event.target.value}Mode`;

  // remove the previous theme class name for the layout div
  layoutDiv.classList.remove(currentTheme);

  // add the new theme class name for the layout div
  layoutDiv.classList.add(newTheme);

  // Update the current theme
  currentTheme = newTheme;
});

// Select the toggleContent button
let toggleContentBtn = document.querySelector("#toggleContent");

// Select the content paragraph
let contentPara = document.querySelector("#content");

// Add a click event listener for the button
toggleContentBtn.addEventListener("click", (event) => {
  if (contentPara.className.includes("hide")) {
    toggleContentBtn.textContent = "Hide Content";
  } else {
    toggleContentBtn.textContent = "Show Content";
  }

  contentPara.classList.toggle("hide");
});
