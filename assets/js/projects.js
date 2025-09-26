document.addEventListener("DOMContentLoaded", function() {
  const buttons = document.querySelectorAll(".filter-btn");
  const cards = document.querySelectorAll(".card");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const filter = button.getAttribute("data-filter");

      cards.forEach(card => {
        const categories = card.getAttribute("data-category").split(" ");

        if (filter === "all" || categories.includes(filter)) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });

      // Highlight active button
      buttons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");
    });
  });
});



// document.addEventListener("DOMContentLoaded", function() {
//   const buttons = document.querySelectorAll(".filter-btn");
//   const cards = document.querySelectorAll(".card");

//   buttons.forEach(button => {
//     button.addEventListener("click", () => {
//       const filter = button.getAttribute("data-filter");

//       cards.forEach(card => {
//         if (filter === "all" || card.getAttribute("data-category") === filter) {
//           card.style.display = "block";
//         } else {
//           card.style.display = "none";
//         }
//       });

//       // Highlight the active button
//       buttons.forEach(btn => btn.classList.remove("active"));
//       button.classList.add("active");
//     });
//   });
// });
