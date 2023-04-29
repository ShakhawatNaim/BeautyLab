//navbar bg color after scroll
let navBar=document.querySelector("nav");
window.addEventListener("scroll", function () {
    if (window.pageYOffset > 50) {
        navBar.classList.add("navbar-bg", "shadow");
    }else {
        navBar.classList.remove("navbar-bg", "shadow");
    }
})
