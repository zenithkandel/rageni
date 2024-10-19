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

document.body.onload = function () {
  document.querySelector("body > main > section.hero > div > nav > div > div.absolute.inset-x-0.z-20.w-full.px-6.py-4.transition-all.duration-300.ease-in-out.bg-white.dark\\:bg-transparent.md\\:mt-0.md\\:p-0.md\\:top-0.md\\:relative.md\\:bg-transparent.md\\:w-auto.md\\:opacity-100.md\\:translate-x-0.md\\:flex.md\\:items-center.opacity-0.-translate-x-full > div > a:nth-child(1)").click()
}