//this is blatant copying, so idk if we can use this 

setTimeout(() => {
    document.querySelector(".kid1").classList.add(".kidzoom");
}, 1000); //idk why we would need to time out something tbh.

//elements for intersector to watch
const kidFrame1 = document.querySelector(".kid1"); //nameinhtml refering to what class or id name an element has
const kidFrame2 = document.querySelector(".kidzoom"); //looks like it needs a start point and end point
//const somename3 = document.querySelector("somename3nameinhtml__start"); //related to observer3, might not get used

const options = {
    rootMargin: "-20px",
//    threshold: [0, 0.25, 0.5, 0.75, 1] //array that makes different stages of zoom animation i think
    threshold: [0]
};

const observer1 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        //if intersecting, start kid1 
        if(entry.intersectionRatio > 0.50) {
            document.querySelector(".kid1").classList.add(".kidzoom"); //isk what the closed thing is about
//            document.querySelector(".kid1").classList.remove(".kidzoom"); //idk what the title thing is about either
        }
    })
}, options);

/*
const observer2 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        //why would both be > 0.5?
        if(entry.intersectionRatio > 0.5) {
            document.querySelector("somename2nameinhtml").classList.remove("somename2__closed");
            document.querySelector("somethingabouttitle").classList.add("title__closed");
            //there were more querySelectors in the original, but they're not relevant to this page
            //might have to add some that are relevant though
        }
    })
}, options);

/* We'll see if this one gets used
const observer3 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.intersectionRatio > 0.5) {
            document.querySelector("").classList
        }
    })
})*/

observer1.observe(kidFrame1);
//observer2.observe(kidFrame2);
//observer3.observe(somename3);



//chatGTP
/*
// Define the SVG element
//const svgElement = document.getElementById('my-svg');
const kid = document.querySelector(".kid1")

// Intersection Observer Setup
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        // Zoom in if intersecting
        if (entry.intersectionRatio > 0.5) {
            kid.style.transform = 'scale(1.2)'; // Adjust the scale as needed
        } else {
            // Zoom out if not intersecting
            kid.style.transform = 'scale(1)'; // Reset the scale
        }
    });
}, { threshold: 0.5 }); // Adjust the threshold as needed

// Start observing the SVG element
observer.observe(kid);*/