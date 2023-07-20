// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";

// Update the height of .line-element based on the user's scroll position
function updateLineElementHeight() {
  const lineElement = document.querySelector(".line-element");
  const scrollPosition = window.scrollY; // Get the vertical scroll position
  const viewportHeight = window.innerHeight; // Get the viewport height
  const documentHeight = document.documentElement.scrollHeight; // Get the total document height

  // Read the data attributes for min and max heights
  const minHeight = parseInt(lineElement.getAttribute("data-min-height"), 10);
  const maxHeight = parseInt(lineElement.getAttribute("data-max-height"), 10);

  // Calculate the desired height based on the scroll position
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

// Get references to the form and its elements
const form = document.getElementById("contactForm");
const formContent = document.querySelector(".contact__form-content");
const formSubtitle = document.querySelector(".contact__form-subtitle");

if (form) {
  // Function to handle form submission
  function handleSubmit(event) {
    event.preventDefault();
    // Perform any additional form submission logic here (e.g., sending data to a server)

    // Hide the form content and show the form subtitle
    formContent.style.display = "none";
    formSubtitle.style.display = "block";
  }

  // Add event listener for form submission
  form.addEventListener("submit", handleSubmit);
}

const heroPlayButton = document.querySelector(".hero__play-button");
const pageWrap = document.querySelector(".wrapper");
const videoOverlay = document.getElementById("videoOverlay");
const closeButton = document.getElementById("closeButton");
const videoPlayer = document.querySelector(".video-player");

heroPlayButton.addEventListener("click", () => {
  // Slide the content to the left
  pageWrap.classList.add("shifted");
  // Show the video overlay smoothly
  videoOverlay.style.display = "block";
  setTimeout(() => {
    videoOverlay.classList.add("active");
    // Play the video when the overlay is fully visible
    videoPlayer.play();
  }, 50); // Wait a short time before adding the active class for the transition to take effect
});

closeButton.addEventListener("click", () => {
  // Slide the content back to its original position
  pageWrap.classList.remove("shifted");
  // Hide the video overlay smoothly
  videoOverlay.classList.remove("active");
  setTimeout(() => {
    videoOverlay.style.display = "none";
    // Pause the video when the overlay is fully hidden
    videoPlayer.pause();
  }, 500); // Wait for the transition to complete before hiding the overlay
});

// Listen for the webkitendfullscreen event to handle iOS fullscreen player
videoPlayer.addEventListener("webkitendfullscreen", () => {
  videoOverlay.style.display = "none";
  videoPlayer.pause();
  // Slide the content back to its original position after the video ends
  pageWrap.classList.remove("shifted");
});
