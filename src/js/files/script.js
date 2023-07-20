// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";

// Get the .line-element element
const lineElement = document.querySelector(".line-element");

// Update the height of .line-element based on the user's scroll position
function updateLineElementHeight() {
  const scrollPosition = window.scrollY; // Get the vertical scroll position
  const viewportHeight = window.innerHeight; // Get the viewport height
  const documentHeight = document.documentElement.scrollHeight; // Get the total document height

  // Calculate the desired height based on the scroll position
  const minHeight = 100;
  const maxHeight = 700;
  const scrollPercentage = Math.min(
    scrollPosition / (documentHeight - viewportHeight),
    1
  );
  const newHeight = minHeight + scrollPercentage * (maxHeight - minHeight);

  // Update the height of .line-element
  lineElement.style.height = `${newHeight}px`;
}

// Call the updateLineElementHeight function on page load and scroll
window.addEventListener("load", updateLineElementHeight);
window.addEventListener("scroll", updateLineElementHeight);

// Get the textarea element
const textarea = document.getElementById("messageInput");
if (textarea) {
  // Function to auto-resize the textarea
  function autoResizeTextarea() {
    textarea.style.height = "auto"; // Reset the height to auto
    textarea.style.height = textarea.scrollHeight + "px"; // Set the height to match the content
  }

  // Attach event listener to the textarea for input changes
  textarea.addEventListener("input", autoResizeTextarea);

  // Call the autoResizeTextarea function initially in case there is pre-filled content
  autoResizeTextarea();
}
