// PUT INTO A FUNCTION //
// set variable for button
const toggleButton = document.querySelector("#toggle-grid-slide");
// add event listener to button
toggleButton.addEventListener("click", () => {
// toggle grid container template rows fr by toggling the class visible
  document.querySelector("#grid-container").classList.toggle("visible");
});

// ADD USER INPUT FIELD //