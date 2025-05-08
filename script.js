// Wait for DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Get DOM elements
  const greeting = document.getElementById("greeting");
  const changeTextBtn = document.getElementById("change-text-btn");
  const changeColorBtn = document.getElementById("change-color-btn");
  const toggleElementBtn = document.getElementById("toggle-element-btn");
  const colorBox = document.getElementById("color-box");
  const elementToToggle = document.getElementById("element-to-toggle");
  const description = document.querySelector(".description");

  // Array of possible colors
  const colors = ["#e74c3c", "#3498db", "#2ecc71", "#f1c40f", "#9b59b6"];
  let colorIndex = 0;

  // Array of possible greetings
  const greetings = [
    "Hello, Friend!",
    "Welcome Back!",
    "Good to See You!",
    "Howdy, Partner!",
    "Greetings!",
  ];
  let greetingIndex = 0;

  // 1. Change text content dynamically
  changeTextBtn.addEventListener("click", function () {
    greetingIndex = (greetingIndex + 1) % greetings.length;
    greeting.textContent = greetings[greetingIndex];

    // Also modify the description style
    description.style.fontStyle =
      description.style.fontStyle === "italic" ? "normal" : "italic";
    description.style.color =
      description.style.color === "darkblue" ? "#333" : "darkblue";
  });

  // 2. Modify CSS styles via JavaScript
  changeColorBtn.addEventListener("click", function () {
    colorIndex = (colorIndex + 1) % colors.length;
    colorBox.style.backgroundColor = colors[colorIndex];

    // Add animation class temporarily
    colorBox.classList.add("animate");
    setTimeout(() => {
      colorBox.classList.remove("animate");
    }, 500);
  });

  // 3. Add or remove an element when a button is clicked
  toggleElementBtn.addEventListener("click", function () {
    if (elementToToggle.style.display === "none") {
      elementToToggle.style.display = "block";
      toggleElementBtn.textContent = "Hide Element";
    } else {
      elementToToggle.style.display = "none";
      toggleElementBtn.textContent = "Show Element";
    }
  });

  // Bonus: Add a new element when color box is clicked
  colorBox.addEventListener("click", function () {
    const newElement = document.createElement("p");
    newElement.textContent = `Box clicked at ${new Date().toLocaleTimeString()}`;
    newElement.className = "click-message";
    document.getElementById("dynamic-section").appendChild(newElement);

    // Remove the message after 3 seconds
    setTimeout(() => {
      newElement.remove();
    }, 3000);
  });
});
