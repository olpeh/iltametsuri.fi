// Logo functionality
function loadLogos() {
  const logos = document.querySelectorAll(".site-logo");

  if (logos && logos.length > 0) {
    for (const logo of logos) {
      fetch("./assets/images/iltametsuri-logo.svg")
        .then((response) => response.text())
        .then((svgContent) => {
          logo.innerHTML = `<a href="${window.location.origin}" class="site-logo-link">${svgContent}</a>`;

          // Add transition delays to letter paths after SVG is loaded
          setTimeout(() => {
            addLetterTransitionDelays(logo);
          }, 100);
        })
        .catch((error) => {
          // Don't show anything if logo fails to load
          logo.innerHTML = "";
        });
    }
  }
}

// Function to add transition delays to letter paths
function addLetterTransitionDelays(logoElement) {
  const letterPaths = logoElement.querySelectorAll(".letters path");

  if (letterPaths && letterPaths.length > 0) {
    letterPaths.forEach((path, index) => {
      const delay = index * 0.02;
      path.style.transitionDelay = `${delay}s`;
    });
  }
}

// Navigation functionality
const menuToggle = document.querySelector(".menu-toggle");
const mainMenu = document.querySelector(".menu");

if (menuToggle !== null && menuToggle !== undefined) {
  // Toggle mobile burger menu
  const toggleMenu = (e) => {
    const button = e.currentTarget;
    let isExpanded = false;

    if (button.classList.contains("is-toggled")) {
      isExpanded = false;
      button.classList.remove("is-toggled");
      document.body.classList.remove("menu-open");
    } else {
      isExpanded = true;
      button.classList.add("is-toggled");
      document.body.classList.add("menu-open");
    }

    button.setAttribute("aria-expanded", isExpanded);

    // Also update the menu's aria-expanded attribute
    if (mainMenu !== null && mainMenu !== undefined) {
      mainMenu.setAttribute("aria-expanded", isExpanded);
    }
  };

  menuToggle.addEventListener("click", toggleMenu);
}

// Load content when document is ready
document.addEventListener("DOMContentLoaded", function () {
  // Load logos
  loadLogos();
});
