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


const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            document.querySelector('.actions img').classList.add('animate-in');
        } else {
            document.querySelector('.actions img').classList.remove('animate-in');
        }
    });
});

const target = document.querySelector('.actions');

observer.observe(target);