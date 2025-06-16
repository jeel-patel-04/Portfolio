// Highlight active nav link on scroll
const sections = document.querySelectorAll("section[id], header[id]");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {
  let scrollY = window.scrollY;

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute("id");

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${sectionId}`) {
          link.classList.add("active");
        }
      });
    }
  });
});

// Animate skill cards on scroll
const skillCards = document.querySelectorAll('.skill-card');

const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
}, {
  threshold: 0.3
});

skillCards.forEach(card => {
  skillObserver.observe(card);
});

// Header section visibility class toggle
const headerElement = document.querySelector('.app-header');

const headerVisibilityObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      headerElement.classList.add('visible');
    } else {
      headerElement.classList.remove('visible');
    }
  });
}, { threshold: 0.4 });

headerVisibilityObserver.observe(headerElement);

// Restart typewriter effect when header scrolls into view
function restartTypewriterEffect() {
  const text = document.getElementById("typewriterText");
  if (text) {
    text.classList.remove("typewriter");
    void text.offsetWidth; // Trigger reflow
    text.classList.add("typewriter");
  }
}

const typewriterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      restartTypewriterEffect();
    }
  });
}, {
  threshold: 0.5
});

typewriterObserver.observe(document.querySelector("#header"));
window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    const text = document.getElementById("typewriterText");
    text.classList.add("animate");
  }, 3200);
});
