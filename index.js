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


let activeModal = "";
function modal_(name_){
  name_ = name_.toLowerCase();
  activeModal = name_;
  if (name_=="kg") {
    document.querySelector(".modal-description").innerText = `
    KG KG KG KG KG
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi, doloribus! Deleniti, dolorum? Consequatur vero sed sunt mollitia, perspiciatis repudiandae excepturi aut maxime quisquam velit suscipit qui cum voluptatum reprehenderit distinctio fugit quas blanditiis provident nulla eligendi, quia enim incidunt esse. Cupiditate doloremque voluptatum tempore tenetur eaque placeat deleniti, eveniet asperiores minima quasi esse provident dolor tempora saepe iure quos accusamus magnam eum perferendis ut quas animi veniam blanditiis? A dolores magni, quae perspiciatis, ullam quaerat recusandae nemo nihil voluptates obcaecati tempora veritatis temporibus deserunt delectus. Exercitationem suscipit dolor cumque temporibus. Architecto ullam deleniti commodi vitae iste nulla hic, sit ab quo modi alias recusandae possimus, voluptatem dolorum officiis sapiente corrupti harum quaerat et nam, omnis in vero temporibus eveniet! Magni iusto maiores ipsam ab rem laboriosam quam odit cumque eveniet!
    KG KG KG KG KG
    `
    document.querySelector(".modal-body").querySelector("img").setAttribute("src","assets/images/kg.png")
    document.querySelector(".modal-title").innerHTML = `KG Suppliers <div onclick="closeModal()" class="modal-close"><i class="fa fa-times"></i></div>`
  }

  if (name_=="silver") {
    document.querySelector(".modal-description").innerText = `
    Silver Silver Silver
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi, doloribus! Deleniti, dolorum? Consequatur vero sed sunt mollitia, perspiciatis repudiandae excepturi aut maxime quisquam velit suscipit qui cum voluptatum reprehenderit distinctio fugit quas blanditiis provident nulla eligendi, quia enim incidunt esse. Cupiditate doloremque voluptatum tempore tenetur eaque placeat deleniti, eveniet asperiores minima quasi esse provident dolor tempora saepe iure quos accusamus magnam eum perferendis ut quas animi veniam blanditiis? A dolores magni, quae perspiciatis, ullam quaerat recusandae nemo nihil voluptates obcaecati tempora veritatis temporibus deserunt delectus. Exercitationem suscipit dolor cumque temporibus. Architecto ullam deleniti commodi vitae iste nulla hic, sit ab quo modi alias recusandae possimus, voluptatem dolorum officiis sapiente corrupti harum quaerat et nam, omnis in vero temporibus eveniet! Magni iusto maiores ipsam ab rem laboriosam quam odit cumque eveniet!
    Silver Silver Silver
    `
    document.querySelector(".modal-body").querySelector("img").setAttribute("src","assets/images/sp.png")
    document.querySelector(".modal-title").innerHTML = `The Silver Palace <div onclick="closeModal()" class="modal-close"><i class="fa fa-times"></i></div>`
  }
  document.querySelector(".modal").style.display ="block";
}
function viewImage() {
  
}


function closeModal(){
  document.querySelector(".modal").style.display = "none";
}