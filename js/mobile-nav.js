
window.onload = function () {
    document.getElementById("addResponsiveClass").addEventListener('click', function () {
        let myNav = document.getElementById("myNav");
        let icon = document.getElementById("openClose");
        if (myNav.className === "desktop-nav") {
            myNav.className += ' responsive';
            icon.className = "fas fa-times";
        } else {
            myNav.className = 'desktop-nav';
            icon.className = "fas fa-bars";

        }
    })
}