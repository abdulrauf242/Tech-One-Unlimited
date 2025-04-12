document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".hidden");
  console.log("Elements to observe:", elements);

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      console.log("Entry:", entry);
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        console.log("Element is visible:", entry.target);
        observer.unobserve(entry.target); // Stop observing once the animation is triggered
      }
    });
  });

  elements.forEach(element => observer.observe(element));
});