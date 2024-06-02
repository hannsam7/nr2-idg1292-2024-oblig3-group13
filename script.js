gsap.to(".rain", {
  y: "150vh",
  duration: 8,
});

gsap.to(".sweater", {
  x: 140,
  duration: 6,
  repeat: -1,
});

gsap.to(".shein", {
  y: -30,
  duration: 1,
  yoyo: true,
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

  gsap.to(".shein", {
    y: -30,
    duration: 1,
    yoyo: true,
    repeat: -1,
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
