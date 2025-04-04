import { createHeader } from "./header.js";
import { createHero } from "./main-components/hero.js";
import { createIngredients } from "./main-components/ingredient.js";
import { createGuarantee } from "./main-components/guarantee.js";
import { createProductSection, initProductSection } from "./main-components/product.js";
import { createShilajitSection } from "./main-components/shilajit.js";

function createMain() {
  const mainContent = `
    ${createHero()}
    ${createIngredients()}
    ${createGuarantee()}
    ${createProductSection()}
    ${createShilajitSection()}
  `;
  console.log("Generated Main Content:", mainContent); // Debug log
  return mainContent;
}

document.addEventListener("DOMContentLoaded", () => {
  // Inject header
  document.getElementById("header-container").innerHTML = createHeader();

  // Inject main content
  const mainContainer = document.getElementById("main-container");
  if (mainContainer) {
    mainContainer.innerHTML = createMain();
  } else {
    console.error("Main container not found!"); // Debug log
  }

  // Initialize header functionality
  initializeHeader();

  const container = document.getElementById("product-container");
  if (container) {
    container.innerHTML = createProductSection();
    
    const imagePaths = [
      "assets/images/product/main-product.png",
      "assets/images/product/product-1.png",
      "assets/images/product/product-2.png",
      "assets/images/product/product-3.png",
      "assets/images/product/product-4.png",
      "assets/images/product/product-5.png",
      "assets/images/product/product-6.png",
      "assets/images/product/product-7.png",
    ];
    
    initProductSection(imagePaths);
  }
});

function initializeHeader() {
  // Toggle desktop search bar
  const searchToggle = document.getElementById("search-toggle");
  const searchBar = document.getElementById("search-bar");
  const desktopNav = document.getElementById("desktop-nav");

  searchToggle.addEventListener("click", () => {
    searchBar.classList.toggle("active");

    // Toggle visibility of the nav menu when search is active (desktop only)
    if (window.innerWidth >= 1030) {
      if (searchBar.classList.contains("active")) {
        desktopNav.style.visibility = "hidden";
      } else {
        desktopNav.style.visibility = "visible";
      }
    }
  });

  // Hamburger menu toggle
  const hamburger = document.getElementById("hamburger");
  const mobileNav = document.getElementById("mobile-nav");

  hamburger.addEventListener("click", () => {
    mobileNav.classList.toggle("active");
    hamburger.classList.toggle("active");

    // Prevent body scrolling when menu is open
    if (mobileNav.classList.contains("active")) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  });

  // Mobile dropdown menu
  const mobileDropdownToggle = document.querySelector(
    ".mobile-dropdown-toggle"
  );
  const shopDropdown = document.getElementById("shop-dropdown");
  const backBtn = document.querySelector(".back-btn");
  const mobileNavMain = document.getElementById("mobile-nav-main");

  mobileDropdownToggle.addEventListener("click", (e) => {
    e.preventDefault();
    shopDropdown.classList.add("active");
    mobileNavMain.style.transform = "translateX(-100%)";
  });

  backBtn.addEventListener("click", () => {
    shopDropdown.classList.remove("active");
    mobileNavMain.style.transform = "translateX(0)";
  });

  // Close mobile nav when clicking outside
  document.addEventListener("click", (e) => {
    if (
      mobileNav.classList.contains("active") &&
      !mobileNav.contains(e.target) &&
      !hamburger.contains(e.target)
    ) {
      mobileNav.classList.remove("active");
      hamburger.classList.remove("active");
      document.body.style.overflow = "";
    }
  });

  // Close search when clicking outside
  document.addEventListener("click", (e) => {
    if (
      searchBar.classList.contains("active") &&
      !searchBar.contains(e.target) &&
      !searchToggle.contains(e.target)
    ) {
      searchBar.classList.remove("active");
      desktopNav.style.visibility = "visible";
    }
  });

  // Handle resize events
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 1030) {
      // Reset mobile nav
      mobileNav.classList.remove("active");
      hamburger.classList.remove("active");
      document.body.style.overflow = "";

      // Reset dropdown
      shopDropdown.classList.remove("active");
      mobileNavMain.style.transform = "translateX(0)";
    }
  });
}
