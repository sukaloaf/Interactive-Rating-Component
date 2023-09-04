// JavaScript code in script.js

// Get references to the rating buttons, the submit button, and the next page link
const ratingButtons = document.querySelectorAll(".radioButton");
const submitButton = document.getElementById("submitButton");

// Add click event listeners to the rating buttons
ratingButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const selectedNumber = event.target.textContent;

    // Store the selected number in a sessionStorage (or localStorage) variable
    sessionStorage.setItem("selectedNumber", selectedNumber);
  });
});

// Add click event listener to the submit button
submitButton.addEventListener("click", () => {
  // Get the selected number from sessionStorage
  const selectedNumber = sessionStorage.getItem("selectedNumber");

  if (selectedNumber) {
    // Construct the URL for the next page with the selected number as a query parameter
    const submitURL = `submit.html?rating=${selectedNumber}`;

    // Navigate to the next page
    window.location.href = submitURL;
  } else {
    alert("Please select a rating before submitting.");
  }
});
