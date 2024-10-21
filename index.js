const progressBar = document.getElementById("progressBar");
const sections = document.querySelectorAll("section");

let options = {
  root: null,  // Use the viewport as the root
  threshold: 0.5  // Trigger when 50% of the section is visible
};

let observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Calculate progress based on the section index
      let sectionIndex = Array.from(sections).indexOf(entry.target);
      let progress = (sectionIndex) / sections.length * 100;
      if ((sections.length*progress)>75) {
        document.querySelector(".controller").style.display="block";
      }
      else{
        document.querySelector(".controller").style.display="none";
      }
      progressBar.style.top = progress + "%";
    }
  });
}, options);

// Observe each section
sections.forEach(section => {
  observer.observe(section);
});

document.body.onload = function () {
// Select the buttons
const scrollUpBtn = document.getElementById('scrollUp');
const scrollDownBtn = document.getElementById('scrollDown');

// Select the main element where the scroll snapping is applied
const mainElement = document.querySelector('main');

// Scroll up when the up button is clicked
scrollUpBtn.addEventListener('click', () => {
  mainElement.scrollBy({
    top: -window.innerHeight, // Scroll by one viewport height
    behavior: 'smooth'        // Smooth scroll
  });
});

// Scroll down when the down button is clicked
scrollDownBtn.addEventListener('click', () => {
  mainElement.scrollBy({
    top: window.innerHeight,  // Scroll by one viewport height
    behavior: 'smooth'        // Smooth scroll
  });
});

}



// // Select the main element
// const mainElement = document.querySelector('main');
// const bodyElement = document.body;  // Select the body element

// // Array of background images
// const backgroundImages = [
//   'url(assets/images/hero-bg.webp)',
//   'url(assets/images/hero-bg1.webp)',
//   'url(assets/images/hero-bg2.webp)',
//   'url(assets/images/hero-bg3.webp)'
// ];

// // Fade background on scroll with transition
// let currentIndex = 0;

// mainElement.addEventListener('scroll', () => {
//   const sections = document.querySelectorAll("section");
//   let sectionIndex = Math.floor(mainElement.scrollTop / window.innerHeight); // Determine the section index

//   // If the section has changed
//   if (sectionIndex !== currentIndex) {
//     currentIndex = sectionIndex;
    
//     // Apply fade-out first
//     bodyElement.style.transition = 'background 0.1s ease-out';

//     setTimeout(() => {
//       // Change the background image
//       bodyElement.style.backgroundImage = backgroundImages[sectionIndex % backgroundImages.length];
      
//       // Fade-in effect
//       bodyElement.style.transition = 'background 0.1s ease-in, opacity 0.1s ease-in';
//     }, 100); // Wait for the fade-out to complete
//   }
// });
