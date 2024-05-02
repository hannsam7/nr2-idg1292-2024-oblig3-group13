//this is blatant copying, so idk if we can use this
setTimeout(() => {
    document.querySelector().classList.add();
}, 1000);

//elements for intersector to watch
const somename1 = document.querySelector("somename1nameinhtml__start"); //nameinhtml refering to what class or id name an element has
const somename2 = document.querySelector("somename2nameinhtml__start"); //looks like it needs a start point and end point
//const somename3 = document.querySelector("somename3nameinhtml__start"); //related to observer3, might not get used

const options = {
    rootMargin: "-20px",
    threshold: [0, 0.25, 0.5, 0.75, 1] //array that makes different stages of zoom animation
};

const observer1 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        //if intersecting, start somename1 
        if(entry.intersectionRatio > 0.5) {
            document.querySelector("somename2nameinhtml").classList.add("somename2__closed"); //isk what the closed thing is about
            document.querySelector("somethingabouttitle").classList.remove("title__closed"); //idk what the title thing is about either
        }
    })
}, options);

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

observer1.observe(somename1);
observer2.observe(somename2);
//observer3.observe(somename3);