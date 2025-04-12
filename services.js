document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".hidden, .service-card, .step-circle, .cta-box");

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // Stop observing once the animation is triggered
      }
    });
  });

  elements.forEach(element => observer.observe(element));
});

document.addEventListener('DOMContentLoaded', function () {
  const toggler = document.querySelector('.navbar-toggler');
  const navbarMenu = document.querySelector('#navbarSupportedContent');

  toggler.addEventListener('click', function () {
    navbarMenu.classList.toggle('show');
  });
});