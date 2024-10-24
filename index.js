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


function modal_(name_){
  name_ = name_.toLowerCase();
  if (name_="kg") {
    
  }
}
