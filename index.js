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
      progressBar.style.top = progress + "%";
    }
  });
}, options);

// Observe each section
sections.forEach(section => {
  observer.observe(section);
});
