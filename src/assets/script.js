// ccct

document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.querySelector(".sidebar");
    const closeBtn = document.querySelector("#btn");
    const searchBtn = document.querySelector(".bx-search");
    const homeSection = document.querySelector(".home-section");
    const navbar = document.querySelector(".navbar");

    if (sidebar && closeBtn && searchBtn && navbar) {
        closeBtn.addEventListener("click", function() {
            toggleSidebar();
        });

        searchBtn.addEventListener("click", function() {
            toggleSidebar();
        });
    }

    function toggleSidebar() {
        // Toggle the 'open' class on the sidebar and 'sidebar-open' class on home-section
        sidebar.classList.toggle("open");
        homeSection.classList.toggle("sidebar-open");

        // Toggle the 'navbar-expanded' class to adjust navbar layout
        navbar.classList.toggle("navbar-expanded");

        menuBtnChange();
    }

    function menuBtnChange() {
        if (sidebar.classList.contains("open")) {
            closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");
        } else {
            closeBtn.classList.replace("bx-menu-alt-right", "bx-menu");
        }
    }
});

