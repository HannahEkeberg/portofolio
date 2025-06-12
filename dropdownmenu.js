fetch('sidebar.html')
  .then(response => response.text())
  .then(html => {
    document.getElementById('sidebar-nav').innerHTML = html;

    // Når sidebar er ferdig lastet, legg til event listeners på dropdown-knappene
    document.querySelectorAll(".dropdown-btn").forEach(button => {
      button.addEventListener("click", function () {
        const dropdown = this.nextElementSibling;
        dropdown.classList.toggle("show");
      });
    });

    // Hent filnavnet (eks: personal.html)
    const currentPage = window.location.pathname.split("/").pop();

    // Sider som skal automatisk åpne dropdown
    const personalPages = ["personal.html", "california.html"];

    // Hvis vi er på en av disse sidene, åpne dropdownen
    if (personalPages.includes(currentPage)) {
      const dropdown = document.querySelector('.dropdown-content');
      if (dropdown) {
        dropdown.classList.add('show');
      }
    }
  });