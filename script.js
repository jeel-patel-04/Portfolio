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
const skillCards = document.querySelectorAll(".skill-card");

const skillObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  },
  {
    threshold: 0.3,
  }
);

skillCards.forEach((card) => {
  skillObserver.observe(card);
});

// Header section visibility class toggle
const headerElement = document.querySelector(".app-header");

const headerVisibilityObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        headerElement.classList.add("visible");
      } else {
        headerElement.classList.remove("visible");
      }
    });
  },
  { threshold: 0.4 }
);

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

const typewriterObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        restartTypewriterEffect();
      }
    });
  },
  {
    threshold: 0.5,
  }
);

typewriterObserver.observe(document.querySelector("#header"));
window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    const text = document.getElementById("typewriterText");
    text.classList.add("animate");
  }, 3200);
});
// Mouse cursor trail effect
document.addEventListener('mousemove', (e) => {
    const cursor = document.createElement('div');
    cursor.style.cssText = `
        position: fixed;
        left: ${e.clientX}px;
        top: ${e.clientY}px;
        width: 6px;
        height: 6px;
        background: linear-gradient(45deg, #a100ff, #8000ca);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        animation: cursorFade 1s ease-out forwards;
    `;
    
    document.body.appendChild(cursor);

    setTimeout(() => {
        cursor.remove();
    }, 1000);
});

// Add cursor fade animation dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes cursorFade {
        0% {
            opacity: 1;
            transform: scale(1);
        }
        100% {
            opacity: 0;
            transform: scale(0);
        }
    }
`
document.head.appendChild(style);


// 3D Tilt Effect for skill & project cards
document.querySelectorAll('.skill-card, .styled-project-card').forEach((card) => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    card.style.transform = `rotateX(${(y - 0.5) * 10}deg) rotateY(${(x - 0.5) * 10}deg) scale(1.05)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'rotateX(0) rotateY(0) scale(1)';
  });
});

window.history.replaceState(null, null, window.location.pathname);

window.addEventListener("load", () => {
  window.scrollTo(0, 0);
});
