const dailyFiles = [
  "day1.html",
  "day2.html",
  "day3.html",
  "day4.html",
  "day5.html",
  "day6.html",
  "day7.html"
];

// Define a fixed start date (e.g., January 20, 2025)
const startDate = new Date("2025-20-01");

// Get today's date
const today = new Date();

// Calculate the difference in days between today and the start date
const timeDifference = today - startDate; // Difference in milliseconds
const daysSinceStart = Math.floor(timeDifference / (1000 * 60 * 60 * 24)); // Convert to days

// Use modulus to loop through files (e.g., if there are 7 files)
const fileIndex = daysSinceStart % dailyFiles.length;

// Get the container element
const dailyContentContainer = document.getElementById("daily-context");

// Load the corresponding HTML file
fetch(dailyFiles[fileIndex])
  .then(response => {
    if (!response.ok) {
      throw new Error(`Failed to load ${dailyFiles[fileIndex]}`);
    }
    return response.text();
  })
  .then(data => {
    // Insert the fetched content into the container
    dailyContentContainer.innerHTML = data;
  })
  .catch(error => {
    console.error("Error loading daily content:", error);
    if( dailyContentContainer.textContent = "Failed to load daily content.";
    
});

  