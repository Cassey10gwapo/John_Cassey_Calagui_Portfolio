// Simple fade-in animation
window.addEventListener("scroll", () => {
  document.querySelectorAll(".section").forEach(sec => {
    const top = sec.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      sec.style.opacity = "1";
      sec.style.transform = "translateY(0)";
    }
  });
});
// Animate bars on scroll
window.addEventListener("scroll", () => {
  document.querySelectorAll(".progress").forEach(bar => {
    const top = bar.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      bar.style.width = bar.dataset.width;
    }
  });
});
function animateSkill(bar) {
  let width = 0;
  const target = parseInt(bar.dataset.width);
  const interval = setInterval(() => {
    if(width >= target) clearInterval(interval);
    bar.style.width = width + "%";
    bar.textContent = width + "%";
    width++;
  }, 15);
}

window.addEventListener("scroll", () => {
  document.querySelectorAll(".progress").forEach(bar => {
    const top = bar.getBoundingClientRect().top;
    if (top < window.innerHeight - 100 && !bar.classList.contains("animated")) {
      bar.classList.add("animated");
      animateSkill(bar);
    }
  });
});
const typedText = document.getElementById('typed-text');
const words = ["Web Developer", "Python Enthusiast", "Tech Learner"];
let i = 0;
let j = 0;
let isDeleting = false;

function type() {
  const currentWord = words[i];

  if (!isDeleting) {
    // Type one letter at a time
    typedText.textContent = currentWord.substring(0, j + 1);
    j++;

    if (j === currentWord.length) {
      // Word fully typed, wait before deleting
      isDeleting = true;
      setTimeout(type, 1000); // Wait long enough to read full word
      return;
    }
    setTimeout(type, 150); // Typing speed
  } else {
    // Delete one letter at a time
    typedText.textContent = currentWord.substring(0, j - 1);
    j--;

    if (j === 0) {
      // Word fully deleted, move to next word
      isDeleting = false;
      i = (i + 1) % words.length;
      setTimeout(type, 500); // Pause before typing next word
      return;
    }
    setTimeout(type, 100); // Deleting speed
  }
}

type();

const toggleBtn = document.getElementById('dark-mode-toggle');

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  // Change button text/icon
  if(document.body.classList.contains('dark-mode')) {
    toggleBtn.textContent = '☀️ Light Mode';
  } else {
    toggleBtn.textContent = '🌙 Dark Mode';
  }
});



