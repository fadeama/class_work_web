function loadPage(page) {
    let ifameElement = document.getElementById("contentFrame");

    ifameElement.src = page;

    // Close sidebar on mobile
    document.getElementById("sidebar").classList.remove("show");
}

function toggleSidebar() {
    document.getElementById("sidebar").classList.toggle("show");
}