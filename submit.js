// JavaScript code in nextPage.js

document.addEventListener("DOMContentLoaded", function () {
  // Get the query parameters from the URL
  const urlParams = new URLSearchParams(window.location.search);
  const selectedNumber = urlParams.get("rating");

  // Check if a rating was passed as a query parameter
  if (selectedNumber !== null) {
    // Display the selected number on the page
    const selectedNumberElement = document.getElementById("selectedNumber");
    selectedNumberElement.textContent = selectedNumber;
  } else {
    // Handle the case where no rating was passed (optional)
    const selectedNumberElement = document.getElementById("selectedNumber");
    selectedNumberElement.textContent = "No rating selected.";
  }
});
