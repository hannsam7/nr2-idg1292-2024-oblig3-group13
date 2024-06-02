gsap.to(".rain", {
  y: "150vh",
  duration: 8,
});

gsap.to(".sweater", {
  x: 140,
  duration: 6,
  repeat: -1,
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      document.querySelector(".actions img").classList.add("animate-in");
    } else {
      document.querySelector(".actions img").classList.remove("animate-in");
    }
  });
});

const target = document.querySelector(".actions");

observer.observe(target);

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (!prefersReducedMotion) {
  gsap.to(".rain", {
    y: "150vh",
    opacity: 0,
    duration: 8,
    ease: "power1.inOut"
  });

  gsap.to(".sweater", {
    x: 140,
    duration: 6,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut"
  });
} else {
  // Reduced motion alternative
  gsap.to(".rain", {
    opacity: 0,
    duration: 2,
    ease: "power1.inOut"
  });
}

// Function to create a close button
function createCloseButton(textBox) {
  const closeButton = document.createElement('span');
  closeButton.classList.add('close-button');
  closeButton.textContent = '✕';
  closeButton.addEventListener('click', () => {
    textBox.remove(); // Remove the text box when the close button is clicked
  });
  return closeButton;
}

// Select all brand images
const brands = document.querySelectorAll('.brand');

// Loop through each brand and add a click event listener
brands.forEach(brand => {
  brand.addEventListener('click', () => {
    // Get the additional information from the data-info attribute
    const info = brand.getAttribute('data-info');
    
    // Create a text box to display the additional information
    const textBox = document.createElement('div');
    textBox.classList.add('info-box');
    textBox.textContent = info;

    // Create and append the close button
    const closeButton = createCloseButton(textBox);
    textBox.appendChild(closeButton);

    // Append the text box to the body
    document.body.appendChild(textBox);
  });
});