fetch('sidebar.html')
  .then(response => response.text())
  .then(html => {
    document.getElementById('sidebar-nav').innerHTML = html;

    // DROPDOWN-knapper
    document.querySelectorAll(".dropdown-btn").forEach(button => {
      button.addEventListener("click", function () {
        const dropdown = this.nextElementSibling;
        if (dropdown && dropdown.classList.contains("dropdown-content")) {
          dropdown.classList.toggle("show");
        }
      });
    });

    // Automatisk visning av dropdown ved bestemte sider
    const currentPage = window.location.pathname.split("/").pop();
    const personalPages = ["personal_analogue.html", "personal_nature.html", "analogue_work.html", "summer.html"];
    if (personalPages.includes(currentPage)) {
      const dropdown = document.querySelector('.dropdown-content');
      if (dropdown) dropdown.classList.add('show');
    }
  });

  function toggleSidebar() {
    document.querySelector('.sidebar').classList.toggle('open');
  }

  