document.addEventListener("DOMContentLoaded", function () {

    const pinBtn = document.getElementById("pinBtn");
    const navbar = document.getElementById("navbar");

    console.log("JS Loaded");

    pinBtn.addEventListener("click", function () {

        navbar.classList.toggle("pinned");

        if (navbar.classList.contains("pinned")) {
            pinBtn.innerHTML = "❌";
        } else {
            pinBtn.innerHTML = "📌";
        }

    });

});
