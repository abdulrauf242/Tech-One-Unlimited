document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".hidden");
  console.log("Elements to observe:", elements);

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      console.log("Entry:", entry);
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // Stop observing once the animation is triggered
      }
    });
  });

  elements.forEach(element => observer.observe(element));

  // Select all percentage elements
  const percentages = document.querySelectorAll(".percentage");

  // Observer for percentage animation
  const percentageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const percentage = entry.target;
        const target = +percentage.getAttribute("data-target");
        let count = 0;

        const updatePercentage = () => {
          if (count < target) {
            count += 1; // Increment by 1
            percentage.textContent = `${count}%`;
            setTimeout(updatePercentage, 20); // Slow down the animation
          } else {
            percentage.textContent = `${target}%`; // Ensure it ends at the target
          }
        };

        updatePercentage();
        observer.unobserve(percentage); // Stop observing once animation is triggered
      }
    });
  });

  percentages.forEach(percentage => percentageObserver.observe(percentage));
});