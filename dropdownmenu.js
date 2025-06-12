// document.addEventListener("DOMContentLoaded", function () {
//     document.querySelectorAll(".dropdown-btn").forEach(button => {
//       button.addEventListener("click", function () {
//         const dropdown = this.nextElementSibling;
//         dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
//       });
//     });
//   });


document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".dropdown-btn").forEach(button => {
      button.addEventListener("click", function () {
        const dropdown = this.nextElementSibling;
        dropdown.classList.toggle("show");
      });
    });
  });