// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 200px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
  


const scrollElements = document.querySelectorAll(".scroll-animation");

const elementInView = (el, offset = 100) => {
    const elementTop = el.getBoundingClientRect().top;
    return elementTop <= (window.innerHeight || document.documentElement.clientHeight) - offset;
};

const displayScrollElement = (el) => {
    el.classList.add("animated");
};

const hideScrollElement = (el) => {
    el.classList.remove("animated");
};

const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
        if (elementInView(el)) {
            displayScrollElement(el);
        } else {
            hideScrollElement(el);
        }
    });
};

window.addEventListener("scroll", handleScrollAnimation);



const darkModeToggler = document.getElementById('darkModeToggler');
const body = document.body;

darkModeToggler.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
});


// Add a class to all elements on dark mode activation
const toggleDarkMode = () => {
  document.body.classList.toggle("dark-mode");
  const theme = document.body.classList.contains("dark-mode") ? "dark" : "light";
  localStorage.setItem("theme", theme);
};

// Apply dark mode on page load if user preference exists
document.addEventListener("DOMContentLoaded", () => {
  const currentTheme = localStorage.getItem("theme");
  if (currentTheme === "dark") {
      document.body.classList.add("dark-mode");
  }
});

// Event listener for the toggle button
document.getElementById("darkModeToggle").addEventListener("click", toggleDarkMode);
