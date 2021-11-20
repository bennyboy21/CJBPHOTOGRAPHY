document.getElementById("menu-Holder").addEventListener("click", function() {
    document.getElementById("menu-Transition").style.animation = "openMenu .60s forwards ease-in-out";
})

document.getElementById("close-Menu").addEventListener("click", function() {
    document.getElementById("menu-Transition").style.animation = "closeMenu .60s forwards ease-in-out";
})