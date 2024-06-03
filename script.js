// Animate the ".rain" element to move vertically by 150vh over 8 seconds
gsap.to(".rain", {
  y: "150vh",
  duration: 8,
});

// Animate the ".sweater" element to move horizontally by 140px, repeat indefinitely
gsap.to(".sweater", {
  x: 140,
  duration: 6,
  repeat: -1,
});

// Create an IntersectionObserver to watch for visibility changes of target elements
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Add the "animate-in" class when the element is in view
      document.querySelector(".actions img").classList.add("animate-in");
    } else {
      // Remove the "animate-in" class when the element is out of view
      document.querySelector(".actions img").classList.remove("animate-in");
    }
  });
});

// Target the ".actions" element for observation
const target = document.querySelector(".actions");

// Start observing the target element
observer.observe(target);

// Check if the user prefers reduced motion
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Reduced motion alternatives
if (!prefersReducedMotion) {
  // Animate the ".rain" element to move vertically by 150vh and fade out over 8 seconds
  gsap.to(".rain", {
    y: "150vh",
    opacity: 0,
    duration: 8,
    ease: "power1.inOut"
  });

  gsap.to(".sweater", {
    // Animate the ".sweater" element to move horizontally by 140px, repeat indefinitely with a yoyo effect
    x: 140,
    duration: 6,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut"
  });
} else {
  gsap.to(".rain", {
    // Fade out the ".rain" element over 2 seconds
    opacity: 0,
    duration: 2,
    ease: "power1.inOut"
  });
}

// Function to create a close button
function createCloseButton(textBox) {
  const closeButton = document.createElement('span');
  closeButton.classList.add('close-button');
  closeButton.textContent = '✕'; // "x" will be visable for the user as the close button
  closeButton.addEventListener('click', () => {
    textBox.remove(); // Remove text box when the close button is clicked
  });
  return closeButton;
}

// Select all brand images
const brands = document.querySelectorAll('.brand');

// Loop through each brand and add a click event listener
brands.forEach(brand => {
  brand.addEventListener('click', () => {
    // Get the additional information from data-info attribute
    const info = brand.getAttribute('data-info');

    // Create a text box to display dditional information
    const textBox = document.createElement('div');
    textBox.classList.add('info-box');
    textBox.textContent = info;

    // Create and append close button
    const closeButton = createCloseButton(textBox);
    textBox.appendChild(closeButton);

    // Append the text box to body
    document.body.appendChild(textBox);
  });
});