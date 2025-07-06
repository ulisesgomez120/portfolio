// Main JavaScript functionality for the portfolio

document.addEventListener("DOMContentLoaded", function () {
  // Initialize all components
  initializeAccordion();
  // initializeNavigation();
  initializeContactForm();
  initializeAccessibility();
});

// Accordion functionality
function initializeAccordion() {
  const accordionHeaders = document.querySelectorAll(".accordion-header");

  accordionHeaders.forEach((header) => {
    // Add keyboard accessibility
    header.setAttribute("tabindex", "0");
    header.setAttribute("role", "button");
    header.setAttribute("aria-expanded", "false");

    // Click event
    header.addEventListener("click", function () {
      toggleAccordionItem(this);
    });

    // Keyboard event
    header.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        toggleAccordionItem(this);
      }
    });
  });
}

function toggleAccordionItem(header) {
  const accordionItem = header.parentElement;
  const targetId = header.getAttribute("data-target");
  const content = document.getElementById(targetId);
  const icon = header.querySelector(".accordion-icon");

  // Close other accordion items
  const allItems = document.querySelectorAll(".accordion-item");
  allItems.forEach((item) => {
    if (item !== accordionItem && item.classList.contains("active")) {
      item.classList.remove("active");
      const otherHeader = item.querySelector(".accordion-header");
      otherHeader.setAttribute("aria-expanded", "false");
    }
  });

  // Toggle current item
  const isActive = accordionItem.classList.contains("active");

  if (isActive) {
    accordionItem.classList.remove("active");
    header.setAttribute("aria-expanded", "false");
  } else {
    accordionItem.classList.add("active");
    header.setAttribute("aria-expanded", "true");
  }
}

// Navigation functionality
// function initializeNavigation() {
//   const navLinks = document.querySelectorAll(".nav-link");

//   navLinks.forEach((link) => {
//     link.addEventListener("click", function (e) {
//       const href = this.getAttribute("href");

//       // Handle internal navigation
//       if (href.startsWith("#")) {
//         e.preventDefault();
//         const targetId = href.substring(1);
//         const targetElement =
//           document.getElementById(targetId) ||
//           document.querySelector(`[data-section="${targetId}"]`) ||
//           document.querySelector(`.${targetId}-card`);

//         if (targetElement) {
//           targetElement.scrollIntoView({
//             behavior: "smooth",
//             block: "start",
//           });
//         }
//       }
//     });
//   });
// }

// Contact form functionality (placeholder for future enhancement)
function initializeContactForm() {
  const contactCard = document.querySelector(".contact-card");
  const contactLink = document.querySelector(".contact-link");

  if (contactCard) {
    contactCard.addEventListener("click", function (e) {
      // Don't trigger if clicking on a link inside
      if (e.target.closest("a")) {
        return;
      }

      // Trigger contact action
      if (contactLink) {
        contactLink.click();
      }
    });
  }
}

function scrollToProjects() {
  const projectsSection = document.querySelector(".accordion-container");
  if (projectsSection) {
    projectsSection.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
}

// Accessibility enhancements
function initializeAccessibility() {
  // Enhance keyboard navigation
  enhanceKeyboardNavigation();

  // Add ARIA labels where needed
  addAriaLabels();
}

function enhanceKeyboardNavigation() {
  // Add focus management for accordion
  const accordionItems = document.querySelectorAll(".accordion-item");
  accordionItems.forEach((item, index) => {
    const header = item.querySelector(".accordion-header");

    header.addEventListener("keydown", function (e) {
      switch (e.key) {
        case "ArrowDown":
          e.preventDefault();
          focusNextAccordionItem(index);
          break;
        case "ArrowUp":
          e.preventDefault();
          focusPreviousAccordionItem(index);
          break;
        case "Home":
          e.preventDefault();
          focusFirstAccordionItem();
          break;
        case "End":
          e.preventDefault();
          focusLastAccordionItem();
          break;
      }
    });
  });
}

function focusNextAccordionItem(currentIndex) {
  const headers = document.querySelectorAll(".accordion-header");
  const nextIndex = (currentIndex + 1) % headers.length;
  headers[nextIndex].focus();
}

function focusPreviousAccordionItem(currentIndex) {
  const headers = document.querySelectorAll(".accordion-header");
  const prevIndex = currentIndex === 0 ? headers.length - 1 : currentIndex - 1;
  headers[prevIndex].focus();
}

function focusFirstAccordionItem() {
  const firstHeader = document.querySelector(".accordion-header");
  if (firstHeader) firstHeader.focus();
}

function focusLastAccordionItem() {
  const headers = document.querySelectorAll(".accordion-header");
  const lastHeader = headers[headers.length - 1];
  if (lastHeader) lastHeader.focus();
}

function addAriaLabels() {
  // Add ARIA labels to social links
  const socialLinks = document.querySelectorAll(".social-link");
  socialLinks.forEach((link) => {
    const text = link.textContent.trim();
    let label = "";

    switch (text) {
      case "in":
        label = "LinkedIn Profile";
        break;
      case "gh":
        label = "GitHub Profile";
        break;
      case "tw":
        label = "Twitter Profile";
        break;
      default:
        label = `Social Media Profile: ${text}`;
    }

    if (!link.getAttribute("aria-label")) {
      link.setAttribute("aria-label", label);
    }
  });

  // Add ARIA labels to accordion content
  const accordionContents = document.querySelectorAll(".accordion-content");
  accordionContents.forEach((content, index) => {
    content.setAttribute("role", "region");
    content.setAttribute("aria-labelledby", content.id + "-header");

    const header = document.querySelector(`[data-target="${content.id}"]`);
    if (header) {
      header.id = content.id + "-header";
    }
  });
}

// Utility functions
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

function throttle(func, limit) {
  let inThrottle;
  return function () {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

// Performance optimization
function optimizePerformance() {
  // Remove will-change after animations complete
  const gridItems = document.querySelectorAll(".grid-item");
  gridItems.forEach((item) => {
    item.addEventListener("animationend", function () {
      this.classList.add("animation-complete");
    });
  });
}

// Initialize performance optimizations
document.addEventListener("DOMContentLoaded", optimizePerformance);

// Export functions for potential external use
window.PortfolioApp = {
  toggleAccordionItem,
};
