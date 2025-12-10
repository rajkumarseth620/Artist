// Get the modal element
const modal = document.getElementById("artModal");

// Get the image and caption elements inside the modal
const modalImage = document.getElementById("modalImage");
const captionText = document.getElementById("caption");

/**
 * Opens the modal with the specified image and caption.
 * @param {string} src - The URL of the image.
 * @param {string} alt - The caption text for the image.
 */
function openModal(src, alt) {
  modal.style.display = "block";
  modalImage.src = src;
  captionText.innerHTML = alt;
  
  // Optional: Add a class to body to prevent background scrolling
  document.body.style.overflow = 'hidden';
}

/**
 * Closes the modal.
 */
function closeModal() {
  modal.style.display = "none";
  document.body.style.overflow = 'auto';
}

// Attach event listener to close the modal when clicking outside the content
// (The HTML already handles this with the onclick="closeModal()" on the modal div)