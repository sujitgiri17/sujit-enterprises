console.log("Welcome to Sujit Enterprises Website");
// Animate client cards on scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.animationDelay = `${index * 0.15}s`;
          entry.target.classList.add('animated');
        }, 100);
      }
    });
  }, { threshold: 0.2 });
  
  document.querySelectorAll('.client-card').forEach(card => {
    observer.observe(card);
  });

  
  
  // Load AOS script dynamically and initialize it
const loadAOS = () => {
    const script = document.createElement("script");
    script.src = "https://unpkg.com/aos@2.3.1/dist/aos.js";
    script.onload = () => AOS.init();
    document.body.appendChild(script);
  };
  
  document.addEventListener("DOMContentLoaded", loadAOS);


  // Auto scroll testimonials slider
document.addEventListener("DOMContentLoaded", () => {
    const slider = document.querySelector(".testimonial-slider");
    let scrollAmount = 0;
    let scrollInterval = setInterval(() => {
      scrollAmount += 1;
      if (slider) {
        slider.scrollLeft = scrollAmount;
        if (scrollAmount >= slider.scrollWidth - slider.clientWidth) {
          scrollAmount = 0; // Reset to start
        }
      }
    }, 30); // Adjust speed if needed
  });
  

  const toggle = document.getElementById('menu-toggle');
  const navbar = document.getElementById('navbar');

  toggle.addEventListener('click', () => {
    navbar.classList.toggle('active');
  });


  const scrollArea = document.getElementById("clientScroller");
  const scrollBtn = document.getElementById("scrollToggle");

  let isPaused = false;

  scrollBtn.addEventListener("click", () => {
    isPaused = !isPaused;
    scrollArea.classList.toggle("paused", isPaused);
    scrollBtn.textContent = isPaused ? "Play" : "Pause";
  });

  // Optional: auto-pause on mobile touch
  scrollArea.addEventListener("touchstart", () => {
    scrollArea.classList.add("paused");
  });

  scrollArea.addEventListener("touchend", () => {
    if (!isPaused) scrollArea.classList.remove("paused");
  });