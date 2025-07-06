// Animation controller for the portfolio

document.addEventListener("DOMContentLoaded", function () {
  initializePageAnimations();
  initializeIntersectionObserver();
  initializeScrollAnimations();
});

// Initialize page load animations
function initializePageAnimations() {
  // Ensure all grid items start hidden
  const gridItems = document.querySelectorAll(".grid-item");

  gridItems.forEach((item) => {
    // Reset initial state
    item.style.opacity = "0";
    item.style.transform = "translateY(20px)";
  });

  // Trigger staggered animations after a brief delay
  setTimeout(() => {
    triggerStaggeredAnimations();
  }, 100);
}

// Trigger staggered fade-in animations
function triggerStaggeredAnimations() {
  const gridItems = document.querySelectorAll(".grid-item");

  gridItems.forEach((item, index) => {
    const delay = parseInt(item.getAttribute("data-delay")) || index;

    setTimeout(() => {
      item.classList.add("animate-in");
      item.style.opacity = "1";
      item.style.transform = "translateY(0)";
    }, delay * 100);
  });
}

// Intersection Observer for scroll-triggered animations
function initializeIntersectionObserver() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");

        // Add specific animations based on element type
        if (entry.target.classList.contains("tech-tag")) {
          animateTechTags(entry.target);
        }

        if (entry.target.classList.contains("stat")) {
          animateStats(entry.target);
        }
      }
    });
  }, observerOptions);

  // Observe elements that should animate on scroll
  const elementsToObserve = document.querySelectorAll(".tech-tag, .stat, .social-link");

  elementsToObserve.forEach((el) => observer.observe(el));
}

// Animate tech tags with staggered effect
function animateTechTags(container) {
  const tags = container.parentElement.querySelectorAll(".tech-tag");

  tags.forEach((tag, index) => {
    setTimeout(() => {
      tag.style.transform = "scale(1.05)";
      tag.style.opacity = "1";

      setTimeout(() => {
        tag.style.transform = "scale(1)";
      }, 150);
    }, index * 50);
  });
}

// Animate statistics with counting effect
function animateStats(statElement) {
  const numberElement = statElement.querySelector(".stat-number");
  if (!numberElement) return;

  const finalValue = numberElement.textContent;
  const numericValue = parseInt(finalValue.replace(/\D/g, ""));

  if (isNaN(numericValue)) return;

  let currentValue = 0;
  const increment = Math.ceil(numericValue / 30);
  const suffix = finalValue.replace(/\d/g, "");

  const countUp = () => {
    currentValue += increment;

    if (currentValue >= numericValue) {
      numberElement.textContent = finalValue;
    } else {
      numberElement.textContent = currentValue + suffix;
      requestAnimationFrame(countUp);
    }
  };

  countUp();
}

// Scroll-based animations
function initializeScrollAnimations() {
  let ticking = false;

  function updateScrollAnimations() {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;

    // Parallax effect for background elements
    applyParallaxEffect(scrollY);

    // Update navigation active state
    updateNavigationState(scrollY, windowHeight);

    ticking = false;
  }

  function requestTick() {
    if (!ticking) {
      requestAnimationFrame(updateScrollAnimations);
      ticking = true;
    }
  }

  window.addEventListener("scroll", requestTick, { passive: true });
}

// Apply subtle parallax effects
function applyParallaxEffect(scrollY) {
  const parallaxElements = document.querySelectorAll(".image-placeholder");

  parallaxElements.forEach((element) => {
    const speed = 0.5;
    const yPos = -(scrollY * speed);
    element.style.transform = `translateY(${yPos}px)`;
  });
}

// Update navigation active state based on scroll position
function updateNavigationState(scrollY, windowHeight) {
  const sections = document.querySelectorAll(".card");
  const navLinks = document.querySelectorAll(".nav-link");

  let currentSection = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.offsetHeight;

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      currentSection = section.classList.contains("about-card")
        ? "about"
        : section.classList.contains("contact-card")
        ? "contact"
        : section.classList.contains("accordion-container")
        ? "projects"
        : "";
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${currentSection}`) {
      link.classList.add("active");
    }
  });
}

// Animation utilities
function fadeIn(element, duration = 300) {
  element.style.opacity = "0";
  element.style.display = "block";

  let start = null;

  function animate(timestamp) {
    if (!start) start = timestamp;
    const progress = timestamp - start;

    element.style.opacity = Math.min(progress / duration, 1);

    if (progress < duration) {
      requestAnimationFrame(animate);
    }
  }

  requestAnimationFrame(animate);
}

function fadeOut(element, duration = 300) {
  let start = null;

  function animate(timestamp) {
    if (!start) start = timestamp;
    const progress = timestamp - start;

    element.style.opacity = Math.max(1 - progress / duration, 0);

    if (progress < duration) {
      requestAnimationFrame(animate);
    } else {
      element.style.display = "none";
    }
  }

  requestAnimationFrame(animate);
}

function slideUp(element, duration = 300) {
  const height = element.offsetHeight;
  element.style.height = height + "px";
  element.style.overflow = "hidden";

  let start = null;

  function animate(timestamp) {
    if (!start) start = timestamp;
    const progress = timestamp - start;

    const currentHeight = height * (1 - progress / duration);
    element.style.height = Math.max(currentHeight, 0) + "px";

    if (progress < duration) {
      requestAnimationFrame(animate);
    } else {
      element.style.display = "none";
      element.style.height = "";
      element.style.overflow = "";
    }
  }

  requestAnimationFrame(animate);
}

function slideDown(element, duration = 300) {
  element.style.display = "block";
  const height = element.scrollHeight;
  element.style.height = "0px";
  element.style.overflow = "hidden";

  let start = null;

  function animate(timestamp) {
    if (!start) start = timestamp;
    const progress = timestamp - start;

    const currentHeight = height * (progress / duration);
    element.style.height = Math.min(currentHeight, height) + "px";

    if (progress < duration) {
      requestAnimationFrame(animate);
    } else {
      element.style.height = "";
      element.style.overflow = "";
    }
  }

  requestAnimationFrame(animate);
}

// Enhanced accordion animations
function enhanceAccordionAnimations() {
  const accordionItems = document.querySelectorAll(".accordion-item");

  accordionItems.forEach((item) => {
    const header = item.querySelector(".accordion-header");
    const content = item.querySelector(".accordion-content");

    header.addEventListener("click", () => {
      const isActive = item.classList.contains("active");

      if (!isActive) {
        // Add entrance animation for content
        setTimeout(() => {
          const techTags = content.querySelectorAll(".tech-tag");
          techTags.forEach((tag, index) => {
            tag.style.opacity = "0";
            tag.style.transform = "translateY(10px)";

            setTimeout(() => {
              tag.style.transition = "opacity 0.3s ease, transform 0.3s ease";
              tag.style.opacity = "1";
              tag.style.transform = "translateY(0)";
            }, index * 50);
          });
        }, 200);
      }
    });
  });
}

// Initialize enhanced animations
document.addEventListener("DOMContentLoaded", () => {
  enhanceAccordionAnimations();
});

// Performance monitoring
function monitorAnimationPerformance() {
  if (window.performance && window.performance.mark) {
    window.performance.mark("animations-start");

    setTimeout(() => {
      window.performance.mark("animations-end");
      window.performance.measure("animations-duration", "animations-start", "animations-end");
    }, 2000);
  }
}

// Reduced motion handling
function handleReducedMotion() {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  function setReducedMotion(mediaQuery) {
    if (mediaQuery.matches) {
      document.body.classList.add("reduced-motion");

      // Disable complex animations
      const gridItems = document.querySelectorAll(".grid-item");
      gridItems.forEach((item) => {
        item.style.animation = "none";
        item.style.opacity = "1";
        item.style.transform = "none";
      });
    } else {
      document.body.classList.remove("reduced-motion");
    }
  }

  setReducedMotion(prefersReducedMotion);
  prefersReducedMotion.addEventListener("change", setReducedMotion);
}

// Initialize reduced motion handling
document.addEventListener("DOMContentLoaded", handleReducedMotion);

// Export animation utilities
window.AnimationUtils = {
  fadeIn,
  fadeOut,
  slideUp,
  slideDown,
  animateStats,
  animateTechTags,
};

// Initialize performance monitoring
document.addEventListener("DOMContentLoaded", monitorAnimationPerformance);
